import './dropPB.css'


export default function dropPB() {
 

  return (
    <>
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <div class="dropdownPB">
  <a href="#news" style={{ minWidth: '160px' }}>USC Publishing House<i class="fa fa-angle-down"></i> </a>
  <div class="dropdown-contentPB">
    <a href="#"> <i class="fa fa-get-pocket" aria-hidden="true"></i>Digital Books<i class="fa fa-angle-right" aria-hidden="true"></i></a>
  </div>
  <div class="dropdown-contentPB2">
    <a href="#"><i class="fa fa-angle-right" aria-hidden="true"></i> Tertiary Digital Books</a>
  </div>
</div>
    </>
  );
}


