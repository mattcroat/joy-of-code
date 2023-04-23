<script lang="ts">
	import { ArrowNarrowRightIcon } from '@rgossiaux/svelte-heroicons/outline'

	import Newsletter from '$lib/ui/newsletter.svelte'
	import Posts from '$lib/ui/posts.svelte'
	import * as config from '$lib/site/config'

	export let data

	const { posts } = data
</script>

<svelte:head>
	<title>{config.siteTitle}</title>

	<meta content={config.siteDescription} name="description" />

	<meta content={config.siteTitle} property="og:title" />
	<meta content={config.siteImage} property="og:image" />
	<meta content={config.siteUrl} property="og:url" />
	<meta content={config.siteDescription} property="og:description" />
	<meta content={config.siteName} property="og:site_name" />

	<meta content={config.twitterHandle} name="twitter:creator" />
	<meta content="summary_large_image" name="twitter:card" />
	<meta content={config.siteTitle} name="twitter:title" />
	<meta content={config.siteDescription} name="twitter:description" />
	<meta content={config.siteImage} name="twitter:image" />
</svelte:head>

<main>
	<section class="hero">
		<div class="latest-post">
			<span class="kicker">Latest post</span>
			<h1 class="title">{posts[0].title}</h1>
			<p class="description">
				{posts[0].description}
			</p>
			<a class="continue-reading" href={posts[0].slug}>
				<span>Continue reading</span>
				<ArrowNarrowRightIcon width="24" height="24" aria-hidden="true" />
			</a>
		</div>

		<div class="divider" />

		<div class="newsletter">
			<h2>Subscribe for updates</h2>
			<Newsletter />
			<p>
				Subscribe to the <a href="/rss.xml" target="_blank">RSS feed</a>
				or
				<a href={config.twitter} target="_blank" rel="noreferrer">Twitter</a> instead.
			</p>
		</div>
	</section>

	<Posts {posts}>
		<h3 class="latest" slot="title">Latest</h3>
		<a slot="see-more" href="/archive">
			<span>See more posts</span>
			<ArrowNarrowRightIcon width="24" height="24" aria-hidden="true" />
		</a>
	</Posts>
</main>

<style>
	.hero {
		margin-top: var(--spacing-64);
		padding: var(--spacing-24);
		background: var(--clr-hero-bg);
		border-top: 1px solid var(--clr-menu-border);
		border-left: 1px solid var(--clr-menu-border);
		border-radius: var(--rounded-20);
		box-shadow: var(--shadow-sm);
	}

	.latest-post .kicker {
		font-weight: 500;
		color: var(--clr-hero-txt);
	}

	.latest-post .title {
		padding: var(--spacing-8) 0 var(--spacing-16) 0;
		color: var(--clr-primary);
	}

	.latest-post .description {
		color: var(--clr-hero-txt);
	}

	.latest-post .continue-reading {
		width: max-content;
		display: flex;
		align-items: center;
		margin-top: var(--spacing-32);
	}

	.latest-post a {
		display: flex;
		gap: var(--spacing-16);
	}

	.divider {
		border-bottom: 1px solid var(--clr-hero-divider-bg);
		margin: var(--spacing-32) 0;
	}

	.newsletter p {
		color: var(--clr-hero-txt);
	}

	.newsletter h2 {
		font-size: var(--font-24);
	}

	@media (min-width: 860px) {
		.hero {
			display: grid;
			grid-template-columns: repeat(12, [column-start] 1fr);
			column-gap: var(--spacing-24);
		}

		.latest-post {
			grid-column: column-start 2 / span 4;
		}

		.divider {
			grid-column: column-start 7 / span 1;
			justify-self: center;
			margin: 0;
			border-left: 1px solid var(--clr-hero-divider-bg);
			border-bottom: none;
		}

		.newsletter {
			display: grid;
			place-content: center;
			grid-auto-rows: min-content;
			grid-column: column-start 8 / span 4;
		}
	}
</style>
