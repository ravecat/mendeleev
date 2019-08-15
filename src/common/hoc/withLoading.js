import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function withLoading({ selector, action, paramSelector }) {
  return function Wrapper(WrappedComponent) {
    return function WithLoadingComponent(props) {
      const loading = useSelector(selector);
      const params = useSelector(paramSelector);
      const dispatch = useDispatch();

      useEffect(() => {
        dispatch(action(params));
      }, []);

      return loading ? <p>Fetching data...</p> : <WrappedComponent {...props} />;
    };
  };
}
export default withLoading;
