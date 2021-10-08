<script>
	import Router from 'svelte-spa-router';
	import routes from './routes';
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

	<ion-content class="ion-padding">
		<Router {routes} />
	</ion-content>
</ion-app>