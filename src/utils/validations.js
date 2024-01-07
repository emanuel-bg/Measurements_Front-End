// TODO consider moving each helper to its own file

/* eslint-disable no-useless-escape */
export function validateEmail(email) {  // TODO add unit tests
   const val = /^\S+@\S+\.\S+$/; // TODO add link where this regex was taken
   return val.test(String(email).toLowerCase());
}
export function validate(measureData) {
   let errors = {};
   if (!validateMeasureAmount(measureData.amount.toString())) {
      errors.amount = "Invalid measure amount";
      //Only numbers available
   }
   if (!measureData.calendarDate) {
      errors.date = "Invalid date";
      //Only numbers available
   }
   return errors;
}

export function validatePassword(password) { // TODO add unit tests
   // Definir los criterios de la contraseña # TODO use English only for comments
   var minLongitud = 5; // TODO use const or let. Do not use var
   var maxLongitud = 20;
   var tieneMayuscula = false;
   var tieneMinuscula = false;
   var tieneDigito = false;
   var tieneEspecial = false;
   var characteresEspeciales = "$@$!%*?&"; // TODO use English only

   // Comprobar la longitud de la contraseña
   if (password.length < minLongitud || password.length > maxLongitud) {
      return true;
   }

   // Recorrer cada carácter de la contraseña
   for (var i = 0; i < password.length; i++) {
      var character = password[i];

      // Comprobar si es una letra mayúscula
      if (character >= "A" && character <= "Z") {
         tieneMayuscula = true;
      }

      // Comprobar si es una letra minúscula
      if (character >= "a" && character <= "z") {
         tieneMinuscula = true;
      }

      // Comprobar si es un dígito
      if (character >= "0" && character <= "9") {
         tieneDigito = true;
      }

      // Comprobar si es un carácter especial
      if (characteresEspeciales.indexOf(character) !== -1) {
         tieneEspecial = true;
      }
   }

   return tieneMayuscula && tieneMinuscula && tieneDigito && tieneEspecial;
}

export function validateJustNumbers(n) {
   if (n.length === 0) { return false } // TODO multi-line if statements

   for (let i = 0; i < n.length; i++) {
      var character = n[i];
      if (isNaN(parseInt(character))) {
         return false;
      }
   }

   return true;
}

// TODO use complete word instead of `w`
function validateLetters(w) { // TODO add unit tests
   for (let i = 0; i < w.length; i++) {
      const character = w[i];
      // TODO do not use multi-line parameters in if statement, after adding
      // unit tests, refactor using an approach like:
      // const noEmpty = character !== ' ';
      // const betweenAZ = ....
      // if (noEmpty || betweenAZ)...
      if (
         character !== " " &&
         (character < "A" ||
            (character > "Z" && character < "a") ||
            character > "z")
      ) {
         return false;
      }
   }

   return true;
}

// TODO see feedaback from NoNull
function NoSpacesAndNull(w) {
   if (w.trim() === "" || w.includes(" ")) {
      return false;
   }
   return true;
}

// TODO use complete word instead of `w`
function NoNull(w) { // TODO add unit tests
   // TODO after adding unit tests, this can be simplified to just
   // return w.trim() === ''

   if (w.trim() === "") {
      return false;
   }

   return true;
}

export function validateMeasureAmount(amount) {
   return validateJustNumbers(amount) && NoSpacesAndNull(amount);
}

export function validateMeasureDate(date) {
   return NoSpacesAndNull(date);

}

export function validateMeasureMeasuredby(measuredby) {
   return validateLetters(measuredby) && NoNull(measuredby);
}

export function validateMeasureUserId(userId) {
   return validateJustNumbers(userId) && NoSpacesAndNull(userId);
}
