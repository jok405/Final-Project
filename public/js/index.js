var table = [

            
      "<div class='miniatura'><img src='https://pmcdeadline2.files.wordpress.com/2016/06/olivia_wilde-686-1.jpg?w=605'></div>",
      "<div class='miniatura'><img src='https://pmcdeadline2.files.wordpress.com/2016/06/olivia_wilde-686-1.jpg?w=605'></div>",
      "<div class='miniatura'><img src='https://pmcdeadline2.files.wordpress.com/2016/06/olivia_wilde-686-1.jpg?w=605'></div>",
      "<div class='miniatura'><img src='http://filmsplusmovies.com/wp-content/uploads/2012/10/kate-beckinsale_72433983330.jpg'></div>",
      "<div class='miniatura'><img src='http://filmsplusmovies.com/wp-content/uploads/2012/10/kate-beckinsale_72433983330.jpg'></div>",
      "<div class='miniatura'><img src='http://www.myfilmviews.com/wp-content/uploads/2012/12/scarlett_johansson.jpg'></div>",
      "<div class='miniatura'><img src='http://photos.imageevent.com/afap/wallpapers/stars/milakunisishot//mila-kunis------10.jpg'></div>",
      "<div class='miniatura'><img src='http://www.theprospect.net/wp-content/uploads/2014/04/Elizabeth-Banks-6.jpg'></div>",
      "<div class='miniatura'><img src='https://www.soisitanygood.com/wp-content/uploads/2017/08/charlize_theron.jpg'></div>",
      "<div class='miniatura'><img src='http://s3.amazonaws.com/digitaltrends-uploads-prod/2015/06/olivia-munn.jpg'></div>",
      "<div class='miniatura'><img src='https://i.pinimg.com/originals/58/25/87/5825872afe7db29c84a1e9e0af65e188.jpg'></div>",
      "<div class='miniatura'><img src='https://i.ytimg.com/vi/ScU4nI_O5F4/hqdefault.jpg'></div>",
      "<div class='miniatura'><img src='https://vignette.wikia.nocookie.net/community-sitcom/images/3/3b/Alison_Brie2.jpg/revision/latest?cb=20150715124209'></div>",
      "<div class='miniatura'><img src='https://vignette.wikia.nocookie.net/disney/images/b/b2/Olivia_Munn.jpg/revision/latest?cb=20150107032748'></div>",
      "<div class='miniatura'><img src='https://media.glamour.com/photos/5a6528e775a858361b40b096/master/w_644,c_limit/olivia-munn.jpg'></div>",
      "<div class='miniatura'><img src='https://i.ytimg.com/vi/FxvWkUsIZbE/hqdefault.jpg'></div>",
      "<div class='miniatura'><img src='https://articlebio.com/uploads/bio/2018/01/28/olivia-munn.jpg'></div>",
      "<div class='miniatura'><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Olivia_Munn_at_PaleyFest_2013.jpg/266px-Olivia_Munn_at_PaleyFest_2013.jpg'></div>",
         ];

 
table=table.concat(table);

table=table.concat(table);

/*table=table.concat(table);

table=table.concat(table); */


var camera, scene, renderer;
var controls;
var objects = [];
var targets = {
  table: [],
  sphere: [],
  helix: [],
  grid: []
};
init();
animate();

function init() {
				camera = new THREE.PerspectiveCamera( 30, window.innerWidth / window.innerHeight, 1, 10000 );
				camera.position.z = 3000;

				scene = new THREE.Scene();
  
  
  // table
  for (var i = 0; i < table.length; i += 1) {
    var element = document.createElement('div');
    element.className = 'element';
    element.style.backgroundColor = 'rgba(0,127,127,' + (Math.random() * 0.5 + 0.25) + ')';
    var number = document.createElement('div');
    number.className = 'number';
    number.textContent = (i / 5) + 1;
    element.appendChild(number);
    var symbol = document.createElement('div');
    symbol.className = 'symbol';
    symbol.textContent = " ";
    element.appendChild(symbol);
    var details = document.createElement('div');
    details.className = 'details';
    details.innerHTML = table[i];
    
    //details.innerHTML = table[i + 1] + '<br>' + table[i + 2];
    //details.innerHTML = '<img id="mini-personal-avatar" src="//gravatar.com/avatar/40fef7485ed67ab05fbc756242a64e09?s=80&amp;d=https://codepen.io/assets/avatars/user-avatar-80x80-94696e1c3870f64217a8040eedd4a1ed.png" width="44" height="44" class="user-avatar" alt="User Gravatar" data-dropdown="#user-dropdown">';
    
    element.appendChild(details);
    
    var object = new THREE.CSS3DObject(element);
    object.position.x = Math.random() * 4000 - 2000; 
    object.position.y = Math.random() * 4000 - 2000;
    object.position.z = Math.random() * 4000 - 2000;
    scene.add(object);
    objects.push(object);
    //
    var object = new THREE.Object3D();
   // object.position.x = ((i%5) * 14) - 1330;
   // object.position.y = -((i%5) * 1) + 990;
//    object.position.x = (table[i + 3] * 140) - 1330;
//    object.position.y = -(table[i + 4] * 180) + 990;

    targets.table.push(object);
  }
  // sphere
  var vector = new THREE.Vector3();
  for (var i = 0, l = objects.length; i < l; i++) {
    var phi = Math.acos(-1 + (2 * i) / l);
    var theta = Math.sqrt(l * Math.PI) * phi;
    var object = new THREE.Object3D();
    object.position.x = 800 * Math.cos(theta) * Math.sin(phi);
    object.position.y = 800 * Math.sin(theta) * Math.sin(phi);
    object.position.z = 800 * Math.cos(phi);
    vector.copy(object.position).multiplyScalar(2);
    object.lookAt(vector);
    targets.sphere.push(object);
  }
  // helix
  var vector = new THREE.Vector3();
  for (var i = 0, l = objects.length; i < l; i++) {
    var phi = i * 0.175 + Math.PI;
    var object = new THREE.Object3D();
    object.position.x = 900 * Math.sin(phi);
    object.position.y = -(i * 8) + 450;
    object.position.z = 900 * Math.cos(phi);
    vector.x = object.position.x * 2;
    vector.y = object.position.y;
    vector.z = object.position.z * 2;
    object.lookAt(vector);
    targets.helix.push(object);
  }
  // grid
  for (var i = 0; i < objects.length; i++) {
    var object = new THREE.Object3D();
    object.position.x = ((i % 5) * 400) - 800;
    object.position.y = (-(Math.floor(i / 5) % 5) * 400) + 800;
    object.position.z = (Math.floor(i / 25)) * 1000 - 2000;
    targets.grid.push(object);
  }
  //
  renderer = new THREE.CSS3DRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.domElement.style.position = 'absolute';
  document.getElementById('container').appendChild(renderer.domElement);
  //
  controls = new THREE.TrackballControls(camera, renderer.domElement);
  controls.rotateSpeed = 0.5;
  controls.minDistance = 500;
  controls.maxDistance = 6000;
  controls.addEventListener('change', render);
  
  var button = document.getElementById('table');
  button.addEventListener('click', function(event) {
    transform(targets.table, 2000);
  }, false);
  var button = document.getElementById('sphere');
  button.addEventListener('click', function(event) {
    transform(targets.sphere, 2000);
  }, false);
  var button = document.getElementById('helix');
  button.addEventListener('click', function(event) {
    transform(targets.helix, 2000);
  }, false);
  var button = document.getElementById('grid');
  button.addEventListener('click', function(event) {
    transform(targets.grid, 2000);
  }, false);
  transform(targets.sphere, 2000);
  //
  window.addEventListener('resize', onWindowResize, false);
}

function transform(targets, duration) {
  TWEEN.removeAll();
  for (var i = 0; i < objects.length; i++) {
    var object = objects[i];
    var target = targets[i];
    new TWEEN.Tween(object.position)
      .to({
        x: target.position.x,
        y: target.position.y,
        z: target.position.z
      }, Math.random() * duration + duration)
      .easing(TWEEN.Easing.Exponential.InOut)
      .start();
    new TWEEN.Tween(object.rotation)
      .to({
        x: target.rotation.x,
        y: target.rotation.y,
        z: target.rotation.z
      }, Math.random() * duration + duration)
      .easing(TWEEN.Easing.Exponential.InOut)
      .start();
  }
  new TWEEN.Tween(this)
    .to({}, duration * 2)
    .onUpdate(render)
    .start();
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  render();
}

function animate() {
  requestAnimationFrame(animate);
  TWEEN.update();
  controls.update();
}

function render() {
  renderer.render(scene, camera);
}