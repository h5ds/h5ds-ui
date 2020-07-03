import { dynamic } from '../../utils';

const Home = dynamic(import('./Home'));

const routes = [{ path: '/', exact: true, component: Home }];

export { routes };
