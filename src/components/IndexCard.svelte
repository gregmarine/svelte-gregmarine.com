<script>
  import { fade } from 'svelte/transition';
</script>

<article class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink" in:fade|local>
  <div
    class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow"
  >
    <slot name="title">
      <span>No title</span>
    </slot>
    
    <slot name="content">
      <span>Content Unavailable</span>
    </slot>
  </div>
</article>