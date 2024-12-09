import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { Card } from '../components/Card';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { authState } from '../../atoms/authState';
import { useEffect } from 'react';
import { USER_REGISTER } from '../../config/serverConfig';

export const SignupPage = () => {
    const [errorMsg,setErrorMsg] = useState("");
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const isAuth = useRecoilValue(authState);
    const navigate = useNavigate();

    const signupHandler = async () => {
      try {
        const response = await axios.post(USER_REGISTER,{
          name : name,
          email : email,
          password : password
        })
        if(response.statusText == "OK"){
          navigate("/login");
        }

      } catch(error){
          console.log(error);
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
        <Card>
          <div className='text-black text-3xl font-bold text-center mb-2'>Create Account</div>
          <div className='mb-8'>
            <Input 
              label="Name" 
              size="lg" 
              placeholder="Enter your name"
              value={name}
              onChange={(e)=>{setName(e.target.value)}}
            />
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
            label="Sign Up"
            onClick={signupHandler}
          />
        </Card>
        <div className='text-brand-700 text-lg'>
          Already registered? <a className='font-bold hover:underline' href="/login">Sign In</a>
        </div>
      </div>
    </>
}