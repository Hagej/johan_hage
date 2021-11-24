<script lang="ts">
	import { page } from '$app/stores';

	const menuItems: [text: string, link: string][] = [["Home", "/"], ["About", "/about"], ["Projects", "/projects"], ["Skills", "/skills"]]

</script>

<header>
	<div class="top">
		<a href="/">
			<!-- Insert logo! -->
			Johan Hage
		</a>
	</div>

	<div class="socials">
		<!-- Github -->
		<!-- LinkedIn -->
	</div>

	<nav>
		<ul>
			{#each menuItems as [text, link] }
				<li class:active={$page.path === link}><a class:active={$page.path === link} sveltekit:prefetch href={link}>{text}</a></li>
			{/each}
		</ul>
	</nav>

	
</header>

<style>
	header {
		grid-area: header;
		display: flex;
		align-items: center;
		padding: 3em 0;
		justify-content: space-between;
		flex-direction: column;
		background: var(--secondary-color);
	}

	.top {
		width: 100%;
		height: 5em;
	}

	.top a {
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 3em;
		width: 100%;
		height: 100%;
	}

	.top a:hover {
		color: var(--accent-color);
	}

	.socials {
		display: flex;
		width: 100%;
	}

	nav {
		flex: 1;
		justify-content: center;


		
	}

	ul {
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		list-style: none;
	}

	li {
		height: 100%;
	}


	

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 1em;
		color: var(--heading-color);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a.active {
		color: var(--accent-color);
	}

	a:hover {
		color: var(--accent-color);
	}
</style>
