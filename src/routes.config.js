import { dynamic } from './utils';
import { routes as homeRoutes } from './pages/home';
import { routes as logsRoutes } from './pages/logs';
import { routes as uiRoutes } from './pages/ui-page';

const IndexLayout = dynamic(import('./layout/index-layout'));

const routes = [
  {
    path: '/',
    component: IndexLayout,
    meta: { auth: true },
    routes: [...uiRoutes, ...logsRoutes, ...homeRoutes]
  }
];

export { routes };
