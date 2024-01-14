import React from 'react'
import { useEffect } from 'react'



function Login() {
    useEffect(()=>{
        document.title='Login Page'
    });


  return (
    <div className="container mt-5 mb-5">
        <div className="row">
            <div className="col-6 offset-3">
                <div className="card">
                    <h3 className="card-header">User Login</h3>
                    <div className='card-body'>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">
                                    Email address
                                </label>
                                <input type="email" className="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="exampleInputPassword1"
                                />
                            </div>

                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input text-center" id="exampleCheck1" />
                                <label className="form-check-label" htmlFor="exampleCheck1">
                                    Remember Me
                                </label>
                            </div>
                            
                            <button type="submit" className="btn btn-primary">
                                Login
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login