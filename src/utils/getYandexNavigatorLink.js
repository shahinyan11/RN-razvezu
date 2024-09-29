export default function getYandexNavigatorLink(locations) {
  let url = 'yandexnavi://build_route_on_map?';

  if (locations?.length === 1) {
    const {lat, lon} = locations[0];
    url += `lat_to=${lat}&lon_to=${lon}`;

    return url;
  }

  locations?.forEach(({lat, lon}, index) => {
    if (index === 0) {
      url += `lat_from=${lat}&lon_from=${lon}`;
      return;
    }

    if (index === locations.length - 1) {
      url += `&lat_to=${lat}&lon_to=${lon}`;
      return;
    }

    url += `&lat_via_${index}=${lat}&lon_via_${index}=${lon}`;
  });

  return url;
}
