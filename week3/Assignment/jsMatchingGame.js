function generateFaces() {
	var numberOfFaces = 5;
	var theLeftSide = document.getElementById("leftSide");
	for (i = 0; i < numberOfFaces; i++) {
		var this_img = document.createElement("img");
		this_img.src = "http://home.cse.ust.hk/~rossiter/mooc/matching_game/smile.png";
		this_img.style.top = Math.floor(Math.random() * 400);
		this_img.style.left = Math.floor(Math.random() * 400);
		//var left_side = document.getElementById("leftSide");
		theLeftSide.appendChild(this_img);
	}
}