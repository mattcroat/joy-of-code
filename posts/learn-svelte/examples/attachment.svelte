<div class="container">
	<div
		class="box"
		{@attach (box) => {
			window.gsap.to(box, { rotation: 360, x: 200, duration: 2 })
		}}
	></div>
</div>

<style>
	.box {
		width: 100px;
		height: 100px;
		background-color: orangered;
		border-radius: 1rem;
	}
</style>
