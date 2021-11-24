<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
</script>

<Header />

<main>
	<slot />
</main>

<footer>
	<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
</footer>

<style>
	main {
		grid-area: "main";
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
	}

	:global(#svelte) {
		display: grid;
		grid-template-columns: 18em 1fr;
		grid-template-rows: 3fr 1fr;
		grid-template-areas:
			'header main'
			'footer main';
	}

	footer {
		grid-area: footer;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px;
		background: var(--tertiary-color)
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}
</style>
