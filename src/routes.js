import Home from './routes/Home.svelte';
import Zen from './routes/Zen.svelte';
import DadJokes from './routes/DadJokes.svelte';
import NotFound from './routes/NotFound.svelte';

export default {
    '/': Home,
    '/dadjokes/:id?': DadJokes,
    '/zen/:id?': Zen,
    // The catch-all route must always be last
    '*': NotFound
};
