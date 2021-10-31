import React from 'react';
import useAuth from '../../Hooks/useAuth';
import useFirebase from '../../Hooks/useFirebase';
import {useHistory,useLocation} from 'react-router-dom';
import './Login.css';

const Login = () => {
    
    const{siginWithGoogle,setUser}=useAuth();
    const history=useHistory();
    const location=useLocation();
    const url=location.state?.from||"/home"
    const handelgoogle=()=>{
        siginWithGoogle()
        .then(res=>{
            setUser(res.user)
            history.push(url);
        })
    }
    return (
        <div>
            <h1>This is Login</h1>
            <button  className="button"onClick={handelgoogle}>Google Login</button>
        </div>
    );
};

export default Login;