import React from 'react';

export const IdPrefixContext = React.createContext(null);

export function useIdPrefix() {
  return React.useContext(IdPrefixContext);
}
