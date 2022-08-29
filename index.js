const GAME=()=>{
  const MAIN=[{},{},{},{},{},{}]
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
      gues=prompt(`Enter password ,  ${tryes} attempts left`)
    }else if (tryes>1){
        gues=prompt(`Enter password , ONLY ${tryes} attempts left`)
    }else {
        gues=prompt(`Enter password , this is your LAST attempt`)
      }
    if (gues.length!==4){
        alert ('There must be 4 digits')
        tryes++
      }
    else {check(gues);
      if (res===1){
        alert (`CONGRATULATIONS !!! You are RIGHT - password is ${gues.join()}`)
        return `YOU WON!!!`
      }else if(tryes===1) {
        alert (`SORRY !  You didn't guess the password!  GAME OVER !!!`)
        alert (`Password was ${MAIN}`)
      }else{
        alert (`Now you guessed ${know} numbers and ${match} matched`)
      }
    }
  }
  // VISUAL PART
  const All=[{gues:"1234"},{gues:"5678"},{qgues:"5678"},{gues:"5678"}]
  debugger
  
  const renderAll=()=>{
      createGame();
      All.forEach(ele => {
          // createScreen(ele);
          createQ();
          createA();
          // createSpan();
        }); 
  }
  
  
  
  
  const createGame=()=>{
    const div=document.createElement("div");
    div.setAttribute("class", "game");
    div.setAttribute("id", "game")
    main.appendChild(div);
  //   createQ();
  //   createA();
    
  }
  
  const createQ=()=>{
      const Q=document.createElement("div")
      Q.setAttribute("class", "gues");
      Q.setAttribute("id", "")
      // Q.innerText= ele.quest
      document.getElementById("game").appendChild(Q);
  }
  
  const createA=()=>{
      const A=document.createElement("div")
      A.setAttribute("class", "ans");
      A.setAttribute("id", "")
      // A.innerText= ele.quest
      document.getElementById("game").appendChild(A);
  }
  

}
  
 
  





  