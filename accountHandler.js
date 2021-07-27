function accountStore(title, desc){
localStorage.setItem('data' + title, desc);
}

if ("userState" in localStorage){
    document.getElementById('pIcon').src = 'logo/' + localStorage.getItem('dataschool') + '.jpg';
    document.getElementById('fy1img').src = 'logo/' + localStorage.getItem('dataschool') + '.jpg';
    document.getElementById('fy1icon').src = 'logo/' + localStorage.getItem('dataschool') + '.jpg';
    document.getElementById('fy1title').innerHTML= localStorage.getItem('dataschool');
    document.getElementById('fy2img').src= 'announcements/' + localStorage.getItem('dataschool') + '.jpg';
    document.getElementById('fy2title').innerText = 'For ' + localStorage.getItem('datafname');
    document.getElementById('overlay-icon').src = 'logo/' + localStorage.getItem('dataschool') + '.jpg';
    document.getElementById('PfirstName').innerHTML= localStorage.getItem('datafname');
    document.getElementById('PlastName').innerHTML = localStorage.getItem('datalname');
    document.getElementById('Pmail').innerHTML = localStorage.getItem('dataemail');
}else{
    document.getElementById('initial').style.display='block';
    document.getElementById('loadGrad').src = "https://spa.ms/i11/";
    document.getElementById('loadProduct').src = "https://spa.ms/senior-products/";
    document.getElementById('loadGear').src = "https://spa.ms/sweatshirt/";
    document.getElementById('loadRing').src = "https://spa.ms/i11/";
    document.getElementById('loadWRing').src = "https://spa.ms/i21/";
}

function userState(){
    document.getElementById('pIcon').src = 'logo/' + localStorage.getItem('dataschool') + '.jpg';
    document.getElementById('fy1img').src = 'logo/' + localStorage.getItem('dataschool') + '.jpg';
    document.getElementById('fy1icon').src = 'logo/' + localStorage.getItem('dataschool') + '.jpg';
    document.getElementById('fy1title').innerHTML= localStorage.getItem('dataschool');
    document.getElementById('fy2img').src= 'announcements/' + localStorage.getItem('dataschool') + '.jpg';
    document.getElementById('fy2title').innerText = 'For ' + localStorage.getItem('datafname');
    document.getElementById('overlay-icon').src = 'logo/' + localStorage.getItem('dataschool') + '.jpg';
    document.getElementById('PfirstName').innerHTML= localStorage.getItem('datafname');
    document.getElementById('PlastName').innerHTML = localStorage.getItem('datalname');
    document.getElementById('Pmail').innerHTML = localStorage.getItem('dataemail');
    document.getElementById('rewardUserItem').innerHTML = localStorage.getItem('au2val');
   
}


