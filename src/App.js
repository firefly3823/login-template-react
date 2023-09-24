import './App.css';
import Form from './component/Form';
import 'bootstrap/dist/css/bootstrap.css'
import logoLeft from './icons/leftlogo.svg'

function App() {
  return (
    <div className='container-fluid '>
      <div className="row text-center h-100">
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
          <h1 className='pb-5'>TEXT BOOK</h1>
          <div style={{width:"400px"}}><img src={logoLeft} alt="" srcset="" /></div>
        </div>
        <div className="col-md-6 d-flex justify-content-center align-self-center"><Form /></div>
      </div>
      
    </div>
  );
}

export default App;
