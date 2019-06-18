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
    if(newDiv.style.display === 'none'){
    newDiv.style.display = 'block'
    }else{
        newDiv.style.display = 'none'
    }
    
})


//You'll need to:
// create a div element with an id of 'descrip2'
//append this element to the div element with the id of 'name2' 
var newDiv = document.createElement('div')
newDiv.id = 'descrip2'
newDiv.innerHTML = "The instantly recognizable Jumpman silhouette made its debut with the Air Jordan 3 during Michael Jordan's 1987-88 NBA season."
name.appendChild(newDiv)
//4. Add events to the all the thumbs up icon that will add a count for each time the icon is clicked on for any shoe.
var thumb = document.querySelectorAll('#thumbs')
for (let i = 0; i < thumb.length; i++) {
    thumb[i].onclick = count++
    
}
var count = document.createElement('div');
count.innerHTML = 0
console.log(thumb)
// thumb.addEventListener('click',function(){
//     count++
// })
//5. Add an event to the plus icon that will increment the price of the Air Jordan V shoe each time the icon is clicked on.

//6. Add an event to the minus icon that will decrement the price of the Air Jordan VI shoe each time the icon is clicked on.

//7. Add an event to the Air Jordan XI shoe that will show another colorway for that shoe after hovering over the image. 

//8. Add an event to the Air Jordan XII shoe that will increase the image by 50% after clicking on the image.

//9. Add events to both the plus and minus icon that will add or decrease the price each time the respective icon is clicked on.

//10. Add an event to the Air Jordan XXVIII shoe that will show the famous 'crying Michael Jordan' meme after clicking on the image.
