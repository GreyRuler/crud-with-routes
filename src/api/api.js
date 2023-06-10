export async function createPost(content) {
	const url = `${process.env.REACT_APP_URL}/posts`
	const response = await fetch(url, {
		method: 'POST',
		body: JSON.stringify({content})
	})
	if (!response.ok) console.warn(response)
	return
}

export async function editPost(id, content) {
	const url = `${process.env.REACT_APP_URL}/posts/${id}`
	const response = await fetch(url, {
		method: 'PUT',
		body: JSON.stringify({content})
	})
	if (!response.ok) console.warn(response)
	return
}

export async function deletePost(id) {
	const url = `${process.env.REACT_APP_URL}/posts/${id}`
	const response = await fetch(url, {method: 'DELETE'})
	if (!response.ok) console.warn(response)
	return
}

