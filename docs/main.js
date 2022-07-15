const form = document.getElementById('formu');
const registro = document.getElementById('registro');
const exito = document.getElementById('exito');

form.addEventListener('submit', async (e) => {
    e.preventDefault();


    try {
        const answer = await fetch("https://sheet.best/api/sheets/6a7a2440-972f-406d-9860-4882df08ebb7", {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "Referencia de contenedor": form.textref.value,

                "Fecha1": form.dateref.value,

                "Desde": form.desderef.value,

                "Hacia": form.haciaref.value,

                "Introduccion": form.paragh.value,

                "Fecha2 y Hora": form.fechyhor.value,

                "Descripcion de la actividad1": form.decrip1.value,

                "Fecha3 y Hora": form.fechyhor2.value,

                "Descripcion de la actividad2": form.decrip2.value,

                "Tiempo": form.tiempo.value,

                "Temperatura C": form.temper.value,

                "Lugar": form.place.value,

                "img#": form.numorder.value,

                "Imagen": form.filex.value,
 
                "Conclusion Inkoop ": form.conclu.value,

                "Observaciones": form.obsr.value

            })

        });

    } catch (error) {
        console.log(error);
    }




    registro.classList.remove('activo');
    exito.classList.add('activo');

    


});