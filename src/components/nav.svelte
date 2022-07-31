<script>
  import Fa from 'svelte-fa/src/fa.svelte'
  import { faBars, faBarsStaggered } from '@fortawesome/free-solid-svg-icons'
  import {toggle, routeSelected} from "../stores/blockContent"
  let icon = faBars;
  function sidebarOpener(){
    if($toggle !== 'opened'){
      toggle.set('opened');
    }
    else{
      toggle.set('closed');
    }

    $: if($toggle === 'opened'){
      icon = faBars;
    }else{
      icon = faBarsStaggered;
    }
    
  }
</script>
<header class="text-gray-600 body-font">
    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a href="/" class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <a href="/" on:click={sidebarOpener}>
          <Fa icon={icon}/>
        </a>
        <span class="ml-3 text-xl">Blog</span>
      </a>
      <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
        <a on:click={() => routeSelected.set('Home')} style="border-radius: 15px;" href="/" class="mr-5m w-16 text-center {$routeSelected === 'Home'? 'bg-slate-700 text-white':''}">Home</a>
        <a on:click={() => routeSelected.set('About')} style="border-radius: 15px;" href="/about" class="mr-5 text-center w-16 {$routeSelected === 'About'? 'bg-slate-700 text-white':''}">About</a>
      </nav>
      <img
			class="object-cover w-12 h-12 mx-2 rounded-full"
			src="src\images\pexels-sebastiaan-stam-1482476.jpg"
			alt="avatar"
		/>
    </div>
  </header>