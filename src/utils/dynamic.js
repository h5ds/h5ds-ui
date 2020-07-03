import Loadable from 'react-loadable';
import React from 'react';

function Loading() {
  return <div>loading</div>;
}

export function dynamic(compPromise) {
  return Loadable({
    loader: () => {
      // await util.sleep(1000000);
      return compPromise;
    },
    loading: Loading
  });
}
