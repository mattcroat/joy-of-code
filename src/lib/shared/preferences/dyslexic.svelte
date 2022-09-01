<script lang="ts">
	import { browser } from '$app/environment'
	import { Switch, SwitchGroup } from '@rgossiaux/svelte-headlessui'

	let enabled = false

	if (browser) {
		localStorage.font ? (enabled = true) : (enabled = false)
	}

	function handleChange() {
		const htmlElement = document.documentElement
		enabled = !enabled

		if (enabled) {
			localStorage.font = 'dyslexic'
			htmlElement.dataset.font = 'dyslexic'
		}

		if (!enabled) {
			localStorage.removeItem('font')
			delete htmlElement.dataset.font
		}
	}
</script>

<div class="dyslexia">
	<span>Use font for dyslexia</span>

	<SwitchGroup>
		<div class="switch-container">
			<Switch
				checked={enabled}
				on:change={handleChange}
				class={enabled ? 'switch switch-enabled' : 'switch switch-disabled'}
			>
				<span
					class="toggle"
					class:toggle-on={enabled}
					class:toggle-off={!enabled}
				/>
			</Switch>
		</div>
	</SwitchGroup>
</div>

<style>
	.switch-container {
		--switch-width: 6.8rem;
		--switch-height: 3.6rem;
		--toggle-width: 3.4rem;
		--toggle-height: var(--toggle-width);
		--toggle-off: 0.1rem;
		--toggle-on: calc(
			var(--switch-width) - (var(--toggle-width) + var(--toggle-off))
		);
		display: flex;
		align-items: center;
		gap: var(--spacing-16);
	}

	.switch-container :global(.switch) {
		width: var(--switch-width);
		height: var(--switch-height);
		position: relative;
		display: inline-flex;
		align-items: center;
		border-radius: 9999px;
		transition-property: color, background-color, border-color,
			text-decoration-color, fill, stroke;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transition-duration: 150ms;
	}

	.switch-container :global(.switch-enabled) {
		background-color: var(--clr-switch-on-bg);
	}

	.switch-container :global(.switch-disabled) {
		background-color: var(--clr-switch-off-bg);
	}

	.toggle {
		width: var(--toggle-width);
		height: var(--toggle-height);
		display: inline-block;
		background-color: var(--clr-primary);
		border-radius: 9999px;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transition-duration: 150ms;
		transition-property: transform;
	}

	.toggle-on {
		transform: translateX(var(--toggle-on));
	}

	.toggle-off {
		transform: translateX(var(--toggle-off));
	}
</style>
