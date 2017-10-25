function generateFaces() {
	var numberOfFaces = 5;
	var theLeftSide = document.getElementById("leftSide");
	var theRightSide = document.getElementById("rightSide");
	for (i = 0; i < numberOfFaces; i++) {
		var this_img = document.createElement("img");
		this_img.src = "http://home.cse.ust.hk/~rossiter/mooc/matching_game/smile.png";
		this_img.style.top = Math.floor(Math.random() * 400);
		this_img.style.left = Math.floor(Math.random() * 400);
		theLeftSide.appendChild(this_img);
	}
	var leftSideImage = theLeftSide.cloneNode(true);
	leftSideImage.removeChild(leftSideImage.lastChild);
	theRightSide.appendChild(leftSideImage);
}