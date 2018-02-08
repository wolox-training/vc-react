const fakeAuth = {
  get isAuthenticated() {
    const session = localStorage.getItem('WBooksApp_user_session');
    return session !== null;
  },
  authenticate(session, password, cb) {
    localStorage.setItem('WBooksApp_user_session', session);
    localStorage.setItem('WBooksApp_user_password', password);
    setTimeout(cb, 100) // fake async
  },
  signout(cb) {
    localStorage.removeItem('WBooksApp_user_session');
    localStorage.removeItem('WBooksApp_user_password');
    setTimeout(cb, 100) // fake async
  }
}

export default fakeAuth;
