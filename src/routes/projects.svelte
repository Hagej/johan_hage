<script lang="ts">
	import { collection, onSnapshot } from 'firebase/firestore'
	import { db } from '../../src/firebase'

	let projects: any[] = []
	const unsub = onSnapshot(
		collection(db, 'projects'),
		(querySnapshot) => {
			projects = querySnapshot.docs.map((doc) => ({
				...doc.data(),
				id: doc.id
			}))
			console.log('Projects: ', projects)
		},
		(err) => {
			console.error(err)
		}
	)
</script>

<section>
	{#each projects as project}
		<div>
			<p>{project.name}</p>
		</div>
	{/each}
</section>
