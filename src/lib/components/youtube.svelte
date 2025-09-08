<script lang="ts">
	type Props = {
		id: string
		title: string
	}

	let { id, title }: Props = $props()
</script>

<div>
	<lite-youtube videoid={id} playlabel={title}></lite-youtube>
</div>
