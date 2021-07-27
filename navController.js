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