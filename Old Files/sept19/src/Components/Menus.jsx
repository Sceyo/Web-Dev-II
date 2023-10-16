import './Menus.css'
import DropF from './dropfeatures'
import PPS from './dropPPS'
import Caloy from './dropCaloy'
import SM from './dropSM'
import ST from './dropST'
import SS from './dropSS'
import OP from './dropOP'

export default function Menus() {
 

  return (
    <>
      <div className="nav-container">
        <DropF/>
        <PPS/>
        <Caloy/>
        <SM/>
        <ST/>
        <SS/>
        <OP/>
      </div>
    </>
  );
}


