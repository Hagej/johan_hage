<script lang="ts">
	import type { PageData } from './$types'

	export let data: PageData
	const { projects } = data
</script>

<section>
	{#each projects as project}
		<div>
			<p>{project.name}</p>
		</div>
	{/each}
</section>
