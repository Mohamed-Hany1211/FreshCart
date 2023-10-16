
import axios from 'axios'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import style from '../ResetPassword/ResetPassword.module.css';
export default function ResetPassword() {
    let navigate = useNavigate();
    async function resetPssword(values){
        let {data} = await axios.put(`https://ecommerce.routemisr.com/api/v1/auth/resetPassword`,values);
        if(data){
            navigate('/login');
        }
        console.log(data);
    }


    

    // const [msg, setMsg] = useState(null);
    // const [success, setSuccess] = useState(false);




    let formik = useFormik({
        initialValues: {
            email:"",
            newPassword:''
        },
        onSubmit: resetPssword
    })


    return (
        <>
        <div className={`${style.margin} container`}>
            <form className='w-100' onSubmit={formik.handleSubmit}>

                <label className='mb-2' htmlFor="email">Enter Your Email :</label>
                <input className='form-control w-100' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} type="email" id='email' name='email'/>


                <label className='mb-2' htmlFor="newPassword">New Password :</label>
                <input className='form-control w-100' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.newPassword} type="text" id='newPassword' name='newPassword'/>
                {/* {success ? <div className='alert mt-2 p-2 alert-success'>{msg}</div> : ''} */}

                <button className='btn bg-Main text-white mt-3' type='submit'>Send</button>

            </form>

            </div>

        </>
    )
}
