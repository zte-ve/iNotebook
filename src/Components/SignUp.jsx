import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios';
import { useNavigate , Link} from 'react-router-dom';
import AlertContext from '../Contexts/alerts/AlertContext';

function SignUp() {
  const { setAlertFun } = useContext(AlertContext)
  let navigate = useNavigate();
  const baseURL = "http://localhost:5000/api/auth/CreateUser";
  const { register, watch, handleSubmit, setValue, formState: { errors } } = useForm();
  const onSubmit = async (data, e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post(baseURL, data, {
        headers: {
          "Content-Type": "application/json"
        }
      })
      console.log(response.status);
      // save the authentication-token in local-storage and redirect the user to home page for which we use useHistory hook of react-router-dom
      localStorage.setItem('token', response.data.authToken);
      navigate('/');
      setAlertFun('Account created successfully!','success')
      // window.location='/';
    }
    catch (err) {
      // some error occured handle the error
      console.log(err.response.status);
      console.log(err.response.data);
      console.log(err.response.headers);
      setAlertFun(`status: ${err.response.status}, message: ${err.response.data}`,'danger')
    }
    setValue("name", "");
    setValue("email", "");
    setValue("password", "");
    setValue("cPassword", "");
  }
  const pass = watch("password");
  // console.log(errors);
  return (
    <div>
      <form className='container w-75' onSubmit={handleSubmit(onSubmit)} >
        <h2 className="mt-5">Please, Sign Up to use iNotebook</h2>
        <div className="my-3">
          <label htmlFor="exampleInputName1" className="form-label">Username</label>
          <input {...register('name', {
            required: 'This is required!', minLength: {
              value: 3,
              message: "at least 3 charcters long"
            }
          })} type="text" className="form-control" id="exampleInputName1" aria-describedby="emailHelp" />
          <p className="text-danger fw-bolder">{errors.name?.message}</p>
          {/* <div id="emailHelp" className="form-text">Pls enter a valid e-mail</div> */}
        </div>
        <div className="my-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input {...register('email', { required: 'This is required' })} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">Pls enter a valid e-mail</div>
          <p className="text-danger fw-bolder">{errors.email?.message}</p>
        </div>
        <div className="my-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input {...register('password', {
            required: 'This is required!', minLength: {
              value: 5,
              message: "at least 5 charcters long!"
            }
          })} type="password" className="form-control" id="exampleInputPassword1" />
          <p className="text-danger fw-bolder">{errors.password?.message}</p>
        </div>
        <div className="my-3">
          <label htmlFor="exampleInputPassword2" className="form-label">Confirm Password</label>
          <input {...register('cPassword', {
            required: 'This is required!', validate: (val) => {
              if (pass !== val) return "This does not match with the set password!"
            }
          })} type="password" className="form-control" id="exampleInputPassword2" />
          <p className="text-danger fw-bolder">{errors.cPassword?.message}</p>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        <p className="my-5 mx-1 fs-6 fw-bold">Already have an account. Then just <Link to='/signIn'>Sign In</Link> </p>
      </form>
    </div>
  )
}

export default SignUp
