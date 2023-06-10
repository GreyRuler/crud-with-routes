import { Link } from 'react-router-dom';
import Posts from './Posts';

export default function HomePage() {
	return (
		<>
			<div className="home">
				<Link className="btn-action" to='/posts/new'>Создать пост</Link>
			</div>
			<Posts />
		</>
	)
}
