import { writable } from "svelte/store";

export const getContent = async () => {
    const data = await fetch('https://hn.algolia.com/api/v1/search_by_date?tags=story&numericFilters=points%3E100');
    const posts = await data.json();
    return posts.hits[0];
}