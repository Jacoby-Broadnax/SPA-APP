function accountStore(title, desc){
localStorage.setItem('data' + title, desc);
}

if ("userState" in localStorage){
    document.getElementById('pIcon').src = 'logo/' + localStorage.getItem('dataschool') + '.jpg'
}else{
    document.getElementById('initial').style.display='block';
}
