import * as THREE from 'three'

const Cube = () => {

  const cubeGeometry = new THREE.BoxGeometry(1, 1, 1)

  const size = 3;
  const space = 1.05;

  const green = '#419D78'
  const blue = '#4056F4'
  const red = '#F45B69'
  const orange = '#FFBA08'
  const yellow = 'yellow'
  const white = 'white'

  const materials = [orange, blue, green, yellow, white, red].map((color => new THREE.MeshBasicMaterial({ color })))
  q
  const material = new THREE.MultiMaterial(materials);

  const init = (scene) => {
    for (let x = 0; x < size; x++) {
      for (let y = 0; y < size; y++) {
        for (let z = 0; z < size; z++) {
          const cube = new THREE.Mesh(cubeGeometry, material)

          cube.position.setX((x - 1) * space)
          cube.position.setY((y - 1) * space)
          cube.position.setZ((z - 1) * space)

          scene.add(cube);
        }
      }
    }
  }

  return { init }
}

export default Cube