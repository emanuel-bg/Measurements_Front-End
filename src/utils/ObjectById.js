export default function objectById(array, id) {
    for (var i = 0; i < array.length; i++) {
       if (array[i].id === id) {
          var newObj = Object.assign({}, array[i]);
          return newObj;
       }
    }
 }