import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { createPost } from '../api/api';

export default function PostForm() {
	const [content, setContent] = useState('')
	const navigate = useNavigate()

	const onChange = (e) => {
		setContent(e.target.value)
	}
	const onCreatePost = async () => {
		await createPost(content)
		navigate('/')
	}

	return (
		<div className="post-form">
			<div className='header'>
				<Link to='/'>
					<span className="material-symbols-outlined">close</span>
				</Link>
			</div>
			<div className="body">
				<textarea name="content" id="comment" rows="10"
						  value={content} onChange={onChange}></textarea>
			</div>
			<div className="footer">
				<button className="btn-action" onClick={onCreatePost}>
					Создать пост
				</button>
			</div>
		</div>
	)
}
