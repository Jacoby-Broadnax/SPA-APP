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

}

function listenNav(){
    document.getElementById('cIcon').style.opacity = "0.5";
    document.getElementById('lIcon').style.opacity = "1.0";
    document.getElementById('eIcon').style.opacity = "0.5";
    document.getElementById('coIcon').style.opacity = "0.5";
    document.getElementById('cartpage').style.display = "none";
    document.getElementById('homepage').style.display = "block";
    document.getElementById('paymentpage').style.display = "none";

}

function eventsNav(){
    document.getElementById('cIcon').style.opacity = "0.5";
    document.getElementById('lIcon').style.opacity = "0.5";
    document.getElementById('eIcon').style.opacity = "1.0";
    document.getElementById('coIcon').style.opacity = "0.5";
    document.getElementById('contactOutput').style.display = "none";
    document.getElementById('newsOutput').style.display = "none";
    document.getElementById('contestsOutput').style.display = "none";
    document.getElementById('newdayOutput').style.display = "none";
    document.getElementById('eventsOutput').style.display = "block";
    document.getElementById('paymentpage').style.display = "none";

}

function contactNav(){
    document.getElementById('cIcon').style.opacity = "0.5";
    document.getElementById('lIcon').style.opacity = "0.5";
    document.getElementById('eIcon').style.opacity = "0.5";
    document.getElementById('coIcon').style.opacity = "1.0";
    document.getElementById('cartpage').style.display = "none";
    document.getElementById('homepage').style.display = "none";
    document.getElementById('paymentpage').style.display = "block";


}