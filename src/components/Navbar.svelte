<script>
  import { fade } from "svelte/transition";
  import { link, push } from "svelte-spa-router";
  import { scrollto } from "svelte-scrollto";

  import { pageTitle, collectionName, documentName } from "../stores/stores.js";

  let showMenu = false;

  const toggleMenu = () => {
    showMenu = !showMenu;
  };

  const closeDocument = () => {
    documentName.set("");
    push(`/${$collectionName}`);
  }

  const menuItems = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Zen",
      path: "/zen",
    },
    {
      name: "Dad Jokes",
      path: "/dadjokes",
    },
    {
      name: "Blog",
      path: "/blog",
    },
    {
      name: "Recipes",
      path: "/recipes",
    },
  ];
</script>

<!-- Navbar -->
<div
  class="navbar flex-none shadow-lg bg-neutral text-neutral-content rounded-box w-full fixed bottom-auto top-0 z-50"
>
  <div class="px-2 mx-2 navbar-start">
    <p class="text-sm md:text-lg font-bold">
      {#if $documentName !== ""}
        <a href="/{$collectionName}" use:link>{$pageTitle}</a>
      {:else}
        {$pageTitle}
      {/if}
    </p>
  </div>
  {#if $documentName !== ""}
    <div class="px-2 mx-2 navbar-center flex" in:fade>
      <div class="flex items-stretch">
        <p class="text-sm md:text-lg font-bold">{$documentName}</p>
      </div>
    </div>
  {:else}
    <div class="hidden px-2 mx-2 navbar-center md:flex" in:fade>
      <div class="flex items-stretch">
        {#each menuItems as item}
          {#if $pageTitle !== ""}
            <a href={item.path} class="btn btn-ghost btn-sm rounded-btn" use:link>
              {item.name}
            </a>
          {:else}
            {#if item.name === "Home"}
            <button class="btn btn-ghost btn-sm rounded-btn" use:scrollto={"#home"}>
              {item.name}
            </button>
            {:else}
              <button class="btn btn-ghost btn-sm rounded-btn" use:scrollto={item.path.replace("/", "#")}>
                {item.name}
              </button>
            {/if}
          {/if}
        {/each}
      </div>
    </div>
  {/if}
  <div class="navbar-end">
    {#if $documentName === ''}
      <button class="btn btn-square btn-ghost md:hidden" on:click={toggleMenu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          class="inline-block w-6 h-6 stroke-current"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    {:else}
      <button class="btn btn-square btn-ghost" on:click={closeDocument} in:fade>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">   
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>                       
        </svg>
      </button>
    {/if}
  </div>
</div>

<!-- Menu -->
{#if showMenu}
  <div class="py-4 fixed right-0 top-12 z-40" transition:fade>
    <ul class="menu py-3 shadow-lg bg-base-100 rounded-box">
      {#each menuItems as item}
        {#if $pageTitle !== ""}
          <li>
            <a href={item.path} class="btn btn-ghost btn-sm rounded-btn" on:click={toggleMenu} use:link>
              {item.name}
            </a>
          </li>
        {:else}
          {#if item.name === "Home"}
            <li>
              <button class="btn btn-ghost btn-sm rounded-btn" on:click={toggleMenu} use:scrollto={"#home"}>
                {item.name}
              </button>
            </li>
          {:else}
            <li>
              <button class="btn btn-ghost btn-sm rounded-btn" on:click={toggleMenu} use:scrollto={item.path.replace("/", "#")}>
                {item.name}
              </button>
            </li>
          {/if}
        {/if}
      {/each}
    </ul>
  </div>
{/if}