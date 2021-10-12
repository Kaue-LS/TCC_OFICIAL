var actionResult = document.getElementById("Block2")
function Decriptar(){
    const data=document.getElementById("Block1").value
    if(data.length===0){
        document.getElementById('spawn').style.display=`block`
        document.getElementById("problem").innerHTML='Decriptar'
    }
    else{
        fetch("./encrypt.php",{
            body : `type=message&action=decrypt&payload=${data}`,
            method : "POST",
            headers : {
                "Content-Type" : "application/x-www-form-urlencoded"
            }
        }).then((Response) => {
            Response.text().then((Text) => {
                actionResult.innerText = Text;
            })
        });
    }    
}

function Encriptar(){
    const data=document.getElementById("Block1").value
    if(data.length===0){
        document.getElementById('spawn').style.display=`block`
        document.getElementById("problem").innerHTML='Encriptar'
    }
    else{
        fetch("./encrypt.php",{
            body : `type=message&action=encrypt&payload=${data}`,
            method : "POST",
            headers : {
                "Content-Type" : "application/x-www-form-urlencoded"
            }
        }).then((Response) => {
            Response.text().then((Text) => {
                actionResult.innerText = Text
            })
        });
    }
}
// function Restaurar(){
//     const data=document.getElementById("block2").value
//     if(data.length===0){
//         document.getElementById('spawn').style.display=`block`
//         document.getElementById("problem").innerHTML='Restaurar'

//     }
// }
function Copiar(element_index){
    const data1 = document.getElementById("Block1").value
    const data2 = document.getElementById("Block2").value
    if(element_index == 1){
        if(data1.length===0){
            document.getElementById('spawn').style.display=`block`
            document.getElementById("problem").innerHTML='Copiar'
        }
        else{
            navigator.clipboard.writeText(data1);
        }
    }
    if(element_index == 2){
        if(data2.length === 0){
            document.getElementById('spawn').style.display=`block`
            document.getElementById("problem").innerHTML='Copiar'
        }
        else{
            navigator.clipboard.writeText(data2);
        }
    }
    
}
function fechar(){
    const fechar=document.getElementById('fechar')
    if(fechar){
        document.getElementById('spawn').style.display=`none`

    }
}