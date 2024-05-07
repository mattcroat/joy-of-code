<script>
	import * as config from '$lib/site/config'
</script>

<footer>
	<div class="categories">
		<p>Categories</p>
		<ul>
			{#each Object.entries(config.categories) as [slug, category]}
				<li>
					<a href="/categories/{slug}">{category}</a>
				</li>
			{/each}
		</ul>
	</div>

	<div class="follow">
		<p>Follow</p>
		<ul>
			<li>
				<a href="/newsletter">Newsletter</a>
			</li>
			<li>
				<a href="/rss.xml" target="_blank">RSS</a>
			</li>
			<li>
				<a href={config.youtube} target="_blank" rel="noreferrer">YouTube</a>
			</li>
			<li>
				<a href={config.twitter} target="_blank" rel="noreferrer">Twitter</a>
			</li>
			<li>
				<a href={config.github} target="_blank" rel="noreferrer">GitHub</a>
			</li>
		</ul>
	</div>

	<div class="other">
		<p>Other</p>
		<ul>
			<li><a href="/about">About</a></li>
			<li>
				<a href={config.uses} target="_blank" rel="noreferrer">Uses</a>
			</li>
		</ul>
	</div>
</footer>

<style>
	footer {
		--gap: var(--spacing-64);

		display: flex;
		flex-direction: column;
		gap: var(--gap);
		margin-block-start: var(--spacing-64);
		padding: var(--spacing-32);
		background-color: var(--clr-footer-bg);
		border-top: 1px solid var(--clr-menu-border);
		border-left: 1px solid var(--clr-menu-border);
		border-radius: var(--rounded-20) var(--rounded-20) 0px 0px;

		@media (width >= 600px) {
			--gap: var(--spacing-128);
			flex-direction: row;
		}

		& p {
			font-weight: 700;
		}

		& ul {
			width: max-content;
			display: grid;
			grid-template-rows: repeat(5, 1fr);
			grid-auto-flow: column;
			column-gap: var(--spacing-32);
			row-gap: var(--spacing-16);
			margin-top: var(--spacing-16);
		}

		& li a {
			font-weight: inherit;
			color: var(--clr-footer-txt);

			& a:hover {
				color: var(--clr-primary);
			}
		}
	}
</style>
