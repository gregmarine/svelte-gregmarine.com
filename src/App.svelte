<script>
	import Router from 'svelte-spa-router';
	import {link} from 'svelte-spa-router';
	import routes from './routes';
</script>

<style global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

	.gradient {
		background: linear-gradient(90deg, rgb(6, 95, 36) 0%, rgb(81, 218, 88) 100%);
	}
</style>

<div class="flex flex-col items-center flex-grow h-full w-full overflow-auto text-center mb-20">
	<Router {routes} restoreScrollState={true} />
</div>

<div class="navbar flex-none mb-2 shadow-lg bg-neutral text-neutral-content rounded-box w-full fixed bottom-0 top-auto lg:bottom-auto lg:top-0">
	<div class="px-2 mx-2 navbar-start">
		<span class="text-lg font-bold">
			Greg Marine
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
		<button class="btn btn-square btn-ghost">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">     
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>                     
			</svg>
		</button> 
		<button class="btn btn-square btn-ghost">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">             
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>             
			</svg>
		</button>
	</div>
</div>