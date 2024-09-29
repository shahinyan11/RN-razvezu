import {useEffect, useState} from 'react';
import GetLocation from 'react-native-get-location';

const useGeolocation = () => {
  const [region, setRegion] = useState(null);

  useEffect(() => {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 60000,
    })
      .then(location => {
        const {latitude, longitude} = location;

        setRegion({
          latitude,
          longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        });
      })
      .catch(error => {
        setRegion(undefined);
        console.log('Error [useGeolocation]:', error);
      });
  }, []);

  return region;
};

export default useGeolocation;
