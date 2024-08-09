<script lang="ts">
	export let templateOptions: String[];
</script>

<div>
	<p>Hello, this is some text!</p>
	{#each templateOptions as template}
		<p>{template}</p>
	{/each}
</div>
