import { Link, useNavigate, useParams } from 'react-router-dom';
import useJsonFetch from '../hooks/useJsonFetch';
import { useEffect, useState } from 'react';
import { editPost } from '../api/api';

export default function PostEditView() {
	const {postId} = useParams()
	const url = `${process.env.REACT_APP_URL}/posts/${postId}`
	const options = {
		method: 'GET'
	}
	const {data: { post }, isError, isLoading} = useJsonFetch(url, options)
	const [content, setContent] = useState(post?.content)
	const navigate = useNavigate()

	const onChange = (e) => {
		setContent(e.target.value)
	}

	const onCreatePost = async () => {
		await editPost(postId, content)
		navigate(`/posts/${postId}`)
	}

	useEffect(() => {
		setContent(post?.content)
	}, [post?.content])

	return (
		<div className="post-form">
			<div className='header'>
				<Link to={`/posts/${postId}`}>
					<span className="material-symbols-outlined">close</span>
				</Link>
			</div>
			<div className="body">
				<textarea name="content" id="comment" rows="10"
						  value={content} onChange={onChange}></textarea>
			</div>
			<div className="footer">
				<button className="btn-action" onClick={onCreatePost}>
					Сохранить
				</button>
			</div>
		</div>
	)
}
