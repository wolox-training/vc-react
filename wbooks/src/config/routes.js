const routes = {
  home: () => '/dashboard',
  dashboard: () => '/',
  books: (id) => `/books/${id}`,
  login: () => '/login'
};

export default routes;
