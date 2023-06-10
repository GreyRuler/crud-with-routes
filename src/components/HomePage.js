import { Link } from 'react-router-dom';

export default function Header() {
	return (
		<div className="header">
			<Link className="btn-action" to='/posts/new'>Создать пост</Link>
		</div>
	)
}
