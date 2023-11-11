var zborovi= new Array("programi" , "datoteki", "steroids","glushec","maksim", "tochak" , "avtobus" ,"machka" ,"kuche","mjau",
"elektro" , "polozhen" , "bravo" , "kukja" , "lopata" , "avion" , "ryzen","intel" , "nvidia" , "geforce");
var zbor;
var inx1;
var inx2;
var inx3;
var obidi=0;
function start(){
    document.getElementById("over").setAttribute("style", "opacity: 0%");
    document.getElementById("tryagain").setAttribute("style" , "cursor: default")
    document.getElementById("new").addEventListener("click", novzbor,false);
    pochetok();
    pritisni();
}

function pochetok(){
    zbor=zborovi[Math.floor(Math.random()*20)];
    var dolzhina=zbor.length;
    for(var i=0;i<dolzhina;i++){
        document.getElementById(i).setAttribute("type", "text");
    }
        for(var j=dolzhina;j<8;j++){
            document.getElementById(j).setAttribute("type", "hidden");
        }
    inx1=Math.floor(Math.random()*dolzhina);
    inx2=Math.floor(Math.random()*dolzhina);
    while(inx2==inx1){
        inx2=Math.floor(Math.random()*dolzhina);
    }
    inx3=Math.floor(Math.random()*dolzhina);
    while(inx3==inx2 || inx3==inx1){
        inx3=Math.floor(Math.random()*dolzhina);
    }
    document.getElementById(inx1).value=zbor.charAt(inx1);
    document.getElementById(inx1).disabled=true;
    document.getElementById(inx2).value=zbor.charAt(inx2);
    document.getElementById(inx2).disabled=true;
    document.getElementById(inx3).value=zbor.charAt(inx3);
    document.getElementById(inx3).disabled=true;
}
function pritisni(){
    
    document.getElementById("submit").addEventListener("click", proveri,false);
}
function proveri(){
    var guess="";
    var rezultat=document.getElementById("rezultat");
        for(var i=0;i<8;i++){
            guess+=document.getElementById(i).value;
        }
        if(guess==zbor){
            document.getElementById("submit").removeEventListener("click",proveri,false);
            alert("Go pogodi");
            rezultat.innerHTML="Tochno";
            rezultat.setAttribute("style", "color: rgb(83, 255, 83)");
            over();
        }else{
            rezultat.innerHTML="Greshka imash ushte "+parseInt(4-obidi)+" obidi";
            rezultat.setAttribute("style", "color: red");
            obidi++;
            for(var i=0;i<8;i++){
                if(i!=inx1 && i!=inx2 && i!=inx3){
                    document.getElementById(i).value="";
                }
            }
            if(obidi<5){
                pritisni();
            }else{
                document.getElementById("submit").removeEventListener("click",proveri,false);
                alert("Ne go pogodi");
                over();
            }
            
        }   
    
       
}
function over(){
    var over=document.getElementById("over");
    var rezultat1=document.getElementById("rezultat1");
    document.getElementById("tryagain").setAttribute("style" , "cursor: pointer")
    over.setAttribute("style", "opacity: 100%"); 
    if(parseInt(obidi)==5){
        rezultat1.setAttribute("style" , "color: red");
        rezultat1.innerHTML="Ne uspea posle 5 obidi<br> Zborot beshe: "+zbor;
    }else{
        rezultat1.setAttribute("style" , "color: rgb(83, 255, 83)");
        rezultat1.innerHTML="Tochen odgovor<br>"+zbor;
    }

    tryagain();
   
}
function tryagain(){
    obidi=0;
    for(var i=0;i<8;i++){
        document.getElementById(i).value="";
    }
    document.getElementById(inx1).disabled=false;
    document.getElementById(inx2).disabled=false;
    document.getElementById(inx3).disabled=false;
    document.getElementById("rezultat").innerHTML="";
    document.getElementById("tryagain").addEventListener("click", start,false);
}
function novzbor(){
    obidi=0;
    for(var i=0;i<8;i++){
        document.getElementById(i).value="";
    }
    document.getElementById(inx1).disabled=false;
    document.getElementById(inx2).disabled=false;
    document.getElementById(inx3).disabled=false;
    document.getElementById("rezultat").innerHTML="";
    start();
}
window.addEventListener("load", start,false);