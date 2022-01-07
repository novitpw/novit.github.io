for (const ele of document.getElementsByClassName("sm-button")) {
	const link = ele.attributes["data-link"];

	if (link) {
		ele.onclick = () => {
			window.open(link.value, "_blank");
		};
	}
}
