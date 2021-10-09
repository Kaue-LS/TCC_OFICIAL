




var pagPrincipal = document.querySelector('#Principal');
    pagPrincipal.addEventListener('click',()=>{
    window.location = "../Principal";
});


function Validar(){
    let cartao=document.getElementById('cartao').value
    let cvc = document.getElementById('cvc').value
    let nome = document.getElementById('nome').value
    let data=document.getElementById("data").value
    if(cartao.length==0){
        alert('Preenche o cartão!')
    }
    else if(cartao.length>0 && cartao.length<19){
        alert("Preenche o cartão corretamente!")
    }
    else if(cvc.length==0){
        alert("Preenche o CVC!")
    }
    else if(cvc.length>0 && cvc.length<3){
        alert('Preenche o CVC corretamente!')
    }
    else if(nome==0){
        alert("Preenche o seu nome!")
    }
    else if(data.length==0){
        alert('Preenche a data!')
    }
    else if(data.length>0 && data.length<5){
        alert('Preenche a data corretamente!')
    }

}



// Mascara do cartao
function mascaraCartao(o,f){
    v_objj=o
    v_funn=f
    setTimeout("execmascaraCartao()",1)
}
function execmascaraCartao(){
    v_objj.value=v_funn(v_objj.value)
}
function mcartao(v){
    v=v.replace(/\D/g,""); //Remove tudo o que não é dígito
    v=v.replace(/(\d{4})(\d)/,"$1-$2"); //Coloca parênteses em volta dos dois primeiros dígitos
    v=v.replace(/(\d{4})(\d)/,"$1-$2");
    v=v.replace(/(\d{4})(\d)/,"$1-$2");
    v=v.replace(/(\d{4})(\d+?$)/,"$1"); //Coloca hífen entre o quarto e o quinto dígitos
    return v;
}

// Mascara do CVC
function mascaraCvc(o,f){
    v_objj=o
    v_funn=f
    setTimeout("execmascaraCvc()",1)
}
function execmascaraCvc(){
    v_objj.value=v_funn(v_objj.value)
}


function mcvc(v){
    v=v.replace(/\D/g,""); //Remove tudo o que não é dígito
  //Coloca hífen entre o quarto e o quinto dígitos
    return v;
}
// Mascara da Data
function mascaraDate(o,f){
    v_objj=o
    v_funn=f
    setTimeout("execmascaraDate()",1)
}
function execmascaraDate(){
    v_objj.value=v_funn(v_objj.value)
}
function mdate(v){
    return v
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "$1/$2")
}

// ==============================

function id( el ){
	return document.getElementById( el );
}
window.onload = function(){
	id('cartao').onkeyup = function(){
		mascaraCartao( this, mcartao );
	}
    id('cvc').onkeyup = function(){
		mascaraCvc( this, mcvc );
	}
    id('data').onkeyup = function(){
		mascaraDate( this, mdate );
	}
  
}

