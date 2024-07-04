let api = "https://newsdata.io/api/1/latest?apikey=pub_47852a84e3103db1cc35655fa199918e20ae7&language=en";
let title = document.getElementById('title');
let content = document.getElementById('content');
let writer = document.getElementById('writer');
let date = document.getElementById('date');
let article = document.getElementById('article');
let image = document.getElementById('image')

function search() {
	let searchQuery = document.getElementById('search').value;
	let query = `${api}&q=${searchQuery}`;
	fetch(query).then((response) => {
		return response.json();
	}).then((data) => {
		console.log(data);
		if (data.results && data.results.length > 1) {
			let firstArticle = data.results[2 , 3 , 4 , 5];
			title.innerText = firstArticle.title;
			content.innerHTML = firstArticle.link;
			writer.innerText = firstArticle.creator;
			date.innerText = firstArticle.pubDate;
			article.innerText = firstArticle.description;
			image.src = firstArticle.image_url;
		} else {
			title.innerText = "No results found";
			content.innerText = "";
			writer.innerText = "";
			date.innerText = "";
			article.innerText = "";
		}
	}).catch((error) => {
		console.error('Error fetching data:', error);
	});
 
}



