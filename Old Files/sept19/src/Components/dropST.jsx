import './dropST.css'

export default function dropST() {
 
  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <div class="dropdownST">
  <a href="#news" style={{ minWidth: '160px' }}>Student Task<i class="fa fa-angle-down"></i> </a>
  <div class="dropdown-contentST">
    <a href="#"> <i class="fa fa-get-pocket" aria-hidden="true"></i>Others<i class="fa fa-angle-right" aria-hidden="true"></i></a>
    <div class="sub-dropdownST1">
      <a href="#"><i class="fa fa-angle-right" aria-hidden="true"></i>2020 - Issue 2</a>
      <a href="#"><i class="fa fa-angle-right" aria-hidden="true"></i>2021 - Issue 1</a>
      <a href="#"><i class="fa fa-angle-right" aria-hidden="true"></i>2021 - Issue 2 (September)</a>
      <a href="#"><i class="fa fa-angle-right" aria-hidden="true"></i>2022 - Issue 1 (March)</a>
      <a href="#"><i class="fa fa-angle-right" aria-hidden="true"></i>2022 - Issue 2 (September)</a>
    </div>
  </div>
  
  <div class="dropdown-contentST2">
    <a href="#" class="mobile-version-trigger"> <i class="fa fa-get-pocket" aria-hidden="true"></i>SAFAD Facebook Frame<i class="fa fa-angle-right" aria-hidden="true"></i></a>
    <div class="sub-dropdownST2">
      <a href="#"><i class="fa fa-angle-right" aria-hidden="true"></i>SAFAD Facebook Frame</a>
    </div>
  </div>
  
</div>

    </>
  );
}


