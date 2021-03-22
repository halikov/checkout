'use strict';

const radios = document.querySelectorAll('.plans__radio');
const amount = document.querySelector('.form__card-title');
let billed = amount.querySelector('.total');

let getCheckedRadio = function() {
    for(let i of radios) {
        if (i.checked) {
            return i.id;
        }
    }
}

radios.forEach(item => {
    item.addEventListener('change', function() {
        let chkd = getCheckedRadio();
    
        if (chkd === 'yearly') {
            billed.textContent = '50';
        } else {
            billed.textContent = '7';
        }
    });
});
