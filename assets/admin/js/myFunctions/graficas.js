function obtenerPorcentaje(totalEncuestas, cantidadActual)
{

    porcentaje = ((cantidadActual * 100) / totalEncuestas);
    porcentaje = (porcentaje > 100) ? 100 : porcentaje;
    porcentaje = (porcentaje < 0) ? 0 : porcentaje;
  //porcentaje = isNaN(porcentaje) ? 0 : porcentaje;
    console.log(1);
    return (1);
}

function pregunta56()
{
    var datos = [];
    var contador = 0;
    var total = 0;
    $.ajax({
        type: "POST",
        url: base_url + "index.php/Reportes/getDatosGraficaUno",
        data: {noPregunta: "56", nombrePregunta: "T_PERCEPCION_SEGURIDAD_PUBLICA_9_1"},
        /* beforeSend:function()
         {
         alert("perform action before making the ajax call like showing spinner image");
         },*/
        success: function (data) {
            var datos_array = [];

            var obj = $.parseJSON(data);
            $.each(obj, function () {
                total += this['TOTAL'];
                var temp = [this['RESPUESTA'], parseInt(this['TOTAL'])];
                datos_array.push(temp);
            });
            //Se contruye la grafica
            Highcharts.chart('grafica1', {
                chart: {
                    type: 'column'
                },
                credits: {
                    enabled: false
                },
                title: {
                    text: 'Tiempo habitando en la vivienda'
                },
                xAxis: {
                    type: 'category',
                    labels: {
                        style: {
                            fontSize: '13px',
                            fontFamily: 'Verdana, sans-serif'
                        }
                    }
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: 'Número de personas'
                    }
                },
                legend: {
                    enabled: false
                },
                tooltip: {
                    pointFormat: '<b>{point.y:.1f} personas</b>'
                },
                plotOptions: {
                    bar: {
                        dataLabels: {
                            enabled: true,
                            formatter: function () {
                                return formatoNumeros(this.y) + "(100%)";
                            }

                        }
                    }
                },
                series: [{
                        name: 'Population',
                        data: datos_array,
                        dataLabels: {
                            enabled: true,
                            rotation: -90,
                            color: '#FFFFFF',
                            align: 'right',
                            format: '{point.y:.1f}', // one decimal
                            y: 10, // 10 pixels down from the top
                            style: {
                                fontSize: '13px',
                                fontFamily: 'Verdana, sans-serif'
                            }
                        }
                    }]
            });


        }

    });
}
function pregunta57(nombres_array, nombrePregunta)
{
    var total = 0;
    $.ajax({
        type: "POST",
        url: base_url + "index.php/Reportes/getDatosGraficaDos",
        data: {nombrePregunta: nombrePregunta},
        success: function (data) {
            var obj = $.parseJSON(data);
            var respArr = [];
            var arrDatos = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            $.each(obj, function () {
                respArr = this['RESPUESTA'].split("|");
                for (var i = 0; i < respArr.length; i++) {

                    if (respArr[i] == 1)
                    {
                        arrDatos[i] = arrDatos[i] + 1;
                        total++;
                    }
                }

            });
            Highcharts.chart('grafTemas', {
                chart: {
                    renderTo: 'container',
                    type: 'column',
                    options3d: {
                        enabled: true,
                        alpha: 16,
                        beta: 4,
                        depth: 100,
                        viewDistance: 35
                    }
                },
                credits: {
                    enabled: false
                },
                title: {
                    text: '3 temas que más preocupan a la ciudadanía'
                },
                plotOptions: {
                    column: {
                        depth: 50,
                        color: '#3399ff',
                        dataLabels: {
                            enabled: true,
                            formatter: function () {
                                return formatoNumeros(this.y) + "<br>(" + ((this.y * 100) / total).toFixed(2) + "%)";
                            }
                        }
                    }
                },
                xAxis: {
                    categories: nombres_array
                },
                yAxis: {
                    title: {
                        text: 'Número de familias'
                    },
                    labels: {
                        formatter: function () {
                            return this.value;
                        }
                    }
                },
                series: [{
                        name: 'Número de familias',
                        data: arrDatos,
                        pointWidth: 25
                    }]
            });
        }
    });
}
function pregunta58() {
    var seguro = [];
    var inseguro = [];
    var none = [];
    var total = 0;
    $.ajax({
        type: "POST",
        url: base_url + "index.php/Reportes/getDatosGraficaDos",
        data: {nombrePregunta: "T_PERCEPCION_SEGURIDAD_PUBLICA_9_3"},
        success: function (data) {
            var seguro = [0, 0, 0];
            var inseguro = [0, 0, 0];
            var none = [0, 0, 0];
            var respArr = [];
            var obj = $.parseJSON(data);
            $.each(obj, function () {
                respArr = this['RESPUESTA'].split("|");
                for (var i = 0; i < respArr.length; i++) {

                    if (respArr[i] == 1)
                    {
                        seguro[i] = seguro[i] + 1;
                    } else if (respArr[i] == 2)
                    {
                        inseguro[i] = inseguro[i] + 1;
                    } else if (respArr[i] == 3)
                    {
                        none[i] = none[i] + 1;
                    }
                    total++;
                }
            });
            Highcharts.chart('grafDelincuencia', {
                chart: {
                    type: 'column'
                },
                credits: {
                    enabled: false
                },
                title: {
                    text: 'Delicuencia en ámbito geográfico'
                },
                xAxis: {
                    categories: [
                        'Colonia / Localidad',
                        'Municipio / Delegación',
                        'Estado'
                    ],
                    crosshair: true
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: 'Número de familias'
                    }
                },
                tooltip: {
                    headerFormat: '<b>{point.y:.1f} personas</b>'
                },
                plotOptions: {
                    column: {
                        dataLabels: {
                            enabled: true,
                            formatter: function () {
                                return formatoNumeros(this.y) + "<br>(" + ((this.y * 100) / total).toFixed(2) + "%)";
                            }
                        }
                    }
                },
                series: [{
                        name: 'Seguro',
                        data: seguro

                    }, {
                        name: 'Inseguro',
                        data: inseguro

                    }, {
                        name: 'No sabe / No repondió',
                        data: none

                    }]
            });
        }
    });

}

function pregunta61(nombres_array, nombrePregunta)
{
    var total = 0;
    $.ajax({
        type: "POST",
        url: base_url + "index.php/Reportes/getDatosGraficaDos",
        data: {nombrePregunta: nombrePregunta},
        success: function (data) {
            var obj = $.parseJSON(data);
            var respArr = [];
            var arrDatos = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            ;
            $.each(obj, function () {
                respArr = this['RESPUESTA'].split("|");
                for (var i = 0; i < respArr.length; i++) {

                    if (respArr[i] == 1)
                    {
                        arrDatos[i] = arrDatos[i] + 1;
                    }
                }
                total++;
            });
            Highcharts.chart('grafSituaciones', {
                chart: {
                    renderTo: 'container',
                    type: 'column',
                    options3d: {
                        enabled: true,
                        alpha: 16,
                        beta: 4,
                        depth: 100,
                        viewDistance: 35
                    }
                },
                credits: {
                    enabled: false
                },
                title: {
                    text: 'Situaciones que ocurren cercanas a su vivienda'
                },
                plotOptions: {
                    column: {
                        depth: 50,
                        color: '#3399ff',
                        dataLabels: {
                            enabled: true,
                            formatter: function () {
                                return formatoNumeros(this.y) + "<br>(" +((this.y * 100) / total).toFixed(2) + "%)";
                            }
                        }
                    }
                },
                xAxis: {
                    categories: nombres_array
                },
                yAxis: {
                    title: {
                        text: 'Número de familias'
                    },
                    labels: {
                        formatter: function () {
                            return this.value;
                        }
                    }
                },
                series: [{
                        name: 'Número de familias',
                        data: arrDatos,
                        pointWidth: 25
                    }]
            });
        }
    });
}
function pregunta62(nombres_array, nombrePregunta)
{
    var total = 0;
    $.ajax({
        type: "POST",
        url: base_url + "index.php/Reportes/getDatosGraficaDos",
        data: {nombrePregunta: nombrePregunta},
        success: function (data) {
            var obj = $.parseJSON(data);
            var respArr = [];
            var arrDatos = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            $.each(obj, function () {
                respArr = this['RESPUESTA'].split("|");
                for (var i = 0; i < respArr.length; i++) {

                    if (respArr[i] == 1)
                    {
                        arrDatos[i] = arrDatos[i] + 1;
                    }
                }
                total++;
            });
            Highcharts.chart('grafNecesidades', {
                chart: {
                    renderTo: 'container',
                    type: 'column',
                    options3d: {
                        enabled: true,
                        alpha: 16,
                        beta: 4,
                        depth: 100,
                        viewDistance: 35
                    }
                },
                credits: {
                    enabled: false
                },
                title: {
                    text: '5 necesidades de su colonia o localidad'
                },
                plotOptions: {
                    column: {
                        depth: 50,
                        color: '#3399ff',
                        dataLabels: {
                            enabled: true,
                            formatter: function () {
                                return formatoNumeros(this.y) + "<br>(" + ((this.y * 100) / total).toFixed(2) + "%)";
                            }
                        }
                    }
                },
                xAxis: {
                    categories: nombres_array
                },
                yAxis: {
                    title: {
                        text: 'Número de familias'
                    },
                    labels: {
                        formatter: function () {
                            return this.value;
                        }
                    }
                },
                series: [{
                        name: 'Número de familias',
                        data: arrDatos,
                        pointWidth: 25
                    }]
            });
        }
    });
}
function pregunta60()
{
    var muyFacil = [];
    var facil = [];
    var dificil = [];
    var imposible = [];
    $.ajax({
        type: "POST",
        url: base_url + "index.php/Reportes/getDatosGraficaDos",
        data: {cvePregunta: "12.1"},
        success: function (data) {

            var obj = $.parseJSON(data);
            //Se contruye la grafica
            var obj = $.parseJSON(data);
            muyFacil = [parseInt(obj[0]['TOTAL']), parseInt(obj[4]['TOTAL']), parseInt(obj[8]['TOTAL']), parseInt(obj[12]['TOTAL']),
                parseInt(obj[16]['TOTAL']), parseInt(obj[20]['TOTAL'])];
            facil = [parseInt(obj[1]['TOTAL']), parseInt(obj[5]['TOTAL']), parseInt(obj[9]['TOTAL']), parseInt(obj[13]['TOTAL']),
                parseInt(obj[17]['TOTAL']), parseInt(obj[21]['TOTAL'])];
            dificil = [parseInt(obj[2]['TOTAL']), parseInt(obj[6]['TOTAL']), parseInt(obj[10]['TOTAL']), parseInt(obj[14]['TOTAL']),
                parseInt(obj[18]['TOTAL']), parseInt(obj[22]['TOTAL'])];
            imposible = [parseInt(obj[3]['TOTAL']), parseInt(obj[7]['TOTAL']), parseInt(obj[11]['TOTAL']), parseInt(obj[15]['TOTAL']),
                parseInt(obj[19]['TOTAL']), parseInt(obj[23]['TOTAL'])];
            Highcharts.chart('grafica9', {
                chart: {
                    type: 'bar'
                },
                credits: {
                    enabled: false
                },
                title: {
                    text: 'Apoyo a personas'
                },
                xAxis: {
                    categories: ['En enfermedad', 'Cantidad de dinero', 'Conseguir trabajo', 'Compañia a doctor', 'Mejoras para la colonia', 'Cuidar a los niño@s del hogar']
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: 'Número de personas'
                    }
                },
                legend: {
                    reversed: true
                },
                plotOptions: {
                    series: {
                        stacking: 'normal'
                    }
                },
                series: [{
                        name: 'Muy fácil',
                        data: muyFacil
                    }, {
                        name: 'Fácil',
                        data: facil
                    }, {
                        name: 'Dificíl',
                        data: dificil
                    }, {
                        name: 'Imposible',
                        data: imposible
                    }]
            });

        }

    });
}
obtieneRespuestas = function (noPregunta, nombrePregunta) {
    var nombres_array = [];
    $.ajax({
        type: "POST",
        url: base_url + "index.php/Reportes/getRespuestas",
        data: {noPregunta: noPregunta},
        success: function (data) {
            var obj = $.parseJSON(data);
            $.each(obj, function () {
                nombres_array.push(this['RESPUESTA']);
            });
            if (noPregunta == 8)
            {
                pregunta8(nombres_array, nombrePregunta)
            } else if (noPregunta == 57)
            {
                pregunta57(nombres_array, nombrePregunta);
            } else if (noPregunta == 61)
            {
                pregunta61(nombres_array, nombrePregunta);
            } else if (noPregunta == 62)
            {
                pregunta62(nombres_array, nombrePregunta);
            }

        }
    });
}
//Identificacion de caracteristicas del hogar
pregunta1 = function () {
    var total = 0;
    $.ajax({
        type: "POST",
        url: base_url + "index.php/Reportes/getDatosGraficaUno",
        data: {noPregunta: 1, nombrePregunta: "E_HOGAR_2_1"},
        success: function (data) {
            var datos_array = [];
            var nombres_array = [];
            var obj = $.parseJSON(data);
            $.each(obj, function () {
                nombres_array.push(this['RESPUESTA']);
                var temp = [this['RESPUESTA'], parseInt(this['TOTAL'])];
                datos_array.push(temp);
                total += parseInt(this['TOTAL']);
            });

            Highcharts.chart('grafTipoivienda', {
                chart: {
                    renderTo: 'container',
                    type: 'column',
                    options3d: {
                        enabled: true,
                        alpha: 16,
                        beta: 4,
                        depth: 100,
                        viewDistance: 35
                    }
                },
                credits: {
                    enabled: false
                },
                title: {
                    text: 'Tipo de vivienda'
                },
                plotOptions: {
                    column: {
                        depth: 50,
                        color: '#3399ff',
                        dataLabels: {
                            enabled: true,
                            formatter: function () {
                                return  formatoNumeros(this.y) + "<br>(" + ((this.y * 100) / total).toFixed(2) + "%)";
                            }
                        }
                    }
                },
                xAxis: {
                    categories: nombres_array
                },
                yAxis: {
                    title: {
                        text: 'Número de familias'
                    },
                    labels: {
                        formatter: function () {
                            return this.value;
                        }
                    }
                },
                series: [{
                        name: 'Número de familias',
                        data: datos_array,
                        pointWidth: 25
                    }]
            });
        }
    });

}
pregunta8 = function (nombres_array, nombrePregunta) {
    var total = 0;
    $.ajax({
        type: "POST",
        url: base_url + "index.php/Reportes/getDatosGraficaDos",
        data: {nombrePregunta: nombrePregunta},
        success: function (data) {
            var obj = $.parseJSON(data);
            var respArr = [];
            var arrDatos = [0, 0, 0, 0, 0, 0, 0, 0, 0];
            $.each(obj, function () {
                respArr = this['RESPUESTA'].split("|");
                for (var i = 0; i < respArr.length; i++) {

                    if (respArr[i] == 1)
                    {
                        arrDatos[i] = arrDatos[i] + 1;
                        total++;
                    }

                }

            });
            Highcharts.chart('grafTecnlogia', {
                chart: {
                    renderTo: 'container',
                    type: 'column',
                    options3d: {
                        enabled: true,
                        alpha: 16,
                        beta: 4,
                        depth: 100,
                        viewDistance: 35
                    }
                },
                credits: {
                    enabled: false
                },
                title: {
                    text: 'Bienes y tecnología'
                },
                plotOptions: {
                    column: {
                        depth: 50,
                        color: '#3399ff',
                        dataLabels: {
                            enabled: true,
                            formatter: function () {
                                return formatoNumeros(this.y) + "<br>(" + ((this.y * 100) / total).toFixed(2) + "%)";
                            }
                        }
                    }
                },
                xAxis: {
                    categories: nombres_array
                },
                yAxis: {
                    title: {
                        text: 'Número de familias'
                    },
                    labels: {
                        formatter: function () {
                            return this.value;
                        }
                    }
                },
                series: [{
                        name: 'Número de familias',
                        data: arrDatos,
                        pointWidth: 25
                    }]
            });
        }
    });

}
pregunta9 = function () {
    var total = 0;
    $.ajax({
        type: "POST",
        url: base_url + "index.php/Reportes/getDatosGraficaTres",
        data: {nombrePregunta: "T_HOGAR_2_9"},
        success: function (data) {
            var datos_array = [];
            var nombres_array = ["Si", "No"];
            var tempNombre
            var obj = $.parseJSON(data);
            $.each(obj, function () {
                tempNombre = (this['RESPUESTA'] == 1) ? "Si" : "No";
                var temp = [tempNombre, parseInt(this['TOTAL'])];
                datos_array.push(temp);
                total += parseInt(this['TOTAL']);
            });
            Highcharts.chart('grafIngresosPais', {
                chart: {
                    renderTo: 'container',
                    type: 'column',
                    options3d: {
                        enabled: true,
                        alpha: 16,
                        beta: 4,
                        depth: 100,
                        viewDistance: 35
                    }
                },
                credits: {
                    enabled: false
                },
                title: {
                    text: 'Ingresos provenientes de otro país'
                },
                plotOptions: {
                    column: {
                        depth: 50,
                        color: '#3399ff',
                        dataLabels: {
                            enabled: true,
                            formatter: function () {
                                return formatoNumeros(this.y) + "<br>(" + ((this.y * 100) / total).toFixed(2) + "%)";
                            }
                        }
                    }
                },
                xAxis: {
                    categories: nombres_array
                },
                yAxis: {
                    title: {
                        text: 'Número de familias'
                    },
                    labels: {
                        formatter: function () {
                            return this.value;
                        }
                    }
                },
                series: [{
                        name: 'Número de familias',
                        data: datos_array,
                        pointWidth: 25
                    }]
            });
        }
    });

}
pregunta10 = function () {
    var total = 0;
    $.ajax({
        type: "POST",
        url: base_url + "index.php/Reportes/getDatosGraficaTres",
        data: {nombrePregunta: "T_HOGAR_2_10"},
        success: function (data) {
            var datos_array = [];
            var nombres_array = ["Si", "No"];
            var tempNombre
            var obj = $.parseJSON(data);
            $.each(obj, function () {
                tempNombre = (this['RESPUESTA'] == 1) ? "Si" : "No";
                var temp = [tempNombre, parseInt(this['TOTAL'])];
                datos_array.push(temp);
                total += parseInt(this['TOTAL']);
            });
            Highcharts.chart('grafRecibeProg', {
                chart: {
                    renderTo: 'container',
                    type: 'column',
                    options3d: {
                        enabled: true,
                        alpha: 16,
                        beta: 4,
                        depth: 100,
                        viewDistance: 35
                    }
                },
                credits: {
                    enabled: false
                },
                title: {
                    text: 'Recibe apoyo de programas sociales'
                },
                plotOptions: {
                    column: {
                        depth: 50,
                        color: '#3399ff',
                        dataLabels: {
                            enabled: true,
                            formatter: function () {
                                return formatoNumeros(this.y) + "<br>(" + ((this.y * 100) / total).toFixed(2) + "%)";
                            }
                        }
                    }
                },
                xAxis: {
                    categories: nombres_array
                },
                yAxis: {
                    title: {
                        text: 'Número de familias'
                    },
                    labels: {
                        formatter: function () {
                            return this.value;
                        }
                    }
                },
                series: [{
                        name: 'Número de hogares',
                        data: datos_array,
                        pointWidth: 25
                    }]
            });
        }
    });

}
pregunta11 = function () {
    var total = 0;
    $.ajax({
        type: "POST",
        url: base_url + "index.php/Reportes/getDatosGraficaUno",
        data: {noPregunta: 11, nombrePregunta: "E_HOGAR_2_11"},
        success: function (data) {
            var datos_array = [];
            var nombres_array = [];
            var obj = $.parseJSON(data);
            $.each(obj, function () {
                nombres_array.push(this['RESPUESTA'])
                var temp = [this['RESPUESTA'], parseInt(this['TOTAL'])];
                datos_array.push(temp);
                total += parseInt(this['TOTAL']);
            });
            Highcharts.chart('grafProgSoc', {
                chart: {
                    renderTo: 'container',
                    type: 'column',
                    options3d: {
                        enabled: true,
                        alpha: 16,
                        beta: 4,
                        depth: 100,
                        viewDistance: 35
                    }
                },
                credits: {
                    enabled: false
                },
                title: {
                    text: 'Programas sociales'
                },
                plotOptions: {
                    column: {
                        depth: 50,
                        color: '#3399ff',
                        dataLabels: {
                            enabled: true,
                            formatter: function () {
                                return formatoNumeros(this.y) + "<br>(" + ((this.y * 100) / total).toFixed(2) + "%)";
                            }
                        }
                    }
                },
                xAxis: {
                    categories: nombres_array
                },
                yAxis: {
                    title: {
                        text: 'Número de familias'
                    },
                    labels: {
                        formatter: function () {
                            return this.value;
                        }
                    }
                },
                series: [{
                        name: 'Número de familias',
                        data: datos_array,
                        pointWidth: 25
                    }]
            });
        }
    });

}
pregunta14 = function () {
    var total = 0;
    $.ajax({
        type: "POST",
        url: base_url + "index.php/Reportes/getDatosIntegrantes",
        data: {nombrePregunta: "T_SEXO"},
        success: function (data) {
            var datos_array = [];
            var nombres_array = [];
            var obj = $.parseJSON(data);
            $.each(obj, function () {
                var nombre = (this['RESPUESTA'] == 1) ? "Hombre" : "Mujer";
                nombres_array.push(nombre);
                var temp = [nombre, parseInt(this['TOTAL'])];
                datos_array.push(temp);
                total += parseInt(this['TOTAL']);
            });
            Highcharts.chart('grafGenero', {
                chart: {
                    renderTo: 'container',
                    type: 'column',
                    options3d: {
                        enabled: true,
                        alpha: 16,
                        beta: 4,
                        depth: 100,
                        viewDistance: 35
                    }
                },
                credits: {
                    enabled: false
                },
                title: {
                    text: 'Género'
                },
                plotOptions: {
                    column: {
                        depth: 50,
                        color: '#3399ff',
                        dataLabels: {
                            enabled: true,
                            formatter: function () {
                                return formatoNumeros(this.y) + "<br>(" + ((this.y * 100) / total).toFixed(2) + "%)";
                            }
                        }
                    }
                },
                xAxis: {
                    categories: nombres_array
                },
                yAxis: {
                    title: {
                        text: 'Número de personas'
                    },
                    labels: {
                        formatter: function () {
                            return this.value;
                        }
                    }
                },
                series: [{
                        name: 'Número de personas',
                        data: datos_array,
                        pointWidth: 25
                    }]
            });
        }
    });

}
pregunta13 = function () {
    var total = 0;
    $.ajax({
        type: "POST",
        url: base_url + "index.php/Reportes/getEdades",
        success: function (data) {
            var datos_array = [];
            var nombres_array = ["0-4", "5-14", "15-19", "20-39", "40-49", "50-59", "60-69", "70-150"];
            var obj = $.parseJSON(data);
            var temp = ["0-4", parseInt(obj[0]['0-4'])];
            datos_array.push(temp);
            total += isNaN(parseInt(obj[0]['0-4'])) ? 0 : (parseInt(obj[0]['0-4']));
            var temp = ["5-14", parseInt(obj[0]['5-14'])];
            datos_array.push(temp);
            total += isNaN(parseInt(obj[0]['5-14'])) ? 0 : (parseInt(obj[0]['5-14']));
            var temp = ["15-19", parseInt(obj[0]['15-19'])];
            datos_array.push(temp);
            total += isNaN(parseInt(obj[0]['15-19'])) ? 0 : (parseInt(obj[0]['15-19']));
            var temp = ["20-39", parseInt(obj[0]['20-39'])];
            datos_array.push(temp);
            total += isNaN(parseInt(obj[0]['20-39'])) ? 0 : (parseInt(obj[0]['20-39']));
            var temp = ["40-49", parseInt(obj[0]['40-49'])];
            datos_array.push(temp);
            total += isNaN(parseInt(obj[0]['40-49'])) ? 0 : (parseInt(obj[0]['40-49']));
            var temp = ["50-59", parseInt(obj[0]['50-59'])];
            datos_array.push(temp);
            total += isNaN(parseInt(obj[0]['50-59'])) ? 0 : (parseInt(obj[0]['50-59']));
            var temp = ["60-69", parseInt(obj[0]['60-69'])];
            datos_array.push(temp);
            total += isNaN(parseInt(obj[0]['60-69'])) ? 0 : (parseInt(obj[0]['60-69']));
            var temp = ["70-150", parseInt(obj[0]['70-150'])];
            datos_array.push(temp);
            total += isNaN(parseInt(obj[0]['70-150'])) ? 0 : (parseInt(obj[0]['70-150']));
            Highcharts.chart('grafGrupEdad', {
                chart: {
                    renderTo: 'container',
                    type: 'column',
                    options3d: {
                        enabled: true,
                        alpha: 16,
                        beta: 4,
                        depth: 100,
                        viewDistance: 35
                    }
                },
                credits: {
                    enabled: false
                },
                title: {
                    text: 'Grupo de edades'
                },
                plotOptions: {
                    column: {
                        depth: 50,
                        color: '#3399ff',
                        dataLabels: {
                            enabled: true,
                            formatter: function () {
                                return formatoNumeros(this.y) + "<br>(" + ((this.y * 100) / total).toFixed(2) + "%)";
                            }
                        }
                    }
                },
                xAxis: {
                    categories: nombres_array
                },
                yAxis: {
                    title: {
                        text: 'Número de personas'
                    },
                    labels: {
                        formatter: function () {
                            return this.value;
                        }
                    }
                },
                series: [{
                        name: 'Número de personas',
                        data: datos_array,
                        pointWidth: 25
                    }]
            });
        }
    });

}
pregunta17 = function () {
    var total = 0;
    $.ajax({
        type: "POST",
        url: base_url + "index.php/Reportes/getInfoIntegrantes",
        data: {noPregunta: 17, nombrePregunta: "T_DIFICULTAD"},
        success: function (data) {
            var datos_array = [];
            var nombres_array = [];
            var obj = $.parseJSON(data);
            $.each(obj, function () {
                nombres_array.push(this['RESPUESTA']);
                var temp = [this['RESPUESTA'], parseInt(this['TOTAL'])];
                datos_array.push(temp);
                total += parseInt(this['TOTAL']);
            });
            Highcharts.chart('grafDificultad', {
                chart: {
                    renderTo: 'container',
                    type: 'column',
                    options3d: {
                        enabled: true,
                        alpha: 16,
                        beta: 4,
                        depth: 100,
                        viewDistance: 35
                    }
                },
                credits: {
                    enabled: false
                },
                title: {
                    text: 'Tipo dificultad'
                },
                plotOptions: {
                    column: {
                        depth: 50,
                        color: '#3399ff',
                        dataLabels: {
                            enabled: true,
                            formatter: function () {
                                return formatoNumeros(this.y) + "<br>(" + ((this.y * 100) / total).toFixed(2) + "%)";
                            }
                        }
                    }
                },
                xAxis: {
                    categories: nombres_array
                },
                yAxis: {
                    title: {
                        text: 'Número de personas'
                    },
                    labels: {
                        formatter: function () {
                            return this.value;
                        }
                    }
                },
                series: [{
                        name: 'Número de personas',
                        data: datos_array,
                        pointWidth: 25
                    }]
            });
        }
    });

}
pregunta21Lengua = function () {
    var total = 0;
    $.ajax({
        type: "POST",
        url: base_url + "index.php/Reportes/getInfoIntegrantes",
        data: {noPregunta: 21, nombrePregunta: "T_LENGUA_INDIGENA"},
        success: function (data) {
            var datos_array = [];
            var nombres_array = [];
            var obj = $.parseJSON(data);
            $.each(obj, function () {
                nombres_array.push(this['RESPUESTA']);
                var temp = [this['RESPUESTA'], parseInt(this['TOTAL'])];
                datos_array.push(temp);
                total += parseInt(this['TOTAL']);
            });
            Highcharts.chart('grafLengua', {
                chart: {
                    renderTo: 'container',
                    type: 'bar',
                    options3d: {
                        enabled: true,
                        alpha: 16,
                        beta: 4,
                        depth: 100,
                        viewDistance: 35
                    }
                },
                credits: {
                    enabled: false
                },
                title: {
                    text: 'Lengua indígena'
                },
                plotOptions: {
                    bar: {
                        depth: 50,
                        color: '#3399ff',
                        dataLabels: {
                            enabled: true,
                            formatter: function () {
                                return formatoNumeros(this.y) + "<br>(" + ((this.y * 100) / total).toFixed(2) + "%)";
                            }
                        }
                    }
                },
                xAxis: {
                    categories: nombres_array
                },
                yAxis: {
                    title: {
                        text: 'Número de personas'
                    },
                    labels: {
                        formatter: function () {
                            return this.value;
                        }
                    }
                },
                series: [{
                        name: 'Número de personas',
                        data: datos_array,
                        pointWidth: 25
                    }]
            });
        }
    });

}
pregunta21 = function () {
    var total = 0;
    $.ajax({
        type: "POST",
        url: base_url + "index.php/Reportes/getDatosIntegrantes",
        data: {nombrePregunta: "T_HABLA_LENGUA_INDIGENA"},
        success: function (data) {
            var datos_array = [];
            var nombres_array = [];
            var tempNombre;
            var obj = $.parseJSON(data);
            $.each(obj, function () {
                tempNombre = (this['RESPUESTA'] === "1") ? "Si" : "No";
                nombres_array.push(tempNombre);
                var temp = [tempNombre, parseInt(this['TOTAL'])];
                datos_array.push(temp);
                total += parseInt(this['TOTAL']);
            });
            Highcharts.chart('grafIndigena', {
                chart: {
                    renderTo: 'container',
                    type: 'pie',
                    options3d: {
                        enabled: true,
                        alpha: 16,
                        beta: 4,
                        depth: 100,
                        viewDistance: 35
                    }
                },
                credits: {
                    enabled: false
                },
                title: {
                    text: 'Habla alguna lengua indígena'
                },
                plotOptions: {
                    pie: {
                        depth: 50,
                        color: '#3399ff',
                        dataLabels: {
                            enabled: true,
                            formatter: function () {
                                return formatoNumeros(this.y) + "<br>(" + ((this.y * 100) / total).toFixed(2) + "%)";
                            }
                        }
                    }
                },
                xAxis: {
                    categories: nombres_array
                },
                yAxis: {
                    title: {
                        text: 'Número de personas'
                    },
                    labels: {
                        formatter: function () {
                            return this.value;
                        }
                    }
                },
                series: [{
                        name: 'Número de personas',
                        data: datos_array,
                        pointWidth: 25
                    }]
            });
        }
    });

}
pregunta24 = function () {
    var total = 0;
    $.ajax({
        type: "POST",
        url: base_url + "index.php/Reportes/getInfoIntegrantes",
        data: {noPregunta: 24, nombrePregunta: "T_GRADO_ESCUELA"},
        success: function (data) {
            var datos_array = [];
            var nombres_array = [];
            var obj = $.parseJSON(data);
            $.each(obj, function () {
                nombres_array.push(this['RESPUESTA']);
                var temp = [this['RESPUESTA'], parseInt(this['TOTAL'])];
                datos_array.push(temp);
                total += parseInt(this['TOTAL']);
            });
            Highcharts.chart('grafGradoAsiste', {
                chart: {
                    renderTo: 'container',
                    type: 'column',
                    options3d: {
                        enabled: true,
                        alpha: 16,
                        beta: 4,
                        depth: 100,
                        viewDistance: 35
                    }
                },
                credits: {
                    enabled: false
                },
                title: {
                    text: 'Año o grado al que asiste'
                },
                plotOptions: {
                    column: {
                        depth: 50,
                        color: '#3399ff',
                        dataLabels: {
                            enabled: true,
                            formatter: function () {
                                return formatoNumeros(this.y) + "<br>(" + ((this.y * 100) / total).toFixed(2) + "%)";
                            }
                        }
                    }
                },
                xAxis: {
                    categories: nombres_array
                },
                yAxis: {
                    title: {
                        text: 'Número de personas'
                    },
                    labels: {
                        formatter: function () {
                            return this.value;
                        }
                    }
                },
                series: [{
                        name: 'Número de personas',
                        data: datos_array,
                        pointWidth: 25
                    }]
            });
        }
    });

}
pregunta27 = function () {
    var total = 0;
    $.ajax({
        type: "POST",
        url: base_url + "index.php/Reportes/getInfoIntegrantes",
        data: {noPregunta: 27, nombrePregunta: "T_HASTA_QUE_GRADO_ESCUELA"},
        success: function (data) {
            var datos_array = [];
            var nombres_array = [];
            var obj = $.parseJSON(data);
            $.each(obj, function () {
                nombres_array.push(this['RESPUESTA']);
                var temp = [this['RESPUESTA'], parseInt(this['TOTAL'])];
                datos_array.push(temp);
                total += parseInt(this['TOTAL']);
            });
            Highcharts.chart('grafGradoAprobo', {
                chart: {
                    renderTo: 'container',
                    type: 'column',
                    options3d: {
                        enabled: true,
                        alpha: 16,
                        beta: 4,
                        depth: 100,
                        viewDistance: 35
                    }
                },
                credits: {
                    enabled: false
                },
                title: {
                    text: 'Año o grado aprobo'
                },
                plotOptions: {
                    column: {
                        depth: 50,
                        color: '#3399ff',
                        dataLabels: {
                            enabled: true,
                            formatter: function () {
                                return formatoNumeros(this.y) + "<br>(" + ((this.y * 100) / total).toFixed(2) + "%)";
                            }
                        }
                    }
                },
                xAxis: {
                    categories: nombres_array
                },
                yAxis: {
                    title: {
                        text: 'Número de personas'
                    },
                    labels: {
                        formatter: function () {
                            return this.value;
                        }
                    }
                },
                series: [{
                        name: 'Número de personas',
                        data: datos_array,
                        pointWidth: 25
                    }]
            });
        }
    });

}
pregHijos = function () {
    var total = 0;
    $.ajax({
        type: "POST",
        url: base_url + "index.php/Reportes/getHijos",
        data: {nombrePregunta: "E_NUM_HIJOS"},
        success: function (data) {
            var datos_array = [];
            var nombres_array = [];
            var tempNombre = "";
            var obj = $.parseJSON(data);
            $.each(obj, function () {
                tempNombre = (this['RESPUESTA'] == 1) ? "1 hijo" : this['RESPUESTA'] + " hijos";
                nombres_array.push(tempNombre);
                var temp = [tempNombre, parseInt(this['TOTAL'])];
                datos_array.push(temp);
                total += parseInt(this['TOTAL']);
            });
            Highcharts.chart('grafMadres', {
                chart: {
                    renderTo: 'container',
                    type: 'column',
                    options3d: {
                        enabled: true,
                        alpha: 16,
                        beta: 4,
                        depth: 100,
                        viewDistance: 35
                    }
                },
                credits: {
                    enabled: false
                },
                title: {
                    text: 'Madres adolescentes (10-19 años)'
                },
                plotOptions: {
                    column: {
                        depth: 50,
                        color: '#3399ff',
                        dataLabels: {
                            enabled: true,
                            formatter: function () {
                                return formatoNumeros(this.y) + "<br>(" + ((this.y * 100) / total).toFixed(2) + "%)";
                            }
                        }
                    }
                },
                xAxis: {
                    categories: nombres_array
                },
                yAxis: {
                    title: {
                        text: 'Número de personas'
                    },
                    labels: {
                        formatter: function () {
                            return this.value;
                        }
                    }
                },
                series: [{
                        name: 'Número de personas',
                        data: datos_array,
                        pointWidth: 25
                    }]
            });
        }
    });
}
pregunta28 = function () {
    var total = 0;
    $.ajax({
        type: "POST",
        url: base_url + "index.php/Reportes/getDatosIntegrantes",
        data: {nombrePregunta: "T_ACTUALMENTE_TRABAJA"},
        success: function (data) {
            var datos_array = [];
            var nombres_array = [];
            var obj = $.parseJSON(data);
            $.each(obj, function () {
                var tempNombre = (this['RESPUESTA'] == 1) ? "Si" : "No";
                nombres_array.push(tempNombre);
                var temp = [tempNombre, parseInt(this['TOTAL'])];
                datos_array.push(temp);
                total += parseInt(this['TOTAL']);
            });
            Highcharts.chart('grafTrabaja', {
                chart: {
                    renderTo: 'container',
                    type: 'column',
                    options3d: {
                        enabled: true,
                        alpha: 16,
                        beta: 4,
                        depth: 100,
                        viewDistance: 35
                    }
                },
                credits: {
                    enabled: false
                },
                title: {
                    text: 'Actualmente trabaja'
                },
                plotOptions: {
                    column: {
                        depth: 50,
                        color: '#3399ff',
                        dataLabels: {
                            enabled: true,
                            formatter: function () {
                                return formatoNumeros(this.y) + "<br>(" + ((this.y * 100) / total).toFixed(2) + "%)";
                            }
                        }
                    }
                },
                xAxis: {
                    categories: nombres_array
                },
                yAxis: {
                    title: {
                        text: 'Número de personas'
                    },
                    labels: {
                        formatter: function () {
                            return this.value;
                        }
                    }
                },
                series: [{
                        name: 'Número de personas',
                        data: datos_array,
                        pointWidth: 25
                    }]
            });
        }
    });
}
pregunta29 = function () {
    var total = 0;
    $.ajax({
        type: "POST",
        url: base_url + "index.php/Reportes/getDatosIntegrantes",
        data: {nombrePregunta: "T_RECIBE_INGRESOS_TRABAJO"},
        success: function (data) {
            var datos_array = [];
            var nombres_array = [];
            var tempNombre = "";
            var obj = $.parseJSON(data);
            $.each(obj, function () {
                if (this['RESPUESTA'] == "1")
                {
                    tempNombre = "Si";
                    nombres_array.push(tempNombre);
                    var temp = [tempNombre, parseInt(this['TOTAL'])];
                    datos_array.push(temp);
                    total += parseInt(this['TOTAL']);
                } else if (this['RESPUESTA'] == "0")
                {
                    tempNombre = "No";
                    nombres_array.push(tempNombre);
                    var temp = [tempNombre, parseInt(this['TOTAL'])];
                    datos_array.push(temp);
                    total += parseInt(this['TOTAL']);
                }
            });
            Highcharts.chart('grafRecibeIngresos', {
                chart: {
                    renderTo: 'container',
                    type: 'column',
                    options3d: {
                        enabled: true,
                        alpha: 16,
                        beta: 4,
                        depth: 100,
                        viewDistance: 35
                    }
                },
                credits: {
                    enabled: false
                },
                title: {
                    text: 'Recibe un ingreso por su trabajo'
                },
                plotOptions: {
                    column: {
                        depth: 50,
                        color: '#3399ff',
                        dataLabels: {
                            enabled: true,
                            formatter: function () {
                                return formatoNumeros(this.y) + "<br>(" + ((this.y * 100) / total).toFixed(2) + "%)";
                            }
                        }
                    }
                },
                xAxis: {
                    categories: nombres_array
                },
                yAxis: {
                    title: {
                        text: 'Número de personas'
                    },
                    labels: {
                        formatter: function () {
                            return this.value;
                        }
                    }
                },
                series: [{
                        name: 'Número de personas',
                        data: datos_array,
                        pointWidth: 25
                    }]
            });
        }
    });
}
pregunta30 = function () {
    var total = 0;
    $.ajax({
        type: "POST",
        url: base_url + "index.php/Reportes/getInfoIntegrantes",
        data: {noPregunta: 30, nombrePregunta: "T_CUANTO_DINERO_RECIBIO_TRABAJO"},
        success: function (data) {
            var datos_array = [];
            var nombres_array = [];
            var obj = $.parseJSON(data);
            $.each(obj, function () {
                nombres_array.push(this['RESPUESTA']);
                var temp = [this['RESPUESTA'], parseInt(this['TOTAL'])];
                datos_array.push(temp);
                total += parseInt(this['TOTAL']);
            });
            Highcharts.chart('grafIngresos', {
                chart: {
                    renderTo: 'container',
                    type: 'column',
                    options3d: {
                        enabled: true,
                        alpha: 16,
                        beta: 4,
                        depth: 100,
                        viewDistance: 35
                    }
                },
                credits: {
                    enabled: false
                },
                title: {
                    text: 'Cantidad de ingresos'
                },
                plotOptions: {
                    column: {
                        depth: 50,
                        color: '#3399ff',
                        dataLabels: {
                            enabled: true,
                            formatter: function () {
                                return formatoNumeros(this.y) + "<br>(" + ((this.y * 100) / total).toFixed(2) + "%)";
                            }
                        }
                    }
                },
                xAxis: {
                    categories: nombres_array
                },
                yAxis: {
                    title: {
                        text: 'Número de personas'
                    },
                    labels: {
                        formatter: function () {
                            return this.value;
                        }
                    }
                },
                series: [{
                        name: 'Número de personas',
                        data: datos_array,
                        pointWidth: 25
                    }]
            });
        }
    });
}
pregunta34 = function () {
    var total = 0;
    $.ajax({
        type: "POST",
        url: base_url + "index.php/Reportes/getInfoIntegrantes",
        data: {noPregunta: 34, nombrePregunta: "T_CARENCIA_SERVICIOS_SALUD_5_1"},
        success: function (data) {
            var datos_array = [];
            var nombres_array = [];
            var obj = $.parseJSON(data);
            $.each(obj, function () {
                nombres_array.push(this['RESPUESTA']);
                var temp = [this['RESPUESTA'], parseInt(this['TOTAL'])];
                datos_array.push(temp);
                total +=parseInt(this['TOTAL']);
            });
            Highcharts.chart('grafAfiliacion', {
                chart: {
                    renderTo: 'container',
                    type: 'column',
                    options3d: {
                        enabled: true,
                        alpha: 16,
                        beta: 4,
                        depth: 100,
                        viewDistance: 35
                    }
                },
                credits: {
                    enabled: false
                },
                title: {
                    text: 'Tipo de afiliación'
                },
                plotOptions: {
                    column: {
                        depth: 50,
                        color: '#3399ff',
                        dataLabels: {
                            enabled: true,
                            formatter: function () {
                                return formatoNumeros(this.y) + "<br>(" + ((this.y * 100) / total).toFixed(2) + "%)";
                            }
                        }
                    }
                },
                xAxis: {
                    categories: nombres_array
                },
                yAxis: {
                    title: {
                        text: 'Número de personas'
                    },
                    labels: {
                        formatter: function () {
                            return this.value;
                        }
                    }
                },
                series: [{
                        name: 'Número de personas',
                        data: datos_array,
                        pointWidth: 25
                    }]
            });
        }
    });
}
pregunta35 = function () {
    var total = 0;
    $.ajax({
        type: "POST",
        url: base_url + "index.php/Reportes/getInfoIntegrantes",
        data: {noPregunta: 35, nombrePregunta: "T_CARENCIA_SERVICIOS_SALUD_5_2"},
        success: function (data) {
            var datos_array = [];
            var nombres_array = [];
            var obj = $.parseJSON(data);
            $.each(obj, function () {
                nombres_array.push(this['RESPUESTA']);
                var temp = [this['RESPUESTA'], parseInt(this['TOTAL'])];
                datos_array.push(temp);
                total+=parseInt(this['TOTAL']);
            });
            Highcharts.chart('grafAtiende', {
                chart: {
                    renderTo: 'container',
                    type: 'column',
                    options3d: {
                        enabled: true,
                        alpha: 16,
                        beta: 4,
                        depth: 100,
                        viewDistance: 35
                    }
                },
                credits: {
                    enabled: false
                },
                title: {
                    text: 'Dónde se atienden cuando se enferman'
                },
                plotOptions: {
                    column: {
                        depth: 50,
                        color: '#3399ff',
                        dataLabels: {
                            enabled: true,
                            formatter: function () {
                                return formatoNumeros(this.y) + "<br>(" + ((this.y * 100) / total).toFixed(2) + "%)";
                            }
                        }
                    }
                },
                xAxis: {
                    categories: nombres_array
                },
                yAxis: {
                    title: {
                        text: 'Número de personas'
                    },
                    labels: {
                        formatter: function () {
                            return this.value;
                        }
                    }
                },
                series: [{
                        name: 'Número de personas',
                        data: datos_array,
                        pointWidth: 25
                    }]
            });
        }
    });
}
pregunta36 = function () {
    var total = 0;
    $.ajax({
        type: "POST",
        url: base_url + "index.php/Reportes/getInfoIntegrantes",
        data: {noPregunta: 36, nombrePregunta: "T_CARENCIA_SERVICIOS_SALUD_5_3"},
        success: function (data) {
            var datos_array = [];
            var nombres_array = [];
            var obj = $.parseJSON(data);
            $.each(obj, function () {
                nombres_array.push(this['RESPUESTA']);
                var temp = [this['RESPUESTA'], parseInt(this['TOTAL'])];
                datos_array.push(temp);
                total+=parseInt(this['TOTAL']);
            });
            Highcharts.chart('grafEnfermedades', {
                chart: {
                    renderTo: 'container',
                    type: 'column',
                    options3d: {
                        enabled: true,
                        alpha: 16,
                        beta: 4,
                        depth: 100,
                        viewDistance: 35
                    }
                },
                credits: {
                    enabled: false
                },
                title: {
                    text: 'Enfermedad diagnosticada'
                },
                plotOptions: {
                    column: {
                        depth: 50,
                        color: '#3399ff',
                        dataLabels: {
                            enabled: true,
                            formatter: function () {
                                return formatoNumeros(this.y) + "<br>(" + ((this.y * 100) / total).toFixed(2) + "%)";
                            }
                        }
                    }
                },
                xAxis: {
                    categories: nombres_array
                },
                yAxis: {
                    title: {
                        text: 'Número de personas'
                    },
                    labels: {
                        formatter: function () {
                            return this.value;
                        }
                    }
                },
                series: [{
                        name: 'Número de personas',
                        data: datos_array,
                        pointWidth: 25
                    }]
            });
        }
    });
}
pregunta37 = function () {
    var total = 0;
    $.ajax({
        type: "POST",
        url: base_url + "index.php/Reportes/getDatosIntegrantes",
        data: {nombrePregunta: "T_CARENCIA_SERVICIOS_SALUD_5_4"},
        success: function (data) {
            var datos_array = [];
            var nombres_array = [];
            var tempNombre = "";
            var obj = $.parseJSON(data);
            $.each(obj, function () {
                if (this['RESPUESTA'] == "1")
                {
                    nombres_array.push("Si");
                    var temp = ["Si", parseInt(this['TOTAL'])];
                    datos_array.push(temp);
                    total+=parseInt(this['TOTAL']);
                }
                if (this['RESPUESTA'] === "2")
                {
                    nombres_array.push("No");
                    var temp = ["No", parseInt(this['TOTAL'])];
                    datos_array.push(temp);
                    total+=parseInt(this['TOTAL']);
                }

            });
            Highcharts.chart('grafTratamiento', {
                chart: {
                    renderTo: 'container',
                    type: 'column',
                    options3d: {
                        enabled: true,
                        alpha: 16,
                        beta: 4,
                        depth: 100,
                        viewDistance: 35
                    }
                },
                credits: {
                    enabled: false
                },
                title: {
                    text: 'Recibe tratamiento'
                },
                plotOptions: {
                    column: {
                        depth: 50,
                        color: '#3399ff',
                        dataLabels: {
                            enabled: true,
                            formatter: function () {
                                return formatoNumeros(this.y) + "<br>(" + ((this.y * 100) / total).toFixed(2) + "%)";
                            }
                        }
                    }
                },
                xAxis: {
                    categories: nombres_array
                },
                yAxis: {
                    title: {
                        text: 'Número de personas'
                    },
                    labels: {
                        formatter: function () {
                            return this.value;
                        }
                    }
                },
                series: [{
                        name: 'Número de personas',
                        data: datos_array,
                        pointWidth: 25
                    }]
            });
        }
    });
}
pregunta39 = function () {
    var total = 0;
    $.ajax({
        type: "POST",
        url: base_url + "index.php/Reportes/getInfoIntegrantes",
        data: {noPregunta: 39, nombrePregunta: "T_CARENCIA_SEGURIDADSOCIAL_6_1"},
        success: function (data) {
            var datos_array = [];
            var nombres_array = [];
            var obj = $.parseJSON(data);
            $.each(obj, function () {
                nombres_array.push(this['RESPUESTA']);
                var temp = [this['RESPUESTA'], parseInt(this['TOTAL'])];
                datos_array.push(temp);
                total+=parseInt(this['TOTAL']);
            });
            Highcharts.chart('grafSS', {
                chart: {
                    renderTo: 'container',
                    type: 'column',
                    options3d: {
                        enabled: true,
                        alpha: 16,
                        beta: 4,
                        depth: 100,
                        viewDistance: 35
                    }
                },
                credits: {
                    enabled: false
                },
                title: {
                    text: 'Seguridad social'
                },
                plotOptions: {
                    column: {
                        depth: 50,
                        color: '#3399ff',
                        dataLabels: {
                            enabled: true,
                            formatter: function () {
                                return formatoNumeros(this.y) + "<br>(" + ((this.y * 100) / total).toFixed(2) + "%)";
                            }
                        }
                    }
                },
                xAxis: {
                    categories: nombres_array
                },
                yAxis: {
                    title: {
                        text: 'Número de personas'
                    },
                    labels: {
                        formatter: function () {
                            return this.value;
                        }
                    }
                },
                series: [{
                        name: 'Número de personas',
                        data: datos_array,
                        pointWidth: 25
                    }]
            });
        }
    });
}
pregunta40 = function () {
    var total = 0;
    $.ajax({
        type: "POST",
        url: base_url + "index.php/Reportes/getInfoIntegrantes",
        data: {noPregunta: 40, nombrePregunta: "T_CARENCIA_SEGURIDADSOCIAL_6_2"},
        success: function (data) {
            var datos_array = [];
            var nombres_array = [];
            var obj = $.parseJSON(data);
            $.each(obj, function () {
                nombres_array.push(this['RESPUESTA']);
                var temp = [this['RESPUESTA'], parseInt(this['TOTAL'])];
                datos_array.push(temp);
                total+=parseInt(this['TOTAL']);
            });
            Highcharts.chart('grafFondoRetiro', {
                chart: {
                    renderTo: 'container',
                    type: 'bar',
                    options3d: {
                        enabled: true,
                        alpha: 16,
                        beta: 4,
                        depth: 100,
                        viewDistance: 35
                    }
                },
                credits: {
                    enabled: false
                },
                title: {
                    text: 'Fondo de ahorro voluntario'
                },
                plotOptions: {
                    bar: {
                        depth: 50,
                        color: '#3399ff',
                        dataLabels: {
                            enabled: true,
                            formatter: function () {
                                return formatoNumeros(this.y) + "<br>(" + ((this.y * 100) / total).toFixed(2) + "%)";
                            }
                        }
                    }
                },
                xAxis: {
                    categories: nombres_array
                },
                yAxis: {
                    title: {
                        text: 'Número de personas'
                    },
                    labels: {
                        formatter: function () {
                            return this.value;
                        }
                    }
                },
                series: [{
                        name: 'Número de personas',
                        data: datos_array,
                        pointWidth: 25
                    }]
            });
        }
    });
}
pregunta41 = function () {
    var total = 0;
    $.ajax({
        type: "POST",
        url: base_url + "index.php/Reportes/getInfoIntegrantes",
        data: {noPregunta: 41, nombrePregunta: "T_CARENCIA_SEGURIDADSOCIAL_6_3"},
        success: function (data) {
            var datos_array = [];
            var nombres_array = [];
            var obj = $.parseJSON(data);
            $.each(obj, function () {
                nombres_array.push(this['RESPUESTA']);
                var temp = [this['RESPUESTA'], parseInt(this['TOTAL'])];
                datos_array.push(temp);
                total+=parseInt(this['TOTAL']);
            });
            Highcharts.chart('grafApoyoRetiro', {
                chart: {
                    renderTo: 'container',
                    type: 'bar',
                    options3d: {
                        enabled: true,
                        alpha: 16,
                        beta: 4,
                        depth: 100,
                        viewDistance: 35
                    }
                },
                credits: {
                    enabled: false
                },
                title: {
                    text: 'Apoyo para el retiro'
                },
                plotOptions: {
                    bar: {
                        depth: 50,
                        color: '#3399ff',
                        dataLabels: {
                            enabled: true,
                            formatter: function () {
                                return formatoNumeros(this.y) + "<br>(" + ((this.y * 100) / total).toFixed(2) + "%)";
                            }
                        }
                    }
                },
                xAxis: {
                    categories: nombres_array
                },
                yAxis: {
                    title: {
                        text: 'Número de personas'
                    },
                    labels: {
                        formatter: function () {
                            return this.value;
                        }
                    }
                },
                series: [{
                        name: 'Número de personas',
                        data: datos_array,
                        pointWidth: 25
                    }]
            });
        }
    });
}
$(document).on('shown.bs.tab', 'a[data-toggle="tab"]', function (e) { // on tab selection event
    $(".contains-chart").each(function () { // target each element with the .contains-chart class
        var chart = $(this).highcharts(); // target the chart itself
        //chart.reflow(); // reflow that chart
    });
});
