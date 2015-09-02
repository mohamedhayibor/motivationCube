var xAngle = 0, yAngle = 0;

document.addEventListener('keydown', function(e) {
	switch (e.keyCode) {
		case 37:  // left
			yAngle -= 90;
			break;

		case 38:  // up
			xAngle += 90;
			break;

		case 39: // right
			yAngle += 90;
			break;

		case 40: // down
			xAngle -= 90;
			break;
	};

	document.getElementById('cube').style.webkitTransform = "rotateX("+xAngle+"deg) rotateY("+yAngle+"deg)";
}, false);

/* This project was implemented by following the documentation
on the 3D cube by Paul Rhayes (thank you for your conscise explanation).

http://paulrhayes.com/2009-07/animated-css3-cube-interface-using-3d-transforms/

Liked implementing it and learned a lot */