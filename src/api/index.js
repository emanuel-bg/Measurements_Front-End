import login from "./login";
import getMeasures from "./getMeasures";
import postMeasure from "./postMeasure";
import deleteMeasure from "./deleteMeasure";
import searchMeasures from "./searchMeasures";
import putMeasure from "./putMeasure";
import verifySession from "./verifySession";
import logout from "./logout";
import getMeasure from "./getMeasure";

const requests = {
    login: login,
    logout: logout,
    getMeasures: getMeasures,
    getMeasure: getMeasure,
    postMeasure: postMeasure,
    putMeasure: putMeasure,
    deleteMeasure: deleteMeasure,
    search: searchMeasures,
    verifySession: verifySession,
};

export default requests;
