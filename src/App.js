import './App.css'
import './assets/css/google-icons.css'
import HomePage from './components/HomePage';
import { Route, Routes } from 'react-router-dom';
import PostForm from './components/PostForm';
import PostView from './components/PostView';
import PostEditView from './components/PostEditView';

function App() {
	return (
		<div className='app'>
			<Routes>
				<Route path='/' element={<HomePage/>}/>
				<Route path='/posts/new' element={<PostForm/>}/>
				<Route path='/posts/:postId' element={<PostView/>}/>
				<Route path='/posts/edit/:postId' element={<PostEditView/>}/>
			</Routes>
		</div>
	);
}

export default App;
