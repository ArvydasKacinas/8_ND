'use-strict';

let masyvas=[];

document.querySelector('#paimti').addEventListener('click',function papildymas(){
    let input1=parseFloat(document.querySelector('#input1').value);
        masyvas.push(input1);
        console.log(masyvas);
});
