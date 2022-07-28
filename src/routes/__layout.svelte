<script>
    import "../app.css";
    import Nav from "../components/nav.svelte";
    import Footer from "../components/Footer.svelte"
    import {supabase} from "../supabase"
    import SideBar from "../components/SideBar.svelte";
    console.log(supabase);
  </script>
  <Nav/>
  <main>
    <SideBar/>
    <slot />
  </main>
  <Footer/>