'use strict';

const inputArr = document.querySelectorAll('.js-input');
const previewArr = document.querySelectorAll('.js-preview');

function show (){
    for (let i = 0; i< inputArr.length; i++) {
        
        inputArr[i].value;
        console.log(inputArr[i].value);
        
        function updatePreview (){
            const defaultPreviewArr=[];
            defaultPreviewArr[0] ='Nombre y Apellido';
            defaultPreviewArr[1] ='Front-End';
            
            if(i<2){
            if (inputArr[i].value == false) {
                previewArr[i].innerHTML= defaultPreviewArr[i];
            }
            else {
            previewArr[i].innerHTML = inputArr[i].value;
            }
        } 
        else {
            console.log('esto me lo invento');
        }
        
    }
    inputArr[i].addEventListener('keyup', updatePreview);
       
}

}
show();



// const changeEmail = document.querySelector('.js-link-email');
// const changePhone = document.querySelector('.js-link-phone');
// const changeLinkedin = document.querySelector('.js-link-linkedin');
// const changeGithub = document.querySelector('.js-link-github');


