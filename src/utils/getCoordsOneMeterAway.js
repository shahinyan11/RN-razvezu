export default function getCoordsOneMeterAway(lat, lon, url) {
  const newPoint = `${lon},${lat}`;

  if (url.includes(newPoint)) {
    lat += 2 / 111000;
    lon += 2 / 111000;

    url = getCoordsOneMeterAway(lat, lon, url);
    return url;
  }

  url += `|${lon},${lat}`;

  return url;
}
