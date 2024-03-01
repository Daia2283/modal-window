'use strict';


const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnOpenModal = document.querySelectorAll(".show-modal");
console.log(btnOpenModal);
// to close modal


const closeModal = function () {

    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

// to open the modal
const openModal = function () {
    
    console.log(`button clicked`);
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
for (let i = 0; i < btnOpenModal.length; i++)
btnOpenModal[i].addEventListener('click',openModal) ;  


// to close the modal
btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown',function (e) {
  

    if (e.key === 'Escape'){
if(!modal.classList.contains('hidden')){
    closeModal();
}
    }
});

//  to press o to open modal 

document.addEventListener('keydown',function (e) {
  

    if (e.key == 'o'|| e.key == 'O'){
if(!modal.classList.remove('hidden')){
    openModal();
}
    }
});



document.addEventListener('keydown',function (e) {
  

    if (e.key == 'o'|| e.key == 'O'){
if(!overlay.classList.remove('hidden')){
    openModal();
}
    }
});

// the end of the code line;