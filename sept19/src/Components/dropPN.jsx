import './dropPN.css'


export default function dropPN() {
 

  return (
    <>
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <div class="dropdownPN">
  <a href="#news" style={{ minWidth: '160px' }}>Promissory Note<i class="fa fa-angle-down"></i> </a>
  <div class="dropdown-contentPN">
    <a href="#"> <i class="fa fa-get-pocket" aria-hidden="true"></i>Apply Promissory Note<i class="fa fa-angle-right" aria-hidden="true"></i></a>
    <div class="sub-dropdownPN1">
      <a href="#"><i class="fa fa-angle-right" aria-hidden="true"></i>Apply Promissory Note</a>
      <a href="#"><i class="fa fa-angle-right" aria-hidden="true"></i>Promissory Note History</a>
      
    </div>
  </div>

</div>
    </>
  );
}


