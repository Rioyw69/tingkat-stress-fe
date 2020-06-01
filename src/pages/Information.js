import React, { Fragment, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import { url } from '../global'
import ReactHtmlParser from 'react-html-parser'

function Information() {

    const [loading, setLoading] = useState(false)
    const [content, setContent] = useState('')
    
    useEffect(() => {
        getAdvice()
    }, [])

    const getAdvice = () => {
        setLoading(true)
        Axios.get(`${url}/dashboard/information`,{
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res => {
            setContent(res.data.data ? res.data.data.content : '')
        }).finally(() => {
            setLoading(false)
        })
    }
    
    return (
        <Fragment>
            {
                loading && <div className="loading"><img width="200" src={require('../assets/img/loading.gif')}
                 /></div>
            }
        <div className="bradcam_area bradcam_overlay"  style={{ backgroundImage: `url(${(require('../assets/img/bg.png'))})` }}>
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="bradcam_text">
                            <h3>Informasi</h3>
                            <p><Link to="/">Home /</Link> Informasi</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="welcome_docmed_area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        { ReactHtmlParser(content) }
                    </div>
                </div>
            </div>
        </div>

    </Fragment>
        
    )
}

export default Information