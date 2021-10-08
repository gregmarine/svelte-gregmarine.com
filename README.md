# TBD
 A Svelte/Ionic/Tailwind Simple CMS

# Your content

TBD is all about you and your content. No need to worry about comment moderation or how to get your site updated.
In fact, there isn't even a database for you to concern yourself with or much in terms of configuration. You use your
existing development workflow to publish content to your website powered by TBD. Use your favorite developer's code
editor, such as VS Code, and commit the content to GitHub. It couldn't be easier!

# Native Markdown Support

With TBD, you write your content in Markdown syntax; a similar syntax to what you would use for GitHub README content.
Markdown documents are organized in collections that represent common content. For example, you might use TBD for your
personal blog. You can keep your blog in a posts collection. When you are ready to publish a post, the build process
will automatically build your blog index to add the new post. TBD uses the power of Svelte, Ionic Framework and Tailwind
to render your content for mobile and desktop browsers.

# Mobile First

There are an increasing number of people who prefer to view content from their mobile devices. With this in mind, TBD
takes a mobile first approach to content management. There are screens of many shapes and sizes. Using Ionic's extensive component
library, you never need to concern yourself with that. They have already taken care of it for you! Using a mobile first
approach, TBD's use of Svelte, Ionic and Tailwind means your content will render appropriate for your audience's screen size,
browser, and operating system. Budget or premium phone, iOS or Android, Windows or Mac, your site will just work.

# Your Development Workflow

TBD uses GitHub to store the source of your site. GitHub Actions does the work of building and publishing your
content. Currently, GitHub and Azure Static Web Apps is supported.

---

# Svelte app with svelte-spa-router

This is a project template for [Svelte](https://svelte.dev) apps that includes [svelte-spa-router](https://github.com/italypaleale/svelte-spa-router) for client-side routing, and Rollup as bundler.

This template is based on the official template for Svelte: [sveltejs/template](https://github.com/sveltejs/template).

To create a new project based on this template using [degit](https://github.com/Rich-Harris/degit):

```bash
npx degit italypaleale/svelte-spa-router-template svelte-app
cd svelte-app
```

*Note that you will need to have [Node.js](https://nodejs.org) installed.*

## About svelte-spa-router

svelte-spa-router is a client-side router for Svelte 3 apps that leverages hash-based routing (i.e. stores the current view in the URL after the `#` symbol).

You can read more about the router, and the reasons why you might want to use hash-based routing (or not), in the [documentation](https://github.com/italypaleale/svelte-spa-router).

## Get started

Install the dependencies…

```bash
cd svelte-app
npm install
```

…then start [Rollup](https://rollupjs.org):

```bash
npm run dev
```

Navigate to [localhost:5000](http://localhost:5000). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.

You can add more routes by defining them in the `src/routes.js` file. More information can be found on the [documentation for svelte-spa-router](https://github.com/ItalyPaleAle/svelte-spa-router/blob/master/README.md).

By default, the server will only respond to requests from localhost. To allow connections from other computers, edit the `sirv` commands in package.json to include the option `--host 0.0.0.0`.

If you're using [Visual Studio Code](https://code.visualstudio.com/) we recommend installing the official extension [Svelte for VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode). If you are using other editors you may need to install a plugin in order to get syntax highlighting and intellisense.

## Building and running in production mode

To create an optimized version of the app:

```bash
npm run build
```

You can run the newly built app with `npm run start`. This uses [sirv](https://github.com/lukeed/sirv) too.