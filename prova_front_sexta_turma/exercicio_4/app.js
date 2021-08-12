let form = document.querySelector('#form-aula')
let val = []

let inputNomeM = document.querySelector('#inputNomeM')
inputNomeM.required = true;
inputNomeM.addEventListener('blur', function() {
    let regexTexto = /[A-Z][a-z]* [A-Z][a-z]*/

    
    if (regexTexto.test(this.value.trim())) {
        document.querySelector('.erro-nomeM').style.display = 'none'
        document.querySelector('.sucesso-nomeM').style.display = 'block'
        val[0] = true
    } else {
        document.querySelector('.sucesso-nomeM').style.display = 'none'
        document.querySelector('.erro-nomeM').style.display = 'block'
        val[0] = false
    }
})

let inputNome = document.querySelector('#inputNome')
inputNome.required = true;
inputNome.addEventListener('blur', function() {
    let regexTexto = /[A-Z][a-z]* [A-Z][a-z]*/

    
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

let inputCpf = document.querySelector('#inputcampo4')
inputCpf.required = true;
inputCpf.addEventListener('blur', function() {
    let regexTexto = /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/

    
    if (regexTexto.test(this.value.trim())) {
        document.querySelector('.erro-cpf').style.display = 'none'
        document.querySelector('.sucesso-cpf').style.display = 'block'
    } else {
        document.querySelector('.sucesso-cpf').style.display = 'none'
        document.querySelector('.erro-cpf').style.display = 'block'
    }
})

let inputCrm = document.querySelector('#inputcampo2')
inputCrm.required = true;
inputCrm.addEventListener('blur', function() {
    let regexTexto = /^[0-9]+$/
    
    if (regexTexto.test(this.value.trim())) {
        document.querySelector('.erro-crm').style.display = 'none'
        document.querySelector('.sucesso-crm').style.display = 'block'
    } else {
        document.querySelector('.sucesso-crm').style.display = 'none'
        document.querySelector('.erro-crm').style.display = 'block'
    }
})

let inputDatar = document.querySelector('#inputcampo3')
inputDatar.required = true;
inputDatar.addEventListener('blur', function() {
    let regexTexto = /^\d{2}[./-]\d{2}[./-]\d{4}$/

    
    if (regexTexto.test(this.value.trim())) {
        document.querySelector('.erro-datar').style.display = 'none'
        document.querySelector('.sucesso-datar').style.display = 'block'
    } else {
        document.querySelector('.sucesso-datar').style.display = 'none'
        document.querySelector('.erro-datar').style.display = 'block'
    }
})

let inputDatan = document.querySelector('#inputcampo5')
inputDatan.required = true;
inputDatan.addEventListener('blur', function() {
    let regexTexto = /^\d{2}[./-]\d{2}[./-]\d{4}$/

    
    if (regexTexto.test(this.value.trim())) {
        document.querySelector('.erro-datan').style.display = 'none'
        document.querySelector('.sucesso-datan').style.display = 'block'
    } else {
        document.querySelector('.sucesso-datan').style.display = 'none'
        document.querySelector('.erro-datan').style.display = 'block'
    }
})


let inputQtd = document.querySelector('#inputcampo6')
inputQtd.required = true;
inputQtd.addEventListener('blur', function() {
    let regexTexto = /^[0-9]+$/

    
    if (regexTexto.test(this.value.trim())) {
        document.querySelector('.erro-qtd').style.display = 'none'
        document.querySelector('.sucesso-qtd').style.display = 'block'
    } else {
        document.querySelector('.sucesso-qtd').style.display = 'none'
        document.querySelector('.erro-qtd').style.display = 'block'
    }
})




let selectSexo = document.querySelector('.select-custom')
selectSexo.required = true;
selectSexo.addEventListener('change', function() {
    let selectedIndex = selectSexo.selectedIndex
    let itemSelected = selectSexo.options[selectedIndex]

    if(itemSelected.value != 0){
        document.querySelector('.erro-sexo').style.display = 'none'
        document.querySelector('.sucesso-sexo').style.display = 'block'
        
    }
     else {
        document.querySelector('.sucesso-sexo').style.display = 'none'
        document.querySelector('.erro-sexo').style.display = 'block'
        
    }
})


