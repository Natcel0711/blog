import { supabase } from "../supabase";
import { writable } from "svelte/store";
export const MainContent = writable([]);
export let toggle = writable('opened');
export let sidebarItem = writable('Dashboard');
export let routeSelected = writable('Home');

export const getContent = async () => {
    const {data, error} = await supabase.from("BlogContent").select().order('id', {ascending: true});
    if (error) {
      console.log(error);
    }
    console.log(data);
    MainContent.set(data);
  }
