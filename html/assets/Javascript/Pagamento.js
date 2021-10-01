var pagPrincipal = document.querySelector('#Principal');
    pagPrincipal.addEventListener('click',()=>{
    window.location = "../Principal";
});



function Cpf(){
    const cpf = document.getElementById('cpf').value;
    if (cpf.length == 0){
        alert("CPF inválido");
        return false
    }
}

function Numero(){
    const cartao= document.getElementById('cartao').value
    while(cartao.length < 16){
        alert("Número de cartão inválido");
        return cartao.length = 16;
    }
}

function Seguranca(){
    const cvc= document.getElementById("cvc").value
    while(cvc.length < 3){
        alert("CVC inválido");
        return cvc.length = 3;
    }

}

function exDate(){
    const expedicao = document.getElementById('data').value
    expedicao instanceof Date && !isNaN(expedicao);
    while (expedicao.length < 5){
        alert("Data de expedição inválida");
        return expedicao.length = 5; 
    }
}

function exValidacao(){
    const cartao = document.getElementById('cartao');
    const expedicao = document.getElementById('data');
    const cvc = document.getElementById('cvc');
    const cpf = document.getElementById('cpf');
    if (cartao.value.length == 0 && expedicao.value.length == 0 &&  cvc.value.length == 0 && cpf.value.length == 0){
        alert("Preencha todos os campos corretamente!");
    } else{
        document.forms[0].submit();

    }
    
}




