import { useState } from 'react';
import { useRouter } from 'next/router'
import GoogleLogin from 'react-google-login';

import { googleLogin, signupUser } from '@/actions/index.js';
import LoadingWidget from '@/components/LoadingWidget';
import CustomToaster from '@/components/CustomToaster';
import { validateEmail } from '@/helpers/utils.js';

import { container } from './style.js';

const SignupWidget = ()=>{
    const router = useRouter();

    const [email, setEmail] = useState('');
    const [showLoader, setLoader] = useState(false);

    const [toasterInfo, setToasterInfo] = useState({
        isVisible: false,
        isError: false,
        isSuccess: false,
        msg: ''
    })
    const { isVisible, isError, isSuccess, msg } = toasterInfo;

    const [passwordInfo, setPasswordInfo] = useState({
        password: '',
        confirmPassword: '',
        passwordVisible: false,
        confirmPasswordVisible: false
    })
    const { password, confirmPassword, passwordVisible, confirmPasswordVisible } = passwordInfo;

    const handleEmailChange = (e)=>{
        setEmail(e.target.value);
    }

    const togglePassword  = (type, value)=>{
        setPasswordInfo((val)=>{
            return {
                ...val,
                [type]: value
            }
        })
    }

    const handleSubmitClick = ()=>{
        if(!validateEmail(email)){
            showToaster(false, 'Please enter valid email id');
            return;
        }
        if(!password){
            showToaster(false, 'Please enter valid password');
            return;
        }
        if(password!==confirmPassword){
            showToaster(false, "password & confirm password din't match");
            return;
        }
        setLoader(true);
        signupUser({email, password}, (error, resp)=>{
            setLoader(false);
            if(resp){
                router.push('/')
            }else{
                showToaster(false, 'Failed to signup Plz try after some time');
            }
        });
    }

    const handleEnterKeyPress = (e, val)=>{
        const target = e;
        if(target.key=='Enter'){
            target.preventDefault();
            if(val=="password"){
                if(validateEmail(email)){
                    document.getElementById(val).focus();
                }else{
                    showToaster(false, 'Please enter valid email id');
                }
            }else if(val==="confirmPassword"){
                document.getElementById(val).focus();
            }else{
                if(confirmPassword===password){
                    handleSubmitClick();
                }else{
                    showToaster(false, "Password didn't match");
                }
            }
        }
    }

    const showToaster = (isSucess=false, errorMsg='')=>{
        setToasterInfo({
            isVisible: true,
            isError: !isSucess,
            isSuccess: isSucess,
            msg: errorMsg
        })
        setTimeout(() => {
            setToasterInfo({
                isVisible: false,
                isError: false,
                isSuccess: false,
                msg:''
            })
        }, 4000);
    }

    const handlePasswordChange = (e, type)=>{
        setPasswordInfo((val)=>{
            return {...val, [type]: e.target.value}
        })
    }

    const responseGoogle = (response) => {
        const { accessToken } = response;
        setLoader(true);
        googleLogin({ accessToken }, (err, data) => {
          if (data) {
            setLoader(false);
            router.push('/');
          }else{
            setLoader(false);
            console.log(err);
          }
        });
      };

    return(
        <section className={container}>
        {
            showLoader && <LoadingWidget/>
        }
        {
            isVisible?<CustomToaster isVisible={isVisible} isError={isError} isSuccess={isSuccess} msg={msg}/>:null
        }
        <div className="container">
            <div className="row SignUp">
                <div className="col-12">
                    <div className="loginSection">
                        <div className="headingLog">
                            <h1>Make the most of your professional life
                            </h1>
                        </div>
                        <div className="formSection">
                            <div className="inputForm">
                                <input className="npt" type="text" value={email} onChange={handleEmailChange} onKeyPress={(e)=>handleEnterKeyPress(e,'password')}/>
                                <label className={email ? '' : ''}>Email or phone number</label>
                            </div>
                            <div className="inputForm inpuBtn">
                                <input className="npt" type={passwordVisible?"text":"password"} id="password" value={password} onChange={(e)=>handlePasswordChange(e, 'password')} onKeyPress={(e)=>handleEnterKeyPress(e, 'confirmPassword')}/>
                                <label>Password</label>
                                <button onClick={()=>togglePassword('passwordVisible', !passwordVisible)}>{passwordVisible?"Hide":"Show"}</button>
                            </div>
                            <div className="inputForm inpuBtn">
                                <input className="npt" type={confirmPasswordVisible?"text":"password"} id="confirmPassword" value={confirmPassword} onChange={(e)=>handlePasswordChange(e, 'confirmPassword')} onKeyPress={(e)=>handleEnterKeyPress(e, '')}/>
                                <label>Confirm Password</label>
                                <button onClick={()=>togglePassword('confirmPasswordVisible', !confirmPasswordVisible)}>{confirmPasswordVisible?"Hide":"Show"}</button>
                            </div>
                            <div className="tms">
                                <p>By clicking Agree & Join, you agree to the LinkedIn <a>User Agreement, Privacy
                                        Policy</a>, and <a>Cookie Policy</a>.
                                </p>
                                <button className="mainBtn" onClick={handleSubmitClick}>Agree & Join</button>
                            </div>
                            <p className="dividr">
                                <span>or</span>
                            </p>
                            <GoogleLogin
                                clientId="194271428747-v7t3bjqu3cea8jq734pd9o950kolco0o.apps.googleusercontent.com"
                                onSuccess={responseGoogle}
                                onFailure={responseGoogle}
                                isSignedIn={false}
                                onScriptLoadFailure={()=>showToaster(false, 'Google Login disabled for now')}
                                render={(renderProps) => (
                                // <button onClick={renderProps.onClick} className="google-button">
                                //     <img
                                //     className="google-button-image"
                                //     src={ASSETS_BASE_URL + '/images/common/google.svg'}
                                //     alt="google"
                                //     />
                                // </button>
                                <button className="loginGoog" onClick={renderProps.onClick}>
                                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"
                                        className="LgbsSe-Bz112c">
                                        <g>
                                            <path fill="#EA4335"
                                                d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z">
                                            </path>
                                            <path fill="#4285F4"
                                                d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z">
                                            </path>
                                            <path fill="#FBBC05"
                                                d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z">
                                            </path>
                                            <path fill="#34A853"
                                                d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z">
                                            </path>
                                            <path fill="none" d="M0 0h48v48H0z"></path>
                                        </g>
                                    </svg>
                                    <span>Continue with Google</span>
                                </button>
                                )}
                            />
                        </div>
                        <div className="outTxt">
                            <p>Looking to create a page for a business? <a>Get help</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default SignupWidget