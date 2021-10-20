<script>
  import { fade } from 'svelte/transition';
  import xss from 'xss';
  import marked from 'marked';

  import { pageTitle, blog } from '../stores/stores.js';

  pageTitle.set("Blog");

  export let params = {};

  let id = '';
  $: {
      id = ''
      if (params && params.id) {
        id = params.id;
        getDocument();
      }
  }

  let document = "";
  const getDocument = async () => {
    const response = await fetch(`/collections/blog/${id}/document.md`);
    const data = await response.text();
    document = marked(xss(data));
  }
</script>

{#if id === ''}

  <div class="container mx-auto flex flex-wrap" in:fade|local>
    <h1
      class="w-full my-2 text-5xl font-bold leading-tight text-center"
    >
      Blog
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
      Collection of My Musings
    </h2>

  {#each $blog as doc}

      <article class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink" in:fade|local>

          <div
            class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow"
          >
            <a
              href="#/blog/{doc.id}"
              class="flex flex-wrap no-underline hover:no-underline"
            >
              <p class="w-full text-gray-600 text-l md:text-xl px-6 pt-6">
                {doc.title}
              </p>
            </a>
        
            <a
              href="#/blog/{doc.id}"
              class="flex flex-wrap no-underline hover:no-underline"
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

  {#each $blog as doc}

    {#if doc.id === id}

      <div class="container mx-auto flex flex-wrap" in:fade|local>
        <h1
          class="w-full my-2 text-3xl font-bold leading-tight text-center text-gray-800"
        >
          {doc.title}
        </h1>
      </div>

      <div class="w-full flex flex-col justify-center items-center">
        <div class="flex flex-wrap w-full xl:w-1/2 md:w-4/6 sm:w-5/6" in:fade>
          <p class="w-full p-6 space-y-6">
            {doc.text}
          </p>
          <div class="w-full p-6 space-y-6">
            {@html document}
          </div>
        </div>
      </div>

    {/if}

  {/each}

{/if}