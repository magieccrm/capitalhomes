import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const usePreviousLocation = () => {
  const location = useLocation();
  const previousLocationRef = useRef();

  useEffect(() => {
    previousLocationRef.current = location;
  }, [location]);

  return previousLocationRef.current;
};

export default usePreviousLocation;
