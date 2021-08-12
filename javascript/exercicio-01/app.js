let form = document.querySelector('#form-aula')
let val = []
let inputNome = document.querySelector('#inputNome')
//inputNome.required = true;
inputNome.addEventListener('blur', function() {
    let regexTexto = /[A-Z][a-z]* [A-Z][a-z]*/

    // if (this.value.trim() == "") { sem regex
    if (regexTexto.test(this.value.trim())) {
        document.querySelector('.erro-nome').style.display = 'none'
        document.querySelector('.sucesso-nome').style.display = 'block'
        val[0] = true
    } else {
        document.querySelector('.sucesso-nome').style.display = 'none'
        document.querySelector('.erro-nome').style.display = 'block'
        val[0] = false
    }
})

let inputCpf = document.querySelector('#inputcampo2')
//inputCpf.required = true;
inputCpf.addEventListener('blur', function() {
    let regexTexto = /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/

    // if (this.value.trim() == "") { sem regex
    if (regexTexto.test(this.value.trim())) {
        document.querySelector('.erro-cpf').style.display = 'none'
        document.querySelector('.sucesso-cpf').style.display = 'block'
    } else {
        document.querySelector('.sucesso-cpf').style.display = 'none'
        document.querySelector('.erro-cpf').style.display = 'block'
    }
})

let inputData = document.querySelector('#inputcampo3')
//inputData.required = true;
inputData.addEventListener('blur', function() {
    let regexTexto = /^\d{2}[./-]\d{2}[./-]\d{4}$/

    // if (this.value.trim() == "") { sem regex
    if (regexTexto.test(this.value.trim())) {
        document.querySelector('.erro-data').style.display = 'none'
        document.querySelector('.sucesso-data').style.display = 'block'
    } else {
        document.querySelector('.sucesso-data').style.display = 'none'
        document.querySelector('.erro-data').style.display = 'block'
    }
})

let inputEnd = document.querySelector('#inputcampo4')
//inputEnd.required = true;
inputEnd.addEventListener('blur', function() {
    let regexTexto = /([\w\W]+)\s(\d+)/

    // if (this.value.trim() == "") { sem regex
    if (regexTexto.test(this.value.trim())) {
        document.querySelector('.erro-end').style.display = 'none'
        document.querySelector('.sucesso-end').style.display = 'block'
    } else {
        document.querySelector('.sucesso-end').style.display = 'none'
        document.querySelector('.erro-end').style.display = 'block'
    }
})

let inputBairro = document.querySelector('#inputcampo5')
//inputBairro.required = true;
inputBairro.addEventListener('blur', function() {
    let regexTexto = /^[\w\W]+$/

    // if (this.value.trim() == "") { sem regex
    if (regexTexto.test(this.value.trim())) {
        document.querySelector('.erro-bairro').style.display = 'none'
        document.querySelector('.sucesso-bairro').style.display = 'block'
    } else {
        document.querySelector('.sucesso-bairro').style.display = 'none'
        document.querySelector('.erro-bairro').style.display = 'block'
    }
})

let inputCep = document.querySelector('#inputcampo6')
//inputCep.required = true;
inputCep.addEventListener('blur', function() {
    let regexTexto = /^([\d]{2})\.*([\d]{3})-*([\d]{3})/;

    // if (this.value.trim() == "") { sem regex
    if (regexTexto.test(this.value.trim())) {
        document.querySelector('.erro-cep').style.display = 'none'
        document.querySelector('.sucesso-cep').style.display = 'block'
    } else {
        document.querySelector('.sucesso-cep').style.display = 'none'
        document.querySelector('.erro-cep').style.display = 'block'
    }
})

let inputMunicipio = document.querySelector('#inputcampo8')
//inputMunicipio.required = true;
inputMunicipio.addEventListener('blur', function() {
    let regexTexto = /^[\w\W]+$/

    // if (this.value.trim() == "") { sem regex
    if (regexTexto.test(this.value.trim())) {
        document.querySelector('.erro-muni').style.display = 'none'
        document.querySelector('.sucesso-muni').style.display = 'block'
    } else {
        document.querySelector('.sucesso-muni').style.display = 'none'
        document.querySelector('.erro-muni').style.display = 'block'
    }
})

let inputTelefone = document.querySelector('#inputcampo9')
//inputTelefone.required = true;
inputTelefone.addEventListener('blur', function() {
    let regexTexto = /^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/

    // if (this.value.trim() == "") { sem regex
    if (regexTexto.test(this.value.trim())) {
        document.querySelector('.erro-tel').style.display = 'none'
        document.querySelector('.sucesso-tel').style.display = 'block'
    } else {
        document.querySelector('.sucesso-tel').style.display = 'none'
        document.querySelector('.erro-tel').style.display = 'block'
    }
})

let inputCelular = document.querySelector('#inputcampo10')
inputCelular.required = true;
inputCelular.addEventListener('blur', function() {
    let regexTexto = /^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{4}\-?[0-9]{4}$/

    // if (this.value.trim() == "") { sem regex
    if (regexTexto.test(this.value.trim())) {
        document.querySelector('.erro-cel').style.display = 'none'
        document.querySelector('.sucesso-cel').style.display = 'block'
        form.allowDefault = true;
        
        
    } else {
        document.querySelector('.sucesso-cel').style.display = 'none'
        document.querySelector('.erro-cel').style.display = 'block'
        form.addEventListener('submit', function preventDefault(event) {
            if (event.currentTarget.allowDefault) {
                return;
            }
            event.preventDefault();
        })
        
    }
})

let selectUf = document.querySelector('.select-custom')
selectUf.required = true;
selectUf.addEventListener('change', function() {
    let selectedIndex = selectUf.selectedIndex
    let itemSelected = selectUf.options[selectedIndex]

    if(itemSelected.value != 0){
        document.querySelector('.erro-uf').style.display = 'none'
        document.querySelector('.sucesso-uf').style.display = 'block'
        
    }
     else {
        document.querySelector('.sucesso-uf').style.display = 'none'
        document.querySelector('.erro-uf').style.display = 'block'
        
    }
})


