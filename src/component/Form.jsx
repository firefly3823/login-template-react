import '../App.css'
import { TextField } from '@mui/material'
import userLogo from '../icons/reg.png'
import loginLogo from '../icons/login.png'
import Button from '@mui/material/Button'

import { useState } from 'react'
function Form() {
    const [action, setAction] = useState('SIGN UP')
    // const [username, isvalidUser] = useState(true)
    
    const checkUser = ()=>{
        
    }
    console.log(action);
    return (
        <>
        <div className="loginSignup text-center shadow p-5 rounded-5">
            <img src={action === 'LOGIN' ? loginLogo : userLogo} alt="" />
            <h1 style={{ padding: "10px" }}>{action}</h1>
            {
                action === "LOGIN" ? `` : <div className='formBox'><TextField className='w-100' size="small" helperText={username===false?"":"Field Required"} id="outlined-basic"  label="User Name" variant="outlined"  name="username"/></div>
            }

            <div className='formBox'><TextField className='w-100' size="small" helperText="Field required" id="outlined-basic" label="Email address" variant="outlined"  /></div>
            <div className='formBox'><TextField type="password" className='form-control w-100' size="small" helperText="Field required" id="outlined-basic" label="Passwrod" variant="outlined" /></div>
            <div className="buttonContainer d-flex justify-content-evenly">
                <Button variant="contained" size='large' className={action === 'SIGN UP' ? "bg-success rounded-3" : "bg-secondary rounded-3"}  onClick={() => setAction("SIGN UP")} >Sign up</Button>
                <Button className={action === 'LOGIN' ? "bg-success rounded-3" : "bg-secondary rounded-3"} variant="contained" size='large'onClick={()=> checkUser() || setAction("LOGIN")} >Login</Button>
            </div>
            <div className='forgotAccount  pt-3'>
                {

                    action === "SIGN UP" ? `` : <p style={{ fontSize: "10px" }}>forgot password? <span style={{ cursor: "pointer" }} className='text-primary' >click here</span></p>
                }

                {
                    action === "LOGIN" ? `` : <p style={{ fontSize: "11px" }}>Already have account? <span style={{cursor: "pointer" }} className='text-primary' onClick={()=>setAction("LOGIN")}>Login</span></p>
                }
            </div>
        </div>
        </>
    )
}
export default Form