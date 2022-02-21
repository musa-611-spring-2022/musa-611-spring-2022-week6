/* ==========

Introduction: In this part you will modify a few GeoJSON files in order to add
data to your map. Follow the instructions in the steps below. You can see your
progress visually by running a local web server in the week's repository folder:

  npx http-server --port 8000

And navigating to http://localhost:8000/exercise/part1-geojson/

========== */

// The following line disables a couple of linter rules that would normally
// apply, but should not for this exercise. You can ignore it.

/* eslint no-use-before-define: "off", no-unused-vars: "off" */

const map = L.map('map').setView([39.95, -75.193], 15);
L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.{ext}', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 18,
  ext: 'png',
}).addTo(map);

/* ==========

Step 1: Open the file geojson-1-point-geometry.json and create a GeoJSON string
that represents the point at latitude 39.952207, longitude -75.192653. If you
are successful, you should see a new point on the map at Meyerson Hall that
displays "Meyerson Hall" when you hover over it.

========== */

let p1;
fetch('geojson-1-point-geometry.json')
  .then(resp => resp.json())
  .then(data => {
    p1 = L.geoJSON(data)
      .bindTooltip('Meyerson Hall')
      .addTo(map);
  });

/* ==========

Step 2: Open the file geojson-2-point-feature.json and create a GeoJSON string
that represents a feature at the point latitude 39.952600, longitude -75.193475.
Give this feature a property called "name" with the value "Van Pelt Library". If
you are successful, you should see a new point on the map at Van Pelt Library
that displays "Van Pelt Library" when you hover over it.

========== */

let p2;
fetch('geojson-2-point-feature.json')
  .then(resp => resp.json())
  .then(data => {
    p2 = L.geoJSON(data)
      .bindTooltip(layer => layer.feature.properties.name)
      .addTo(map);
  });

/* ==========

Step 3: Open the file geojson-3-polygon-feature.json and create a GeoJSON string
that represents a feature that traces the approximate border of the UPenn
campus. Give this feature a property called "name" with the value "University of
Pennsylvania", and a property called "map_color" with the value "#44cc44".

Hint: Use a tool like geojson.io to trace the shape of the campus.

========== */

let p3;
fetch('geojson-3-polygon-feature.json')
  .then(resp => resp.json())
  .then(data => {
    p3 = L.geoJSON(data, { style: campusStyle })
      .bindTooltip(layer => layer.feature.properties.name)
      .addTo(map);
  });

/* ==========

Step 4: The function below is being used in the code for problem 3 above to
determine how the GeoJSON layer will be styled. Change the function so that the
feature's stroke and fill color get set using the `map_color` attribute for the
campus.

The Leaflet Path options documentation will be useful:
https://leafletjs.com/reference.html#path-option

If you're not sure what argument is passed in to the function, try using setting
a breakpoint inside of the function, or using console.log to inspect it.

Also potentially useful:
- Documentation on the GeoJSON `style` option:
  https://leafletjs.com/reference.html#geojson-style
- The Leaflet tutorial on GeoJSON:
  https://leafletjs.com/examples/geojson/

========== */

let campusStyle = (feature) => ({
  weight: 5,
});
