import { json, redirect } from 'react-router-dom';
import AuthForm from '../components/AuthForm';

function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;

export async function action({request}){
 const data=await request.formData();

 const authData={
  email: data.get('email'),
  password: data.get('password')
 }


 const searchParams= new URL(request.url).searchParams;
 const mode=searchParams.get('mode') || 'login'; 
 const response=await fetch('http://localhost:8080/' + mode, {
  method: 'post',
  headers:{
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(authData)
 })

 if(response.status===402 || response.status===422)
 {
  return response;
 }

 if(!response.ok)
 {
  throw json({message: "Counld Not Authenticate"}, {status: 500})
 }
const responseData=await response.json();
const token=responseData.token;

localStorage.setItem("token", token);
  const expiration = new Date();
  expiration.setHours(expiration.getHours() + 1);
  localStorage.setItem('expiration', expiration.toISOString());
 return redirect('/')
}