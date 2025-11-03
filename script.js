let general = [];
let primeraEtapa = [];
let segundaEtapa = [];
let terceraEtapa = [];
let cuartaEtapa = [];
let quintaEtapa = [];


const btnPrueba = document.getElementById("btnPrueba");
const borrar = document.getElementById("borrar");



btnPrueba.addEventListener('click', function(){
    for (let index = 0; index < general.length; index++) {
        general[index].checked = true;
        localStorage.setItem(general[index].id, general[index].checked)
        console.log(localStorage.getItem("General"+ (index+1)));
        
    }
    for (let index = 0; index < primeraEtapa.length; index++) {
        primeraEtapa[index].checked = true;
        localStorage.setItem(primeraEtapa[index].id, primeraEtapa[index].checked);
    }
    for (let index = 0; index < segundaEtapa.length; index++) {
        segundaEtapa[index].checked = true;
        localStorage.setItem(segundaEtapa[index].id, segundaEtapa[index].checked);
        
    }
    for (let index = 0; index < terceraEtapa.length; index++) {
        terceraEtapa[index].checked = true;
        localStorage.setItem(terceraEtapa[index].id, terceraEtapa[index].checked);
        
    }
    for (let index = 0; index < cuartaEtapa.length; index++) {
        cuartaEtapa[index].checked = true;
        localStorage.setItem(cuartaEtapa[index].id, cuartaEtapa[index].checked);
        
    }
    for (let index = 0; index < quintaEtapa.length; index++) {
        quintaEtapa[index].checked = true;
        localStorage.setItem(quintaEtapa[index].id, quintaEtapa[index].checked);
        
    }
    
    
})

for (let index = 1; index < 9; index++) {
    general.push(document.querySelector("#General"+index));
    
};

for (let index = 1; index < 15; index++) {
    primeraEtapa.push(document.querySelector("#primeraEtapa" + index));
    
};

for (let index = 1; index < 11; index++) {
    segundaEtapa.push(document.querySelector("#segundaEtapa" + index));
    
}

for (let index = 1; index < 8; index++) {
    terceraEtapa.push(document.querySelector("#terceraEtapa" + index));
    
}
for (let index = 1; index < 7; index++) {
    cuartaEtapa.push(document.querySelector("#cuartaEtapa" + index));
    
}
for (let index = 1; index < 14; index++) {
    quintaEtapa.push(document.querySelector("#quintaEtapa" + index));
    
}

for (let index = 0; index < general.length; index++) {
    general[index].addEventListener('change', ()=>{
        if (general[index].checked === true) {
            localStorage.setItem(general[index].id, general[index].checked);
            console.log(localStorage.getItem(general[index].id));
            
        }else{
            localStorage.clear(general[index].id, general[index].checked);
            console.log(localStorage.getItem(general[index].id));
        }
        
    })
}
for (let index = 0; index < primeraEtapa.length; index++) {
    primeraEtapa[index].addEventListener('change', ()=>{
        if (primeraEtapa[index].checked === true) {
            localStorage.setItem(primeraEtapa[index].id, primeraEtapa[index].checked);
            console.log(localStorage.getItem(primeraEtapa[index].id));
            
        }else{
            localStorage.clear(primeraEtapa[index].id, primeraEtapa[index].checked);
            console.log(localStorage.getItem(primeraEtapa[index].id));
        }
    })
    
}
for (let index = 0; index < segundaEtapa.length; index++) {
    segundaEtapa[index].addEventListener('change', ()=>{
        if (segundaEtapa[index].checked === true) {
            localStorage.setItem(segundaEtapa[index].id, segundaEtapa[index].checked);
            console.log(localStorage.getItem(segundaEtapa[index].id));
            
        }else{
            localStorage.clear(segundaEtapa[index].id, segundaEtapa[index].checked);
            console.log(localStorage.getItem(segundaEtapa[index].id));
        }
    })
    
}
for (let index = 0; index < terceraEtapa.length; index++) {
    terceraEtapa[index].addEventListener('change', ()=>{
        if (terceraEtapa[index].checked === true) {
            localStorage.setItem(terceraEtapa[index].id, terceraEtapa[index].checked);
            console.log(localStorage.getItem(terceraEtapa[index].id));
            
        }else{
            localStorage.clear(terceraEtapa[index].id, terceraEtapa[index].checked);
            console.log(localStorage.getItem(terceraEtapa[index].id));
        }
    })
    
}
for (let index = 0; index < cuartaEtapa.length; index++) {
    cuartaEtapa[index].addEventListener('change', ()=>{
        if (cuartaEtapa[index].checked === true) {
            localStorage.setItem(cuartaEtapa[index].id, cuartaEtapa[index].checked);
            console.log(localStorage.getItem(cuartaEtapa[index].id));
            
        }else{
            localStorage.clear(cuartaEtapa[index].id, cuartaEtapa[index].checked);
            console.log(localStorage.getItem(cuartaEtapa[index].id));
        }
    })
    
}
for (let index = 0; index < quintaEtapa.length; index++) {
    quintaEtapa[index].addEventListener('change', ()=>{
        if (quintaEtapa[index].checked === true) {
            localStorage.setItem(quintaEtapa[index].id, quintaEtapa[index].checked);
            console.log(localStorage.getItem(quintaEtapa[index].id));
            
        }else{
            localStorage.clear(quintaEtapa[index].id, quintaEtapa[index].checked);
            console.log(localStorage.getItem(quintaEtapa[index].id));
        }
    })
    
}
function revisar() {
    for (let index = 0; index < general.length; index++) {
        if (localStorage.getItem(general[index].id) != null) {
            general[index].checked = true;
            console.log(general[index]);
            
        }
        
    }
    for (let index = 0; index < primeraEtapa.length; index++) {
        if (localStorage.getItem(primeraEtapa[index].id) != null) {
            primeraEtapa[index].checked = true;
            console.log(primeraEtapa[index]);
            
        }
    }
    for (let index = 0; index < segundaEtapa.length; index++) {
        if (localStorage.getItem(segundaEtapa[index].id) != null) {
            segundaEtapa[index].checked = true;
            console.log(segundaEtapa[index]);
            
        }
    }
    for (let index = 0; index < terceraEtapa.length; index++) {
        if (localStorage.getItem(terceraEtapa[index].id) != null) {
            terceraEtapa[index].checked = true;
            console.log(terceraEtapa[index]);
            
        }
    }
    for (let index = 0; index < cuartaEtapa.length; index++) {
        if (localStorage.getItem(cuartaEtapa[index].id) != null) {
            cuartaEtapa[index].checked = true;
            console.log(cuartaEtapa[index]);
            
        }
    }
    for (let index = 0; index < quintaEtapa.length; index++) {
        if (localStorage.getItem(quintaEtapa[index].id) != null) {
            quintaEtapa[index].checked = true;
            console.log(quintaEtapa[index]);
            
        }
    }
}

function borrador() {
    console.log("borrando");
    
    for (let index = 0; index < general.length; index++) {
        general[index].checked = false;
        localStorage.clear(general[index].id);    
        
    }
    for (let index = 0; index < primeraEtapa.length; index++) {
        primeraEtapa[index].checked = false;
        localStorage.clear(primeraEtapa[index.id]);
    }
    for (let index = 0; index < segundaEtapa.length; index++) {
        segundaEtapa[index].checked = false;
        localStorage.clear(segundaEtapa[index].id);
        
    }
    for (let index = 0; index < terceraEtapa.length; index++) {
        terceraEtapa[index].checked = false;
        localStorage.clear(terceraEtapa[index].id);
        
    }
    for (let index = 0; index < cuartaEtapa.length; index++) {
        cuartaEtapa[index].checked = false;
        localStorage.clear(cuartaEtapa[index].id);
        
    }
    for (let index = 0; index < quintaEtapa.length; index++) {
        quintaEtapa[index].checked = false;
        localStorage.clear(quintaEtapa[index].id);
        
    }
    
}

borrar.addEventListener('click', borrador);

revisar();