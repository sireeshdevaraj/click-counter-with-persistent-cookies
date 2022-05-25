let c=0;
document.addEventListener('click',()=> {
     c=c+1;
     document.getElementById("clicks").innerHTML=c;
     document.getElementById("clicks").style.fontSize=Math.random()*500
     let user = getCookie("username");
     if (user != ""){
      try{
          var a =document.cookie.split(';')[1].slice(15)
          var b= parseInt(a)
      if (b<c){
        document.getElementById("ifcookiepresent").innerHTML=`NEW HIGHEST SCORE = ${c}`;
        document.cookie=`Highest Score = ${c};`;
      }
      
     }
     catch(err){
        document.getElementById("ifcookiepresent").innerHTML=`NEW HIGHEST SCORE = ${c}`;
        document.cookie=`Highest Score = ${c};`;
     }
     if (user=""){
        document.cookie=`Highest Score = ${c};`
     }
     
     
 }})

 
