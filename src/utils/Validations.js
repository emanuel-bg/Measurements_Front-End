/* eslint-disable no-useless-escape */
export function validateEmail(email) {
   const val = /^\S+@\S+\.\S+$/;
   return val.test(String(email).toLowerCase());
}
export function validatePassword(password) {
   // Definir los criterios de la contraseña
   var minLongitud = 5;
   var maxLongitud = 20;
   var tieneMayuscula = false;
   var tieneMinuscula = false;
   var tieneDigito = false;
   var tieneEspecial = false;
   var caracteresEspeciales = "$@$!%*?&";

   // Comprobar la longitud de la contraseña
   if (password.length < minLongitud || password.length > maxLongitud) {
      return false;
   }

   // Recorrer cada carácter de la contraseña
   for (var i = 0; i < password.length; i++) {
      var caracter = password[i];

      // Comprobar si es una letra mayúscula
      if (caracter >= "A" && caracter <= "Z") {
         tieneMayuscula = true;
      }

      // Comprobar si es una letra minúscula
      if (caracter >= "a" && caracter <= "z") {
         tieneMinuscula = true;
      }

      // Comprobar si es un dígito
      if (caracter >= "0" && caracter <= "9") {
         tieneDigito = true;
      }

      // Comprobar si es un carácter especial
      if (caracteresEspeciales.indexOf(caracter) !== -1) {
         tieneEspecial = true;
      }
   }
   return tieneMayuscula && tieneMinuscula && tieneDigito && tieneEspecial;
}

export function validateMeasureId(measureData) {
   // const val = /^\S+@\S+\.\S+$/;
   return false;
}
// export function validateMeasureId(measureData) {
//    const val = /^\S+@\S+\.\S+$/;
//    return val.test(String(email).toLowerCase());
// }
export function validateMeasureAmount(measureData) {
   return false;
}
export function validateMeasureDate(measureData) {
   return false;
}
export function validateMeasureMeasuredby(measureData) {
   return false;
}

export function validateMeasureUserId(measureData) {
   return false;
}
