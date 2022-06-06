var imgArray = [
	'masks_and_a_bath.jpeg', 
	'yellow_phone.jpeg', 
	'couple_in_a_restaurant.jpeg', 
	'kid_with_a_fan_.jpeg', 
	'bear_costume.jpeg', 
	'guests_at_the_door.jpeg', 
	'couple_at_the_beach.jpeg', 
	'hands_metro.jpeg',
	'kids_rollerblading.jpeg',
	'bunny_costumes.jpeg',
	'drunk_in_the_snow.jpeg',
	'violin.jpeg',
	'man_in_a_diner.jpeg',
	'scattered_paper.jpeg',
	'following_footsteps.jpeg',
	'batman_and_spiderman.jpeg'
];

function imgRandom() {
	var rand = imgArray[Math.floor(Math.random() * imgArray.length)];
	var image = new Image();
	image.src = 'images/'+rand;
	document.getElementById("image").src = image.src;
	document.getElementById("image").alt = rand.replace('.jpeg', '');

	document.getElementById("form").action = "mailto:m.nikiforova@student.artez.nl?subject=" + rand.replace('.jpeg', '');
}