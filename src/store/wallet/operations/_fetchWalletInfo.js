import httpClient from '@httpClient';
import {setWalletInfo} from '@store/wallet';
import {WALLET_INFO} from '@constants/apiRoutes';
import {WALLET_INFO_MOK} from '../../../mokData';

export default () => async dispatch => {
  try {
    const {data} = await httpClient.get(WALLET_INFO);

    dispatch(setWalletInfo(data.result));
  } catch (e) {
    dispatch(setWalletInfo(WALLET_INFO_MOK));

    console.log('_fetchWalletInfo', e.message);
  }
};
