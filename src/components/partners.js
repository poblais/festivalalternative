import React from 'react';
import desjardins from "../../static/images/partners/desjardins.png";
import BGE from "../../static/images/partners/BGE.png";
import BSM from "../../static/images/partners/BSM.png";
import comfort from "../../static/images/partners/comfort.png";
import courrier from "../../static/images/partners/courrier.png";
import croteau from "../../static/images/partners/croteau.png";
import e2rt from "../../static/images/partners/e2rt.png";
import evimbec from "../../static/images/partners/evimbec.png";
import face from "../../static/images/partners/face.png";
import heritage from "../../static/images/partners/heritage.png";
import korse from "../../static/images/partners/Korse.png";
import mixbus from "../../static/images/partners/Noir.png";
import thetford from "../../static/images/partners/thetford.png";
import unicanvas from "../../static/images/partners/unicanvas.png";
import routhier from "../../static/images/partners/routhier.png";


class Partners extends React.Component{
    render(){
        return(
          <div className={"partenaires"}>
              <a href="https://www.desjardins.com/index.jsp" target="_blank"><img key="1" src={desjardins} alt="Desjardins"></img></a>
              <a href="" target="_blank"><img key="2" src={BGE} alt="BGE"></img></a>
              <a href="https://www.brasseurdemontreal.com/" target="_blank"><img key="3" src={BSM} alt="BSM"></img></a>
              <a href="https://www.choicehotels.com/" target="_blank"><img key="4" src={comfort} alt="Comfort Inn"></img></a>
              <a href="https://www.courrierfrontenac.qc.ca/" target="_blank"><img key="5" src={courrier} alt="Courrier Frontenac"></img></a>
              <a href="http://www.croteauvetements.com/" target="_blank"><img key="6" src={croteau} alt="Croteau"></img></a>
              <a href="https://www.e2rt.com/" target="_blank"><img key="7" src={e2rt} alt="E2RT"></img></a>
              <a href="http://www.evimbec.ca/" target="_blank"><img key="8" src={evimbec} alt="Evimbec"></img></a>
              <a href="http://www.lafacedeboeuf.ca/" target="_blank"><img key="9" src={face} alt="Face de Boeuf"></img></a>
              <a href="https://www.heritagecentreville.com/" target="_blank"><img key="10" src={heritage} alt="Héritage Centre-ville"></img></a>
              <a href="https://korsecafebar.com/" target="_blank"><img key="11" src={korse} alt="Café Korsé"></img></a>
              <a href="https://www.mixbusstudio.com/" target="_blank"><img key="12" src={mixbus} alt="Mixbus"></img></a>
              <a href="https://www.villethetford.ca/" target="_blank"><img key="12" src={thetford} alt="Région de Thetford"></img></a>
              <a href="https://www.unicanvas.com/qc/" target="_blank"><img key="12" src={unicanvas} alt="Unicanvas"></img></a>
              <a href="http://www.routhierelectricien.com/" target="_blank"><img key="12" src={routhier} alt="Routhier Electricien"></img></a>
          </div>
        )
    }
}
export default Partners;