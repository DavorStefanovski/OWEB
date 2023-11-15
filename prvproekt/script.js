
function login(){
    window.open('login.html', 'Log In', 'width=600,height=600');
}

function bid(path){
    localStorage.setItem('bidimg', path);
    console.log('Stored Bid Image Path:', path);
    window.location.href="bidform.html";
    
}
function placebid(){
    slika=document.getElementById('bidimage').src;
    
}
