let c=0;
document.addEventListener('click',()=> {
     c=c+1;
     document.getElementById("clicks").innerHTML=c;
     document.getElementById("clicks").style.fontSize=Math.random()*500 //Just for fun,random font for every click xD
     let user = getCookie("username");
     if (user != ""){
      try{ //try to split the cookie,if the cookie is not present just keep on going with the current clicks and store the final value to highscore
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
        document.cookie=`Highest Score = ${c};` //adding the score 
     }
     
     
 }})
 
 
