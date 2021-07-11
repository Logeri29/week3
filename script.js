const counterValue = document.querySelector('#counterValue');
const decrement = document.querySelector('button[class="decrement"]')
const increment = document.querySelector('.increment');

 let counter = 0;

console.log(decrement);

decrement.addEventListener('click', () => {
    if (counter > 0) {
     counter--; 
     counterValue.innerHTML = counter; 
    }
}); 

increment.addEventListener('click', () => { 
   if (counter < 50) {
       counter++;     
       counterValue.innerHTML = counter;
    }

});
