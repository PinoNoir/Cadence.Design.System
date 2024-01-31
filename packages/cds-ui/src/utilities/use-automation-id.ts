// use-automation-id.ts
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { canUseDOM } from './environment';
import setupGetInstanceId from './setup-get-instance-id';
import { useIdPrefix } from './use-id-prefix';

const getAutomationId = setupGetInstanceId();
const useIsomorphicLayoutEffect = canUseDOM ? useLayoutEffect : useEffect;

let serverHandoffCompleted = false;

export function useAutomationId(prefix = 'automation') {
  const _prefix = useIdPrefix();

  const [autoId, setAutoId] = useState(() => {
    if (serverHandoffCompleted) {
      return `${_prefix ? `${_prefix}-` : ''}${prefix}-${getAutomationId()}`;
    }
    return null;
  });

  useIsomorphicLayoutEffect(() => {
    if (autoId === null) {
      setAutoId(`${_prefix ? `${_prefix}-` : ''}${prefix}-${getAutomationId()}`);
    }
  }, [getAutomationId]);

  useEffect(() => {
    if (serverHandoffCompleted === false) {
      serverHandoffCompleted = true;
    }
  }, []);

  if (typeof React['useId'] === 'function') {
    const id = nativeReactUseId(_prefix, prefix);
    return id;
  }

  return autoId;
}

function nativeReactUseId(_prefix, prefix) {
  const getId = React['useId']();
  const id = `${_prefix ? `${_prefix}-` : ''}${prefix}-${getId}`;
  return id;
}

export function useFallbackAutomationId(autoId) {
  const fallback = useAutomationId();
  return autoId ?? fallback;
}
