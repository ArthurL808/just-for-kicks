// 1. Add an event to the 'See Details' content that will create an alert box that says 'Not Available in Hawaii.' after clicking on See Details.
let see = document.querySelector('#details')
function notice() {
    alert('Not Avalible in Hawaii.')
}
see.addEventListener('click',notice)

//2. Add an event to the div element with the id of 'name1' that will show/hide the description ('descrip1') after hovering over Air Jordan II.
let hover = document.querySelector('#name1')
let des = document.querySelector('#descrip1')
hover.addEventListener('mouseover', function(event){
    des.style.display = 'block'
})
hover.addEventListener('mouseleave', function(event){
    des.style.display = 'none'
})
//3. Add an event to the div element with the id of 'name2' that will show/hide the following description after clicking on the element.
//'The instantly recognizable Jumpman silhouette made its debut with the Air Jordan 3 during Michael Jordan's 1987-88 NBA season.'
let name = document.querySelector('#name2')
name.addEventListener('click',function(event){
    if(descrip2.style.display === 'none'){
    descrip2.style.display = 'block'
    }else{
        descrip2.style.display = 'none'
    }
    
})

//You'll need to:
// create a div element with an id of 'descrip2'
//append this element to the div element with the id of 'name2' 
var descrip2 = document.createElement('div')
descrip2.id = 'descrip2'
descrip2.innerHTML = "The instantly recognizable Jumpman silhouette made its debut with the Air Jordan 3 during Michael Jordan's 1987-88 NBA season."
name.appendChild(descrip2)
//4. Add events to the all the thumbs up icon that will add a count for each time the icon is clicked on for any shoe.
let thumb = document.querySelectorAll('.fa-thumbs-up');
for(let i = 0; i<thumb.length; i++){
  
    thumb[i].addEventListener('click', count)
     var counterBox = document.createElement('div');
    counterBox.className = 'counter'
    thumb[i].appendChild(counterBox)
    
    
  }
  
  function count(){
    
    var likes = this.querySelector('.counter');
    likes.innerHTML++;
  }
//5. Add an event to the plus icon that will increment the price of the Air Jordan V shoe each time the icon is clicked on.
let increaseNumber = document.querySelectorAll('.far');
increaseNumber[8].addEventListener('click',more);
function more() {
    let jordanV = document.querySelector('#price4').childNodes[0].nodeValue++;
}



//6. Add an event to the minus icon that will decrement the price of the Air Jordan VI shoe each time the icon is clicked on.
increaseNumber[11].addEventListener('click',less)
function less(){
    let jordanVI = document.querySelector('#price5').childNodes[0].nodeValue--;
}
//7. Add an event to the Air Jordan XI shoe that will show another colorway for that shoe after hovering over the image. 
let JordanXI = document.getElementsByTagName('img')
JordanXI[6].addEventListener('mouseover',pic)
JordanXI[6].addEventListener('mouseout',pic)
function pic(){
if(JordanXI[6].src === 'https://www.sneakerlegends.com/images/stories/virtuemart/product/378037623%20378037623%20378037623%20378037623.jpg'){
    JordanXI[6].src = 'https://www.flightclub.com/media/catalog/product/cache/1/image/1600x1140/9df78eab33525d08d6e5fb8d27136e95/0/1/012597_1.jpg'
}else {
    JordanXI[6].src = 'https://www.sneakerlegends.com/images/stories/virtuemart/product/378037623%20378037623%20378037623%20378037623.jpg'
}
}
//8. Add an event to the Air Jordan XII shoe that will increase the image by 50% after clicking on the image.
JordanXI[7].addEventListener('click',bigger)
function bigger(){
   JordanXI[7].style.height += '150%'
   JordanXI[7].style.width += '150%'
}
//9. Add events to both the plus and minus icon that will add or decrease the price each time the respective icon is clicked on.
var targetPlus = document.getElementById('oneUp');
var targetMinus = document.getElementById('oneDown');
targetPlus.addEventListener('click',oneUP)
targetMinus.addEventListener('click',oneDown)
// console.log(upByOne)
function oneDown(){
    var downByOne = document.querySelector('#price8').childNodes[0].nodeValue--;
}
function oneUP() {
    var upByOne = document.querySelector('#price8').childNodes[0].nodeValue++;
}


//10. Add an event to the Air Jordan XXVIII shoe that will show the famous 'crying Michael Jordan' meme after clicking on the image.
JordanXI[9].addEventListener('click',cryFace)
function cryFace() {
    if(JordanXI[9].src === 'https://www.flightclub.com/media/catalog/product/cache/1/image/1600x1140/9df78eab33525d08d6e5fb8d27136e95/a/i/air-jordan-28-photo-blue-white-black-011977_1.jpg'){
        JordanXI[9].src = 'https://i.ytimg.com/vi/HsSJU0RTggY/maxresdefault.jpg'
    }else{
        JordanXI[9].src = 'https://www.flightclub.com/media/catalog/product/cache/1/image/1600x1140/9df78eab33525d08d6e5fb8d27136e95/a/i/air-jordan-28-photo-blue-white-black-011977_1.jpg'
    }
}