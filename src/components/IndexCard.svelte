<script>
  import IntersectionObserver from "./IntersectionObserver.svelte";
</script>

<article class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
  <IntersectionObserver>
    <div
      class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow"
    >
      <slot name="title">
        <span>No title</span>
      </slot>

      <slot name="content">
        <span>Content Unavailable</span>
      </slot>

      <slot></slot>
    </div>
  </IntersectionObserver>
</article>