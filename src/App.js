import './App.css';
import Giris from './pages/giris'
import User from './pages/user'
import Navbar from './component/navbar'



const App = () => {

  return (
    <div className="container">
      <Giris />
      <User 
        name ="Tunay Özdemir"
        department = "Yazılım"
       
      />
      <hr/>
      <Navbar title="User App"/>
    </div>
  );
}

export default App;
