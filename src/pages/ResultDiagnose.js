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
                                        <p>Jalani Hidup Seperti Biasa</p>
                                    </Fragment> 
                                     : result <= 8.4 ? 
                                     <Fragment>
                                        <strong>Anda Mengalami Stress Tingkat Ringan</strong>
                                        <p>saran</p>
                                        <strong>Menghirup aroma terapi</strong>
                                        <p>Aroma yang sifatnya 
                                        menenangkan seperti lavender, rosemary, peppermint, dan vanila juga cocok untuk meredakan stres</p>
                                        <strong>Jangan terlalu bersemangat</strong>
                                        <p>Anda akan mudah lelah 
                                        jika Anda terlalu bersemangat biasakan diri untuk tidak terlalu excited dalam menghadapi suatu hal.</p>
                                        <strong>Minum air putih</strong>
                                        <p>Mereguk segelas air putih merupakan cara menghilangkan stres yang paling mudah sekaligus efektif. Pasalnya dehidrasi 
                                        bisa meningkatkan stres dan kegelisahan. Jadi pastikan Anda selalu mengonsumsi air dalam jumlah memadai.</p>
                                        <strong>Mendengarkan musik selama 30 menit</strong>
                                        <p>Membuat kita lebih tenang ketika akan menghadapi situasi yang menegangkan . Bergerak sesuai 
                                        dengan irama lagu juga semakin menambah emosi positif dan memicu produksi endorphin (hormon bahagia).</p>
                                        <strong>Tersenyum/tertawa</strong>
                                        <p>memaksa diri untuk tersenyum bisa merangsang otak untuk melepaskan ketegangan </p>
                                        <strong>Mengunyah permen karet</strong>
                                        <p>Mengunyah permen karet membuat kita menjadi lebih rileks</p>
                                        <strong>Menonton film atau video lucu</strong>
                                        <p>Teknik distraksi lainnya juga bisa datang dari menonton film atau video lucu. Tontonan secara audio visual ini menstimulai otak Anda untuk merespon dan tertawa. Tertawa 
                                        terbahak bahak sangat sehat untuk tubuh dan pikiran. Stres menghilang, dan perasaan menjadi bahagia. </p>
                                        <strong>Bercanda</strong>
                                        <p>Selain tertawa terbahak bahak, membuat orang lain tertawa juga merupakan kondisi yang menyenangkan. Sesekali lontarkan candaan pada orang lain dan buat mereka tertawa.
                                        Candaan membuat situasi mencair dan lebih santai, diselimuti aura kebahagiaan yang menyenangkan.</p>
                                    </Fragment>  :  result <= 18.4 ?
                                    <Fragment>
                                        <strong>Anda Mengalamai Stres Tingkat Sedang</strong>
                                        <p>saran</p>
                                        <strong>Stretching ringan</strong>
                                         <p>Peregangan ringan berfungsi 
                                            untuk membantu melemaskan otot, meningkatkan endorphin, dan melepaskan ketegangan</p>
                                         <strong>Istirahatdi luar ruangan</strong>
                                         <p>Lakukan hal ini di luar ruangan agar Anda bisa berganti suasana. 
                                            Jalan kaki sedikit juga bagus untuk melemaskan otot dan menyegarkan pikiran</p>
                                         <strong>Mencoba olahraga lari</strong>
                                         <p>Olahraga lari bisa membantu memperbaiki mood, meningkatkan produksi endorphin (hormon bahagia), 
                                            dan membantu menyalurkan pikiran-pikiran negatif dengan cara sehat. </p>
                                         <strong>Wudhu</strong>
                                         <p>Bagi mahasiswa yang muslim, Nabi Muhammad SAW menyarankan untuk berwudhu ketika amarah menguasai. 
                                            Pasalnya siraman air dingin memang dapat membantu menenangkan saraf yang tegang</p>
                                         <strong>Salat</strong>
                                         <p>Bagi mahasiswa yang muslim Gerakan salat adalah satu bentuk peregangan 
                                            yang baik untuk melancarkan peredaran darah dan produksi hormon</p>
                                         <strong>Berdoa</strong>
                                         <p>Berdoa juga bisa menjadi terapi konsultasi dan bentuk komunikasi dengan Sang Pencipta </p>
                                         <strong>Istighfar</strong>
                                         <p>Bagi mahasiswa yang muslim Mengucapkan kalimat istighfar 
                                            sama dengan sugesti diri agar otak terangsang untuk melepaskan hormon anti-stres</p>
                                         <strong>Kurangi konsumsi gula, kafein, dan daging merah</strong>
                                         <p>Meskipun terlihat remeh, membatasi konsumsi ketiga makanan ini merupakan cara menghilangkan stres yang cukup efektif. Dalam porsi yang berlebihan, 
                                            gula, kafein, dan daging merah bisa meningkatkan hormon stres serta memicu kegelisahan</p>
                                         <strong>Sempatkan untuk menenangkan diri</strong>
                                         <p>Latihan pernapasan akan berguna untuk membantu menurunkan tingkat stres dan ketegangan. Coba untuk mengambil napas perlahan melalui hidung, tahan napas selama beberapa detik, lalu hembuskan napas melalui mulut. Ulangi sebanyak yang diperlukan untuk membantu mencegah 
                                            napas pendek – pendek dan memburu yang dialami ketika sedang stres atau mengalami ketegangan</p>
                                         <strong>Coba untuk mengatur diri sendiri</strong>
                                         <p>Jika sebelumnya selalu ada orang tua yang mengatur segala sesuatunya untuk Anda, kini tentunya Anda harus belajar mengatur diri sendiri, termasuk mendisiplinkan diri. Mulai dari mengatur waktu, mengatur jadwal kegiatan, mengatur perlengkapan kuliah dan lain sebagainya harus dilakukan dengan terorganisir agar tidak menimbulkan 
                                            stres karena ketidak teraturan yang menyusahkan. Sangat penting untuk tetap terorganisir dengan baik</p>
                                         <strong>Buatlah jadwal harian</strong>
                                         <p>Ketika merencanakan aktivitas Anda ,pastikan bahwa ada waktu yang disediakan untuk belajar dan menyelesaikan tugas – tugas kuliah untuk cara mengatasi stres pada mahasiswa. Anda mungkin memerlukan lebih banyak waktu daripada yang disangka pada awalnya. Jadi paling baik untuk menyediakan waktu lebih daripada biasanya untuk mengantisipasi 
                                            kejadian tidak terduga yang akan menghalangi Anda untuk belajar dengan fokus.</p>
                                         <strong>Makan makanan bergizi</strong>
                                         <p>Anak kuliah identik dengan makan makanan yang serba cepat saji atau makanan instan, demi mengirit uang bulanan. Meski begitu, ke seringan makan junk food akan berbalik membahayakan kesehatan tubuh dan mental Anda. Makanan cepat saji minim gizi sehingga 
                                            justru menurunkan energi tubuh. Tubuh yang tidak fit lebih rentan mengalami stres</p>
                                         <strong>Lakukan relaksasi tubuh/massase</strong>
                                         <p>Massase atau pijat tubuh sangat diperlukan sesekali. Selain pikiran Anda yang penuh tekanan, otot-otot tubuh pun juga menegang dan kelelahan. Apalagi jika rutinitas harian begitu banyak, maka otot tubuh Anda juga memerlukan istirahat sejenak. 
                                            Pemijatan tubuh memberikan efek rileksasi pada otot dan membuang rasa lelah</p>
                                         <strong>Mandi dengan air hangat</strong>
                                         <p>Selain masase, mandi air hangat juga efektif untuk mengembalikan stamina tubuh Anda kembali. Setelah seharian terpapar stresor dari mulai berangkat kerja, sampai pulang kerja, tubuh Anda perlu waktu untuk mengembalikan dirinya. 
                                            Mandi air hangat juga memberikan efek rileksasi dan sejenak menghilangkan pikiran-pikiran yang penat</p>
                                         <strong>Lakukan hobi yang disukai</strong>
                                         <p>Lakukan hobi dengan rutin dan teratur sebagai pengalihan perhatian yang kontinu setelah mendapatkan stresor. Lakukan hobi seperti berenang, memanah, berkuda, bertanam atau apa pun lainnya</p>
                                         <strong>Beribadah</strong>
                                         <p> Beribadah adalah cara terbaik menghilangkan stres. Beribadah membawa diri kembali pada keadaan ketiadaan, atau jauh dari title harta benda, posisi, jabat, dan lain sebagainya. Ketika bersimpuh di hadapan Tuhan, maka manusia hanyalah 
                                            hamba yang tidak memiliki kuasa apa pun dan hanya berharap bantuannya untuk bisa bertahan dalam hidup</p>
                                         <strong>Jangan suka menunda</strong>
                                         <p>Menunda pekerjaan sama saja membuat tugas semakin menumpuk. Bukannya selesai  malah tugasmu semakin banyak. Menunda berarti kamu juga membuat waktu berjalan lebih lama. 
                                            Hal ini dapat memicu kegelisahan karena kamu belum menyelesaikan tugas yang diberikan</p>
                                    </Fragment> :
                                     <Fragment>
                                        <strong>Anda Mengalami Stres Tingkat Berat</strong>
                                        <p>saran</p> 
                                        <strong>Belajar yoga</strong>
                                        <p>Teknik pernapasan dan meditasi dalam yoga sudah terbukti ampuh untuk memperbaiki mood bagi penderita stres dan depresi. Cobalah rutin yoga, minimal 
                                        dengan pose-pose penangkal stres seperti sukhasana, child's pose, triangle pose, atau camel pose</p>
                                        <strong>Puasa gadget</strong>
                                        <p>Pengguna internet yang sangat aktif juga 5 kali lebih rentan terhadap depresi. 
                                        Jadi ketika Anda merasa stres, ada baiknya mengurangi kontak dengan gadget. </p>
                                        <strong>Memelihara binatang</strong>
                                        <p>Berinteraksi dengan binatang bisa membantu tubuh untuk melepaskan hormon oxytocin dan menurunkan level stres. </p>
                                        <strong>Mendapatkan cukup waktu tidur</strong>
                                        <p>Melanggar waktu tidur dan beristirahat akan meningkatkan level stres Anda. Kurang tidur akan mempengaruhi bagaimana cara kita menanggapi berbagai pemicu stres keesokan harinya dan membuat otak tidak dapat bekerja secara efisien sehingga menyulitkan Anda untuk berkonsentrasi, 
                                        memusatkan perhatian, sulit mengingat atau memelajari hal baru, dan mengambil keputusan. </p>
                                        <strong>Bercengkrama dengan orang sekitar</strong>
                                        <p>Cara paling efektif yaitu dengan bercengkerama dengan orang lain dan membicarakan banyak hal lainnya di luar hal-hal yang membuat stres. 
                                        Berinteraksi dan berkomunikasi dengan orang lain membuat diri kita merasa tidak sendirian dan kesepian</p>
                                        <strong>Manjakan diri sesekali</strong>
                                        <p>Saat merasa suntuk dan lelah dengan segudang aktivitas yang sangat padat, cobalah untuk memanjakan diri di akhir pekan. Pergi ke salon, karaoke bersama teman, menonton bioskop, atau pergi ke tempat-tempat yang Anda sukai bisa menjadi salah satu cara mengatasi stres yang efektif.
                                        Sesekali memanjakan diri tidak ada salahnya</p>
                                        <strong>Siapkan tempat pribadi</strong>
                                        <p>Pastikan agar Anda memiliki ruang pribadi untuk melakukan beberapa hal agar dapat fokus dan berkonsentrasi walaupun sedang tinggal bersama teman sekamar sebagai cara mengatasi stres pada mahasiswa. Jika tidak memungkinkan untuk tenang di kamar asrama Anda, temukan tempat tenang di perpustakaan, kantin, atau di mana saja yang memungkinkan 
                                        yang dapat dikunjungi secara rutin agar dapat mempertahankan fokus dan menyelesaikan semua tugas</p>
                                        <strong>Banyak bergerak</strong>
                                        <p>Gerak tubuh dapat menjadi cara mengatasi stres pada mahasiswa, menurunkan tingkat ketegangan dan menaikkan mood. Anda dapat mengusahakan untuk berjalan-jalan dalam lingkungan 
                                        kampus atau jika tempat tujuan di dalam kampus dapat dijangkau dengan jalan kaki maka berjalanlah</p>
                                        <strong>Tetap terhubung dengan keluarga</strong>
                                        <p>Tetap terhubung dengan keluarga akan membantu mengurangi kesepian yang dirasakan karena jauh dari rumah.  Anda bisa menjaga komunikasi dengan keluarga melalui berbagai alat yang memungkinkan, 
                                        terlebih lagi dengan adanya kecanggihan teknologi sekarang ini yang akan sangat memudahkan komunikasi</p>
                                        <strong>Jangan memaksakan diri</strong>
                                        <p>Jangan memaksakan diri untuk hal apa pun. Memang bagus menyelesaikan suatu hal sebelum pada waktunya tapi Anda juga perlu tahu batasan.</p>
                                        <strong>Melakukan meditasi</strong>
                                        <p>Meditasi merupakan teknik rileksasi dengan cara mengosongkan pikiran, memfokuskan pikiran, berlatih mengatur pola nafas, merilekskan tubuh dan membersihkan pikiran dari hal-hal penyebab stres. Meditasi bisa juga dibarengi 
                                        dengan memilih tempat yang sepi atau tenang, berada di sekitar air yang mengalir, dan udara luar yang segar</p>
                                        <strong>Liburan</strong>
                                        <p>Liburan adalah bagian yang paling tidak boleh terlewat. Siapkan waktu untuk berlibur minimal satu kali setiap tahunnya. Liburan bisa dilakukan bersama teman ataupun keluarga. Pergilah 
                                        berlibur ke tempat-tempat yang indah seperti pantai atau gunung untuk melepaskan beban pikiran Anda.</p>
                                        <strong>Makan makanan sehat dan konsumsi suplemen</strong>
                                        <p>Konsumsi makanan sehat dan juga konsumsi suplemen nutrisi tubuh. Dikala pikiran Anda stres, tubuh Anda sedang bekerja keras untuk menghilangkan stres tersebut, yang berdampak stres pada tubuh itu sendiri. Manjakan tubuh Anda dengan 
                                        makanan bergizi setiap hari dan jangan lupa tambahkan dengan suplemen ketika aktivitas Anda padat</p>
                                        <strong>Atur ulang tujuan dan prinsip hidup</strong>
                                        <p>Apabila kondisi stres Anda sudah cukup berat dan merasa apa yang Anda lakukan sudah tidak sesuai atau hidup merasa seperti sulit. Pikirkan kembali tujuan hidup Anda dan prinsip hidup Anda. Apa yang menjadi tujuan hidup Anda, dan apakah kondisi penuh tekanan yang Anda lakukan saat ini dapat membuat diri Anda mencapai tujuan tersebut atau tidak. Kembalikan pada prinsip hidup Anda yang penuh semangat sesuai tujuan. Pikirkan juga cara untuk menyemangati diri 
                                        sendiri dan melanjutkan apa yang sudah Anda mulai. Percaya bahwa suatu saat kesuksesan akan Anda dapatkan</p>
                                        <strong>Pilih waktu yang paling membuatmu fokus saat mengerjakan skripsi</strong>
                                        <p>Beberapa orang mampu tetap fokus kapan pun dan di manapun. Namun sebagian yang lain memiliki waktu-waktu tertentu untuk bisa fokus dalam mengerjakan sesuatu.
                                        Begitu juga dengan skripsi, tak jarang fokus kita dapat teralih</p>
                                        <strong>Tetap lakukan rutinitasmu seperti biasa</strong>
                                        <p>Sering kali karena ingin cepat menyelesaikan skripsi, rutinitas sehari-hari jadi terabaikan. Para mahasiswa semester akhir ini jadi cenderung fokus pada pengerjaan skripsi saja. Hal ini justru membuat pikiran menjadi stres karena terlalu dibebani target. Kerjakan saja skripsimu dengan baik, alih-alih lakukan rutinitasmu seperti biasa. Tetaplah bersosialisasi, 
                                        keluar ruangan untuk mencari udara segar, atau sekedar menikmati kopi pagi di teras dan membaca berita</p>
                                        <strong>Ciptakan suasana penelitian skripsi yang menyenangkan</strong>
                                        <p>Bagi tim kualitatif, kalian bisa melakukan wawancara di ruang terbuka, mungkin cafe atau taman yang memberi aura menyenangkan. Bagi tim kuantitatif, 
                                        sebarkan kuesioner kalian sambil membuat acara donasi atau apa pun demi menciptakan kesenangan</p>
                                        <strong>Tak perlu bersaing dengan temanmu tentang siapa yang lebih cepat selesai dan wisuda</strong>
                                        <p>Yang tak kalah penting saat berada dalam fase pengerjaan skripsi adalah jangan pernah merasa skripsi sebagai ajang perlombaan. Melihat teman sudah hampir wisuda bisa saja mendorong 
                                        keinginan untuk segera menyelesaikan skripsi, tapi hal ini sering kali malah membebani pikiranmu. </p>
                                        <strong>Meminta medikasi dari psikiater</strong>
                                        <p>Kalau stres berat sudah mengarah ke depresi, ada baiknya jika Anda mengunjungi psikiater untuk mendapatkan penanganan profesional. 
                                        Biasanya pasien juga akan dibekali dengan obat untuk mengatasi depresi </p>
                                        <strong>Konsultasi pada ahli</strong>
                                        <p>Jika stres berat sulit sekali dihilangkan dan terus kembali, maka konsultasikan pada ahli. Atau apabila Anda menemukan tanda dan gejala stres berat yang mulai tampak kelainan pada seseorang, 
                                        maka sarankan untuk berkonsultasi pada ahlinya sebelum terlambat dan semakin parah. </p>
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