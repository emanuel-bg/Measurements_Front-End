// TODO since this file is meant to be used as summary of all the requests
// available, consider renaming it to index.js it will looks more like js
// conventions.
import Login from "./Login"
import getMeasures from "./getMeasures"
import postMeasure from "./postMeasure"
import deleteMeasure from "./deleteMeasure"
import searchMeasures from "./searchMeasures"
import putMeasure from "./putMeasure"
import verifySession from "./verifySession"
import Logout from "./Logout"
import getMeasure from "./getMeasure"

// TODO consider using camelCase login instead of Login
const requests = {
   "Login": Login,
   "Logout": Logout,
   "getMeasures": getMeasures,
   "getMeasure": getMeasure,
   "postMeasure": postMeasure,
   "putMeasure": putMeasure,
   "deleteMeasure": deleteMeasure,
   "search": searchMeasures,
   "verifySession": verifySession
};

export default requests;









