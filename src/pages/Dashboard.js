import React, { Fragment, useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import Axios from 'axios'
import { url } from '../global'
import NavbarAdmin from '../components/NavbarAdmin'

function Dashboard(props)
{

    const [title, setTitle] = useState('Dashboard')

    if (!localStorage.getItem('token')) {
        return <Redirect to="/login" />
    }
    return (
        <Fragment>
            <div className="bradcam_area bradcam_overlay"  style={{ backgroundImage: `url(${(require('../assets/img/bg.png'))})` }}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="bradcam_text">
                                <h3>{title}</h3>
                                <p><Link to="/">Home /</Link> {title}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
            <div className="container mt-3">
                <div className="row">
                    <div className="col-xl-12">
                        <NavbarAdmin />
                    </div>
                </div>
            </div>
        
        </Fragment>
    )
}

export default Dashboard