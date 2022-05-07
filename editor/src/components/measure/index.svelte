<script lang="ts">
  import type { RateAPIResponseType } from '$root/types'

  async function rate(): Promise<RateAPIResponseType> {
    const response = await fetch('/api/measure')
    const { limit } = await response.json()
    return limit
  }
</script>

<div class="rate">
  {#await rate()}
    <p>⏳️</p>
  {:then rate}
    <span>⭐️ {rate.used}/{rate.limit}</span>
    <span>⏳️ {rate.remainingMinutes}</span> min
  {:catch}
    <p>💩</p>
  {/await}
</div>

<style>
  .rate {
    --space: 10px;

    position: fixed;
    top: var(--space);
    right: var(--space);
    z-index: 1;

    padding: var(--spacing-16);
    background-color: hsl(220 20% 12%);
    border-radius: var(--rounded-20);
  }

  span {
    font-weight: 700;
  }
</style>
