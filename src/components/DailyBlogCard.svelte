<script>
    export let Title = '';
    export let url = '';
</script>
<div class="container mx-auto flex px-5 pb-4 items-center justify-center flex-col">
    <img
        style="width: 80%;"
        class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded image"
        alt="hero"
        src="src\images\pexels-pixabay-2156.jpg"
    />
    <div class="middle">
        <div style="font-size: xx-large;" class="text">
            <a href={url}>{Title}</a>
        </div>
    </div>
</div>
<style>
	.image {
		opacity: 1;
		transition: 0.5s ease;
		backface-visibility: hidden;
		height: 40em;
		width: 70em;
	}
	.middle {
		transition: 0.5s ease;
		opacity: 0;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		-ms-transform: translate(-50%, -50%);
		text-align: center;
	}
	.container:hover .image {
		opacity: 0.3;
	}
	.container:hover .middle {
		opacity: 1;
	}
	.text {
		border-radius: 25px;
		font-weight: bold;
		color: rgb(29, 29, 29);
		font-size: 16px;
		padding: 16px 32px;
	}
</style>