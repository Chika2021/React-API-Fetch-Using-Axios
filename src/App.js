// import logo from './logo.svg';
import './App.css';
import DataFetching from './DataFetching';
import {Routes, Route} from 'react-router-dom'
import GetAllPost from './GetAllPost';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path ='/' element ={<GetAllPost />}/>
        <Route path ='/single-post' element ={<GetAllPost />}/>
      </Routes>
      <DataFetching />
    </div>
  );
}

export default App;
