<script>
  import Fa from 'svelte-fa/src/fa.svelte'
  import { faBars, faBarsStaggered } from '@fortawesome/free-solid-svg-icons'
  import {toggle, routeSelected} from "../stores/blockContent"
  function sidebarOpener(){
    if($toggle !== 'opened'){
      toggle.set('opened');
    }
    else{
      toggle.set('closed');
    }
  }
</script>
<header class="text-gray-600 body-font">
    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <a on:click={sidebarOpener}>
          {#if $toggle !== 'opened' }
          <Fa icon={faBarsStaggered}/>
          {:else if $toggle === 'opened'}
          <Fa icon={faBars}/>
          {/if}
        </a>
        <span class="ml-3 text-xl">Blog</span>
      </a>
      <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
        <a on:click={() => routeSelected.set('Home')} style="border-radius: 15px;" href="/" class="mr-5m w-16 text-center {$routeSelected === 'Home'? 'bg-slate-700 text-white':''}">Home</a>
        <a on:click={() => routeSelected.set('About')} style="border-radius: 15px;" href="/about" class="mr-5 text-center w-16 {$routeSelected === 'About'? 'bg-slate-700 text-white':''}">About</a>
      </nav>
      <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Dark Mode
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
          </svg>
      </button>
    </div>
  </header>