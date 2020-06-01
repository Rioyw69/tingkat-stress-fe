import React, { Fragment, useState, useEffect } from 'react'
import Axios from 'axios'
import { url } from '../global'
import Pagination from "react-js-pagination"
import Modal from 'react-bootstrap4-modal'
import ReactNotification, { store } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html';
import { convertToRaw, ContentState, EditorState } from 'draft-js'
import htmlToDraft from 'html-to-draftjs'

function NavbarAdmin(props) {

    const [userAgent, setUserAgent] = useState([])
    const [loading, setLoading] = useState(false)
    const [loadingQuestion, setLoadingQuestion] = useState(false)
    const [question, setQuestion] = useState({
        current_page: 1,
        data: [],
        total: 0
    })
    const [information, setInformation] = useState('')
    const [advice, setAdvice] = useState('')
    const [page, setPage] = useState(1)
    const [modal, setModal] = useState(false)
    const [data, setData] = useState({
        id: '',
        question: '',
        is_yes: '',
        is_no: ''
    })
    const [errors, setErros] = useState(null)

    useEffect(() => {
        getUserAgent()
    }, [])

    useEffect(() => {
        getQuestion()
    }, [page])

    const getUserAgent = () => {
        setLoading(true)
        Axios.get(`${url}/dashboard`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res => {
            setUserAgent(res.data.data)
        }).catch(err => {
            console.log(err)
        }).finally(() => {
            setLoading(false)
        })

    }

    const getQuestion = () => {
        setLoading(true)
        Axios.get(`${url}/dashboard/question`, {
            params: {
                page,
                perpage: 10
            },
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res => {
            setQuestion(res.data.data)
        }).finally(() => {
            setLoading(false)
        })
    }
    
    const handleChangeTable = (paging) => {
        setPage(paging)
    }

    const getInformation = () => {
        setLoading(true)
        Axios.get(`${url}/dashboard/information`,{
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res => {
            const contentBlock = htmlToDraft(res.data.data ? res.data.data.content : '')

            if (contentBlock) {
                const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks)
                const editorState = EditorState.createWithContent(contentState)
                setInformation(editorState)
            }

        }).finally(() => {
            setLoading(false)
        })
    }

    const getAdvice = () => {
        setLoading(true)
        Axios.get(`${url}/dashboard/advice`,{
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res => {
            const contentBlock = htmlToDraft(res.data.data ? res.data.data.content : '')

            if (contentBlock) {
                const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks)
                const editorState = EditorState.createWithContent(contentState)
                setAdvice(editorState)
            }
        }).finally(() => {
            setLoading(false)
        })
    }

    const handleClose = () => {
        setModal(false)
    }

    const handleSave = () => {

        setLoadingQuestion(true)
        const urls = data.id ? `${url}/dashboard/question/${data.id}` : `${url}/dashboard/question`
        Axios.post(urls, {
            question: data.question,
            is_yes: data.is_yes,
            is_no: data.is_no
        }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res => {
            notification('success', 'Success', res.data.message)
            setModal(false)
        }).catch(err => {
            if (err.response) {
                console.log(err.response.data.message)
                setErros(err.response.data.errors)
                notification('danger', 'Error', err.response.data.message)
            }
        }).finally(() => {
            setLoadingQuestion(false)
            setData({
                id: '',
                question: '',
                is_yes: '',
                is_no: ''
            })
            
            getQuestion()
        })
    }

    const onAddNew = () => {
        setModal(true)
    }

    const handleChange = (name, value) => {
        setErros(null)
        setData({
            ...data,
            [name]: value
        })
    }

    const notification = (type, title, message) => {
        store.addNotification({
            title,
            message,
            type,
            insert: "top",
            container: "top-right",
            dismiss: {
                duration: 2000
            }
        })
    }

    const onDelete = (id) => {

        setLoadingQuestion(true)
        Axios.delete(`${url}/dashboard/question/${id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res => {
            notification('success', 'Success', res.data.message)
        }).catch(err => {
            if (err.response) {
                console.log(err.response.data.message)
                setErros(err.response.data.errors)
                notification('danger', 'Error', err.response.data.message)
            }
        }).finally(() => {
            setLoadingQuestion(false)
            setData({
                question: '',
                is_yes: '',
                is_no: ''
            })
            setModal(false)
            getQuestion()
        })
    }

    const onEdit = (id) => {

        Axios.get(`${url}/dashboard/question/${id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res => {
            setData({
                id: res.data.data._id,
                question: res.data.data.title,
                is_yes: res.data.data.is_yes,
                is_no: res.data.data.is_no
            })
            setModal(true)
        }).catch(err => {
            if (err.response) {
                console.log(err.response.data.message)
                setErros(err.response.data.errors)
                notification('danger', 'Error', err.response.data.message)
            }
        })
    }

    const handleChangeInformation = (value) => {
        setInformation(value)
    }

    const handleChangeAdvice = (value) => {
        setAdvice(value)
    }
    
    const onUpdateInformation = () => {
        const content = draftToHtml(convertToRaw(information.getCurrentContent()))
        setLoadingQuestion(true)
        Axios.post(`${url}/dashboard/information`,{
            content
        },{
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res => {
            notification('success', 'Success', res.data.message)
        }).catch(err => {
            if (err.response) {
                notification('danger', 'Error', err.response.data.message)
            }
        }).finally(() => {
            setLoadingQuestion(false)
            getInformation()
        })
    }

    const onUpdateAdvice = () => {
        const content = draftToHtml(convertToRaw(advice.getCurrentContent()))
        setLoadingQuestion(true)
        Axios.post(`${url}/dashboard/advice`,{
            content
        },{
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res => {
            notification('success', 'Success', res.data.message)
        }).catch(err => {
            if (err.response) {
                notification('danger', 'Error', err.response.data.message)
            }
        }).finally(() => {
            setLoadingQuestion(false)
        })
    }

    return (
        <Fragment>
            {
                loading && <div className="loading"><img width="200" src={require('../assets/img/loading.gif')}
                /></div>
            }
            <ReactNotification />
            <Modal visible={modal} onClickBackdrop={handleClose}>
                <div className="modal-header">
                <h5 className="modal-title"> { !data.id ? 'Add New Question' : 'Edit Question'}</h5>
                </div>
                <div className="modal-body">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label className={`control-label`}>Question</label>
                                <textarea value={data.question} onChange={(e) => handleChange('question', e.target.value)} cols="30" rows="10" className={`form-control  ${errors && errors.question ? 'is-invalid' : ''}`} placeholder="Question" />
                                <div className="invalid-feedback">
                                    {
                                        errors && errors.question  && errors.question[0]
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label className="control-label">Yes Value</label>
                                <input value={data.is_yes} onChange={(e) => handleChange('is_yes', e.target.value)} type="text" className={`form-control  ${errors && errors.is_yes ? 'is-invalid' : ''}`}/>
                                <div className="invalid-feedback">
                                    {
                                        errors && errors.is_yes  && errors.is_yes[0]
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label className="control-label">No Value</label>
                                <input value={data.is_no} onChange={(e) => handleChange('is_no', e.target.value)} type="text" className={`form-control  ${errors && errors.is_no ? 'is-invalid' : ''}`}/>
                                <div className="invalid-feedback">
                                    {
                                        errors && errors.is_no  && errors.is_no[0]
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleClose}>
                    Close
                </button>
                <button type="button" className={`btn btn-primary ${loadingQuestion && loadingQuestion ? 'btn-disabled' : ''}`} disabled={loadingQuestion} onClick={handleSave}>
                    { !loadingQuestion ? !data.id ? 'Save' : 'Save Changes' : 'Loading...' }
                </button>
                </div>
            </Modal>

            <ul className="nav nav-tabs nav-primary" id="myTab" role="tablist">
                <li className="nav-item">
                    <a className="nav-link active" onClick={getUserAgent} id="dashboard-tab" data-toggle="tab" href="#dashboard" role="tab" aria-controls="dashboard" aria-selected="true">Dashboard</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" onClick={getQuestion} id="question-tab" data-toggle="tab" href="#question" role="tab" aria-controls="question" aria-selected="false">Question</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" onClick={getInformation} id="information-tab" data-toggle="tab" href="#information" role="tab" aria-controls="information" aria-selected="false">Information</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" onClick={getAdvice} id="advice-tab" data-toggle="tab" href="#advice" role="tab" aria-controls="advice" aria-selected="false">Advice</a>
                </li>
            </ul>
            <div className="tab-content py-4" id="myTabContent">
                <div className="tab-pane fade show active" id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
                    <h5>Halo {localStorage.getItem('name') }!</h5>
                    <div className="list-group mt-4">
                        <span className="list-group-item list-group-item-action flex-column align-items-start">
                            <div className="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">User Agent</h5>
                            </div>
                            <p className="mb-1">{userAgent.user_agent}</p>
                        </span>
                        <span className="list-group-item list-group-item-action flex-column align-items-start">
                            <div className="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">IP Address</h5>
                            </div>
                            <p className="mb-1">{userAgent.ip_address}</p>
                        </span>
                        <span className="list-group-item list-group-item-action flex-column align-items-start">
                            <div className="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">Last Login</h5>
                            </div>
                            <p className="mb-1">{userAgent.last_login}</p>
                        </span>
                    </div>
                </div>
                <div className="tab-pane fade" id="question" role="tabpanel" aria-labelledby="question-tab">
                    <div className="d-flex justify-end my-3">
                        <button className="btn btn-primary" onClick={onAddNew}>Add New</button>
                    </div>
                    <table className="table table-hover mb-5">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th style={{width: 220}}>Option</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                question && question.data && question.data.map(quest => {
                                    return (
                                        <tr key={quest._id}>
                                            <td>{quest.title}</td>
                                            <td>
                                                <button onClick={() => onEdit(quest._id)} className="btn btn-sm btn-success mr-2">Edit</button>
                                                <button onClick={() => onDelete(quest._id)} className="btn btn-sm btn-danger">Delete</button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    <div className="d-flex justify-content-end">
                        <Pagination
                            activePage={question.current_page}
                            itemsCountPerPage={10}
                            totalItemsCount={question.total}
                            pageRangeDisplayed={5}
                            onChange={handleChangeTable}
                            itemClass="page-item"
                            linkClass="page-link"
                        />
                    </div>
                </div>
                <div className="tab-pane fade" id="information" role="tabpanel" aria-labelledby="information-tab">
                    <div className="col-12" style={{minHeight: 500}}>
                        <Editor editorState={information} onEditorStateChange={(e) => handleChangeInformation(e)} />
                    </div>
                    <div className="col-12 text-right">
                        <button type="button" className={`btn btn-primary ${loadingQuestion && loadingQuestion ? 'btn-disabled' : ''}`} disabled={loadingQuestion} onClick={onUpdateInformation}>
                            { !loadingQuestion ? 'Save Changes' : 'Loading...' }
                        </button>
                    </div>
                </div>
                <div className="tab-pane fade" id="advice" role="tabpanel" aria-labelledby="advice-tab" style={{minHeight: 500}}>
                    <div className="col-12" style={{minHeight: 500}}>
                        <Editor editorState={advice} onEditorStateChange={(e) => handleChangeAdvice(e)} />
                    </div>
                    <div className="col-12 text-right">
                        <button type="button" className={`btn btn-primary ${loadingQuestion && loadingQuestion ? 'btn-disabled' : ''}`} disabled={loadingQuestion} onClick={onUpdateAdvice}>
                            { !loadingQuestion ? 'Save Changes' : 'Loading...' }
                        </button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default NavbarAdmin