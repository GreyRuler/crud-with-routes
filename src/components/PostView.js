import { Link, useNavigate, useParams } from 'react-router-dom';
import useJsonFetch from '../hooks/useJsonFetch';
import { deletePost } from '../api/api';

export default function PostView() {
	const {postId} = useParams()
	const url = `${process.env.REACT_APP_URL}/posts/${postId}`
	const options = {
		method: 'GET'
	}
	const {data: { post }, isError, isLoading} = useJsonFetch(url, options)
	const navigate = useNavigate()

	const onRemovePost = async () => {
		await deletePost(postId)
		navigate('/')
	}

	return (
		<div className="post">
			<div className='header'>
				<img src='https://i.pravatar.cc/40' alt="avatar" width='48px'/>
				<div>
					<span className="name">Заглушка для имени</span>
					<span className="optionally">Заглушка</span>
				</div>
			</div>
			<div className='body'>{post?.content}</div>
			<div className='footer'>
				<Link className='btn-action' to={`/posts/edit/${postId}`}>Изменить</Link>
				<button className='btn-remove' onClick={onRemovePost}>Удалить</button>
			</div>
		</div>
	)
}
