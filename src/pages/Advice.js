import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

function Advice() {
    return (
     <Fragment>
            <div className="bradcam_area bradcam_overlay"  style={{ backgroundImage: `url(${(require('../assets/img/bg.png'))})` }}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="bradcam_text">
                                <h3>Saran</h3>
                                <p><Link to ="/">Home /</Link> saran</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="welcome_docmed_area">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <h1>Saran</h1>
                            <p><strong>Olahraga</strong> Penelitian menunjukkan bahwa olahraga dapat memberi 
                            manfaat pada kondisi mental dan fisik seseorang dan dapat mengurangi stres.</p>
                            <p>Mengurangi asupan alkohol, obat-obatan, dan kafein > Zat-zat ini dapat memperburuk stres.</p>
                            <p> Memerhatikan asupan nutrisi > Pola makan yang sehat dan seimbang dengan memperbanyak konsumsi buah dan sayur dapat meningkatkan sistem kekebalan tubuh pada saat stres. 
                            Hal ini berguna untuk mencegah stres bertambah parah dan mencegah gangguan fisik.</p>
                            <p>Menentukan skala prioritas > Luangkan waktu untuk menyusun daftar berbagai tugas dan kegiatan dari mulai yang paling penting. 
                            Fokus menjalani kehidupan sesuai dengan skala prioritas yang Anda susun, agar hal-hal penting tidak terlewatkan.</p>
                            <p>Luangkan waktu untuk ‘me time’ > Anda memerlukan waktu untuk 
                            diri sendiri yang dapat Anda manfaatkan untuk rileks dan melakukan hal yang Anda sukai.</p>
                            <p>Berlatih pernapasan dan relaksasi > Meditasi, pijat, dan yoga dipercaya dapat membantu mengurangi stres. 
                            Teknik pernapasan dan relaksasi dapat membuat Anda lebih rileks</p>
                            <p>Berbicara dengan orang di sekitar Anda > Menceritakan apa yang Anda rasakan dan khawatirkan pada keluarga maupun teman dapat meringankan stres yang Anda rasakan. 
                            Anda tidak akan merasa sendiri dan bukan tidak mungkin bisa mendapatkan solusi dari masalah yang Anda alami.</p>
                            <p>Kenali tanda-tanda stres > Terkadang karena rasa cemas yang berlebihan terhadap suatu masalah, 
                            kita jadi tidak menyadari bahwa masalah tersebut telah menyebabkan perubahan pada tubuh kita.</p>
                            <p>Mencari tahu penyebab stres dan mencari solusi > Memerhatikan gejala dan menemukan penyebab stres dapat menjadi langkah baik untuk dapat mengatasi stres. Setelah Anda mengetahui penyebabnya, 
                            Anda akan lebih mudah untuk mengambil langkah yang pasti untuk mengurangi stres.</p>
                            <p>Ketahui apa yang dapat mengurangi stres Anda > Setiap orang memiliki cara tersendiri untuk mengatasi stres. Temukanlah hal positif yang dapat Anda lakukan untuk mengurangi stres Anda, 
                            sehingga Anda tahu harus berbuat apa ketika stres mungkin menyerang</p>
                            <p>Tidurlah yang cukup > Tubuh Anda  kemungkinan dapat pulih dari kondisi ini sehari setelah Anda tidur.</p>
                        </div>
                    </div>
                </div>
            </div>
    </Fragment>
    )
}

export default Advice