import * as THREE from "three";

import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { Water } from "three/addons/objects/Water.js";
import { Sky } from "three/addons/objects/Sky.js";
import { useEffect } from "react";

export const WavesBG = () => {
  useEffect(() => {
    let container, mainContainer;
    let camera, scene, renderer;
    let controls, water, sun;

    init();
    animate();

    function init() {
      mainContainer = document.getElementById("root-section");
      container = document.getElementById("container");

      //

      renderer = new THREE.WebGLRenderer();
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(mainContainer.clientWidth, mainContainer.clientHeight);
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 0.5;
      if (container.childElementCount === 0) {
        container.appendChild(renderer.domElement);
      }
      //

      scene = new THREE.Scene();

      camera = new THREE.PerspectiveCamera(
        75,
        mainContainer.clientWidth / mainContainer.clientHeight,
        1,
        2000
      );
      camera.position.set(0, 270, 0);
      //  const helper = new THREE.CameraHelper(camera);
      //  scene.add(helper);

      //

      sun = new THREE.Vector3();

      // Water

      const waterGeometry = new THREE.PlaneGeometry(10000, 10000);

      water = new Water(waterGeometry, {
        textureWidth: 1024,
        textureHeight: 1024,
        waterNormals: new THREE.TextureLoader().load(
          "textures/waternormals.jpg",
          function (texture) {
            texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
          }
        ),
        sunDirection: new THREE.Vector3(),
        sunColor: 0xffffff,
        waterColor: new THREE.Color("#a8b4ff"),
        distortionScale: 3.7,
        fog: scene.fog !== undefined,
      });

      water.rotation.x = -Math.PI / 2;

      scene.add(water);

      // Skybox

      const sky = new Sky();
      sky.scale.setScalar(10000);
      scene.add(sky);

      const skyUniforms = sky.material.uniforms;

      skyUniforms["turbidity"].value = 10;
      skyUniforms["rayleigh"].value = 2;
      skyUniforms["mieCoefficient"].value = 0.005;
      skyUniforms["mieDirectionalG"].value = 0.8;

      const parameters = {
        elevation: 10,
        azimuth: 180,
      };

      const pmremGenerator = new THREE.PMREMGenerator(renderer);
      let renderTarget;

      function updateSun() {
        const phi = THREE.MathUtils.degToRad(90 - parameters.elevation);
        const theta = THREE.MathUtils.degToRad(parameters.azimuth);

        sun.setFromSphericalCoords(1, phi, theta);

        sky.material.uniforms["sunPosition"].value.copy(sun);
        water.material.uniforms["sunDirection"].value.copy(sun).normalize();

        if (renderTarget !== undefined) renderTarget.dispose();

        renderTarget = pmremGenerator.fromScene(sky);

        scene.environment = renderTarget.texture;
      }

      updateSun();

      //

      controls = new OrbitControls(camera, renderer.domElement);
      controls.maxPolarAngle = Math.PI * 0.495;
      controls.target.set(0, 50, 0);
      controls.minDistance = 40.0;
      controls.maxDistance = 200.0;
      controls.update();

      //

      window.addEventListener("resize", onWindowResize);
    }

    function onWindowResize() {
      camera.aspect = mainContainer.clientWidth / mainContainer.clientHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(mainContainer.clientWidth, mainContainer.clientHeight);
    }

    function animate() {
      requestAnimationFrame(animate);
      render();
    }

    function render() {
      water.material.uniforms["time"].value += 1.0 / 60.0;

      renderer.render(scene, camera);
    }

    // Cleanup on unmount, otherwise stuff will linger in GPU
  }, []);

  return <div id="container" className="absolute z-10 opacity-25"></div>;
};
