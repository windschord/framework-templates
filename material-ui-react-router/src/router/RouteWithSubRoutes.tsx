import React, { Suspense } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IRoute } from './config';

const RouteWithSubRoutes = (route: IRoute) => (
  <Suspense fallback={route.fallback}>
    <Route
      path={route.path}
      render={(props) => (route.redirect ? <Redirect to={route.redirect} />
        : route.component && <route.component {...props} routes={route.routes} />)}
    />
  </Suspense>
);

export default RouteWithSubRoutes;
