
var toPx = function(val) {
  return val + 'px'
}

var reverseString = function(inStirng){
  var charList = inStirng.split('')
  return charList.reverse().join('')
}


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

  // By manipulating the <div class='circle'> DOM element in JS, make the circle double height 
  // and width until its width is greater-than/equal-to 320px.
  // At that point make it reduce back to its original size of 40px x 40px
  var circleRed = document.querySelector('.answer-box .circle-red'),
      circleRedStyle = window.getComputedStyle(circleRed),
      circleRedWidth = parseInt(circleRedStyle.width)


  if(circleRedWidth <= 320 ){
    doubleWidth = circleRedWidth * 2
    circleRed.style.width = toPx(doubleWidth)
    circleRed.style.height = toPx(doubleWidth)
    return 
  }else{
    circleRed.style.width = toPx(40)
    circleRed.style.height = toPx(40)
    return
  }
})


document.querySelector("#remove button").addEventListener('click',function(){
  // TASK #5


  var originalList = document.getElementById("userList");
  var inactiveElements = originalList.getElementsByClassName('inactive')
  
  var i = inactiveElements.length
  while (i--){
    originalList.removeChild(inactiveElements[i])
  }
})


document.querySelector("#reverse-squares button").addEventListener('click',function(){
  // TASK #6


})

document.querySelector("#pig-latin button").addEventListener('click',function(){

  // TASK #7

  var tasksList = document.getElementById("tasks");
  var listElements = tasksList.getElementsByTagName("li")
  for(var i = 0; i < listElements.length; i++){
    listElements[i].innerHTML = reverseString(listElements[i].innerHTML)
  }
})

document.querySelector("#cycle-image button").addEventListener('click',function(){

  // TASK #8

})