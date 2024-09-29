import GetLocation from 'react-native-get-location';

export default async function getUserLocation() {
  try {
    const res = await GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 60000,
    });

    return res;
  } catch (e) {
    return false;
  }
}
