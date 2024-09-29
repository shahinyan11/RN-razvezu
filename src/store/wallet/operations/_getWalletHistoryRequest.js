import httpClient from '@httpClient';
import {WALLET_HISTORY} from '@constants/apiRoutes';
import {setTransactions} from '@store/wallet';
import {WALLET_HISTORY_MOK} from '../../../mokData';
import {PAGINATION} from '@constants/pagination';

export default (params, loadMore = false) =>
  async (dispatch, getState) => {
    try {
      const {transPagination, transactions} = getState().wallet;
      const {page, itemsPerPage} = loadMore ? transPagination : PAGINATION;

      const {data} = await httpClient.get(WALLET_HISTORY, {
        params: {
          ...params,
          options: {itemsPerPage, page},
        },
      });

      if (loadMore) {
        data.result.data = [...transactions, ...data.result.data];
      }

      dispatch(setTransactions(data.result));
    } catch (e) {
      dispatch(setTransactions(WALLET_HISTORY_MOK));

      console.log('_fetchWalletHistory', e.message);
    }
  };
