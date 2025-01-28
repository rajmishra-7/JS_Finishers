const output = document.getElementById('output');

let output_value = Number(output.textContent);


const btnIncrement = document.querySelector('.btnplus');

const btnDecrement = document.querySelector('.btnminus');

btnIncrement.addEventListener('click', incrementOutput);

btnDecrement.addEventListener('click', decrementOutput);

function incrementOutput() {
    output_value++;
    output.textContent = output_value;
    return output_value;
}

function decrementOutput() {
    output_value--;
    output.textContent = output_value;
    return output_value;
}