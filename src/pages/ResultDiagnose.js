import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

function ResultDiagnose(props) {
    const result = props.match.params.result
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
                        <h1>Hasil Konsultasi</h1>
                        { result <= 4 ?
                                    <Fragment>
                                        <strong>Anda Tidak stres Hanya Kelelahan </strong>
                                        <p>Istirahat yang cukup</p>
                                        <p>Makan Dengan Teratur</p>
                                        <p>Jalani Hidupe Seperti Biasa</p>
                                    </Fragment> 
                                     : result <= 8.4 ? 
                                     <Fragment>
                                        <p>Anda Mengalami Stress Tingkat Rigan </p>
                                        <p>Saya sarankan anda makan-makanan bergizi seimbang</p>
                                    </Fragment>  :  result <= 18.4 ?
                                    <Fragment>
                                        <p>Anda Mengalamai Stres Tingkat Sedang </p>
                                        <p>Saya sarankan anda makan-makanan bergizi seimbang</p>
                                    </Fragment> :
                                     <Fragment>
                                        <p>Anda Mengalami Stres Tingkat Berat</p>
                                        <p>Saya sarankan anda makan-makanan bergizi seimbang</p>
                                    </Fragment> 
                        }
                    </div>
                </div>
            </div>
        </div>

    </Fragment>
        
    )
}

export default ResultDiagnose