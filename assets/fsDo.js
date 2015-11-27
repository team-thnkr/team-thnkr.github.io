var container = document.getElementById('canvasContainer');
var renderer = new FSS.CanvasRenderer();
var scene = new FSS.Scene();
var light = new FSS.Light('#dcdcdc', '#64a4de');
var noSliceH = Math.ceil( container.offsetWidth / 25 );
var noSliceV = 1;
var geometry = new FSS.Plane( container.offsetWidth, container.offsetHeight, noSliceH, noSliceV );
var material = new FSS.Material('#FFFFFF', '#FFFFFF');
var mesh = new FSS.Mesh(geometry, material);
var now, start = Date.now();
console.log(noSliceH);
function initialise() {
  scene.add(mesh);
  scene.add(light);
  container.appendChild(renderer.element);
  window.addEventListener('resize', resize);
}
function resize() {
  renderer.setSize( container.offsetWidth, container.offsetHeight );
}
function animate() {
  now = Date.now() - start;
  light.setPosition(300*Math.sin(now*0.001), 200*Math.cos(now*0.0005), 20);
  renderer.render(scene);
  requestAnimationFrame(animate);
}
initialise();
resize();
animate();