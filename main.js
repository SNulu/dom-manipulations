
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
  // document.getElementById(id).style.property=new style
  	var circle = document.getElementById("circle-bw") 
     if(circle.style.background === rgb(0,0,0) ){
        circle.style.background = rgb(255,255,255);
    }else if (circle.style.background === rgb(255,255,255)){
        circle.style.background = rgb(0,0,0)
    }
})

document.querySelector("#blow-up button").addEventListener('click',function(){
  // TASK #4}
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