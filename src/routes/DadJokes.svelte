<script>
  import { fade } from "svelte/transition";
  import { link } from "svelte-spa-router";

  import { pageTitle, collectionName, documentName, dadjokes } from "../stores/stores.js";

  pageTitle.set("Dad Jokes");
  collectionName.set("dadjokes");
  documentName.set("");

  export let params = {};

  let id = "";
  let doc;

  $: {
    id = "";
    if (params && params.id) {
      id = params.id;

      $dadjokes.find(element => {
        if (element.id === id) {
          documentName.set(element.title);
          doc = element;
          return true;
        }
      });
    } else {
      documentName.set("");
      doc = null;
    }
  }
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
      Currated List of Eye Rolling Humor
    </h2>

    {#each $dadjokes as doc}
      <div class="flex md:w-1/2 lg:w-1/3 xl:w-1/4 p-2" in:fade|local>
        <div class="card bordered shadow-lg image-full">
          <div class="card-body">
            <h2 class="card-title">{doc.title}</h2>
            <p class="w-full text-xl md:text-lg px-6 py-6">
              {doc.setup}
            </p>
            <p class="w-full text-2xl md:text-lg px-6 py-6">
              {doc.punchline}
            </p>
            <div class="card-actions">
              <a class="btn btn-primary" href="/dadjokes/{doc.id}" use:link>Watch Video</a>
            </div>
          </div>
          <figure>
            <img alt={doc.title} src="/collections/dadjokes/image-01.webp" />
          </figure>
        </div>
      </div>
    {/each}
  </div>
{:else}
  {#if doc}
    <div class="container mx-auto w-full flex flex-col items-center pt-24 pb-12" in:fade|local>
      <div class="card text-center shadow-2xl sm:w-2/3 md:w-1/2">
        <figure class="px-10 pt-10 embed-container">
          <iframe
            src="https://www.youtube.com/embed/{doc.youtube}"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </figure>
        <div class="card-body">
          <p class="w-full text-xl md:text-lg px-6 py-6">
            {doc.setup}
          </p>
          <p class="w-full text-2xl md:text-lg px-6 py-6">
            {doc.punchline}
          </p>
        </div>
      </div>
    </div>
  {/if}
{/if}

<style>
  .embed-container {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
    max-width: 100%;
  }
  .embed-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 1em;
  }
</style>
