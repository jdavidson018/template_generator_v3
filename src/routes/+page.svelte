<script>
	import TemplateSelection from '$lib/components/TemplateSelection.svelte';
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
					<h1 class="text-xl font-bold text-teal-300">Template Selection</h1>
					<TemplateSelection templateOptions={['Template one', 'Template two', 'Template three']} />
				</div>
				<div class="flex-1 bg-white text-blue-900 p-4">
					<h1 class="text-xl font-bold text-blue-600">Template Editor</h1>
				</div>
			</div>
			<div class="flex grow">
				<div class="flex-none w-64 bg-blue-700 text-white p-4">
					<h1 class="text-xl font-bold text-teal-300">Template Parameters</h1>
				</div>
				<div class="flex-1 bg-blue-50 text-blue-900 p-4">
					<h1 class="text-xl font-bold text-blue-600">Template Preview</h1>
				</div>
			</div>
		</div>
	</div>
</div>
