<script lang="ts">
	import { page } from '$app/stores';
	import Github from '../../icons/github.svelte';
	const menuItems: [text: string, link: string][] = [
		['Home', '/'],
		['About', '/about'],
		['Projects', '/projects'],
		['Skills', '/skills']
	];
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
		<a href="https://github.com/Hagej/johan_hage">
			<Github />
		</a>
	</div>

	<nav>
		<ul>
			{#each menuItems as [text, link]}
				<li class:active={$page.url.pathname === link}>
					<a class:active={$page.url.pathname === link} sveltekit:prefetch href={link}>{text}</a>
				</li>
			{/each}
		</ul>
	</nav>
</header>

<style lang="scss">
	header {
		grid-area: header;
		display: flex;
		align-items: center;
		padding: 3em 0;
		justify-content: space-between;
		gap: 20px;
		flex-direction: column;
		background: var(--secondary-color);
	}
	.top {
		width: 100%;
		height: 5em;
		a {
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 3em;
			width: 100%;
			height: 100%;
			&:hover {
				color: var(--accent-color);
			}
		}
	}
	.socials {
		display: flex;
		justify-content: space-around;
		gap: 20px;
		width: 100%;
		a {
			width: 3em;
			height: 3em;
		}
	}

	nav {
		flex: 1;
		justify-content: center;
		a {
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
			&.active {
				color: var(--accent-color);
			}
			&:hover {
				color: var(--accent-color);
			}
		}
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
</style>
