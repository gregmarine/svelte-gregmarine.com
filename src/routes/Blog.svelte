<script>
  import { fade } from "svelte/transition";
  import { link } from "svelte-spa-router";
  import xss from "xss";
  import marked from "marked";

  import { pageTitle, collectionName, documentName, blog } from "../stores/stores.js";

  pageTitle.set("Blog");
  collectionName.set("blog");
  documentName.set("");

  export let params = {};

  let id = "";
  let doc;

  $: {
    id = "";
    if (params && params.id) {
      id = params.id;

      $blog.find(element => {
        if (element.id === id) {
          documentName.set(element.title);
          doc = element;
          return true;
        }
      });

      getDocument();
    } else {
      documentName.set("");
      doc = null;
    }
  }

  let document = "";
  const getDocument = async () => {
    const response = await fetch(`/collections/blog/${id}/document.md`);
    const data = await response.text();
    document = marked(xss(data));
  };
</script>

{#if id === ""}
  <div class="container mx-auto flex flex-wrap pt-24 pb-12" in:fade|local>
    <div class="w-full mb-4">
      <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t" />
    </div>
    <h2
      class="w-full my-2 text-xl lg:text-2xl font-bold leading-tight text-center"
      in:fade
    >
      A Collection of My Musings
    </h2>

    {#each $blog as doc}
      <div class="flex md:w-1/2 lg:w-1/3 xl:w-1/4 p-2" in:fade|local>
        <div class="card bordered shadow-lg">
          <figure class="px-10 pt-10">
            <img class="object-cover h-96 md:h-48 w-full rounded-lg" alt={doc.title} src="/collections/blog/{doc.id}/image.webp" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">{doc.title}</h2>
            <p class="sm:text-sm md:text-xs">{doc.text}</p>
            <div class="card-actions">
              <a class="btn btn-primary" href="/blog/{doc.id}" use:link>Read More</a>
            </div>
          </div>
        </div>
      </div>
    {/each}
  </div>
{:else}
  {#if doc}
    <div class="w-full flex flex-col justify-center items-center pt-24">
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
{/if}
