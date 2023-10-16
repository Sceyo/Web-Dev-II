import 'bootstrap/dist/css/bootstrap.min.css';
import USC from './Logo.png';
import earth from './earth.png';

export default function Test() {
  return (
    <>
      <ul class="nav justify-content-end">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Active</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
    </ul>
    </>
  );
}
