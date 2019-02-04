// Admin State //
const state = {
  admin: null,
  isLoggedIn: !!localStorage.getItem('token'),
};

export default state;
