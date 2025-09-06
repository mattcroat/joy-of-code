<script lang="ts">
	type Props = {
		id: string
		title: string
	}

	let { id, title }: Props = $props()
	console.log({ id, title })
</script>

<div>
	<lite-youtube videoid={id} playlabel={title}></lite-youtube>
</div>
