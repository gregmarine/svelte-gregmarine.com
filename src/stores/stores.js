import { readable } from 'svelte/store';

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
