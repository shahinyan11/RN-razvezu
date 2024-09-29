import httpClient from '@httpClient';
import {WALLET_WITHDRAWAL} from '@constants/apiRoutes';
import {reduceBalance} from '@store/wallet';
import {goBack} from '@navigation/RootNavigation';

export default params => async dispatch => {
  try {
    await httpClient.post(WALLET_WITHDRAWAL, params);

    dispatch(reduceBalance(params.amount));
    goBack();
  } catch (e) {
    console.log('_withdrawalRequest', e.message);
  }
};
