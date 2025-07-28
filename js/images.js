let image_fullscreen;
document.addEventListener("DOMContentLoaded", () => {
	image_fullscreen = document.getElementById("image_fullscreen");

	image_fullscreen.addEventListener("click", hide_fullscreen_image);

	for (const curr_img of document.querySelectorAll(".gallery img")) {
		curr_img.addEventListener("click", () => {
			if (image_fullscreen.style.display === "none")
				show_fullscreen_image(curr_img.getAttribute("src"), curr_img.getAttribute("alt"));
			else
				hide_fullscreen_image();
		});
	}
});

const show_fullscreen_image = (source, alt_text) => {
	if (!source)
		return;

	image_fullscreen.style.display = "block";
	image_fullscreen.children[0].src = source;
	image_fullscreen.children[0].alt = alt_text;
}

const hide_fullscreen_image = () => {
	image_fullscreen.style.display = "none";
}

document.addEventListener("keyup", (e) => {
	if (e.key !== "Escape")
		return;

	if (image_fullscreen.style.display === "none")
		return;

	hide_fullscreen_image();
});
