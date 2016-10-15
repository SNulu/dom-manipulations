
document.querySelector("#thanks button").addEventListener('click',function(){
  // TASK #1
   alert("yowch! don't click me so hard!");
})

document.querySelector("#double button").addEventListener('click',function(){
  // TASK #2
  document.getElementById("compoundInvestment").innerHTML = 2 * document.getElementById("compoundInvestment").innerHTML;
})


document.querySelector("#color-circle button").addEventListener('click',function(){
  // TASK #3
  var  colorCircle = document.getElementById("circle-bw")

    if( colorCircle.style.background === 'black' ){
    colorCircle.style.background = 'white';
    return
    }else if ( colorCircle.style.background === 'white'){
    colorCircle.style.background = 'black';
  }
  colorCircle.style.background = 'black';
})

document.querySelector("#blow-up button").addEventListener('click',function(){
  // TASK #4}
  var blowUp = document.getElementsByClassName("circle-red")[0];

  var currWidth = blowUp.style.width.replace(/px/,'')
  if( currWidth <= '320px'){

    blowUp.style.width  = (currWidth + 40) + 'px';
    blowUp.style.height = (currWidh + 40)+ 'px';
  
  }else if ( currWidth > '320px'){
  
    blowUp.style.width += '40px';
    blowUp.style.height += '40px';
  
  }
  return 
 //   // blowUp.style.width = '40px'
})


document.querySelector("#remove button").addEventListener('click',function(){
  // TASK #5
})


document.querySelector("#reverse-squares button").addEventListener('click',function(){
  // TASK #6
})

document.querySelector("#pig-latin button").addEventListener('click',function(){
  // TASK #7
})

document.querySelector("#cycle-image button").addEventListener('click',function(){
  // TASK #8
})