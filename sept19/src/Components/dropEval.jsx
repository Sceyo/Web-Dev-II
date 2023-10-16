import './dropEval.css'


export default function dropEval() {
 

  return (
    <>
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <div class="dropdownEval">
  <a href="#news" style={{ minWidth: '160px' }}>Evaluation<i class="fa fa-angle-down"></i> </a>
  <div class="dropdown-contentEval">
    <a href="#"> <i class="fa fa-get-pocket" aria-hidden="true"></i>Evaluation<i class="fa fa-angle-right" aria-hidden="true"></i></a>
    <div class="sub-dropdownEval1">
      <a href="#"><i class="fa fa-angle-right" aria-hidden="true"></i>Evaluation</a>
     
    </div>
  </div>

</div>
    </>
  );
}


