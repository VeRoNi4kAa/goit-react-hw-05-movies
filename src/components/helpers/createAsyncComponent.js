import { lazy } from 'react';

export const createAsyncComponent = componentName => {
  return lazy(() => {
    return import(`../components/${componentName}/${componentName}`).then(
      module => {
        return {
          ...module,
          default: module[componentName],
        };
      }
    );
  });
};

export const createAsyncDefaultComponent = componentName => {
  return lazy(() => {
    return import(`../components/${componentName}/${componentName}`);
  });
};
