export const validateEmail = (email) => {
  return email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
}

export const validatePassword = (password) => {
  return password.length > 7 && password.length < 53
}
