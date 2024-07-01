document.addEventListener('DOMContentLoaded', () =>{

const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

//this function search turn arr fruit into same letter case.
function search(str) {
		return fruit.filter(item => item.toLowerCase().includes(str.toLowerCase()))
}

// this function accepts strings and show similar results.
function searchHandler(e) {
	const searchStr = e.target.value.trim();
	const results = search(searchStr);
	showSuggestions(results, searchStr);
}


//this function show create a drop-down that is matches our search.
function showSuggestions(results) {
	suggestions.innerHTML = '';
	if (results.length > 0){
		results.forEach( result=> {
			const li = document.createElement('li');
			li.textContent = result;
			suggestions.appendChild(li);
		});
		document.querySelector('.suggestions').style.display = 'block';
	}else {
		document.querySelector('.suggestions').style.display = 'none'
	}
}
// after selcting the fruit this function show the value in the search bar.
function useSuggestion(e) {
	if(e.target.matches('li')) {
		const selectedFruit = e.target.textContent;
		input.value = selectedFruit;
		document.querySelector('.suggestions').style.display = 'none';
	}
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);
})
