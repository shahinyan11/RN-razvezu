import {useDispatch} from 'react-redux';
import {useState} from 'react';

const useDispatchRequest = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const requestDispatch = action => {
    setLoading(true);

    dispatch(action).then(() => setLoading(false));
  };

  return {
    dispatch: requestDispatch,
    loading,
  };
};

export default useDispatchRequest;
