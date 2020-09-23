import { validarDataNascimento } from "./validar-data-nascimento.js"

export const validarInput = (input) => {

    const classeElementoErro = "erro-validacao";

    const classeInputErro = "possui-erro-validacao";

    const elementoPai = input.parentNode;

    const elementoErroExiste = elementoPai.querySelector(`.${classeElementoErro}`);

    const elementoErro = elementoErroExiste || document.createElement('div');

    const elementoEhValido = input.validity.valid;

    const tipo = input.dataset.type;

    const validadoresEspecificos = {

        dataNascimento: (input) => validarDataNascimento(input)

    }

    if (validadoresEspecificos[tipo]) {

        validadoresEspecificos[tipo](input);

    }

    if (!elementoEhValido) {

        elementoErro.className = classeElementoErro;

        input.classList.add(classeInputErro);

        elementoErro.textContent = "Há um erro aqui";

        input.after(elementoErro)


    } else {



    }

};