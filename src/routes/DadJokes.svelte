<script>
  import { fade } from 'svelte/transition';

  import { pageTitle, dadjokes } from '../stores/stores.js';

  pageTitle.set("Dad Jokes");

  export let params = {};

  let id = '';
  $: {
      id = ''
      if (params && params.id) {
        id = params.id;
        //getDocument();
      }
  }

  // let document = "";
  /* const getDocument = async () => {
    const response = await fetch(`/collections/zen/${id}/document.md`);
    const data = await response.text();
    document = marked(xss(data));
  } */
</script>

{#if id === ''}

  <div class="container mx-auto flex flex-wrap" in:fade|local>
    <h1
      class="w-full my-2 text-5xl font-bold leading-tight text-center"
    >
      Dad Jokes
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
      Currated List of Eye Rolling Humor
    </h2>

  {#each $dadjokes as doc}

    <article class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink" in:fade|local>
    
      <div
        class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow"
      >
        <a
          href="#/dadjokes/{doc.id}"
          class="flex flex-wrap no-underline hover:no-underline"
        >
          <p class="w-full text-gray-600 text-l md:text-xl px-6 pt-6">
            {doc.title}
          </p>
        </a>
    
        <a
          href="#/dadjokes/{doc.id}"
          class="flex flex-wrap no-underline hover:no-underline"
        >
          <p class="w-full text-gray-600 text-xs md:text-sm px-6 py-6">
            {doc.setup}
          </p>
          <p class="w-full text-gray-600 text-xs md:text-sm px-6 py-6">
            {doc.punchline}
          </p>
        </a>
      </div>
      
    </article>

  {/each}

  </div>

{:else}

  {#each $dadjokes as doc}

    {#if doc.id === id}

      <div class="container mx-auto flex flex-wrap" in:fade|local>
        <h1
          class="w-full my-2 text-3xl font-bold leading-tight text-center"
        >
          {doc.title}
        </h1>
      </div>

      <div class="w-full flex flex-col justify-center items-center">
        <div class="w-full xl:w-1/2 md:w-4/6 sm:w-5/6" in:fade>
          <div
            class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow"
          >
  
            <div class="w-5/6 sm:w-1/2 p-6">
              <p class="text-gray-600 mb-8">
                {doc.setup}
              </p>
            </div>
            <div class="w-5/6 sm:w-1/2 p-6">
              <p class="text-gray-600 mb-8">
                {doc.punchline}
              </p>
            </div>
            <div class="w-full embed-container">
              <iframe src="https://www.youtube.com/embed/{doc.youtube}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

          </div>
        </div>
      </div>

    {/if}

  {/each}

{/if}

<style>
  .embed-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; } .embed-container iframe { position: absolute; top: 0; left: 0; width: 100%; height: 100%; padding: 1em; }
</style>