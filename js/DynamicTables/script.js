function createTable() {
	let height = document.getElementById('form').children[0].value;
	let width = document.getElementById('form').children[1].value;
	document.getElementById('tab').innerHTML += '<table id="table"><tbody id="tbody"></tbody></table>';
	for (let i = 0; i < height; i++){
		document.getElementById('tbody').innerHTML += '<tr></tr>';
		for (let j = 0; j < width; j++){
			document.getElementById('tbody').children[i].innerHTML += '<td><form><input type="text" value="textarea"><input type="button" value="Сохранить" onclick="saveText(' + i + ', ' + j + ')"><form></td>';
		}
	}
	document.getElementById('func').removeChild(document.getElementById('form'));
	for (let k = 0; k < 5; k++){
		document.getElementById('func').innerHTML += '<div class="funcs"></div>';
	}
	localStorage.setItem('height', height);
	localStorage.setItem('width', width);
	document.getElementById('func').children[0].innerHTML += '<form><input type="text" value="Введите ширину таблицы" oninput="changeButtonText()"><select><option disabled selected>Рамка</option><option>hidden</option><option>dotted</option><option>dashed</option><option>solid</option></select><input id="prim" type="button" onclick="changeTableWidth()" value="Применить ширину и рамку"></form>';
	document.getElementById('func').children[1].innerHTML += '<input type="button" onclick="createHeader()" value="Создать заголовок"></input>';
	document.getElementById('func').children[2].innerHTML += '<form><input type="text" value="Удалить строку" id="remRow"><input type="button" onclick="deleteRow()" value="Удалить"></form>';
	document.getElementById('func').children[3].innerHTML += '<input type="button" onclick="magic()" value="MAGIC">';
	document.getElementById('func').children[4].innerHTML += '<input type="button" onclick="removeTable()" value="Удалить таблицу">';
}

function saveText(row, column) {
	let cell = document.getElementById('tbody').children[row].children[column];
	let mustRemove = cell.children[0];
	let savedText = mustRemove.children[0].value;
	cell.removeChild(mustRemove);
	cell.innerHTML += '<p>' + savedText + '</p>';
}

function changeTableWidth() {
	document.getElementById('table').style = 'width: ' + document.getElementsByTagName('select')[0].previousSibling.value + 'px; border: 2px ' + document.getElementsByTagName('select')[0].value + ' black;';
}

function createHeader() {
	document.getElementById('tbody').innerHTML = '<tr><td>header</td></tr>' + document.getElementById('tbody').innerHTML;
}

function deleteRow() {
	let row = document.getElementById('remRow').value;
	let limit = document.getElementById('tbody').children.length;
	if ((1 <= row) && (row <= limit) && (Math.floor(row) == row)){
		document.getElementById('tbody').children[row-1].remove();
		return;
	}
	alert("ERROR")
	return;
}

function magic(){
	let mag = Math.ceil(Math.random() * 8);
	let row = Math.floor(Math.random() * localStorage.getItem('height')), column = Math.floor(Math.random() * localStorage.getItem('width'));
	let randomCeil = document.getElementById('tbody').children[row].children[column].firstChild;
	switch (mag){
		case 1:
			randomCeil.parentNode.innerHTML += '<form><input type="text" value="textarea"></input><input type="button" value="Сохранить" onclick="saveText(' + row + ', ' + column + ')"></input><form>';
			document.getElementById('tbody').children[row].children[column].firstChild.remove();
			break;
		case 2:
			let fc1 = Math.floor(Math.random() * 256), fc2 = Math.floor(Math.random() * 256), fc3 = Math.floor(Math.random() * 256);
			randomCeil.style = 'color: rgb('+fc1+', '+fc2+', '+fc3+');';
			break;
		case 3:
			let bg1 = Math.floor(Math.random() * 256), bg2 = Math.floor(Math.random() * 256), bg3 = Math.floor(Math.random() * 256);
			randomCeil.style = 'background-color: rgb('+bg1+', '+bg2+', '+bg3+');';
			break;
		case 4:
			let font = Math.ceil(Math.random() * 11 + 14);
			randomCeil.style = 'font-size: '+font+'px;';
			break;

	}

}

function removeTable(){
	document.getElementById('func').innerHTML = '<form id="form"><input name="height" type="text" value="height"></input><input name="width" type="text" value="width"></input><input type="submit" onclick="createTable()"></input></form>';
	document.getElementById('tab').innerHTML = '';
}
