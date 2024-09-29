import getCoordsOneMeterAway from '@utils/getCoordsOneMeterAway';

const get2gisLink = locations => {
  let url = 'dgis://2gis.ru';

  locations?.forEach(({lat, lon}, index) => {
    if (index === 0) {
      url += `/directions/points/${lon},${lat}`;
      return;
    }

    url = getCoordsOneMeterAway(lat, lon, url);
  });

  return url;
};

export default get2gisLink;
