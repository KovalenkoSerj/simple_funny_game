function clickHandler(e) { 
    console.log('Click! ' + e.pageX + " " + e.pageY)
}



const getRandomNumber = size => Math.floor(Math.random() * size);
var getDistance = function (event, target) {
	var diffX = event.offsetX - target.x;
	var diffY = event.offsetY - target.y;
	return Math.sqrt((diffX * diffX) + (diffY * diffY));
};



const getDistanceHint = distance => {
	console.log(distance)
	if (distance < 10) {
		return "You will burn!!";
	} else if (distance < 20) {
		return "!";
	} else if (distance < 40) {
		return "Hot!";
	} else if (distance < 80) {
		return "Warm";
	} else if (distance < 160) {
		return "Cold";
	} else if (distance < 320) {
		return "Very cold";
	} else if (distance < 640){	
		return "Very-very cold"		
	}	else {
		return "You will freeze!";
	}
	// switch( true ){
	// 	case distance < 10: 
	// 		return "you will burn"
	// 	case distance < 20:
	// 		return "Very HOT!!!"
	// 	case distance < 40:
	// 		return "Hot!";
	// 	case distance < 80:
	// 		return "Warm";
	// 	case distance < 160:
	// 		return "Cold";
	// 	case distance < 320:
	// 		return "Very cold";
	// 	case distance < 640:
	// 		return "Very-very cold"		
	// 	default:
	// 		return "You will freeze!";
	// }
};
let height = 600, width = 600, clicks = 1, maxClicks = 21;

const target = {
	x: getRandomNumber(width),
	y: getRandomNumber(height)
}

document.getElementById('map').addEventListener('click', (event) => {
	clicks++ 
	let distance = getDistance(event, target);
	document.getElementById('remaining_clicks').innerText = 'Remain ' + (maxClicks - clicks) 
	let distanceHint = getDistanceHint(distance);
	document.getElementById('distance').innerText = distanceHint;
	
	if(distance < 8 ) alert("Trasure was found !!! " + clicks + "click")
	if((maxClicks - clicks) === 0){
		alert('Nice try, but you lose! Try again')
		window.location.reload()
	}
});