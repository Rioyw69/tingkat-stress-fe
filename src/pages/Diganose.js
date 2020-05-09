import React, { Fragment, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import { url } from '../global'

function Diagnose(props) {

    const [isChecked, setIsChecked] = useState(false)
    const [loading, setLoading] = useState(false)
    const [questions, setQuestion] = useState([])
    const [results, setResults] = useState([])

    useEffect(() => {
        getQuestions()
    }, [])

    const getQuestions = () => {
        setLoading(true)
        Axios.get(`${url}/question`).then(res => {
            setLoading(false)
            setQuestion(res.data)
        }).catch(err => {
            console.log(err)
        })
    }

    const handleChange = (id, e) => {
        setIsChecked(true)
        setResults([
            ...results,
            {
                [id]: e.target.value
            }
        ])
    }

    const handleSubmit = () => {
        Axios.post(`${url}/question`, {
            data: results
        }).then(res => {
            props.history.push(`/diagnose/${res.data}`)
        }).catch(error => {
            console.log(error)
        })
    }

    return (
        <Fragment>
            <div className="bradcam_area bradcam_overlay"  style={{ backgroundImage: `url(${(require('../assets/img/bg.png'))})` }}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="bradcam_text">
                                <h3>Konsultasi</h3>
                                <p><Link to="/">Home /</Link> Konsultasi</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="welcome_docmed_area">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <h1>Jawab quisioner di bawah ini</h1>
                            <form className="form-contact contact_form">
                                {
                                    loading ? (
                                        <p>Loading...</p>
                                    ) : questions && questions.map((question, index) => {

                                        return (
                                            <div className="form-group mt-4" key={question._id}>
                                                <label className="control-label">{index + 1}. {question.title}</label>
                                                <div className="form-group mt-3">
                                                    <div className="form-check form-check-inline">
                                                        <input onChange={(e) => handleChange(question._id, e)} name={question._id} className="form-check-input" type="radio" id={`yes-${question._id}`} value={question.is_yes} />
                                                        <label className="form-check-label" htmlFor={`yes-${question._id}`}>Ya</label>
                                                    </div>
                                                    <div className="form-check form-check-inline">
                                                        <input onChange={(e) => handleChange(question._id, e)} name={question._id} className="form-check-input" type="radio" id={`no-${question._id}`} value={question.is_not} />
                                                        <label className="form-check-label" htmlFor={`no-${question._id}`}>Tidak</label>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                                <div className="form-group">
                                    
                            

                                        
                                                    <div onClick={() => handleSubmit()} className="boxed-btn3">Lihat Hasil</div>
                                               
                                    
                                    
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </Fragment>
    )
}

export default Diagnose