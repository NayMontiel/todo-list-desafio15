// arreglo de objetos
const tareas = [
    { id: 1, descripcion: "Hacer Mercado", estatus: false },
    { id: 2, descripcion: "Estudiar para la Prueba", estatus: false },
    { id: 3, descripcion: "Sacar a Pasear a tobby", estatus: false }
];
// declaracion de variables
const tbody = document.querySelector("tbody");
const btn = document.querySelector("#btnAgregar");
let input = document.querySelector("#inputText");
let total = document.querySelector("#total");
let realizadas = document.querySelector("#realizadas");
let id = 4;

btnAgregar.addEventListener("click", () => {
    if (input.value == "") 
    {
      alert("CAMPO VACIO. VERIFIQUE Y VUELVA A INTENTAR");
      return;
    }

    let inputTarea = { id: id++, descripcion: input.value, estatus: false };
    tareas.push(inputTarea);
     input.value = "";
    console.log(tareas);

    
        pintarTabla();      
    })


    function marcado(miCheckBox, id) {
        if (miCheckBox.checked == true) {
            tareas.forEach((tarea) => {
                tareas[id-1].estatus = true;
                
            })
        }
        else{
            tareas.forEach((tarea) => {
                tareas[id-1].estatus = false;
            })
        }
        
        pintarTabla();
       
    }


    function calculaTotal()
    {
        cont = 0;
        tareas.forEach((tarea) => {
            cont++;            
        })
        return cont;
    }

    function calculaRealizado(){
        cont = 0;

    for (const tarea of tareas) {
        if (tarea.estatus == true) {
         
            cont++;
            
        }
        
    }
        return cont;
     }


     function eliminar(id){
        const index = tareas.findIndex((tarea) => tarea.id == id);
        tareas.splice(index, 1);

        pintarTabla();
        console.log(tareas);
    }

    function pintarTabla()
    {
        tbody.innerHTML = "";
        tareas.forEach((tarea) => {
           let michecked ='';
           let  miclass  ='';

            if (tarea.estatus == true) {
                michecked = 'checked';
                miclass   = 'class="class_tachado"';
            }
           
            tbody.innerHTML += `
                <tr>
                    <td>${tarea.id}</td>
                    <td ${miclass}>${tarea.descripcion}</td>
                    <td><input type="checkbox" ${michecked} name="checkbox" onchange="marcado(this, ${tarea.id})" ></td>
                    <td><i onclick="eliminar(${tarea.id})"class="fa-solid fa-xmark" id="btn-eliminar"></i></td>
                </tr>`;
              
        })

        let calcularTotal = calculaTotal();
        let calcularRealizados = calculaRealizado();        

        total.innerHTML = `Total: ${calcularTotal}`;
        realizadas.innerHTML = `Realizadas: ${calculaRealizado()}`;
    }
