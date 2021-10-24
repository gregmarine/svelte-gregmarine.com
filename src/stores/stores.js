import { readable, writable } from 'svelte/store';

export const pageTitle = writable('Home');
export const collectionName = writable('');
export const documentName = writable('');

export const dadjokes = readable([], function (set) {
  const fetchDadJokeIndex = async () => {
    const response = await fetch('collections/dadjokes/index.json');
    const data = await response.json();
    
    set(data);
  }

  fetchDadJokeIndex();

  return () => {};
});

export const zen = readable([], function (set) {
  const fetchZenIndex = async () => {
    const response = await fetch('collections/zen/index.json');
    const data = await response.json();
    
    set(data);
  }

  fetchZenIndex();

  return () => {};
});

export const blog = readable([], function (set) {
  const fetchBlogIndex = async () => {
    const response = await fetch('collections/blog/index.json');
    const data = await response.json();
    
    set(data);
  }

  fetchBlogIndex();

  return () => {};
});

export const recipes = readable([], function (set) {
  const fetchRecipesIndex = async () => {
    const response = await fetch('collections/recipes/index.json');
    const data = await response.json();
    
    set(data);
  }

  fetchRecipesIndex();

  return () => {};
});