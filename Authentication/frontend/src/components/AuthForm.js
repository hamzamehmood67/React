import { useState, } from 'react';
import { Form , useSearchParams, Link, useActionData, useNavigate} from 'react-router-dom';

import classes from './AuthForm.module.css';

function AuthForm() {

  const [searchParams]= useSearchParams();
  const isLogin=searchParams.get('mode') === 'login';
const data= useActionData();
const navigation=useNavigate();
const isSubmitting= navigation.state==="submitting";


  return (
    <>
      <Form method="post" className={classes.form}>
        <h1>{isLogin ? 'Log in' : 'Create a new user'}</h1>
        {data && data.errors &&(
          <ul>
            {Object.values(data.errors).map((err)=>{
              <li>{err}</li>
            })}
          </ul>
        )}

        {data && data.message && <p>{data.message}</p>}
        <p>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required />
        </p>
        <p>
          <label htmlFor="image">Password</label>
          <input id="password" type="password" name="password" required />
        </p>
        <div className={classes.actions}>
          <Link to={`?mode=${isLogin? 'signup': 'login'}`} >
            {isLogin ? 'Create new user' : 'Login'}
          </Link>
          <button>{isSubmitting? 'Submitting..': "Save"}</button>
        </div>
      </Form>
    </>
  );
}

export default AuthForm;
