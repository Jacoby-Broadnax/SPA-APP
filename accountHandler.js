function accountStore(title, desc){
localStorage.setItem('data' + title, desc);
}

if ("userState" in localStorage){
    document.getElementById('pIcon').src = 'logo/' + localStorage.getItem('dataschool') + '.jpg';
    document.getElementById('fy1img').src = 'logo/' + localStorage.getItem('dataschool') + '.jpg';
    document.getElementById('fy1icon').src = 'logo/' + localStorage.getItem('dataschool') + '.jpg';
    document.getElementById('fy1title').innerHTML= localStorage.getItem('dataschool');
}else{
    document.getElementById('initial').style.display='block';
}

