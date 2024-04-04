// import logo from './logo.svg';
import './App.css';
import DataFetching from './DataFetching';
import {Routes, Route} from 'react-router-dom'
import GetAllPost from './GetAllPost';
import PostForm from './PostForm';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path ='/' element ={<GetAllPost />}/>
        <Route path ='/single-post' element ={<GetAllPost />}/>
        <Route path ='/post-data' element ={<PostForm />}/>
        <Route path ='/getpost' element ={<DataFetching />}/>
      </Routes>
      
    </div>
  );
}

export default App;
