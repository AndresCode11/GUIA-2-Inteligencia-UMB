$(document).ready(function(){
    alert()
    document.getElementById('start-btn').addEventListener('click', function() {
        init();
    })    
});


async function init() {
    
    // Localizacion inicial
    let initial_location = document.getElementById('localizacion-inicial').value;
    
    // Suciedad
    let suciedad = document.getElementById('suciedad').value;
    
    // Numero de intentos sin encontrar suciedad
    let try_number = document.getElementById('try-number').value;

    // left Image
    let letf_image = document.getElementById('letf_image');

    // Rigth Image
    let rigth_image = document.getElementById('right_image');

    // left Image Dirty
    let letf_image_dirty = document.getElementById('letf_image_dirty');

    // Rigth Image Dirty
    let rigth_image_dirty = document.getElementById('right_image_dirty');

    // location inicial
    switch(initial_location) {
        case "right":
            rigth_image.src = 'images/aspiradora.JPG';
            letf_image.src = 'images/empty.JPG';
        break;

        case "left":
            rigth_image = 'images/empty.JPG';
            letf_image.src = 'images/aspiradora.JPG';
        break;
    }

    // Suciedad
    switch(suciedad) {
        case "both":
            rigth_image_dirty.src = 'images/dirty.JPG';
            letf_image_dirty.src = 'images/dirty.JPG';
        break;

        case "right":
            rigth_image_dirty.src = 'images/dirty.JPG';
            letf_image_dirty.src = 'images/empty.JPG';
        break;

        case "left": 
            rigth_image_dirty.src = 'images/empty.JPG';
            letf_image_dirty.src = 'images/dirty.JPG';
        break;

        case "none":
            rigth_image_dirty.src = 'images/empty.JPG';
            letf_image_dirty.src = 'images/empty.JPG';
        break;
    }

    
   for (let index = 0; index < 10; index++) {
        await delay();
        console.log(index);
        if(index % 2 == 0) {
            rigth_image.src = 'images/aspiradora.JPG';
            letf_image.src = 'images/empty.JPG';
        }
        else {
            rigth_image = 'images/empty.JPG';
            letf_image.src = 'images/aspiradora.JPG';
        }   
   }
    
    
}

async function delay() { // 3
    return new Promise(res => setTimeout(res, 1000));
}
