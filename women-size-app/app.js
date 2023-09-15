const subBreast = document.getElementById('submit-breast');
const subWaist = document.getElementById('submit-waist');
const subHip = document.getElementById('submit-hip');


subBreast.addEventListener('click', breastSize);
subWaist.addEventListener('click', waistSize);
subHip.addEventListener('click', hipSize);

const parag = document.getElementById('parag');


function breastSize () {

    const breastInput = document.getElementById('breast').value;
    if(breastInput >= 74 && breastInput <= 78){
        parag.innerHTML = 'Your size is 32 !!!';
        // console.log('Your size is 32');
    } 
    else if (breastInput >= 78 && breastInput <= 81){
        parag.innerHTML = 'Your size is 34 !!!';
    } 
    else if(breastInput >= 82 && breastInput <= 85) {
        parag.innerHTML = 'Your size is 36 !!!';

    }
    else if(breastInput >= 86 && breastInput <= 89) {
        parag.innerHTML = 'Your size is 38 !!!';

    } 
    else if (breastInput >= 90 && breastInput <= 93) {
        parag.innerHTML = 'Your size is 40 !!!';

    }
    else if (breastInput >= 94 && breastInput <= 97) {
        parag.innerHTML = 'Your size is 42 !!!';

    }
    else if (breastInput >= 98 && breastInput <= 102) {
        parag.innerHTML = 'Your size is 44 !!!';

    }
    else {
                return;
        }

}

function waistSize(){
    const waistInput = document.getElementById('waist').value;

    if(waistInput >= 61 && waistInput <= 63) {
        parag.innerHTML = 'Your size is 32 !!!';
    } 
    else if(waistInput >= 64 && waistInput <= 66) {
        parag.innerHTML = 'Your size is 34 !!!';
    }
    else if (waistInput >= 67 && waistInput <= 70) {
        parag.innerHTML = 'Your size is 36 !!!';
    }
    else if (waistInput >= 71 && waistInput <= 74){
        parag.innerHTML = 'Your size is 38 !!!';
    }
    else if (waistInput >= 75 && waistInput <= 78){
        parag.innerHTML = 'Your size is 40 !!!';
    }
    else if (waistInput >= 79 && waistInput <= 82){
        parag.innerHTML = 'Your size is 42 !!!';
    }
    else if (waistInput >= 83 && waistInput <= 87){
        parag.innerHTML = 'Your size is 44 !!!';
    }
    else {
        return;
    }

}

function hipSize(){
    const hipInput = document.getElementById('hip').value;

    if(hipInput >=84 && hipInput <= 87) {
        parag.innerHTML = 'Your size is 32 !!!';
    } 
    else if(hipInput >=88 && hipInput <= 91) {
        parag.innerHTML = 'Your size is 34 !!!';
    }
    else if (hipInput >=92 && hipInput <= 95) {
        parag.innerHTML = 'Your size is 36 !!!';
    }
    else if (hipInput >=96 && hipInput <= 98){
        parag.innerHTML = 'Your size is 38 !!!';
    }
    else if (hipInput >=99 && hipInput <= 101){
        parag.innerHTML = 'Your size is 40 !!!';
    }
    else if (hipInput >=102 && hipInput <= 104){
        parag.innerHTML = 'Your size is 42 !!!';
    }
    else if (hipInput >=105 && hipInput <= 108){
        parag.innerHTML = 'Your size is 44 !!!';
    }
    else {
        return;
    }

}
