const routes = {
  home: () => '/dashboard',
  dashboard: () => '/',
  books: (id) => `/books/${id}`,
  login: () => '/login',
  signup: () => '/signup'
};

export default routes;
