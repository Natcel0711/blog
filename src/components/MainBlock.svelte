<script>
    import BlockCard from "./BlockCard.svelte";
    import {getContent, MainContent} from "../stores/blockContent";
    import DailyBlog from "../components/DailyBlog.svelte"
    getContent();
</script>
<section class="text-gray-600 body-font overflow-hidden">
    <div class="container px-5 py-24 mx-auto">
      <div class="mb-10 divide-y-2 divide-gray-100">
        <DailyBlog/>
      </div>
      <div class="-my-8 divide-y-2 divide-gray-100">
        {#each $MainContent as content }
            <BlockCard Content={content}/>
        {/each}
      </div>
    </div>
  </section>