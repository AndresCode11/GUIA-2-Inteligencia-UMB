$(document).ready(function(){
    document.getElementById('start-btn').addEventListener('click', function() {
        init();
    })    
});


async function init() {

    // Dirty position
    let dirty_position = [false, false];

    // Aspiradora position
    let index = 0;
    
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
            index = 0;
        break;

        case "left":
            rigth_image = 'images/empty.JPG';
            letf_image.src = 'images/aspiradora.JPG';
            index = 1;
        break;
    }

    // Suciedad
    switch(suciedad) {
        case "both":
            rigth_image_dirty.src = 'images/dirty.JPG';
            letf_image_dirty.src = 'images/dirty.JPG';
            dirty_position = [true, true];
        break;

        case "right":
            rigth_image_dirty.src = 'images/dirty.JPG';
            letf_image_dirty.src = 'images/empty.JPG';
            dirty_position = [false, true];
        break;

        case "left": 
            rigth_image_dirty.src = 'images/empty.JPG';
            letf_image_dirty.src = 'images/dirty.JPG';
            dirty_position = [true , false];
        break;

        case "none":
            rigth_image_dirty.src = 'images/empty.JPG';
            letf_image_dirty.src = 'images/empty.JPG';
            dirty_position = [false, false];
        break;
    }

    let win_counter = 0;

   for (index; index < 10; index++) {
        await delay();
        console.log(index);
        console.log('_____')
        console.log(index % 2)

        // Image rotation
        if(index % 2 == 0) {
            rigth_image.src = 'images/aspiradora.JPG';
            letf_image.src = 'images/empty.JPG';

            // Check if current position is dirty
            if(dirty_position[index % 2]) {
                dirty_position[index % 2] = false;
                rigth_image_dirty.src = 'images/empty.JPG';
            }
        }
        else {
            rigth_image.src = 'images/empty.JPG';
            letf_image.src = 'images/aspiradora.JPG';

            // Check if current position is dirty
            if(dirty_position[index % 2]) {
                dirty_position[index % 2] = false;
                letf_image_dirty.src = 'images/empty.JPG';
            }
        }  
        
        // Check to exit the loop
        if(dirty_position[0] == false && dirty_position[1]  == false) {
            win_counter++;
            if(win_counter > 1) {
                alert('FIN DE LA SIMULACION NO HAY BASURA');
                location.reload();
                break;
            }
        }
   }
    
    
}

async function delay() { // 3
    return new Promise(res => setTimeout(res, 1000));
}
