import WorkView from './views/WorkView.js';

const routes = [
  // {
  //   path: '/',
  //   exact: true,
  //   component: () => <Redirect to="/work" />
  // },
  {
    path: '/work',
    exact: true,
    query: 'tags',
    search: '?tags=',
    component: WorkView
  },
]

export default routes;