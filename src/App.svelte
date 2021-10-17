<script>
	import Router from 'svelte-spa-router';
	import routes from './routes';

	let content;

	const routeLoaded = () => {
		if(content && content.scrollToTop) content.scrollToTop();
	};
</script>

<style global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

	.gradient {
		background: linear-gradient(90deg, rgb(6, 95, 36) 0%, rgb(81, 218, 88) 100%);
	}
</style>

<ion-app>
	<ion-header>
		<ion-toolbar>
			<ion-buttons slot="end">
				<ion-button href="#/">Home</ion-button>
				<ion-button href="#/zen">Zen</ion-button>
				<ion-button href="#/dadjokes">Dad Jokes</ion-button>
				<ion-button href="#/blog">Blog</ion-button>
			</ion-buttons>
		</ion-toolbar>
	</ion-header>

	<ion-content class="ion-padding" bind:this={content}>
		<Router {routes} on:routeLoaded={routeLoaded} />
	</ion-content>
</ion-app>