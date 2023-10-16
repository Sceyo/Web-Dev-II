import './Menus.css'
import DropF from './dropfeatures'
import PPS from './dropPPS'
import Caloy from './dropCaloy'
import SM from './dropSM'
import ST from './dropST'
import SS from './dropSS'
import OP from './dropOP'
import MVP from './dropMVP'
import Eval from './dropEval'
import Admin from './dropAdmin'
import JP from './dropJP'
import OSA from './dropOSA'
import DF from './dropDF'
import PN from './dropPN'
import SPOD from './dropSPOD'
import PB from './dropPB'

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
        <MVP/>
        <Eval/>
        <Admin/>
        <JP/>
        <OSA/>
        <DF/>
        <PN/>
        <SPOD/>
        <PB/>
      </div>
    </>
  );
}


