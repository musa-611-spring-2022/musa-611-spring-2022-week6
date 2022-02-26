/* ==========

Introduction: In this part you will use campus data from OpenDataPhilly. You can
see your progress visually by running a local web server in the week's
repository folder:

  npx http-server --port 8000

And navigating to http://localhost:8000/exercise/part2-layer-functions/

========== */

const map = L.map('map').setView([40.00, -75.14], 12);
L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.{ext}', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 18,
  ext: 'png',
}).addTo(map);

const campusColors = {
  // Arts
  'Academy of Vocal Arts': '#fd8d3c',
  'Art Institute of Philadelphia': '#f16913',
  'Curtis Institute of Music': '#dadaeb',
  'Hussian College School of Art': '#bcbddc',
  'JNA School of Culinary Arts': '#9e9ac8',
  'Moore College of Art and Design': '#807dba',
  'Pennsylvania Academy of Fine Arts': '#6a51a3',
  'The Restaurant School at Walnut Hill College': '#54278f',
  'University of the Arts': '#3f007d',

  // Colleges & Seminaries
  'Chestnut Hill College': '#7f2704',
  'Community College of Philadelphia': '#bdd7e7',
  'Lutheran Theological Seminary': '#6baed6',
  'Peirce College': '#3182bd',
  'Philadelphia College of Osteopathic Medicine': '#08519c',

  // Universities
  'Drexel University': '#d94801',
  'Holy Family University': '#a63603',
  'La Salle University': '#fcbba1',
  'Philadelphia University': '#fc9272',
  "Saint Joseph's University": '#fb6a4a',
  'Strayer University': '#ef3b2c',
  'Temple University': '#cb181d',
  'Temple University Medical': '#66c2a4',
  'Thomas Jefferson University': '#238b45',
  'University of Pennsylvania':  '#67000d',
  'University of the Sciences in Philadelphia': '#00441b',
};

/* ==========

## Step 1:

Use the `fetch` function to retrieve GeoJSON data from the URL for Philadelphia
Universities and Colleges. You can find the data at:

  https://opendataphilly.org/dataset/philadelphia-universities-and-colleges

The callback for your fetch should add the data to the map using a GeoJSON
Layer.

## Step 2:

Above we have a JavaScript object called `campusColors` that associates a color
code with each college or university. Style each building so that the color of
the buildings corresponds to the color assigned to the university. Use the
Leaflet documentation to determine the appropriate structure of your style
function:

- https://leafletjs.com/reference.html#geojson-style
- https://leafletjs.com/reference.html#path-option

## Step 3:

Add a tooltip to each feature that shows the name of the university, and the
address of the building. Refer to the Leaflet documentation to see how to
dynamically set the content of a tooltip.

- https://leafletjs.com/reference.html#layer-bindtooltip

========== */

let url = 'https://opendata.arcgis.com/api/v3/datasets/8ad76bc179cf44bd9b1c23d6f66f57d1_0/downloads/data?format=geojson&spatialRefId=4326'

let universities;
fetch(url)
  .then(response => response.json())
  .then(data => {
    universities = L.geoJSON(data)
      .bindTooltip(layer => layer.feature.properties.NAME)
      .addTo(map);
  })
