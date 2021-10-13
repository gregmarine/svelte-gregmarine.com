<script>
	import Router from 'svelte-spa-router';
	import routes from './routes';

	let content;

	const routeLoaded = () => {
		if(content && content.scrollToTop) content.scrollToTop();
	};
</script>

<ion-app>
	<ion-header>
		<ion-toolbar>
			<ion-buttons slot="end">
				<ion-button href="#/">Home</ion-button>
				<ion-button href="#/zen">Zen</ion-button>
				<ion-button href="#/dadjokes">Dad Jokes</ion-button>
			</ion-buttons>
		</ion-toolbar>
	</ion-header>

	<ion-content class="ion-padding" bind:this={content}>
		<Router {routes} on:routeLoaded={routeLoaded} />
	</ion-content>
</ion-app>