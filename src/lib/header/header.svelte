<script lang="ts">
	import { page } from '$app/stores'
	const menuItems: [text: string, link: string][] = [
		['Home', '/'],
		['About', '/about'],
		['Projects', '/projects'],
		['Skills', '/skills']
	]
</script>

<header>
	<div class="top">
		<a href="/"> JH </a>
	</div>
	<!--
	<div class="socials">
		<a href="https://github.com/Hagej/johan_hage">
			<Github />
		</a>
	</div> -->

	{#each menuItems as [text, link]}
		<a class:active={$page.url.pathname === link} sveltekit:prefetch href={link}>{text}</a>
	{/each}

	<!-- 
		<ul>
			<li class:active={$page.url.pathname === link}>
			
				</li>
		</ul>
	 -->
</header>

<style lang="scss">
	header {
		position: fixed;
		top: -295px;
		left: -200px;
		width: 250px;
		height: 400px;
		transform: rotate(50deg);
		display: flex;
		padding: 100px 20px 100px 200px;
		gap: 50px;
		flex-direction: column;
		align-items: end;
		background: red;
		z-index: 1;
		> * {
			transform: rotate(-50deg);
		}
	}
	.top {
		position: absolute;
		left: 20px;
		top: 10px;
		z-index: 1;
		height: 5em;
		a {
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 4em;
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

	a {
		display: flex;

		align-items: center;

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
</style>
