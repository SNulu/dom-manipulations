
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

/*
// divide original width by 2
  // computedStyle is the string "250px". It needs to become a number before I can divide it by 2.
var halfWidth = parseInt(origWidth) / 2
console.log(halfWidth)

// assign new width to the box2Node
box2Node.style.width = toPx(halfWidth)

// you: double the size of box2s

var box2sNode = document.querySelector('#box2s'),
    box2sStyles = window.getComputedStyle(box2sNode),
    box2sOrigWidth = box2sStyles.width,
    doubleWidth = parseInt(box2sOrigWidth) * 2

box2sNode.style.width = toPx(doubleWidth)

*/

document.querySelector("#remove button").addEventListener('click',function(){
  // TASK #5
  // Remove each element of the list below that has the class 'inactive'.
  /*
  active user
inactive user
active user
inactive user
inactive user
active user
inactive user
active user
  */

  // var myNode = document.getElementById("userList");
  // var items = myNode.getElementByTagName("li");
  // for (var i =0; i <items.lenght; ++i) {

  // }
  // console.log(myNode.lenght)
  // // myNode.innerHTML = '';

})
/*

var clearFinished = function(node) {
  var listItems = node.children
  // this function will look at all the children of the node
  for (var i = 0; i < listItems.length; i ++) {
    var liNode = listItems[i]
    // check whether its class includes "done"
    if (liNode.classList.contains('done')) {
      //remove it from its parent
      node.removeChild(liNode)
      i--
    }
  }
}

var ulNode = document.querySelector("#box5 ul")
*/

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