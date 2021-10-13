<script>
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';

  let container;
  let intersecting = false;

  onMount(() => {
    if (typeof IntersectionObserver !== 'undefined') {
      const observer = new IntersectionObserver(entries => {
        console.log(entries[0].intersectionRatio);
        intersecting = entries[0].isIntersecting;
        if (intersecting) {
          container.classList.remove('intersect-observer-min-h');
          observer.unobserve(container);
        }
      },
      {
        threshold: 0.5
      });

      observer.observe(container);
      return () => observer.unobserve(container);
    }
  });
</script>

<div class="intersect-observer-min-h" bind:this={container}>
  {#if intersecting}
    <div in:fade|local>
      <slot></slot>
    </div>
  {/if}
</div>

<style>
  .intersect-observer-min-h {
    min-height: 500px;
  }
</style>