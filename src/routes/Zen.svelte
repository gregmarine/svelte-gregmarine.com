<script>
  import { fade } from 'svelte/transition';
  import { zen } from '../stores/stores.js';

    export let params = {};

    let id = '';
    $: {
        id = ''
        if (params && params.id) {
          id = params.id;
        }
    }
</script>

<svelte:head>
  <style>
    .gradient {
      background: linear-gradient(90deg, #d53369 0%, #daae51 100%);
    }
  </style>
</svelte:head>

<div class="container mx-auto flex flex-wrap" in:fade|local>
  <h1
    class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800"
  >
    Zen
  </h1>
</div>

{#if id === ''}
  <div class="container mx-auto flex flex-wrap pt-4 pb-12" in:fade|local>
    <div class="w-full mb-4">
      <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t" />
    </div>
    <h2
      class="w-full my-2 text-2xl font-bold leading-tight text-center text-gray-800"
      in:fade
    >
      Subtitle
    </h2>

  {#each $zen as doc}
    <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink" in:fade|local>
      <div
        class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow"
      >
        <a
          href="#/zen/{doc.id}"
          class="flex flex-wrap no-underline hover:no-underline"
        >
          <p class="w-full text-gray-600 text-xs md:text-sm px-6">
            {doc.text}
          </p>
          <div class="w-full font-bold text-xl text-gray-800 px-6">
            
          </div>
          <p class="text-gray-800 text-base px-6 mb-5">
            
          </p>
        </a>
      </div>
    </div>
  {/each}
  </div>
{:else}
  {#each $zen as doc}
    {#if doc.id === id}
      <div class="flex flex-wrap" in:fade>
        <div class="w-5/6 sm:w-1/2 p-6">
          <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">
            {doc.title}
          </h3>
          <p class="text-gray-600 mb-8">
            {doc.text}
          </p>
          {#if doc.twitter}
            <ion-button fill="clear" href="{doc.twitter}" target="_blank">
              <ion-icon name="logo-twitter" />
            </ion-button>
          {/if}
          {#if doc.facebook}
            <ion-button fill="clear" href="{doc.facebook}" target="_blank">
              <ion-icon name="logo-facebook" />
            </ion-button>
          {/if}
          {#if doc.instagram}
            <ion-button fill="clear" href="{doc.instagram}" target="_blank">
              <ion-icon name="logo-instagram" />
            </ion-button>
          {/if}
        </div>
        <div class="w-full sm:w-1/2 p-6">
          <img
            alt="{doc.title}"
            src="/collections/zen/{doc.id}/image.webp"
          />
        </div>
      </div>
    {/if}
  {/each}
{/if}