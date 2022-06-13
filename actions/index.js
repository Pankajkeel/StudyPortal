import { API_GET, API_POST } from './api.js';
import { API_END_POINT } from './constant.js';
import STORAGE from '@/helpers/storage/storage.js';

export const createLead = (data)=>{
    return API_POST(`${API_END_POINT}/web/home-lead`, data);
}

export const contactWebsite = (data)=>{
    return API_POST(`${API_END_POINT}/web/website-contact`, data);
}

export const signupUser = (data={}, cb)=>{
    API_POST(`${API_END_POINT}/study/student-signup`, data).then((response)=>{
        if(response && response.status==1){
            STORAGE.setAuthToken(response.message.token).then(() => {
                if (cb) cb(null, response);
              });
            
        }else{
            if(cb) cb(true, null)
        }
    })
}

export const submitQuestions = (data, cb)=>{
    return API_POST(`${API_END_POINT}/questionnaire/submit-questionnaires`, data).then((response)=>{
        if(cb)cb(response);
    }).catch((e)=>{
        if(cb) cb(null, true);
    })
}

export const googleLogin = (data, cb) => {
    
    API_POST(API_BASE_URL + '/v1/user/google-login', {
      access_token: data.accessToken,
    })
      .then(function (response) {
        if (response && response.status == 1) {
          
          STORAGE.setAuthToken(response.message.token);
          const message = 'Successfully Logged In';
          if (cb) cb(null, message);
        } else {
          let message = 'Failing to log in the user';
          if (cb) cb(message, null);
        }
      })
      .catch(function (error) {
        let message = error?.non_field_errors[0]||'';
        if (cb) cb(message, null);
      });
  };