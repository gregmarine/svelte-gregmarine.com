<script>
  import { fade } from "svelte/transition";
  import { link } from "svelte-spa-router";
  import { scrollto } from "svelte-scrollto";

  import {
    pageTitle,
    collectionName,
    documentName,
    zen,
    dadjokes,
    blog,
    recipes,
  } from "../stores/stores.js";

  pageTitle.set("");
  collectionName.set("");
  documentName.set("");
</script>

<div in:fade|local>
  <!--Hero-->
  <div class="hero min-h-screen">
    <div class="flex-col hero-content lg:flex-row-reverse">
      <img
        alt="Greg Marine headshot"
        class="max-w-sm mask mask-squircle"
        src="/img/hero.webp"
      />
      <div>
        <h1 class="mb-5 text-5xl font-bold">Hello there! I'm Greg!</h1>
        <p class="mb-5">
          Zen Technologist 🧘‍♂️ Teller of Dad Jokes 🤣 Motivating a Mentally
          Healthier World 🙌
        </p>
        <button class="btn btn-primary" use:scrollto={"#zen"}
          >Get to know me</button
        >
      </div>
    </div>
  </div>

  <div class="divider">Ooohuuummm...</div> 

  <!--Zen-->
  <section id="zen" class="py-8">
    <div class="container max-w-5xl mx-auto m-8">
      <a href="/zen" class="w-full no-underline hover:no-underline" use:link>
        <h1 class="w-full my-2 text-5xl font-bold leading-tight text-center">
          Zen
        </h1>
      </a>

      <div class="w-full mb-4">
        <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t" />
      </div>

      <h2 class="w-full my-2 text-2xl font-bold leading-tight text-center">
        Postive Motivation for a Troubled World
      </h2>

      <div class="hero">
        <div class="flex-col hero-content lg:flex-row-reverse">
          <img
            alt="Desktop Zen Garden with mini Torii Gate"
            class="max-w-sm mask mask-hexagon-2"
            src="/collections/zen/image-01.webp"
          />
          <div>
            <h3 class="mb-5 text-3xl font-bold">The Path to Balance</h3>
            <p class="mb-5">
              Most days I begin my day by building a fresh and unique Zen garden
              design. I conclude my day by resetting the Zen garden to clear my
              mind. Weekdays, I feature my Zen garden on social media along with
              an inspirational quote or motivational statement.
            </p>
          </div>
        </div>
      </div>

      <div class="hero">
        <div class="flex-col hero-content lg:flex-row">
          <img
            alt="Desktop Zen Garden with mini tree"
            class="max-w-sm mask mask-circle"
            src="/collections/zen/image-02.webp"
          />
          <div>
            <h3 class="mb-5 text-3xl font-bold">Connect with the Moment</h3>
            <p class="mb-5">
              My desktop Zen garden often features items I have collected on my
              life's journey. For example, this dish with a tree is a reminder
              of a wonderful trip I took to the Walt Disney World Resort in
              Central Florida.
            </p>
          </div>
        </div>
      </div>

      <div class="w-full mb-4">
        <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t" />
      </div>

      <h2 class="w-full my-2 text-2xl font-bold leading-tight text-center">
        My Latest Zen Writings
      </h2>

      <div class="container mx-auto flex flex-wrap pt-4 pb-12">
        {#each $zen.slice(0, 3) as doc}
          <div class="flex md:w-1/2 lg:w-1/3 p-2" in:fade|local>
            <div class="card bordered shadow-lg image-full">
              <div class="card-body">
                <h2 class="card-title">{doc.title}</h2>
                <p>{doc.text}</p>
                <div class="card-actions">
                  <a class="btn btn-primary" href="/zen/{doc.id}" use:link
                    >Read More</a
                  >
                </div>
              </div>
              <figure>
                <img
                  alt={doc.title}
                  src="/collections/zen/{doc.id}/image.webp"
                />
              </figure>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <div class="divider">...but wait! There's more!</div> 

  <!--Dad Jokes-->
  <section id="dadjokes" class="py-8">
    <div class="container max-w-5xl mx-auto m-8">
      <a href="/dadjokes" class="w-full no-underline hover:no-underline" use:link>
        <h1 class="w-full my-2 text-5xl font-bold leading-tight text-center">
          Dad Jokes
        </h1>
      </a>
      <div class="w-full mb-4">
        <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t" />
      </div>
      <h2 class="w-full my-2 text-2xl font-bold leading-tight text-center">
        Currated List of Eye Rolling Humor
      </h2>

      <div class="hero">
        <div class="flex-col hero-content lg:flex-row-reverse">
          <img
            alt="Father and son holding hands looking at a sunset"
            class="max-w-sm mask mask-squircle"
            src="/collections/dadjokes/image-01.webp"
          />
          <div>
            <h3 class="mb-5 text-3xl font-bold">Like Father Like Son</h3>
            <p class="mb-5">
              I grew up hearing dad jokes all the time. And my father would tell
              me some great ones! When I became a father, I carried on the
              tradition of telling dad jokes to my son. In fact, that was my
              motivation for being a father 😏
            </p>
          </div>
        </div>
      </div>

      <div class="hero">
        <div class="flex-col hero-content lg:flex-row">
          <img
            alt="My son, Malachi Marine"
            class="max-w-sm mask mask-heart"
            src="/collections/dadjokes/image-02.webp"
          />
          <div>
            <h3 class="mb-5 text-3xl font-bold">Proud to be a Dad</h3>
            <p class="mb-5">
              In all seriousness, though, I am quite proud to be a dad and very
              proud of the man my son is becoming. Now that he is rolling his
              eyes at my jokes, I share them with the world!
            </p>
          </div>
        </div>
      </div>

      <div class="w-full mb-4">
        <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t" />
      </div>

      <h2 class="w-full my-2 text-2xl font-bold leading-tight text-center">
        The Latest Dad Jokes with Greg Marine
      </h2>

      <div class="container mx-auto flex flex-wrap pt-4 pb-12">
        {#each $dadjokes.slice(0, 3) as doc}
          <div class="flex md:w-1/2 lg:w-1/3 p-2" in:fade|local>
            <div class="card bordered shadow-lg image-full">
              <div class="card-body">
                <h2 class="card-title">{doc.title}</h2>
                <p class="w-full text-xl md:text-lg px-6 py-6">
                  {doc.setup}
                </p>
                <p class="w-full text-2xl md:text-lg px-6 py-6">
                  {doc.punchline}
                </p>
                <div class="card-actions">
                  <a class="btn btn-primary" href="/dadjokes/{doc.id}" use:link
                    >Watch Video</a
                  >
                </div>
              </div>
              <figure>
                <img alt={doc.title} src="/collections/dadjokes/image-01.webp" />
              </figure>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <div class="divider">Still here? Enjoy reading?</div> 

  <!--Blog-->
  <section id="blog" class="py-8">
    <div class="container max-w-5xl mx-auto m-8">
      <a href="/blog" class="w-full no-underline hover:no-underline" use:link>
        <h1 class="w-full my-2 text-5xl font-bold leading-tight text-center">
          Blog
        </h1>
      </a>
      <div class="w-full mb-4">
        <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t" />
      </div>
      <h2 class="w-full my-2 text-2xl font-bold leading-tight text-center">
        The Latest in the Collection of My Musings
      </h2>

      <div class="container mx-auto flex flex-wrap pt-4 pb-12">
        {#each $blog.slice(0, 3) as doc}
          <div class="flex md:w-1/2 lg:w-1/3 p-2" in:fade|local>
            <div class="card bordered shadow-lg">
              <figure class="px-10 pt-10">
                <img class="object-cover h-96 md:h-48 w-full rounded-lg" alt={doc.title} src="/collections/blog/{doc.id}/image.webp" />
              </figure>
              <div class="card-body">
                <h2 class="card-title">{doc.title}</h2>
                <p class="sm:text-sm md:text-xs">{doc.text}</p>
                <div class="card-actions">
                  <a class="btn btn-primary" href="/blog/{doc.id}" use:link>Read More</a>
                </div>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <div class="divider">Before you leave 👇👇👇 😋 Some Yum!</div> 

  <!--Recipes-->
  <section id="recipes" class="py-8">
    <div class="container max-w-5xl mx-auto m-8">
      <a href="/recipes" class="w-full no-underline hover:no-underline" use:link>
        <h1 class="w-full my-2 text-5xl font-bold leading-tight text-center">
          Recipes
        </h1>
      </a>
      <div class="w-full mb-4">
        <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t" />
      </div>
      <h2 class="w-full my-2 text-2xl font-bold leading-tight text-center">
        Food I Love to Make
      </h2>

      <div class="container mx-auto flex flex-wrap pt-4 pb-12">
        {#each $recipes.slice(0, 3) as doc}
          <div class="flex md:w-1/2 lg:w-1/3 p-2" in:fade|local>
            <div class="card bordered shadow-lg">
              <figure class="px-10 pt-10">
                <img class="object-cover h-96 md:h-48 w-full rounded-lg" alt={doc.title} src="/collections/recipes/{doc.id}/image.webp" />
              </figure>
              <div class="card-body">
                <h2 class="card-title">{doc.title}</h2>
                <p class="sm:text-sm md:text-xs">{doc.text}</p>
                <div class="card-actions">
                  <a class="btn btn-primary" href="/recipes/{doc.id}" use:link>Show Recipe</a>
                </div>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>
</div>
