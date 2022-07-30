<script>
    export let Content = {
        Category:"",
        CreatedDate:"",
        Subject:"",
        Description:"",
        LinkPath:""
    };
</script>
<div class="py-8 flex flex-wrap md:flex-nowrap">
    <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
      <span class="font-semibold title-font text-gray-700">{Content.Category}</span>
      <span class="mt-1 text-gray-500 text-sm">{Content.CreatedDate}</span>
    </div>
    <div class="md:flex-grow">
      <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">{Content.Subject}</h2>
      <p class="leading-relaxed">{Content.Description}</p>
      <a href={Content.LinkPath} class="text-cyan-500 inline-flex items-center mt-4">Learn More
        <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">

        </svg>
      </a>
    </div>
  </div>