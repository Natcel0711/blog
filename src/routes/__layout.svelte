<script>
    import "../app.css";
    import Nav from "../components/nav.svelte";
    import Footer from "../components/Footer.svelte"
    import {supabase} from "../supabase"
    import SideBar from "../components/SideBar.svelte";
    import {Get} from "../stores/GetPdf"
    console.log(supabase);
    Get();
  </script>
  <Nav/>
  <main>
    <SideBar/>
    <slot />
  </main>
  <Footer/>