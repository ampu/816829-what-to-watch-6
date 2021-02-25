import {useState, useRef, useCallback, useEffect} from 'react';

const useTimeoutActivator = (time) => {
  const [isActive, setActive] = useState(false);
  const activate = useCallback(() => setActive(true), [setActive]);
  const deactivate = useCallback(() => setActive(false), [setActive]);

  const timeout = useRef();

  const activateAfterTimeout = useCallback(() => {
    timeout.current = window.setTimeout(activate, time);
  }, [time, activate, timeout]);

  const deactivateWithTimeout = useCallback(() => {
    window.clearTimeout(timeout.current);
    deactivate();
  }, [deactivate, timeout]);

  useEffect(() => deactivateWithTimeout, [deactivateWithTimeout]);

  return [isActive, activateAfterTimeout, deactivateWithTimeout];
};

export {
  useTimeoutActivator,
};
