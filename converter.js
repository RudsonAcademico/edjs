import { Stack } from "./stack_classv2.js";

function converterParaBinario(num) {
    const stack = new Stack();
    let resultado = num;
    do {
        let resto = resultado % 2
        resultado = Math.floor(resultado / 2)
        stack.push(resto)
    } while (resultado >= 2);
    stack.push(resultado)

    let binario = ""
    const size = stack.size()
    for (let i = 0; i < size; i++) {
        binario += stack.pop()
    }
    return binario
}

const converter = converterParaBinario(10);
console.log(converter); // Deve exibir "1010"