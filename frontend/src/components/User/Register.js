import React from 'react'
import { useEffect } from 'react';


function Register() {
  useEffect(()=>{
    document.title='User Registration'
  });

  return (
    <div className="container mt-5 mb-5">
        <div className="row">
            <div className="col-6 offset-3">
                <div className="card">
                    <h3 className="card-header">User Register</h3>
                    <div className='card-body'>
                      <form>

                        <div className="mb-3">
                          <label htmlFor="exampleInputEmail1" className="form-label">
                              Fullname
                          </label>
                          <input type="text" className="form-control"
                              id="exampleInputEmail1"
                              aria-describedby="emailHelp"
                          />
                        </div>

                        <div className="mb-3">
                          <label htmlFor="exampleInputEmail1" className="form-label">
                              Username
                          </label>
                          <input type="text" className="form-control"
                              id="exampleInputEmail1"
                              aria-describedby="emailHelp"
                          />
                        </div>

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

                        <div className="mb-3">
                          <label htmlFor="exampleInputEmail1" className="form-label">
                              Interests
                          </label>
                          <textarea className="form-control" aria-describedby="emailHelp">
                          </textarea>
                          <div id='emailHelp'className='form-text'>Mathematics, Thermodynmics, Vibration</div>
                        </div>

                        <button type="submit" className="btn btn-primary">
                          Register
                        </button>
                      </form>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register