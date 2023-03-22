import React from 'react';
import './LoginForm.css'
import reactIcon from '../Components/logo/React-icon.png';
import googleIcon from '../Components/logo/Google.png';
import facebookIcon from '../Components/logo/facebook.png';
import twitterIcon from '../Components/logo/twitter.png';


const LoginForm = () => {
    return (
        <div className='container'>


            <div className='mainPage'>

                <div className='frist-div'>
                    <img className='reactIcon' src={reactIcon} alt="" />

                    <div className='frist-text-div'>
                        <p>SOME RANDON TEXT, SOME RANDOM</p>
                        <p>TEXT, SOME RANDOM TEXT, SOME SOME RANDOM TEXT</p>
                    </div>

                    <div className='frist-last-div'>
                        <span>Login</span>
                        <p>Singup</p>
                    </div>


                </div>




                <div>
                    <form action="" className='form'>
                        <input type="email" placeholder='Email Address' />
                        <input type="email" placeholder='Password' />
                        <button className='formBtn'>Login</button>
                        <span className='forgetText'>Forget Password?</span>

                    </form>
                </div>





                <div className='footer'>
                    <p className='orLoginText'>or login with</p>


                    <div className='logo-div'>

                        <div className='allImageDiv'>
                            <img src={googleIcon} alt="" />
                        </div>



                        <div className='allImageDiv'>
                            <img src={facebookIcon} alt="" />
                        </div>

                         
                        <div className='allImageDiv'>
                            <img src={twitterIcon} alt="" />
                        </div>

                    </div>



                    <div className='textAccount' >
                        <p>dont have an account <span>Create new account!</span> </p>
                        <p>By singing up, you are agree with our <span className='underLine'>Terms & Conditions</span> </p>

                    </div>



                </div>

            </div>
        </div>
    );
};

export default LoginForm;