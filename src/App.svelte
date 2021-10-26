<script>
	import Router from 'svelte-spa-router';
	import routes from './routes';

	import Navbar from './components/Navbar.svelte';
</script>

<style global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

	.gradient {
		background: linear-gradient(90deg, rgb(6, 95, 36) 0%, rgb(81, 218, 88) 100%);
	}

	ol {
    list-style-type: decimal;
		padding-left: 40px;
  }

	.underlined_link {
		text-decoration: underline;
	}
</style>

<Navbar/>

<div class="flex flex-col items-center flex-grow h-full w-full overflow-auto mb-20 lg:mb-0">
	<Router {routes} restoreScrollState={true} />
</div>