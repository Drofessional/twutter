// Modules & Libraries
import { Routes, Route, Link } from 'react-router-dom'
// Components
import Home from './pages/Home';
import NewPost from './pages/NewPost';
import PostDetails from './pages/PostDetails';
import Profile from './pages/Profile';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
     <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/:handle" element={<Profile/>}/>
        <Route path="/post/:id" element={<PostDetails/>}/>
        <Route path="/new" element={<NewPost/>} />
        <Route path="/auth/signup" element={<Signup/>} />
        <Route path="/auth/signin" element={<Signin/>} />
      </Routes>
    </>
  );
}

export default App;
