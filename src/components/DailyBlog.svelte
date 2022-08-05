<script>
	let date = new Date().toLocaleDateString('de-DE');
	import DailyCard from "../components/DailyBlogCard.svelte"
</script>
<script context="module">
	import {getContent} from "../stores/dailyBlogStore"
</script>

<section class="text-gray-600 body-font">
	{#await getContent() }
	<DailyCard Title={"Loading"} url="/"/>
	{:then topPost }
	<DailyCard Title={topPost.title} url={topPost.url}/>
	{:catch name }
	<p style="color: red">Error</p>
	{/await}
	<div class="text-center w-full">
		<h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
			Daily Blog | {date}
		</h1>
		<p class="mb-8 leading-relaxed">
			Welcome to the weekly Everyday Blog series. Here I’ll be sharing a little bit of everything
			that is tech from the week…
		</p>
		<div class="flex justify-center" />
	</div>
</section>
