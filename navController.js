function cartNav(){
    document.getElementById('cIcon').style.opacity = "1.0";
    document.getElementById('lIcon').style.opacity = "0.5";
    document.getElementById('eIcon').style.opacity = "0.5";
    document.getElementById('coIcon').style.opacity = "0.5";
    document.getElementById('cartpage').style.display = "block";
    document.getElementById('homepage').style.display = "none";
    cartCheck();
    setTimeout(function(){  
        document.getElementById('cartConfirm').style.bottom = "-70px"
    }, 300);
    document.getElementById('paymentpage').style.display = "none";
    document.getElementById('rewardpage').style.display = "none"

}

function listenNav(){
    document.getElementById('cIcon').style.opacity = "0.5";
    document.getElementById('lIcon').style.opacity = "1.0";
    document.getElementById('eIcon').style.opacity = "0.5";
    document.getElementById('coIcon').style.opacity = "0.5";
    document.getElementById('cartpage').style.display = "none";
    document.getElementById('homepage').style.display = "block";
    document.getElementById('paymentpage').style.display = "none";
    document.getElementById('rewardpage').style.display = "none";

}
document.getElementById('fd').addEventListener('submit', run)
function eventsNav(){
    document.getElementById('cIcon').style.opacity = "0.5";
    document.getElementById('lIcon').style.opacity = "0.5";
    document.getElementById('eIcon').style.opacity = "1.0";
    document.getElementById('coIcon').style.opacity = "0.5";
    document.getElementById('cartpage').style.display = "none";
    document.getElementById('homepage').style.display = "none";
    document.getElementById('paymentpage').style.display = "none";
    document.getElementById('rewardpage').style.display = "block";
    document.getElementById('rewardUserItem').innerHTML = localStorage.getItem('au2val');
    document.getElementById('rewardUser').innerHTML = localStorage.getItem('datafname') + " " + localStorage.getItem('datalname');;


}

function contactNav(){
    document.getElementById('cIcon').style.opacity = "0.5";
    document.getElementById('lIcon').style.opacity = "0.5";
    document.getElementById('eIcon').style.opacity = "0.5";
    document.getElementById('coIcon').style.opacity = "1.0";
    document.getElementById('cartpage').style.display = "none";
    document.getElementById('homepage').style.display = "none";
    document.getElementById('paymentpage').style.display = "block";
    document.getElementById('rewardpage').style.display = "none"

    payment()

}

function viewAll(title){
document.getElementById(title + '-wrapper').classList.add('view-all-wrapper');
document.getElementById(title + '-title').classList.add('view-all-title');
document.getElementById(title + '-item').classList.add('view-all-item');
document.getElementById(title + '-center').classList.add('ringCenter');
document.getElementById(title + '-done').style.display='block';
document.getElementById(title + '-spacer').style.display='none';
}

function closeAll(title){
    document.getElementById(title + '-wrapper').classList.remove('view-all-wrapper');
    document.getElementById(title + '-title').classList.remove('view-all-title');
    document.getElementById(title + '-item').classList.remove('view-all-item');
    document.getElementById(title + '-center').classList.remove('ringCenter');
    document.getElementById(title + '-done').style.display='none';
    document.getElementById(title + '-spacer').style.display='block';
}