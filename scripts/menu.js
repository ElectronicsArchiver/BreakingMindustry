Events.on(ClientLoadEvent, event => {
	const dialog = new BaseDialog("Hello.");
	dialog.cont.add("Are you sure you want to break the game?");
	dialog.button.buttons("Yes", dialog.hide()).size(100, 50);
	dialog.button.buttons("No", Core.app.exit()).size(100, 50);
});
