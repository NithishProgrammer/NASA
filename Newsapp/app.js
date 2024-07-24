let api = "https://newsdata.io/api/1/latest?apikey=pub_47852a84e3103db1cc35655fa199918e20ae7&language=en";
let title = document.getElementById('title');
let wripara = document.getElementById('wripara');
let writer = document.getElementById('writer');
let date = document.getElementById('date');
let dat = document.getElementById('dat');
let article = document.getElementById('article');
let image = document.getElementById('image')
let orgin = document.getElementById('full')
let simplepara = document.getElementById('simplepara')
let happytosearch = document.getElementById('happytosearch')
let para = document.getElementById('para')
let short = document.getElementById('short')
short.style.display = "none"
wripara.style.display = "none"
date.style.display = "none"
dat.style.display = "none"
function search() {

	date.style.display = "inline"
	wripara.style.display = "inline"
	writer.style.display = "inline"
	short.style.display = "inline"
	date.style.display = "inline"
	dat.style.display = "block"
	simplepara.style.display = "none"
	date.style.color = "white"
	wripara.style.color = "white"
	writer.style.color = "white"
	short.style.color = "white"
	let readfull = document.getElementById('full');
	readfull.style.display = "inline"
	happytosearch.style.display = "none"
	para.style.display = "none"
	let searchQuery = document.getElementById('search').value;
	let query = `${api}&q=${searchQuery}`;
	fetch(query).then((response) => {
		return response.json();
	}).then((data) => {
		console.log(data);
		if (data.results && data.results.length > 1) {
			let firstArticle = data.results[2 , 3 , 4 , 5];
			title.innerText = firstArticle.title;
			writer.innerText = firstArticle.creator;
			date.innerText = firstArticle.pubDate;
			article.innerText = firstArticle.description;
			image.src = firstArticle.image_url;
			orgin.addEventListener("click" , function(){

				window.location.href = firstArticle.link;

			})  

		 
		} else {
			title.innerText = "No results found";
			content.innerText = "";
			writer.innerText = "";
			date.innerText = "";
			article.innerText = "";
			image.alt = "Not Found"
			readfull.innerText = "Please search anything"
		}
	}).catch((error) => {
		console.error('Error fetching data:', error);
	});
 
	fetch("https://www.khanacademy.org/api/internal/graphql/projectsAuthoredByUser", {
		"body": "{\"operationName\":\"projectsAuthoredByUser\",\"query\":\"query projectsAuthoredByUser($kaid: String, $pageInfo: ListProgramsPageInfo, $sort: ListProgramSortOrder) {\\n  user(kaid: $kaid) {\\n    id\\n    programs(pageInfo: $pageInfo, sort: $sort) {\\n      complete\\n      cursor\\n      programs {\\n        id\\n        key\\n        authorKaid\\n        authorNickname\\n        displayableSpinoffCount\\n        imagePath\\n        sumVotesIncremented\\n        translatedTitle: title\\n        url\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n\",\"variables\":{\"kaid\":\"kaid_585930138674289802884730\",\"sort\":\"TOP\",\"pageInfo\":{\"cursor\":\"\",\"itemsPerPage\":40}}}",
		"method": "POST",
	  }).then(res => res.json())

	  if (searchQuery == "") {

		
		title.innerText = "No results found";
		image.alt = "Not Found"
			readfull.innerText = "Please Search"
			
		
	  }
	
	
}


