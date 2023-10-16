import './dropMVP.css'


export default function dropMVP() {
 

  return (
    <>
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <div class="dropdownMVP">
  <a href="#news" style={{ minWidth: '160px' }}>Motor Vehicle Pass<i class="fa fa-angle-down"></i> </a>
  <div class="dropdown-contentMVP">
    <a href="#"> <i class="fa fa-get-pocket" aria-hidden="true"></i>Sticker Application<i class="fa fa-angle-right" aria-hidden="true"></i></a>
    <div class="sub-dropdownMVP1">
      <a href="#"><i class="fa fa-angle-right" aria-hidden="true"></i>Apply Pass</a>
      
    </div>
  </div>
</div>
    </>
  );
}


