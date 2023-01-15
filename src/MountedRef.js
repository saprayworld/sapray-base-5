import React from 'react';

export function useIsMountedRef() {
  const isMountedRef = React.useRef(null);
  React.useEffect(() => {
    // console.log("REF Mounted")
    isMountedRef.current = true;
    return () => isMountedRef.current = false;
  });
  return isMountedRef;
}