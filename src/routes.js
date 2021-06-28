import { Redirect } from 'react-router-dom';
import WorkView from './views/WorkView.js';

const routes = [
  {
    path: '/',
    exact: true,
    component: () => <Redirect to="/work" />
  },
  {
    path: '/work',
    exact: true,
    component: WorkView
  },
]

export default routes;