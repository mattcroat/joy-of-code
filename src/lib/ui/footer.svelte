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
			<li><a href="/uses">Uses</a></li>
		</ul>
	</div>

	<figure>
		<blockquote>
			<span>
				“Talent is a pursued interest. Anything that you're willing to practice,
				you can do.”
			</span>
		</blockquote>
		<figcaption>— Bob Ross</figcaption>
	</figure>
</footer>

<style>
	footer {
		display: grid;
		grid-template-columns: repeat(12, [column-start] 1fr);
		column-gap: var(--spacing-24);
		row-gap: var(--spacing-32);
		margin-top: var(--spacing-64);
		padding: var(--spacing-32);
		background-color: var(--clr-footer-bg);
		border-top: 1px solid var(--clr-menu-border);
		border-left: 1px solid var(--clr-menu-border);
		border-radius: var(--rounded-20) var(--rounded-20) 0 0;
	}

	footer > * {
		grid-column: column-start 1 / span 12;
	}

	footer p {
		font-weight: 700;
	}

	footer ul {
		width: max-content;
		display: grid;
		grid-template-rows: repeat(5, 1fr);
		grid-auto-flow: column;
		column-gap: var(--spacing-32);
		row-gap: var(--spacing-16);
		margin-top: var(--spacing-16);
	}

	footer li a {
		font-weight: inherit;
		color: var(--clr-footer-txt);
	}

	footer li a:hover {
		color: var(--clr-primary);
	}

	footer figure {
		max-width: 400px;
		display: grid;
		align-items: center;
		justify-self: center;
	}

	footer blockquote {
		font-size: clamp(var(--font-24), 3vw, var(--font-32));
		font-family: var(--font-sans);
		color: var(--clr-card-txt);
		text-shadow: 2px 2px 10px hsl(0 0% 0% / 10%);
	}

	html[data-font='dyslexic'] footer blockquote {
		font-family: var(--font-dyslexic);
		font-size: var(--font-24);
		line-height: 32px;
	}

	footer figcaption {
		align-self: end;
	}

	@media (min-width: 860px) {
		footer figure {
			grid-column: column-start 9 / -1;
		}

		footer .categories {
			grid-column: column-start 1 / span 4;
		}

		footer .follow {
			grid-column: column-start 5 / span 2;
		}

		footer .other {
			grid-column: column-start 7 / span 2;
		}
	}

	@media (min-width: 1240px) {
		footer ul {
			width: auto;
			column-gap: 0;
		}
	}
</style>
