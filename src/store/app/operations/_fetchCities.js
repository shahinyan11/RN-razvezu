import httpClient from '@httpClient';
import {setCities} from '@store/app';
import {cityInfo} from '@constants/apiRoutes';

export default search => async (dispatch, getState) => {
  try {
    const {page, itemsPerPage} = getState().app.citiesPagination;

    const {data} = await httpClient.get(cityInfo, {
      params: {
        q: search,
        options: {itemsPerPage, page},
      },
    });

    dispatch(setCities(data.result));
  } catch (e) {
    console.log('fetchCities', e.message);
  }
};
