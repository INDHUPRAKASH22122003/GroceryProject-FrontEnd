import './App.css'
import './Login.css'
import { Link } from 'react-router-dom';
function Login() {
  return (
    <div className="App">
    <body className="hi">
    <header className="App-header">
    <img className='ig' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDGRj5IjVRvlk9vxoUhgSV6qCTJC7luunW9Q&usqp=CAU" alt="veg"/>
    <h4>CRUD OPERATIONS</h4>
    <Link to="/Main"><button className='but'>POST</button><br/><br/></Link>
    <Link to="/Get"><button className='but'>GET</button><br/><br/></Link>
    <Link to="/Upda"><button className='but'>PUT</button><br/><br/></Link>
    <Link to="/Del"><button className='but'>DELETE</button><br/></Link>
    </header>
    </body>
    </div>
  );
}

export default Login