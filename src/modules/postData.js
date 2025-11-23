const postData = () => {
	return fetch("https://jsonplaceholder.typicode.com/posts", {
		method: "POST",
		body: JSON.stringify({
			title: "andrew",
			body: "player",
			userId: 81,
		}),
		headers: {
			"Content-type": "application/json; charset=UTF-8",
		},
	}).then((res) => res.json());
};

export default postData;
