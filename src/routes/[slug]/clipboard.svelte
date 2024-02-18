<script lang="ts">
	import { onMount } from 'svelte'

	onMount(() => {
		const copyBtnElement = document.querySelectorAll('.copy')

		function copyToClipboard(event: Event) {
			const buttonElement = event.currentTarget as HTMLButtonElement
			const codeTitleElement = buttonElement.parentElement
			const text = codeTitleElement?.nextElementSibling?.textContent
			text && navigator.clipboard.writeText(text)
		}

		copyBtnElement.forEach((btn) => {
			btn.innerHTML = `
        <span class="sr-only">Copy</span>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="lucide lucide-copy"
				>
					<rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
					<path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
				</svg>
      `
			btn.addEventListener('click', copyToClipboard)
		})

		return () =>
			copyBtnElement.forEach((btn) =>
				btn.removeEventListener('click', copyToClipboard)
			)
	})
</script>
