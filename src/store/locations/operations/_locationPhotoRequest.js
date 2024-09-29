import httpClient from '@httpClient';
import appendFormData from '@utils/appendFormData';
import {removeLoader, setLoader} from '@store/loader';
import {setLocationPhoto} from '@store/locations';
import {locationPhotoEndpoint} from '../endpoints';

export default params => async (dispatch, getState) => {
  const {endpoint, url} = locationPhotoEndpoint;
  dispatch(setLoader(endpoint));

  try {
    const {data} = await httpClient.post(url, appendFormData(params), {
      headers: {'Content-Type': 'multipart/form-data'},
    });

    const location = getState().locations.currentLocation;

    if (!location.photo) {
      dispatch(setLocationPhoto([data.result]));
      return;
    }

    if (!params.id) {
      dispatch(setLocationPhoto([...location.photo, data.result]));
      return;
    }

    const updatedPhotos = location.photo?.map(item =>
      item.id === params?.id ? data.result : item,
    );

    dispatch(setLocationPhoto(updatedPhotos));
  } catch (e) {
    console.log('_locationPhotoRequest', e);
  } finally {
    dispatch(removeLoader(endpoint));
  }
};
