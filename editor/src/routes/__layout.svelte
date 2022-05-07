<script lang="ts">
  import { SvelteToast } from '@zerodevx/svelte-toast'

  import Measure from '$root/components/measure/index.svelte'
  import '$root/styles/global.css'
</script>

<Measure />
<SvelteToast options={{ duration: 2000, intro: { y: -100 } }} />
<slot />
