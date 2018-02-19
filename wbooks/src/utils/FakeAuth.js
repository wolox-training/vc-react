const fakeAuth = {
  get isAuthenticated() {
    const session = localStorage.getItem('WBooksApp_access_token');
    return session !== null;
  },
  authenticate(access_token, renew_id, cb) {
    localStorage.setItem('WBooksApp_access_token', access_token);
    localStorage.setItem('WBooksApp_renew_id', renew_id);
    setTimeout(cb, 100) // fake async
  },
  signout(cb) {
    localStorage.removeItem('WBooksApp_access_token');
    localStorage.removeItem('WBooksApp_renew_id');
    setTimeout(cb, 100) // fake async
  },
  getAccessToken() {
    return localStorage.getItem('WBooksApp_access_token');
  }
}

export default fakeAuth;
