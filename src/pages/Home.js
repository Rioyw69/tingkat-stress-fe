import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <Fragment>
             <div className="bradcam_area bradcam_overlay"  style={{ backgroundImage: `url(${(require('../assets/img/banner2.png'))})` }}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="slider_text ">
                                <h3> <span>Apakah anda merasa stress ?</span> <br />
                                    dan ingin meringankan stress anda? </h3>
                                    <br />
                                <p>Jangan khawatir, kami punya solusinya <br /> silahkan klik tombol ini untuk mencari tahu solusinya</p>
                                <br />
                                <Link to="/diagnose" className="boxed-btn3">Konsultasi sekarang</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Home