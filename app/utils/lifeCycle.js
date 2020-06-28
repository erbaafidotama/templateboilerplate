import { useEffect, useRef } from 'react';

export const componentDidMount = handler => useEffect(() => handler(), []);

export const componentDidUpdate = (handler, deps) => {
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;

      return;
    }

    return handler();
  }, deps);
};
