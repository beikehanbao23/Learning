var center = [
  [-122.445600, 37.789508, 13],
  [-73.997291, 40.725438, 13],
  [2.294433, 48.858288, 14.5],
  [8.541147, 47.376333, 12]
][Math.floor(Math.random() * 4)];

// center =  [19.62997291, 41.725438, 7];
center =  [121.725438, 25, 12];
console.log(center);
var domain = 'https://maps.tilehosting.com';
domain = 'http://127.0.0.1';
var key = 'alS7XjesrAd6uvek9nRE';

if (mapboxgl.supported()) {
  var maps = {
    // 'klokantech-basic': domain + '/styles/basic/style.json?key=' + key,
    'klokantech-basic': 'style/style.json?key=' + key,
    'dark-matter': domain + '/styles/darkmatter/style.json?key=' + key,
    'positron': domain + '/styles/positron/style.json?key=' + key,
    'bright': domain + '/styles/bright/style.json?key=' + key
  };

  var activeId = 'klokantech-basic';
  var map = new mapboxgl.Map({
    attributionControl: false,
    container: 'map',
    style: maps[activeId],
    center: [center[0], center[1]],
    zoom: center[2]
  });

  var mapEl = document.getElementById('map');
  function switchMap(id) {
    mapEl.className = 'map';
    setTimeout(function() {
      activeId = id;
      map.setStyle(maps[activeId]);
      document.querySelector('#navbar-top').className = id;
      setTimeout(function() {
        mapEl.className = 'map active';
      }, 500);
    }, 400);
  }
} else {
  L.mapbox.map(
    'map',
    domain + '/styles/basic.json?key=' + key,
    {
      attributionControl: false
    }).setView([center[1], center[0]], center[2] + 1);
  document.querySelector('.map-switchers').style.display = 'none';
}

// document.getElementById('phone').addEventListener('click', function () {
//   if (this.className == 'open') {
//     this.className = '';
//   } else {
//     this.className = 'open';
//   }
// });
