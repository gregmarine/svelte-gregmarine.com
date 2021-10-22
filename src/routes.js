import Home from './routes/Home.svelte';
import Zen from './routes/Zen.svelte';
import DadJokes from './routes/DadJokes.svelte';
import Blog from './routes/Blog.svelte';
import Recipes from './routes/Recipes.svelte';
import NotFound from './routes/NotFound.svelte';

export default {
    '/': Home,
    '/zen/:id?': Zen,
    '/dadjokes/:id?': DadJokes,
    '/blog/:id?': Blog,
    '/recipes/:id?/:tab?': Recipes,
    // The catch-all route must always be last
    '*': NotFound
};
