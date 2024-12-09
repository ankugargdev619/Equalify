import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { Card } from '../components/Card';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRecoilState, useRecoilValue } from 'recoil';
import { authState } from '../../atoms/authState';
import { useNavigate } from 'react-router-dom';
import { USER_LOGIN } from '../../config/serverConfig';

export const LoginPage = () => {
    const [errorMsg,setErrorMsg] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [isAuth,setIsAuth] = useRecoilState(authState);
    const navigate = useNavigate();
    
    const signinHandler = async () => {
      try {
        const res = await axios.post(USER_LOGIN,{
            email : email,
            password : password
          })
          if(res.statusText == "OK"){
            setIsAuth(true);
            window.sessionStorage.setItem("token",res.data.token);
          }
      } catch(error){
        setErrorMsg(error.response.data.error);
      }
    }

    useEffect(()=>{
      const token = window.sessionStorage.getItem("token");
      if(token){
        navigate("/");
      }
    },[isAuth])

    return <>
        <div className='flex items-center justify-center max-h-screen flex-col gap-4'>
        <Card className="my-2">
          <div className='text-black text-3xl font-bold text-center mb-4'>Login</div>
          <div className='mb-10'>
            <Input 
              label="Email" 
              size="lg" 
              placeholder="Enter your email"
              value={email}
              onChange={(e)=>{setEmail(e.target.value)}}
            />
            <Input 
              label="Password" 
              size="lg" 
              placeholder="Enter your password" 
              type="password"
              value={password}
              onChange={(e)=>{setPassword(e.target.value)}}
            />
          </div>
          {errorMsg ? 
            <div className='text-red-500 text-lg text-center'>{errorMsg}</div> 
          : null}
          <Button 
            size="lg" 
            variant="primary" 
            label="Sign In"
            onClick={signinHandler}
          />
          <div className='text-center hover:underline'>
            <a href="">Forgot Password?</a>
          </div>
        </Card>
        <div className='text-brand-700 text-lg'>
          Don't have an account? <a className='font-bold hover:underline' href="/signup">Sign Up</a>
          
        </div>
      </div>
    </>
}
