<script lang="ts">
  import type { Decoding, Loading } from '$src/lib';

  export let alt = '';
  export let loading: Loading = 'eager';
  export let decoding: Decoding = loading === 'lazy' ? 'async' : 'auto';
</script>

<img class="img" {...$$restProps} {alt} {loading} {decoding} />
