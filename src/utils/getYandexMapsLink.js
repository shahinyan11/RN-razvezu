export default function getYandexMapsLink(locations) {
  let url = 'yandexmaps://maps.yandex.ru/?rtext=';

  locations?.forEach(({lat, lon}, index) => {
    if (index === 0) {
      url += `${lat},${lon}`;
      return;
    }

    url += `~${lat},${lon}`;
  });

  return url;
}
