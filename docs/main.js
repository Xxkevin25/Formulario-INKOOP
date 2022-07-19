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

                //Aqui inicia el Registro de Tiempo

                "Fecha2": form.fechyhor.value,

                "Hora-1": form.hora1.value,

                "Descripcion-1": form.des1.value,

                "Hora-2": form.hora2.value,

                "Descripcion-2": form.des2.value,

                "Hora-3": form.hora3.value,

                "Descripcion-3": form.des3.value,

                "Hora-4": form.hora4.value,

                "Descripcion-4": form.des4.value,

                "Hora-5": form.hora5.value,

                "Descripcion-5": form.des5.value,

                "Hora-6": form.hora6.value,

                "Descripcion-6": form.des6.value,

                //Aqui termina la Fecha1

                "Fecha3": form.fechyhor2.value,

                "Hora1": form.hour1.value,

                "Descripcion1": form.crip1.value,

                "Hora2": form.hour2.value,

                "Descripcion2": form.crip2.value,

                "Hora3": form.hour3.value,

                "Descripcion3": form.crip3.value,

                "Hora4": form.hour4.value,

                "Descripcion4": form.crip4.value,

                "Hora5": form.hour5.value,

                "Descripcion5": form.crip5.value,

                "Hora6": form.hour6.value,

                "Descripcion6": form.crip6.value,

                //Aui termina fecha y hora

                "Tiempo1": form.tiempo.value,

                "Temperatura C1": form.temper.value,

                "Lugar1": form.place.value,

                "Tiempo2": form.tiempo2.value,

                "Temperatura C2": form.temper2.value,

                "Lugar2": form.place2.value,

                "Tiempo3": form.tiempo3.value,

                "Temperatura C3": form.temper3.value,

                "Lugar3": form.place3.value,

                "Tiempo4": form.tiempo4.value,

                "Temperatura C4": form.temper4.value,

                "Lugar4": form.place4.value,

                //Hasta aqui temperatura

                "img#1": form.numorder1.value,

                "Imagen1": form.linx1.value,

                "img#2": form.numorder2.value,

                "Imagen2": form.linx2.value,

                "img#3": form.numorder3.value,

                "Imagen3": form.linx3.value,

                "img#4": form.numorder4.value,

                "Imagen4": form.linx4.value,

                "img#5": form.numorder5.value,

                "Imagen5": form.linx5.value,

                //Aqui terminan las imagenes

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