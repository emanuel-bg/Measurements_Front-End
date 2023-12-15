import Login from "./Login"
import getMeasures from "./getMeasures"
import postMeasure from "./postMeasure"
import deleteMeasure from "./deleteMeasure"
import searchMeasures from "./searchMeasures"
import putMeasure from "./putMeasure"
import verifySession from "./verifySession"
import Logout from "./Logout"
const requests={
"Login":Login,
"Logout":Logout,
"getMeasures":getMeasures,
"postMeasure":postMeasure,
"putMeasure":putMeasure,
"deleteMeasure":deleteMeasure,
"search":searchMeasures,
"verifySession":verifySession
}

export default requests;









