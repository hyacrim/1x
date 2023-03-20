// Initialisation de la scène, de la caméra et du rendu
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Génération des cubes
const cubes = [];
const cubeCount = 30;

for (let i = 0; i < cubeCount; i++) {
  // Taille aléatoire entre 0.1 et 1
  const size = Math.random() * 0.9 + 0.1;

  // Couleur aléatoire
  const color = new THREE.Color(Math.random(), Math.random(), Math.random());

  // Position aléatoire entre -10 et 10 sur les axes X, Y et Z
  const position = new THREE.Vector3(
    Math.random() * 20 - 10,
    Math.random() * 20 - 10,
    Math.random() * 20 - 10
  );

  // Forme aléatoire : cube, carré horizontal ou carré vertical
  const geometry = Math.random() < 0.33
    ? new THREE.BoxGeometry(size, size, size)
    : Math.random() < 0.5
      ? new THREE.PlaneGeometry(size, size)
      : new THREE.PlaneGeometry(size, size).rotateZ(Math.PI / 2);

  const material = new THREE.MeshBasicMaterial({ color });
  const cube = new THREE.Mesh(geometry, material);
  cube.position.copy(position);

  // Vitesse aléatoire entre -0.1 et 0.1 sur les axes X, Y et Z
  cube.velocity = new THREE.Vector3(
    Math.random() * 0.2 - 0.1,
    Math.random() * 0.2 - 0.1,
    Math.random() * 0.2 - 0.1
  );

  cubes.push(cube);
  scene.add(cube);
}

// Animation
function animate() {
  requestAnimationFrame(animate);

  cubes.forEach(cube => {
    cube.position.add(cube.velocity);
    if (cube.position.x < -10 || cube.position.x > 10) {
      cube.velocity.x *= -1;
    }
    if (cube.position.y < -10 || cube.position.y > 10) {
      cube.velocity.y *= -1;
    }
    if (cube.position.z < -10 || cube.position.z > 10) {
      cube.velocity.z *= -1;
    }
  });

  renderer.render(scene, camera);
}

camera.position.z = 15;
animate();


function aide(){
  
    document.getElementById("choix").textContent = 'Option "Aller vers choix" vous permet d\'entrer vos cotes'
    document.getElementById("commencer").textContent = 'Option "commencer directement" vous permet d\'entrer seulement le montant car la cote est deja definie'
}


