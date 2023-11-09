window.addEventListener("load",start,false);

function start(){
zborovi = ["planina","avtomobil","diploma"];
momzbor =  Math.floor(Math.random()*4);
zbor=zborovi[momzbor];
otkrieni = new Array(zbor.length).fill(0);
for(i=0;i<3;i++){
    pom=Math.floor(Math.random()*(zbor.length+1));
    if(otkrieni[pom]==0)
    otkrieni[pom]=1;
else{i--;}
}
pretstavi();
tries=0;
}

function guess(){
    tries++;
    for( i=0;i<otkrieni.length;i++){
        if(otkrieni[i]==1){continue;}
        vnesena =document.getElementById("bukva"+i);
        input=vnesena.value;
        if(input==zbor[i]){
            otkrieni[i]=1;}
    }
    pretstavi();
    flag=1;
    for(i=0;i<otkrieni.length;i++){
        if(otkrieni[i]==0){flag=0; break;}
    }
    if(flag==1){
    window.alert("Go pogodi zborot!");
    location.reload();}
    else if(tries==5){
        odgovor = confirm("Nemash vekje probuvanja, igrata e zavrshena /n Dali sakash da probash povtorno?");
        if(odgovor)
        location.reload();
    }


}

function pretstavi(){
    igra=document.getElementById("igra");
    igra.innerHTML="";
for(i=0;i<zbor.length;i++){
    if(otkrieni[i]==0){
        igra.innerHTML+='<span><input class ="bukva" id="bukva'+i+'" type="text" maxlength=1></span>';
    }else{
        igra.innerHTML+='<span>'+zbor[i]+'</span>';
    }
}
}

