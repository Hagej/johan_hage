<script context="module" lang="ts">
	export const prerender = true;
</script>

<svelte:head>
	<title>Johan Hage</title>
</svelte:head>

<section>
	<h1 class="title">Johan Hage</h1>

	<h2>Software engineer - Web developer - Human</h2>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1 {
		width: 100%;
	}

	.title {
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}
</style>
