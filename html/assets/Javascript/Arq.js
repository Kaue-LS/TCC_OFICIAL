function Encriptar(){
    const data=document.getElementById("Block1Encrypt").files;
    if(data.length == 1){
        document.getElementById("encrypt_form").submit();
    } 
    else{
        document.getElementById('spawn').style.display=`block`
        document.getElementById("problem").innerHTML='Apenas um arquivo pode ser escolhido';    
    }
}
function Restaurar(){
    const data=document.getElementById("Block2Decrypt").value
    if(data.length===0){
        document.getElementById('spawn').style.display=`block`
        document.getElementById("problem").innerHTML='A extensão final do arquivo está vazia';
    }
    else{
        if(data[0] == "."){
            if(data.indexOf(" ") != -1){
                document.getElementById('spawn').style.display=`block`
                document.getElementById("problem").innerHTML='A extensão final do arquivo não pode conter espaços';    
            }
            else{
                const files = document.getElementById("Block1Decrypt").files;
                if(files.length == 1){
                    document.getElementById("decrypt_form").submit();
                }
                else{
                    document.getElementById('spawn').style.display=`block`
                    document.getElementById("problem").innerHTML='Apenas um arquivo pode ser escolhido';    
                }
            }
        }
        else{
            document.getElementById('spawn').style.display=`block`
            document.getElementById("problem").innerHTML='A extensão final do arquivo precisa começar com (.)';
        }
    }
}

function Salvar(){
    const data2=document.getElementById("Block2").value
    if( data2.length===0){
        document.getElementById('spawn').style.display=`block`
        document.getElementById("problem").innerHTML='Salvar'

    }
}
function fechar(){
    const fechar=document.getElementById('fechar')
    if(fechar){
        document.getElementById('spawn').style.display=`none`

    }
}