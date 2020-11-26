// original https://medium.com/@michael.kutateladze/react-router-with-a-single-config-file-61777f306b4f

import React from 'react';
import { Switch } from 'react-router';
import { IRoute } from './config';
import RouteWithSubRoutes from './RouteWithSubRoutes';

interface IProps {
  routes: IRoute[];
}

const Router: React.FC<IProps> = ({ routes }) => <Switch>{routes.map((route: IRoute) => <RouteWithSubRoutes key={route.path} {...route} />)}</Switch>;

export default Router;
