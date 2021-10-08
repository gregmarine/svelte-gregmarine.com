<script>
  import { onMount } from 'svelte';

  let intersecting = false;
  let container;

  onMount(() => {
    if (typeof IntersectionObserver !== 'undefined') {
      const observer = new IntersectionObserver(entries => {
        intersecting = entries[0].isIntersecting;
        if (intersecting) {
          observer.unobserve(container);
        }
      }, {
        rootMargin: '0px',
        threshold: 0.5
      });

      observer.observe(container);
      return () => observer.unobserve(container);
    }
  });
</script>