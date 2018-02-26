export const validateEmail = email => {
  return email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
}

export const validatePassword = password => {
  return (
    password.length > 7 && password.length < 53 &&
    (password.search(/\d/) !== -1 && password.search(/[a-zA-Z]/) !== -1)
  );
}

export const validateOnlyLetters = field => {
  return field.match(/^[A-Za-z\s]+$/);
}
