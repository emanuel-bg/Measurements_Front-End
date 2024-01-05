// TODO consider using a functional approach. It will be easier to maintain.
// explore array methods https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
export default function objectById(array, id) { // TODO add unit tests
   for (var i = 0; i < array.length; i++) {
      if (array[i].id === id) {
         var newObj = Object.assign({}, array[i]);
         return newObj;
      }
   }
}
