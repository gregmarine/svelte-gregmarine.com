<script>
  import { fade } from 'svelte/transition';
	import { link } from 'svelte-spa-router';
  import { pageTitle } from "../stores/stores.js";

  let showMenu = false;

  const toggleMenu = () => {
    showMenu = !showMenu;
  }
</script>

<!-- Menu -->
{#if showMenu}
<div class="py-4 fixed right-0 bottom-16" transition:fade>
  <ul class="menu py-3 shadow-lg bg-base-100 rounded-box">
    <li>
      <a href="/" on:click={toggleMenu} use:link>
				Home
			</a>
    </li> 
    <li>
      <a href="/zen" on:click={toggleMenu} use:link>
				Zen
			</a>
    </li> 
    <li>
      <a href="/dadjokes" on:click={toggleMenu} use:link>
				Dad Jokes
			</a>
    </li> 
    <li>
      <a href="/blog" on:click={toggleMenu} use:link>
				Blog
			</a>
    </li>
  </ul>
</div>
{/if}

<!-- Navbar -->
<div class="navbar flex-none mb-2 shadow-lg bg-neutral text-neutral-content rounded-box w-full fixed bottom-0 top-auto lg:bottom-auto lg:top-0">
	<div class="px-2 mx-2 navbar-start">
		<span class="text-lg font-bold">
			{ $pageTitle }
		</span>
	</div> 
	<div class="hidden px-2 mx-2 navbar-center md:flex">
		<div class="flex items-stretch">
			<a href="/" class="btn btn-ghost btn-sm rounded-btn" use:link>
				Home
			</a>
			<a href="/zen" class="btn btn-ghost btn-sm rounded-btn" use:link>
				Zen
			</a>
			<a href="/dadjokes" class="btn btn-ghost btn-sm rounded-btn" use:link>
				Dad Jokes
			</a>
			<a href="/blog" class="btn btn-ghost btn-sm rounded-btn" use:link>
				Blog
			</a>
		</div>
	</div> 
	<div class="navbar-end">
		<button class="btn btn-square btn-ghost md:hidden" on:click={toggleMenu}>
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">           
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>               
      </svg>
		</button>
	</div>
</div>