import * as THREE from 'three'
import * as dat from 'lil-gui'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

import Cube from './Cube'

import './style.css'

const params = {
  color: 0xff0000,
}

const gui = new dat.GUI()

// Scene
const scene = new THREE.Scene()

const cube = Cube()

cube.init(scene)


// Sizes
let sizes = {
  width: window.innerWidth,
  height: window.innerHeight
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 10
scene.add(camera)


// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('canvas.webgl')
})

renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)

const controls = new OrbitControls(camera, renderer.domElement)
controls.enableDamping = true

window.addEventListener('resize', () => {
  sizes = {
    width: window.innerWidth,
    height: window.innerHeight
  }

  camera.aspect = sizes.width / sizes.height
  camera.updateProjectionMatrix()

  renderer.setSize(sizes.width, sizes.height)

  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

})

const tick = () => {
  requestAnimationFrame(tick)

  controls.update()

  renderer.render(scene, camera);

}

tick()