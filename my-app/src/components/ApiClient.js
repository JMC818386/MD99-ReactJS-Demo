import axios from "axios";
//import toast from 'react-hot-toast';
//import { phpSessGet, phpSessSet, phpSessLogout, phpSessIsLoggedIn } from './PhpSession.js'

// -----------------------------------------------------------------------------------------------

const BASE_URL1 = "https://jmc2.lakeshoresoftwareinc.com/";
const BASE_URL2 = "https://mydesign99.com/";
const BASE_URL3 = "https://3000-lakeshoreti-md99nodedem-pj405venfjw.ws-us115.gitpod.io/";       // Node domain
const BASE_URL4 = "https://8000-lakeshoreti-md99djangod-88ttvtc97s8.ws-us115.gitpod.io/";       // Django domain

// -----------------------------------------------------------------------------------------------

const buildURL1 = (route) => {
    return BASE_URL1 + route;
};
const buildURL2 = (route) => {
   return BASE_URL2 + route;
};
const buildURL3 = (route) => {
   return BASE_URL3 + route;
};
const buildURL4 = (route) => {
   return BASE_URL4 + route;
};

// -----------------------------------------------------------------------------------------------

const apiGetDefaultFromLSI = (callback) => {
   const fullURL = buildURL1 ("test/default/wedges1");
   
   simpleGet(fullURL, callback);
}

const apiGetDefaultFromMD99 = (callback) => {
   const fullURL = buildURL2 ("test/default/wedges1");
   
   simpleGet(fullURL, callback);
}

const apiGetPersonalFromNode = (postData, callback) => {
   const fullURL = buildURL3 ("api/student/imageurl");
   simplePost (fullURL, postData, callback);

   //const fullURL = buildURL3 ("test");
   //simpleGet (fullURL, callback);
}

const apiGetPersonalFromDjango = (postData, callback) => {
   const fullURL = buildURL4 ("api/student/imageurl/");
   
   simplePost (fullURL, postData, callback);
}

// -----------------------------------------------------------------------------------------------

/*
const apiGetAllAssets = (callback) => {
    const fullURL = buildURL("api/assets/list");
    
    simpleGet(fullURL, callback);
}

// -----------------------------------------------------------------------------------------------

const apiGetDashboardData = (callback) => {
    const fullURL = buildURL("api/dashboard/get");
    
    simpleGet(fullURL, callback);
}

// -----------------------------------------------------------------------------------------------

const apiGetOneAsset = (assetID, callback) => {
    const fullURL = buildURL("api/asset/get/" + assetID);
    
    simpleGet(fullURL,callback);
}

// -----------------------------------------------------------------------------------------------

const apiGetAuthTokenForUser = (callback) => {
	const fullURL = buildURL("api/user/authtoken");
    
	simpleGet(fullURL,callback);
}

// -----------------------------------------------------------------------------------------------

const apiSaveOneAsset = (json_post, callback) => {
    const fullURL = buildURL("api/asset/set");

    simplePost(fullURL, json_post, callback);
}

// -----------------------------------------------------------------------------------------------

const apiLogin = (json_post, callback) => {
    const fullURL = buildURL("api/login");
    
    simplePost(fullURL, json_post, callback);
}


// -----------------------------------------------------------------------------------------------

const apiLogout = () => {
    const fullURL = buildURL("api/logout");

//    phpSessLogout();
    simpleGet(fullURL, null);
    // document.getElementById("sess_id").value = "dummy";
}

// -----------------------------------------------------------------------------------------------

const apiSignUp = (json_post, callback) => {
    const fullURL = buildURL("api/user/add");
    
    simplePost(fullURL, json_post, callback);
}

// -----------------------------------------------------------------------------------------------

const apiRequestPwdReset = (json_post, callback) => {
    const fullURL = buildURL("api/pwdreset/request");
    
    simplePost(fullURL, json_post, callback);
}

// -----------------------------------------------------------------------------------------------

const apiUpdatePwd = (json_post, callback) => {
    const fullURL = buildURL("api/pwdreset/update");
    
    simplePost(fullURL, json_post, callback);
}

// -----------------------------------------------------------------------------------------------

const apiAddAsset = (json_post, callback) => {
    const fullURL = buildURL("api/asset/add");
    
    simplePost(fullURL, json_post, callback);
}

// -----------------------------------------------------------------------------------------------

const apiDeleteAsset = (assetId, password, callback) => {
    const fullURL = buildURL("api/asset/delete");
    const postData = {
        asset_id: assetId,
        pwd: password,
//        lsi_session_id: phpSessGet()
        lsi_session_id: "123"
    };
    // console.log("Deleting asset with ID:", assetId);
    simplePost(fullURL, postData, callback);
}
*/

// -----------------------------------------------------------------------------------------------

const isLoggedIn = () => {
    //return phpSessIsLoggedIn();
    return true;
}

// -----------------------------------------------------------------------------------------------

const simpleGet = (fullURL, callback) => {

   fullURL = fullURL + "?ts=" + Date.now()
   console.log ("calling:", fullURL);

   axios.get(fullURL)
//   axios.get(fullURL, {withCredentials: false})
      .then((response) => {
         console.log ("GET response:", response);
         //processGoodResponse(response, callback);
      })
      .catch((error) => {
         console.log("GET failed:", fullURL);
         console.error("GET error:", error);
      });
}

// -----------------------------------------------------------------------------------------------

const simplePost = (fullURL, post_data, callback) => {

    console.log ("calling:", fullURL);
    console.log ("POST data:", post_data);

    axios.post(fullURL, post_data)
        .then((response) => {
            console.log("POST response:", response);
            //processGoodResponse(response, callback);
        })
        .catch((error) => {
            console.log("post failed:", fullURL);
            console.error("POST error:", error);
        });
};


// -----------------------------------------------------------------------------------------------
/*
const processGoodResponse = (response, callback) => {
    // console.log("response:", response)

    if (!response.hasOwnProperty("data")) {
        toast.error('Invalid Response Format(1).');
        return;
    }
    // console.log("Success - Has Data Property");
    if (!response.data.hasOwnProperty("is_success")) {
        toast.error('Invalid Response Format(2).');
        return;
    }
    // console.log("Success - Has Is Success Property");
    if (response.data.is_success != "1") {
        if (!response.data.hasOwnProperty("err_msg")) {
            toast.error('Invalid Response Format(3).');
        } else {
            toast.error(response.data.err_msg);
        }
        return;
    }
    // console.log("Success is 1");
    if (callback == null) {
        // console.log("Success - Callback in NULL");
        return
    }
    if (!response.data.hasOwnProperty("data")) {
        toast.error('Invalid Response Format(4).');
        return;
    }
    // console.log("Success - Has Inner Data Property");

//    if (response.data.data.hasOwnProperty("lsi_session_id")) {
//        // console.log("Success - Attempting to Set SessionId");
//        phpSessSet(response.data.data.lsi_session_id);
//    }

    // console.log("Success - Attempting to Call Callback");
    callback(response.data.data);
};
*/

// -----------------------------------------------------------------------------------------------

//export { apiGetAllAssets, apiGetOneAsset, apiSaveOneAsset, apiLogin, apiSignUp, apiAddAsset, apiLogout, isLoggedIn, apiDeleteAsset, apiRequestPwdReset, apiUpdatePwd, apiGetDashboardData,  apiGetAuthTokenForUser };
export { apiGetDefaultFromMD99, apiGetDefaultFromLSI, apiGetPersonalFromNode, apiGetPersonalFromDjango };
