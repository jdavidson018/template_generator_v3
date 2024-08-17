<script lang="ts">
	import { Templates } from '$lib/Templates';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
	export let selectedTemplateId: string | null = null;
</script>

<div class="flex flex-col space-y-2">
	{#each Templates as template (template.id)}
		<button
			class="text-left px-3 py-2 rounded {selectedTemplateId === template.id
				? 'bg-blue-600'
				: 'hover:bg-blue-700'} transition-colors duration-100"
			on:click={() => (selectedTemplateId = template.id)}
			>{template.name}
		</button>
	{/each}
</div>
