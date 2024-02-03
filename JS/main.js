//scene property
const scene = new THREE.Scene();
const camera = new THREE.OrthographicCamera();
scene.add( camera );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( 800, 800 );
document.body.appendChild( renderer.domElement );

//camera postion property
camera.position.z = 10;

//Plane Geometry
const geometry = new THREE.PlaneGeometry( .4, .4); 
const material = new THREE.MeshBasicMaterial( { color: "purple" } ); 
const plane = new THREE.Mesh( geometry, material ); 
scene.add( plane );

//Variable property
xSpeed = 0.0053;
ySpeed = 0.0063;
leftBounces = 8;

plane.material.color.setRGB(Math.random(256), Math.random(256), Math.random(256));


//Scene animate
function animate() {
	requestAnimationFrame( animate );

	plane.position.x += xSpeed;
	plane.position.y += ySpeed;

	// Check for collisions with the edges
	if (Math.abs(plane.position.x) >= 0.83) {
   		xSpeed = -xSpeed + Math.random() * 0.0003 - 0.0001;
    	plane.material.color.setRGB(Math.random(256), Math.random(256), Math.random(256));
    	plane.scale.x *= 0.9;
    	leftBounces--;
		console.log ("Bounce Left" + leftBounces);
		
	}
	// If bounced 8 times, make it disappear
    else if (leftBounces <= 0) 
	{
		console.log ("Object Disappeared.")
        plane.visible = false;
		xSpeed = 0;
    }

// Check for collisions with the edges
    else if (Math.abs(plane.position.y) >= 0.83) {
	 	ySpeed = -ySpeed + Math.random() * 0.0003 - 0.0001; //bounces randomly
    	plane.material.color.setRGB(Math.random(256), Math.random(256), Math.random(256));
    	plane.scale.y *= 0.9;
    	leftBounces--;
		console.log ("Bounce Left" + leftBounces);
	}
	// If bounced 8 times, make it disappear
    else if (leftBounces <= 0)
	{
		console.log ("Object Disappeared.")
        plane.visible = false;
		ySpeed = 0;
    }

	renderer.render(scene, camera);
}

animate();