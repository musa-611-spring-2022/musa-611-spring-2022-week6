/* global describe, beforeAll, it, page, expect */
/* global p1, secondAndThirdResults, allResults */

beforeAll(async () => {
  await page.goto('http://localhost:8000/exercise/part1-geojson/');
  await page.waitForNetworkIdle();
});

describe('Problem #1', () => {
  it('should create a new marker at Meyerson Hall', async () => {
    expect(await page.evaluate(() => p1 === undefined))
      .toBe(false);

    expect(await page.evaluate(() => Object.values(p1._layers)[0] instanceof L.Marker))
      .toBe(true);

    expect(await page.evaluate(() => Object.values(p1._layers)[0]._latlng.lat))
      .toBeCloseTo(39.952207, 6);

    expect(await page.evaluate(() => Object.values(p1._layers)[0]._latlng.lng))
      .toBeCloseTo(-75.192653, 6);
  });
});

describe('Problem #2', () => {
  it('should create a new marker at Van Pelt Library', async () => {
    expect(await page.evaluate(() => p2 === undefined))
      .toBe(false);

    expect(await page.evaluate(() => Object.values(p2._layers)[0] instanceof L.Marker))
      .toBe(true);

    expect(await page.evaluate(() => Object.values(p2._layers)[0]._latlng.lat))
      .toBeCloseTo(39.952600, 6);

    expect(await page.evaluate(() => Object.values(p2._layers)[0]._latlng.lng))
      .toBeCloseTo(-75.193475, 6);
  });

  it('should create a new marker with a tooltip that says Van Pelt Library', async () => {
    expect(await page.evaluate(() => p2 === undefined))
      .toBe(false);

    expect(await page.evaluate(() => p2.getTooltip()._content(Object.values(p2._layers)[0])))
      .toBe('Van Pelt Library');
  });
});

describe('Problem #3', () => {
  it('should create a new polygon', async () => {
    expect(await page.evaluate(() => p3 === undefined))
      .toBe(false);

    expect(await page.evaluate(() => Object.values(p3._layers)[0] instanceof L.Polygon))
      .toBe(true);
  });

  it('should create a new polygon that encompases Van Pelt and Meyerson', async () => {
    expect(await page.evaluate(() => p3 === undefined))
      .toBe(false);

    expect(await page.evaluate(() => Object.values(p3._layers)[0]._bounds._southWest.lat))
      .toBeLessThan(39.952207);
    expect(await page.evaluate(() => Object.values(p3._layers)[0]._bounds._southWest.lat))
      .toBeLessThan(39.952600);
    expect(await page.evaluate(() => Object.values(p3._layers)[0]._bounds._northEast.lat))
      .toBeGreaterThan(39.952207);
    expect(await page.evaluate(() => Object.values(p3._layers)[0]._bounds._northEast.lat))
      .toBeGreaterThan(39.952600);

    expect(await page.evaluate(() => Object.values(p3._layers)[0]._bounds._southWest.lng))
      .toBeLessThan(-75.192653);
    expect(await page.evaluate(() => Object.values(p3._layers)[0]._bounds._southWest.lng))
      .toBeLessThan(-75.193475);
    expect(await page.evaluate(() => Object.values(p3._layers)[0]._bounds._northEast.lng))
      .toBeGreaterThan(-75.192653);
    expect(await page.evaluate(() => Object.values(p3._layers)[0]._bounds._northEast.lng))
      .toBeGreaterThan(-75.193475);
  });

  it('should create a new polygon with a tooltip that says University of Pennsylvania', async () => {
    expect(await page.evaluate(() => p3 === undefined))
      .toBe(false);

    expect(await page.evaluate(() => p3.getTooltip()._content(Object.values(p3._layers)[0])))
      .toBe('University of Pennsylvania');
  });
});

describe('Problem #4', () => {
  it('should set the color of the campus polygon to the map_color attribute', async () => {
    expect(await page.evaluate(() => p3 === undefined))
      .toBe(false);

    expect(await page.evaluate(() => Object.values(p3._layers)[0].options.color))
      .toBe('#44cc44');
  });

  it('should update the campusStyle function to use a feature\'s map_color attribute', async () => {
    expect(await page.evaluate(() => campusStyle({properties: {map_color: 'ochre'}}).color))
      .toBe('ochre');
  });
});
