import { Link } from 'react-router-dom';

export default function Post({post}) {
	return (
		<Link to={`/posts/${post.id}`}>
			<div className="post">
				<div className='header'>
					<img src='https://i.pravatar.cc/40' alt="avatar" width='48px'/>
					<div>
						<span className="name">Заглушка для имени</span>
						<span className="optionally">Заглушка</span>
					</div>
				</div>
				<div className='body'>{post.content}</div>
			</div>
		</Link>
	)
}
