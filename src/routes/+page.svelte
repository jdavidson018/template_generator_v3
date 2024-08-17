<script lang="ts">
	import TemplateSelection from '$lib/components/TemplateSelection.svelte';
	import { TemplateParser } from '$lib/TemplateParser';
	import { Templates } from '$lib/Templates';

	let selectedTemplateId: string | null = null;
	$: selectedTemplate = Templates.find((t) => t.id === selectedTemplateId);
	$: selectedTemplateText = selectedTemplate?.text ?? '';
	$: templateParser = new TemplateParser(selectedTemplate);
	$: parameters = templateParser.getParameters();
	$: populatedText = templateParser.getPopulatedText();

	function handleParameterInput(param: string, value: string) {
		templateParser.setParameterValue(param, value);
		populatedText = templateParser.getPopulatedText();
	}
</script>

<div class="bg-blue-100 min-h-screen">
	<div class="container mx-auto h-screen flex flex-col">
		<div class="flex justify-between h-12 bg-blue-600 text-white">
			<a
				href="/"
				class="ml-4 flex items-center font-semibold hover:text-yellow-300 transition-colors duration-200"
				>Template Generator V3</a
			>
			<a
				href="/create"
				class="mr-8 flex items-center hover:text-yellow-300 transition-colors duration-200"
			>
				New Template</a
			>
		</div>
		<div class="flex grow flex-col">
			<div class="flex grow">
				<div class="flex-none w-64 bg-blue-800 text-white p-4">
					<h1 class="text-xl font-bold text-teal-300 mb-4">Template Selection</h1>
					<TemplateSelection bind:selectedTemplateId />
				</div>
				<div class="flex-1 bg-white text-blue-900 p-4">
					<h1 class="text-xl font-bold text-blue-600 mb-4">Template Editor</h1>
					<textarea
						class="w-full h-64 p-2 border border-blue-300 rounded"
						bind:value={selectedTemplateText}
						placeholder="Select a template to edit"
						readonly
					></textarea>
				</div>
			</div>
			<div class="flex grow">
				<div class="flex-none w-64 bg-blue-700 text-white p-4">
					<h1 class="text-xl font-bold text-teal-300 mb-4">Template Parameters</h1>
					{#each parameters as param (param)}
						<div class="mb-4">
							<label for={param} class="block text-sm font-medium mb-1">{param}</label>
							<input
								type="text"
								id={param}
								class="w-full px-3 py-2 bg-blue-600 border border-blue-500 rounded-md text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
								placeholder="Enter value"
								on:input={(e) => handleParameterInput(param, e.currentTarget.value)}
							/>
						</div>
					{/each}
				</div>
				<div class="flex-1 bg-blue-50 text-blue-900 p-4">
					<h1 class="text-xl font-bold text-blue-600 mb-4">Template Preview</h1>
					<textarea
						class="w-full h-96 p-2 border border-blue-300 rounded"
						bind:value={populatedText}
						placeholder="Populated template will appear here"
						readonly
					></textarea>
				</div>
			</div>
		</div>
	</div>
</div>
