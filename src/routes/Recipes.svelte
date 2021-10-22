<script>
  import { fade } from "svelte/transition";
  import { link } from "svelte-spa-router";
  import xss from "xss";
  import marked from "marked";

  import { pageTitle, recipes } from "../stores/stores.js";

  pageTitle.set("Recipes");

  export let params = {};

  let id = "";
  let tab = "overview";
  $: {
    id = "";
    if (params && params.id) {
      if (params.id) {
        id = params.id;
      }

      if (params.tab) {
        tab = params.tab;
      }

      if (tab !== "overview") {
        getDocument();
      }
    }
  }

  let document = "";
  const getDocument = async () => {
    const response = await fetch(`/collections/recipes/${id}/${tab}.md`);
    const data = await response.text();
    document = marked(xss(data));
  };
</script>

{#if id === ""}
  <div class="container mx-auto flex flex-wrap lg:pt-24" in:fade|local>
    <h1 class="w-full my-2 text-5xl font-bold leading-tight text-center">
      Recipes
    </h1>
  </div>

  <div class="container mx-auto flex flex-wrap pt-4 pb-12" in:fade|local>
    <div class="w-full mb-4">
      <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t" />
    </div>
    <h2
      class="w-full my-2 text-xl lg:text-2xl font-bold leading-tight text-center"
      in:fade
    >
      Food I love to make
    </h2>

    {#each $recipes as doc}
      <article
        class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink"
        in:fade|local
      >
        <div
          class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow"
        >
          <a
            href="/recipes/{doc.id}"
            class="flex flex-wrap no-underline hover:no-underline"
            use:link
          >
            <p class="w-full text-gray-600 text-l md:text-xl px-6 pt-6">
              {doc.title}
            </p>
          </a>

          <a
            href="/recipes/{doc.id}"
            class="flex flex-wrap no-underline hover:no-underline"
            use:link
          >
            <p class="w-full text-gray-600 text-xs md:text-sm px-6 py-6">
              {doc.text}
            </p>
          </a>
        </div>
      </article>
    {/each}
  </div>
{:else}
  {#each $recipes as doc}
    {#if doc.id === id}
      <div class="container mx-auto flex flex-wrap lg:pt-24" in:fade|local>
        <h1 class="w-full my-2 text-3xl font-bold leading-tight text-center">
          {doc.title}
        </h1>
      </div>

      <div class="w-full flex flex-col justify-center items-center">
        <div class="flex flex-wrap w-full xl:w-1/2 md:w-4/6 sm:w-5/6" in:fade>
          <div class="tabs">
            <a
              href="/recipes/{doc.id}/overview"
              class="tab tab-lifted {tab === 'overview' ? 'tab-active' : ''}"
              use:link>Overview</a
            >
            <a
              href="/recipes/{doc.id}/ingredients"
              class="tab tab-lifted {tab === 'ingredients' ? 'tab-active' : ''}"
              use:link>Ingredients</a
            >
            <a
              href="/recipes/{doc.id}/instructions"
              class="tab tab-lifted {tab === 'instructions'
                ? 'tab-active'
                : ''}"
              use:link>Instructions</a
            >
            <a
              href="/recipes/{doc.id}/notes"
              class="tab tab-lifted {tab === 'notes' ? 'tab-active' : ''}"
              use:link>Notes</a
            >
          </div>

          {#if tab === "overview"}
            <p class="w-full p-6 space-y-6">
              {doc.text}
            </p>
          {:else}
            <div class="w-full p-6 space-y-6">
              {@html document}
            </div>
          {/if}
        </div>
      </div>
    {/if}
  {/each}
{/if}
