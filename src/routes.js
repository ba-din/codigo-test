import { Redirect } from 'react-router';
import KiwiView from './views/KiwiView';
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
    query: 'tags',
    search: 'tags',
    component: WorkView
  },
  {
    path: '/work/kiwi',
    exact: true,
    query: 'tags',
    component: KiwiView
  },
]

export default routes;