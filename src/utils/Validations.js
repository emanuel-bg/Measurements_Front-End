/* eslint-disable no-useless-escape */
export function validateEmail(email) {
  const val =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return val.test(String(email).toLowerCase());
}
export function validatePassword(password) {
  const pass = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{5,}$/;
//   Contiene al menos una letra mayúscula.
//   Contiene al menos una letra minúscula.
//   Contiene al menos un dígito numérico.
//   Contiene al menos un carácter especial de la lista #?!@$%^&*-.
//   Tiene una longitud mínima de 5 caracteres.
  return pass.test(password);
}
