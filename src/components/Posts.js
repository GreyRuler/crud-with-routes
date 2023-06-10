import useJsonFetch from '../hooks/useJsonFetch';
import Post from './Post';

export default function Posts() {
	const url = `${process.env.REACT_APP_URL}/posts`
	const {data: posts, isError, isLoading} = useJsonFetch(url, {method: 'GET'})
	return (
		<div className='posts'>
			{posts.map(post => <Post key={post.id} post={post}/>)}
		</div>
	)
}
