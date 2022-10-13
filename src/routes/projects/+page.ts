import type { Project } from '$lib/types'
import type { PageLoad } from './$types'

export const load: PageLoad<{ projects: Project[] }> = () => {
	return {
		projects: [
			{ name: 'Minecraft clone', description: 'Bachelors project' },
			{ name: 'birds.se', description: 'Implemented birds.se' }
		]
	}
}
