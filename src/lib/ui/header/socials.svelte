<script lang="ts">
	import { RSS, X, YouTube } from '$lib/icons'
	import * as config from '$lib/site/config'
</script>

<div class="socials">
	<a href={config.youtube} target="_blank" rel="noreferrer">
		<YouTube width={24} height={24} aria-label="YouTube" />
	</a>
	<a href={config.twitter} target="_blank" rel="noreferrer">
		<X width={24} height={24} aria-label="Twitter" />
	</a>
	<a href="/rss.xml" target="_blank">
		<RSS width={24} height={24} aria-label="RSS feed" />
	</a>
</div>

<style>
	.socials {
		display: none;

		@media (width >= 768px) {
			display: flex;
			align-items: center;
			gap: var(--spacing-16);
		}
	}
</style>
