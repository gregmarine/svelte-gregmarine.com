<script>
  import { fade } from 'svelte/transition';
  import { dadjokes } from '../stores/stores.js';

    export let params = {};

    let id = '';
    $: {
        id = ''
        if (params && params.id) {
          id = params.id;

          loadDadJoke();
        }
    }

    let dadjoke = {
      id: '',
      youtube: '',
      setup: '',
      punchline: ''
    }

    const loadDadJoke = () => {
      $dadjokes.forEach(joke => {
        if (joke.id === id) {
          dadjoke = joke;
        }
      });
    }
</script>

<svelte:head>
  <style>
    .gradient {
      background: linear-gradient(90deg, #d53369 0%, #daae51 100%);
    }
  </style>
</svelte:head>

<div in:fade|local>

<div class="container mx-auto flex flex-wrap">
  <h1
    class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800"
  >
    Dad Jokes
  </h1>
</div>

{#if id === ''}
  <div class="container mx-auto flex flex-wrap pt-4 pb-12" in:fade|local>
    <div class="w-full mb-4">
      <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t" />
    </div>
    <h2
      class="w-full my-2 text-2xl font-bold leading-tight text-center text-gray-800"
    >
      Currated List of Eye Rolling Humor
    </h2>

  {#each $dadjokes as dadjoke}
    <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
      <div
        class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow"
      >
        <a
          href="#/dadjokes/{dadjoke.id}"
          class="flex flex-wrap no-underline hover:no-underline"
        >
          <p class="w-full text-gray-600 text-xs md:text-sm px-6">
            {dadjoke.id}
          </p>
          <div class="w-full font-bold text-xl text-gray-800 px-6">
            {dadjoke.setup}
          </div>
          <p class="text-gray-800 text-base px-6 mb-5">
            {dadjoke.punchline}
          </p>
        </a>
      </div>
    </div>
  {/each}
  </div>
{:else}
  <ion-grid in:fade|local>
    <ion-row>
      <ion-col
        size-xs="12"
        offset-sm="1"
        size-sm="10"
        offset-md="2"
        size-md="8"
        offset-lg="3"
        size-lg="6"
        offset-xl="3"
        size-xl="6"
      >
        <ion-card>
          <ion-card-header>
            <ion-card-title>
              {dadjoke.setup}
            </ion-card-title>
            <ion-card-subtitle>
              {dadjoke.punchline}
            </ion-card-subtitle>
          </ion-card-header>
          <ion-card-content>
            <div class="embed-container">
              <iframe src="https://www.youtube.com/embed/{dadjoke.youtube}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </ion-card-content>
        </ion-card>
      </ion-col>
    </ion-row>
  </ion-grid>
{/if}

</div>

<style>
  .embed-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; } .embed-container iframe { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }
</style>