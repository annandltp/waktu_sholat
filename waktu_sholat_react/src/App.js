import { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  useEffect(() => {
    window.waktuSholat();
    const tes = window.fixedToHijri(737999);
  });

  return (
    <div className="App">
      <div style={{fontFamily: 'GoellamantsRegular'}}>
        <div className="container-fluid text-center">
          <div className="row">
            <div className="col-sm-3">
              <div className="hari text-left" id="hari" />
              <div className="tgl text-left" id="tgl" />
              <div className="tgl text-left" id="hijri" />
            </div>
            <div className="col-sm-5 text-center ">
              <img src="img/anandela.png" width={600} height={240} />
            </div>
            <div className="col-sm-4 text-right">
              <div className="jam" id="jam" />
            </div>
          </div>
        </div>
        <div className="isi">
          {/* Modal Azan*/}
          <div className="modal fade" id="ModalAzan" role="dialog">
            <div className="modal-dialog modal-dialog-centered modal-lg">
              <div className="modal-content">
                <div className="modal-header" style={{padding: '30px 90px'}}>
                  <h1>Memasuki Waktu Azan</h1>
                </div>
                <div className="modal-body">
                  {/* <img src="img/azan.jpg"> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="container-fluid text-center">
            <div className="row">
              <div id="csubuh" className="col-lg m-3">
                <img src="img/moon.png" className="rounded-circle" alt width={64} height={64} />
                <h1>SUBUH</h1>
                <h1>
                  <div className="jam2" id="subuh" />
                </h1>
              </div>
              <div id="cterbit" className="col-lg m-3">
                <img src="img/sunrise.png" className="rounded-circle" alt width={64} height={64} />
                <h1>TERBIT</h1>
                <h1>
                  <div className="jam2" id="terbit" />
                </h1>
              </div>
              <div id="czuhur" className="col-lg m-3">
                <img src="img/sun.png" className="rounded-circle" alt width={64} height={64} />
                <h1>ZUHUR</h1>
                <h1>
                  <div className="jam2" id="zuhur" />
                </h1>
              </div>
              <div id="cashar" className="col-lg m-3">
                <img src="img/sun.png" className="rounded-circle" alt width={64} height={64} />
                <h1>ASHAR</h1>
                <h1>
                  <div className="jam2" id="ashar" />
                </h1>
              </div>
              <div id="cmaghrib" className="col-lg m-3">
                <img src="img/sunrise.png" className="rounded-circle" alt width={64} height={64} />
                <h1>MAGHRIB</h1>
                <h1>
                  <div className="jam2" id="maghrib" />
                </h1>
              </div>
              <div id="cisya" className="col-lg m-3">
                <img src="img/moon.png" className="rounded-circle" alt width={64} height={64} />
                <h1>ISYA</h1>
                <h1>
                  <div className="jam2" id="isya" />
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
