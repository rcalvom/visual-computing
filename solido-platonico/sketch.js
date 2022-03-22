function setup() {
  createCanvas(1280, 720, WEBGL);
  angleMode(DEGREES);
}

function draw() {
  background("black");
  ambientLight(60);
  let locX = mouseX - width / 2;
  let locY = mouseY - height / 2;
  pointLight(255, 255, 255, locX, locY, 50);
  specularMaterial(250);
  shininess(50);
  
  // Tetraedro
  translate(0, 0, 0);
  push();
  rotateZ(frameCount * 1);
  rotateX(frameCount * 1);
  rotateY(frameCount * 1);
  tetrahedron(70);
  pop();
}

function tetrahedron(s) {
  let p1 = createVector(-1, 1, 1).mult(s)
  let p2 = createVector(1, -1, 1).mult(s)
  let p3 = createVector(1, 1, -1).mult(s)
  let p4 = createVector(-1, -1, -1).mult(s)
  beginShape();
  vertex(p1.x, p1.y, p1.z);
  vertex(p2.x, p2.y, p2.z);
  vertex(p3.x, p3.y, p3.z);
  endShape(CLOSE);
  beginShape();
  vertex(p2.x, p2.y, p2.z);
  vertex(p3.x, p3.y, p3.z);
  vertex(p4.x, p4.y, p4.z);
  endShape(CLOSE);
  beginShape();
  vertex(p3.x, p3.y, p3.z);
  vertex(p4.x, p4.y, p4.z);
  vertex(p1.x, p1.y, p1.z);
  endShape(CLOSE);
  beginShape();
  vertex(p4.x, p4.y, p4.z);
  vertex(p1.x, p1.y, p1.z);
  vertex(p2.x, p2.y, p2.z);
  endShape(CLOSE);
}