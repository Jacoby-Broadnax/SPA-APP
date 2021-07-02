function dynSheet(name, url){
document.getElementById('dyn-sheet').style.display = 'block';
document.getElementById('sheetTitle').innerHTML = name;
document.getElementById('sheetFrame').src= url;
}

function dynClose(){
document.getElementById('dyn-sheet').style.display = 'none';   
}