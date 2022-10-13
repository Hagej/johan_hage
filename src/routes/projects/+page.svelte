<script lang="ts">
	import type { Project } from 'src/types'

	export let projects: Project[]
</script>

<section>
	{#each projects as project}
		<div>
			<p>{project.name}</p>
		</div>
	{/each}
</section>
