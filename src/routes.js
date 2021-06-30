import WorkView from './views/WorkView.js';
import { Redirect } from 'react-router';

const routes = [
  {
    path: '/',
    exact: true,
    component: () => <Redirect to="/work" />
  },
  {
    path: '/work',
    exact: true,
    query: 'tags',
    search: 'tags',
    component: WorkView
  },
]

export default routes;