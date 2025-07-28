document.addEventListener("DOMContentLoaded", () => {
	for (const color_picker of document.querySelectorAll(".colors div")) {
		color_picker.addEventListener("click", () => {
			navigator.clipboard.writeText(color_picker.getAttribute("title"));
		});
	}
});
