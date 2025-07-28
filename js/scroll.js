let loaded = false;
const OFFSET_PADDING = 0;
const HORIZONTAL_SCROLL = 200;

const update_scroll = () => {
	if (!loaded)
		return;

	let offset = -1;
	for (const anchor of scrollbar_icons.children) {
		const elem = document.querySelector(anchor.getAttribute("href"));
		if (elem == undefined) {
			continue;
		}
		if (elem.getBoundingClientRect().top < window.innerHeight / 2 - OFFSET_PADDING)
			offset += 1;
	}
	scrollbar.style.setProperty("--offset", Math.max(0, offset));
}
const load_scroll = () => {
	loaded = true;
	update_scroll()
}
window.addEventListener("load", load_scroll);
window.addEventListener("resize", update_scroll);
window.addEventListener("scroll", update_scroll);

document.addEventListener("DOMContentLoaded", () => {
	for (const gallery of document.getElementsByClassName("gallery")) {
		gallery.addEventListener("wheel", (e) => {
			if (e.deltaY === 0) return;
			e.preventDefault();
			gallery.scrollLeft += (e.deltaY < 0 ? -1 : 1) * HORIZONTAL_SCROLL;
		})
	}
});
