
let x_position = 198
let y_position = 117
let x_direction = 'left'
let y_direction = 'down'
let speed = .0000000000000000000000000001
let diameter = 75


function setup(){

createCanvas(1580,770, WEBGL)
}


function draw(){

background(20)


 	strokeWeight(x_position/y_position)
	stroke(90, y_position/3.6, 98)

// Shadow Function



	scale(x_position/y_position)

	rotateZ(frameCount * -x_position/90000)
	shearX(-56)
	shearY(-y_position)
	fill(x_position/89)
	ellipsoid(x_position/60 , y_position-x_position, y_position)


	  	rotateZ(frameCount * (-x_position/y_position)/-1000);

	fill(27)
	arc(15, x_position, x_position - y_position, 90, 40, 270)
	torus(x_position, y_position/x_position, 89, 8)

	fill(45)
	box(150 , x_position, 90, 900) 

	rotateY(frameCount * (y_position/x_position)/-1000);
  	rotateZ(frameCount * (x_position/y_position)/-1000);

  		translate(x_position, y_position)
	shearX(x_position/y_position)
	shearY(-y_position)

	fill(90)
	cone(y_position, x_position/y_position)
	


// 2D World

	// ellipse(x_position, y_position, diameter, diameter)

	let n = ['right', 'left']
	let m = ['up', 'down']
	let z = random(n)
	let v = random(m)

	if(x_direction == 'right'){

			x_position += speed
	}

	if(x_direction == 'left'){

		x_position -= speed
	}

	if(y_direction == "up"){
		y_position -= speed
	}

	if(y_direction == "down"){
		y_position += speed
	}


	if(x_position >= width - diameter/9){
		x_direction = 'left'
		y_direction = v

	}

	if(x_position <= 0 + diameter/9){
		x_direction = 'right'
		y_direction = v
	}

	if(y_position >= height - diameter/9){
		y_direction = 'up'
		x_direction = z

	}

	if(y_position <= 0 + diameter/9){
		y_direction = 'down'
		x_direction = z

	}

	let u = ['wow', 'nice', 'is', 'so', 'great', 'to', 'meet', 'you', 'boi', 'i', 'wonder', 'brian', 'will', 'actually', 'read', 'all',' of', 'this',
	'if', 'he', 'did', 'that', 'would', 'be', 'pretty','crazy', 'lol', 'haha','jk','this','is', 'a', 'banksy']

	let t = random(u)
	if(t == 'did'){
		x_direction = z
		y_direction = v
		x_position = random(0, (width)-(diameter/(x_position)))
		y_position = random(0, (height) - (diameter/(y_position)))
	}

	push()
		noFill()
		strokeWeight(1)
		stroke(1)
		rect(0, 0, width, height)
	pop()

}


function mouseClicked(){

	print(int(mouseX), int(mouseY))
}
