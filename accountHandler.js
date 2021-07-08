function accountStore(title, desc){
localStorage.setItem('data' + title, desc);
}

if ("userState" in localStorage){
   
}else{
    document.getElementById('initial').style.display='block';
}