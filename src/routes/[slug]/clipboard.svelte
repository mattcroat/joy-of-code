<script lang="ts">
	import { onMount } from 'svelte'

	onMount(() => {
		const copyBtnElement = document.querySelectorAll('.copy')

		function copyToClipboard(event: Event) {
			const buttonElement = event.currentTarget as HTMLButtonElement
			const codeTitleElement = buttonElement.parentElement
			const codeElement = codeTitleElement.nextElementSibling
			navigator.clipboard.writeText(codeElement.textContent)
		}

		copyBtnElement.forEach((btn) => {
			btn.innerHTML = `
			<span class="sr-only">Copy</span>
			<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" color="#000000">
			  <path d="M19.4 20H9.6a.6.6 0 01-.6-.6V9.6a.6.6 0 01.6-.6h9.8a.6.6 0 01.6.6v9.8a.6.6 0 01-.6.6z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
			  <path d="M15 9V4.6a.6.6 0 00-.6-.6H4.6a.6.6 0 00-.6.6v9.8a.6.6 0 00.6.6H9" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
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
