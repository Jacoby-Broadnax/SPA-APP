function dynSheet(name, url){
document.getElementById('sheetTitle').innerHTML = name;
 
document.getElementById('sheetFrame').src= url;
document.getElementById('item-loader').style.display = 'block';
document.getElementById('dyn-sheet').style.display = 'block';
}

function dynClose(){
document.getElementById('dyn-sheet').style.display = 'none';
document.getElementById('sheetFrame').src= '';  
}