<script lang="ts">
	import { fade } from 'svelte/transition'
	import { MailIcon } from '@rgossiaux/svelte-heroicons/outline'

	let email = ''
	let error = ''
	let success = ''

	async function subscribe() {
		const response = await fetch('/api/subscribe', {
			method: 'post',
			body: JSON.stringify(email),
			headers: { 'Content-Type': 'application/json' },
		})
		const subscribe = await response.json()

		if (subscribe.error) {
			success = ''
			error = subscribe.error
		}

		if (subscribe.success) {
			error = ''
			success = subscribe.success
		}
	}
</script>

<form on:submit|preventDefault={subscribe}>
	<label for="email" class="sr-only">Enter your email</label>
	<input
		bind:value={email}
		type="email"
		id="email"
		name="email"
		placeholder="unix@chad.com"
	/>
	<button type="submit">
		<MailIcon width="24" height="24" aria-hidden="true" />
		<span>Subscribe</span>
	</button>
</form>

<div class="message">
	{#if error}
		<span in:fade class="error">{error}</span>
	{/if}

	{#if success}
		<span in:fade class="success">{success}</span>
	{/if}
</div>

<style>
	form {
		display: flex;
		max-width: 360px;
		height: 48px;
		margin: var(--spacing-16) 0;
		border-radius: var(--rounded-4);
		border: 1px solid var(--clr-input-border);
		box-shadow: var(--shadow-sm);
	}

	input {
		width: 100%;
		padding: var(--spacing-8) var(--spacing-16);
		background-color: var(--clr-input-bg);
		border-radius: var(--rounded-4) 0 0 var(--rounded-4);
		flex: 1;
	}

	input::placeholder {
		color: var(--clr-input-placeholder-txt);
	}

	button {
		padding: var(--spacing-8);
		color: var(--clr-input-txt);
		background-color: var(--clr-primary);
		font-weight: 700;
		border-radius: 0 var(--rounded-4) var(--rounded-4) 0;
	}

	button :global(svg) {
		display: none;
	}

	.message {
		margin-bottom: var(--spacing-16);
		font-weight: 700;
	}

	.message .error {
		color: hsl(9 100% 64%);
	}

	.message .success {
		color: var(--clr-primary);
	}

	@media (min-width: 860px) {
		button {
			display: flex;
			align-items: center;
			gap: var(--spacing-4);
		}

		button :global(svg) {
			display: block;
		}
	}
</style>
