import { dynamic } from '../../utils';

const Logs = dynamic(import('./Logs'));

const routes = [{ path: 'logs', exact: true, component: Logs }];

export { routes };
