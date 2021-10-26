<script>
  import { fade } from "svelte/transition";
  import { link } from "svelte-spa-router";
  import xss from "xss";
  import marked from "marked";

  import { pageTitle, collectionName, documentName, zen } from "../stores/stores.js";

  pageTitle.set("Zen");
  collectionName.set("zen");
  documentName.set("");

  export let params = {};

  let id = "";
  let doc;

  $: {
    id = "";
    if (params && params.id) {
      id = params.id;

      $zen.find(element => {
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
    const response = await fetch(`/collections/zen/${id}/document.md`);
    const data = await response.text();
    document = marked(xss(data));
  };
</script>

{#if id === ""}
  <div class="container mx-auto flex flex-wrap pt-24" in:fade|local>
    <h1 class="w-full my-2 text-5xl font-bold leading-tight text-center">
      Zen
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
      Postive Motivation for a Troubled World
    </h2>

    {#each $zen as doc}
    <div class="flex md:w-1/2 lg:w-1/3 xl:w-1/4 p-2" in:fade|local>
      <div class="card bordered shadow-lg image-full">
        <div class="card-body">
          <h2 class="card-title">{doc.title}</h2>
          <p>{doc.text}</p>
          <div class="card-actions">
            <a class="btn btn-primary" href="/zen/{doc.id}" use:link>Read More</a>
          </div>
        </div>
        <figure>
          <img alt={doc.title} src="/collections/zen/{doc.id}/image.webp" />
        </figure>
      </div>
    </div>
    {/each}
  </div>
{:else}
  {#if doc}
    <div class="container mx-auto flex flex-wrap pt-24" in:fade|local>
      <h1 class="w-full my-2 text-3xl font-bold leading-tight text-center">
        {doc.title}
      </h1>

      <div class="w-full flex flex-col justify-center items-center">
        <ion-buttons>
          {#if doc.twitter}
            <ion-button fill="clear" href={doc.twitter} target="_blank">
              <ion-icon name="logo-twitter" />
            </ion-button>
          {/if}
          {#if doc.facebook}
            <ion-button fill="clear" href={doc.facebook} target="_blank">
              <ion-icon name="logo-facebook" />
            </ion-button>
          {/if}
          {#if doc.instagram}
            <ion-button fill="clear" href={doc.instagram} target="_blank">
              <ion-icon name="logo-instagram" />
            </ion-button>
          {/if}
        </ion-buttons>
      </div>
    </div>

    <div class="w-full flex flex-col justify-center items-center">
      <div class="flex flex-wrap w-full xl:w-1/2 md:w-4/6 sm:w-5/6" in:fade>
        <div class="w-5/6 sm:w-1/2 p-6">
          <p class="mb-8">
            {doc.text}
          </p>
        </div>
        <div class="w-full sm:w-1/2 p-6">
          <img alt={doc.title} src="/collections/zen/{doc.id}/image.webp" />
        </div>

        <div class="w-full p-6 space-y-6">
          {@html document}
        </div>
      </div>
    </div>
  {/if}
{/if}
