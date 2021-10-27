<script>
  import { fade } from "svelte/transition";
  import { link } from "svelte-spa-router";
  import { pageTitle, collectionName, documentName } from "../stores/stores.js";

  let showMenu = false;

  const toggleMenu = () => {
    showMenu = !showMenu;
  };

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
    <div class="text-lg font-bold breadcrumbs">
      <ul>
        <li>

          {#if $documentName !== ""}
          <a href="/{$collectionName}" use:link>{$pageTitle}</a>
          {:else}
          {$pageTitle}
          {/if}
        </li>
        {#if $documentName !== ""}
        <li>
          {$documentName}
        </li>
        {/if}
      </ul>
    </div>
  </div>
  <div class="hidden px-2 mx-2 navbar-center md:flex">
    <div class="flex items-stretch">
      {#each menuItems as item}
        <a href={item.path} class="btn btn-ghost btn-sm rounded-btn" use:link>
          {item.name}
        </a>
      {/each}
    </div>
  </div>
  <div class="navbar-end">
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
  </div>
</div>

<!-- Menu -->
{#if showMenu}
  <div class="py-4 fixed right-0 top-12 z-40" transition:fade>
    <ul class="menu py-3 shadow-lg bg-base-100 rounded-box">
      {#each menuItems as item}
        <li>
          <a href={item.path} on:click={toggleMenu} use:link>
            {item.name}
          </a>
        </li>
      {/each}
    </ul>
  </div>
{/if}