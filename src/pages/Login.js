import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import { url } from '../global'

function Login(props)
{
    const [form, setForm] = useState({
        username: '',
        password: ''
    })

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState({
        errors: null,
        message: ''
    })

    const handleChange = (name, value) => {
        
        setError({
            errors: null,
            message: ''
        })

        setForm({
            ...form,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        Axios.post(`${url}/login`, {
            username: form.username,
            password: form.password
        }).then(res => {

            localStorage.setItem('token', res.data.token)
            localStorage.setItem('name', res.data.data.name)
            
            props.history.push('dashboard')

        }).catch(err => {

           if (err.response) {
               setError({
                   message: err.response.data.message,
                   errors: err.response.data.errors
               })
           }

        }).finally(() => {
            setLoading(false)
        })
    }

    return (
        <Fragment>
            <div className="bradcam_area bradcam_overlay"  style={{ backgroundImage: `url(${(require('../assets/img/bg.png'))})` }}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="bradcam_text">
                                <h3>Login</h3>
                                <p><Link to="/">Home /</Link> Login</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="welcome_docmed_area">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 m-auto">
                            <form className="form-horizontal" onSubmit={handleSubmit}>
                                {
                                    error && error.message && (
                                        <div className="alert alert-danger">
                                            {error && error.message}
                                        </div>
                                    )
                                }
                                <div className="form-group">
                                    <label className="control-label">Username</label>
                                    <input value={form.username} onChange={(e) => handleChange('username', e.target.value)} type="text" className={`form-control ${error.errors && error.errors.username ? 'is-invalid' : ''}`}/>
                                    {
                                        error.errors && error.errors.username && (
                                            <span className="invalid-feedback">{error.errors.username[0]}</span>
                                        )
                                    }
                                   
                                </div>
                                <div className="form-group">
                                    <label className="control-label">Password</label>
                                    <input value={form.password} onChange={(e) => handleChange('password', e.target.value)} type="password"  className={`form-control ${error.errors && error.errors.password ? 'is-invalid' : ''}`} />
                                    {
                                        error.errors && error.errors.password && (
                                            <span className="invalid-feedback">{error.errors.password[0]}</span>
                                        )
                                    }
                                </div>
                                <div className="form-group">
                                    <button className={`btn btn-primary ${loading ? 'btn-disabled' : ''}`} type="submit" disabled={loading}>{loading ? 'Loading ...' : 'Login' }</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Login