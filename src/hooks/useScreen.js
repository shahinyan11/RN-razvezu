import {useEffect} from 'react';
import {USER_STATUS} from '@constants/user';
import {navigate} from '@navigation/RootNavigation';
import {userInfoRequest} from '@store/user/operations';
import {useDispatch, useSelector} from 'react-redux';
import {selectUserStatus} from '@store/user/selectors';

const useScreen = () => {
  const dispatch = useDispatch();
  const status = useSelector(selectUserStatus);

  useEffect(() => {
    let interval;

    switch (status) {
      case USER_STATUS.TEXT_DOCS_IN_VERIFICATION:
      case USER_STATUS.PHOTO_DOCS_IN_VERIFICATION:
        interval = setInterval(() => {
          dispatch(userInfoRequest());
        }, 2000);

        navigate('Information');
        break;
      case USER_STATUS.TEXT_DOCS_REJECTED:
      case USER_STATUS.TEXT_DOCS_PASSED:
      case USER_STATUS.PHOTO_DOCS_REJECTED:
      case USER_STATUS.PHOTO_DOCS_PASSED:
        navigate('Information');
        break;

      default:
        break;
    }

    return () => clearInterval(interval);
  }, [status]);
};

export default useScreen;
