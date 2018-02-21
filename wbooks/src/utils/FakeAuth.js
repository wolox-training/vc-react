const fakeAuth = {
  get isAuthenticated() {
    const session = localStorage.getItem('WoloxBooksApp_access_token');
    return session !== null;
  },
  authenticate(access_token, renew_id, cb) {
    localStorage.setItem('WoloxBooksApp_access_token', access_token);
    localStorage.setItem('WoloxBooksApp_renew_id', renew_id);
    setTimeout(cb, 100) // fake async
  },
  signout(cb) {
    localStorage.removeItem('WoloxBooksApp_access_token');
    localStorage.removeItem('WoloxBooksApp_renew_id');
    setTimeout(cb, 100) // fake async
  },
  getAccessToken() {
    return localStorage.getItem('WoloxBooksApp_access_token');
  }
}

export default fakeAuth;
