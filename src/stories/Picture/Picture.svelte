<script lang="ts">
  import type { ImgMeta } from '$src/lib';
  import Img from '../Img/Img.svelte';

  export let meta: ImgMeta;
  export let media = '';
  export let sizes = '';
  export let width = '';
  export let height = '';

  const {
    sources,
    img: { src, w, h }
  } = meta;

  const quality = 2;
  // const quality = __QUALITY__
</script>

<picture class="picture">
  {#each Object.entries(sources) as [type, srcset]}
    <source type="image/{type}" {media} {sizes} {srcset} />
  {/each}
  <Img
    {...$$restProps}
    {src}
    width={width || Math.floor(w / quality)}
    height={height || Math.floor(h / quality)}
  />
</picture>
