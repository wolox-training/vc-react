const StorageAuth = {
  get isAuthenticated() {
    const session = localStorage.getItem('WoloxBooksApp_access_token');
    return session !== null;
  },
  authenticate(access_token, renew_id) {
    localStorage.setItem('WoloxBooksApp_access_token', access_token);
    localStorage.setItem('WoloxBooksApp_renew_id', renew_id);
  },
  logout() {
    localStorage.removeItem('WoloxBooksApp_access_token');
    localStorage.removeItem('WoloxBooksApp_renew_id');
  },
  getAccessToken() {
    return localStorage.getItem('WoloxBooksApp_access_token');
  }
}

export default StorageAuth;
