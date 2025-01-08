import { useState, useRef } from 'react';

import classes from './AuthForm.module.css';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const[isLoading,setIsLoading] = useState(false);
  const emailInputRef = useRef();
  const passwordInputRef = useRef()
  const FormSubmit = (e)=>{
    e.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    ///  validation 
    setIsLoading(true)
    if(isLogin){

    }
    else{
      fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD7wKCtmSQZ9aaZ7HLPonPxzywRURtgAq0',{
        method:'POST',
        body:JSON.stringify({
          email:enteredEmail,
          password:enteredPassword,
          returnSecureToken:true
        }),
        headers:{
          'Content-Type':'application/json'
        }
      }
    ).then(res=>{
      setIsLoading(false)
      if(res.ok){
        

      }
      else{
        return res.json().then(data=>{
          let errormessage = 'Authantication Failed';
          if(data&&data.error&&data.error.message ){
            errormessage =data.error.message;
          }
          alert(errormessage)
         
        });
      }
    })
  }

  }

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={FormSubmit} >
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref={emailInputRef}  />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input
            type='password'
            id='password'
            required
            ref={passwordInputRef}
          />
        </div>
        <div className={classes.actions}>
          {!isLoading && <button>{isLogin ?'Login' : 'Create Account'}</button>}
          {isLoading && <p>Sending Requist...</p>}
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
