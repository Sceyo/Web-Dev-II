
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'
import USC from './Logo.png'
import earth from './earth.png'
import ban from './ban.png'
import stud from './Kobe.jpg'
export default function Header() {


  return (
    <>
      <div class = "page-header">
        <div class = "page-logo">
          <img src = {USC} alt = "Logo" style = {{width:'460px', height: '55px'}}/>
        </div>
        <div class = "top-menu">
          <div class = "drop-top">
              <div class = "drop-earth">
                 <img src = {earth} alt = "notification" style = {{width: '20px', height: '20px'}}/>
              </div>
              <div class = "drop-ban">
                  <img src = {ban} alt = "ban notif" style = {{width: '20px', height: '20px'}}/>
              </div>
              <div class = "drop-student">
                 <img src={stud} alt="stud sub menu" id="circle-image" /><h2>20102353</h2>
              </div>
          </div>
        </div>


      </div>
    </>
  )
}


