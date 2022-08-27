const GAME=()=>{
  const MAIN=[]
  var tryes=10
  var gues=0
  var match=0
  var know=0
  var res=0
  
  for (let i=0;i<4;i++){
    var num=Math.floor(Math.random()*10)
      if (num==0 || MAIN.includes(`${num}`)){
         i--
      }else {
         MAIN.push(`${num}`)
      }
  } 

  const check=()=>{
    match=0
    know=0
    gues=gues.split("")
    gues.forEach((cif,ind) => {
      if (cif==MAIN[ind]){
        match++;
        know++;
      }else if (MAIN.indexOf(cif)!==(-1)){
        know++
      }
    });

    if (match===4){
    return res=1 
    }
  }
  
  
  for (tryes=10;tryes>0;tryes--){
    if (tryes>5){
      gues=prompt(`enter password ,  ${tryes} attempts left`)
    }else if (tryes>1){
        gues=prompt(`enter password , ONLY ${tryes} attempts left`)
    }else {
        gues=prompt(`enter password , this is your last attempt`)
      }
    if (gues.length!==4){
        alert ('There must be 4 digits')
        tryes++
      }
    else {check(gues);
      if (res===1){
        alert (`CONGRATULATIONS !!! You are RIGHT - password is ${gues.join()}`)
      }else if(tryes===1) {
        alert (`SORRY !  You didn't guess the password!  GAME OVER !!!`)
        alert (`Password was ${MAIN}`)
      }else{
        alert (`Now you guessed ${know} numbers and ${match} matched`)
      }
    }
  }
  
}
  
 
  





  