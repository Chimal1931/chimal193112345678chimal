$(function () {
//     function reloadMapCenso()
//    {
//        setTimeout(function () {
//            google.maps.event.trigger(mapCenso, 'resize');
//            mapCenso.setCenter(latLongCenso);
//        }, 50);
//
//    }
    var markers = [];
    var map = null, marker = null;
    var globalIdMun = 0;
    var latLong = {lat: 20.591682, lng: -100.389889};
    var latLong1 = {lat: 19.254412, lng: -103.744707};
    initMapCenso = function () {

        map = new google.maps.Map(document.getElementById('googleMapCenso'), {
            center: latLong,
            zoom: 12
        });

    }
    reloadMapCenso = function ()
    {
        setTimeout(function () {
            google.maps.event.trigger(map, 'resize');
            map.setCenter(latLong);
        }, 50);
        initMapCenso();
//        if (globalIdMun == 0)
//        {
//            marker = new google.maps.Marker({
//                position: latLong,
//                map: map,
//                draggable: false,
//                title: 'Queretaro'
//            });
//            marker.setMap(marker);
//        } else
//        {

        getLocalidadesMun(globalIdMun);
//        }
    }
    //Funciones para mostrar en el mapa los puntos para las localidades
    getLocalidadesMun = function (idMunicipio, esMapaInt) {
        var latLonArr = [];
        $.ajax({
            type: "POST",
            url: base_url + "index.php/welcome/latLonEncuestas",
            data: {idMunicipio: idMunicipio},
            success: function (data) {
                var latitud, longitud, usuario, idEncuesta, fecha, municipio;
                var i = 0;
                var obj = $.parseJSON(data);
                $.each(obj, function () {
                    //console.log(this['LATITUD'] + " " + this['LONGITUD']);
                    //latitud = obtieneLatitud(this['LATITUD']);
                    //longitud = obtieneLongitud(this['LONGITUD']);
                    latitud = this['T_LATITUD'];
                    longitud = this['T_LONGITUD'];
                    usuario = this['T_NOMBREEMPLEADO'] + " " + this['T_APPATERNO'];
                    municipio = this['E_ID_MUNICIPIO'];
                    //usuario = this['T_USUARIO_ENCUESTADOR']
                    idEncuesta = this['E_ID'];
                    fecha = this['FH_FECHA_HORA_APP'];
                    if ((latitud.trim().lenght != 0) && (latitud.trim().lenght != 0))
                    {
                        latLonArr.push([usuario, latitud, longitud, idEncuesta, fecha, municipio]);
                    }
                    i++;
                });

                var marker, i;
                var latCenter = parseFloat(latLonArr[0][1]);
                var lonCenter = parseFloat(latLonArr[0][2]);
                for (i = 0; i < latLonArr.length; i++) {
                    marker = new google.maps.Marker({
                        position: new google.maps.LatLng(latLonArr[i][1], latLonArr[i][2]),
                        draggable: false,
                        title: latLonArr[i][3],
                        map: map
                    });
                    marker.category = latLonArr[i][5];
                    markers.push(marker);
                    var content = "Usuario: " + latLonArr[i][0] + "<br>Fecha: " + latLonArr[i][4] + "<br> Id Encuesta: <a href='" + base_url + "index.php/CedulaCenso/imprimirCensoId?idCenso=" + latLonArr[i][3] + "' target='_blank'>" + latLonArr[i][3] + "</a>";

                    var infowindow = new google.maps.InfoWindow();

                    google.maps.event.addListener(marker, 'click', (function (marker, content, infowindow) {
                        infowindow.close();
                        return function () {

                            infowindow.setContent(content);
                            infowindow.open(map, this);
                        };
                    })(marker, content, infowindow));
                }
                var latLngMarker = marker.getPosition(); // returns LatLng object
                map.setCenter(latLngMarker); // setCenter takes a LatLng object
                map.setZoom(10);
                if(esMapaInt === 1)
                {
                //Es el mapa interactivo, esconde los puntos agregados
                mostrarEsconderPuntos(0, false);
            }

            }

        });

    }
    obtieneLatitud = function (latitud)
    {

        var deg, min, sec;
        var resultLatitud;
        //Se separa la cadena
        if (latitud.length == 6)
        {
            deg = latitud.substring(0, 2);
            min = latitud.substring(2, 4);
            sec = latitud.substring(4, 6);
        } else
        {
            deg = latitud.substring(0, 3);
            min = latitud.substring(3, 5);
            sec = latitud.substring(5, 7);
        }
        //Decimal Degrees = degrees + (minutes/60) + (seconds/3600)
        resultLatitud = parseInt(deg) + ((parseInt(min)) / 60) + (parseInt(sec) / 3600);
//       // 20 13 04 1000922
//       alert("(("+sec+"/3600) + ("+min+"/60) + "+deg+")");
        //resultLatitud= ((parseInt(sec)/3600) + (parseInt(min)/60) + parseInt(deg));
        return resultLatitud;
    }
    obtieneLongitud = function (longitud)
    {
        var deg, min, sec;
        var resultLongitud;
        //Se separa la cadena
        if (longitud.length == 6)
        {
            deg = longitud.substring(0, 2);
            min = longitud.substring(2, 4);
            sec = longitud.substring(4, 6);
        } else
        {
            deg = longitud.substring(0, 3);
            min = longitud.substring(3, 5);
            sec = longitud.substring(5, 7);
        }
        resultLongitud = (parseInt(deg) + (((parseInt(min) * 60) + (parseInt(sec))) / 3600)) * (-1);
        // resultLongitud= ((parseInt(sec)/3600) + (parseInt(min)/60) + parseInt(deg)*(-1));
        return resultLongitud;
    }
    ////
    chartOrgCenso = function () {
        $.ajax({
            type: "POST",
            url: base_url + "index.php/CedulaCenso/org_piechart",
            success: function (data) {
                var org_array = [];
                var nombres_array = [];
                var obj = $.parseJSON(data);
                $.each(obj, function () {
                    nombres_array.push(this['T_NOMBRE']);
                    var temp = [this['T_NOMBRE'], parseInt(this['total'])];
                    org_array.push(temp);
                });
                Highcharts.chart('containerorgCenso', {
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
                        text: 'Organizaciones'
                    },
                    plotOptions: {
                        column: {
                            depth: 50,
                            color: '#d24dff',
                            dataLabels: {
                                enabled: true
                            }
                        }
                    },
                    xAxis: {
                        categories: nombres_array
                    },
                    yAxis: {
                        title: {
                            text: 'Total'
                        },
                        labels: {
                            formatter: function () {
                                return this.value;
                            }
                        }
                    },
                    series: [{
                            name: 'Organizaciones',
                            data: org_array,
                            pointWidth: 25
                        }]
                });
            }
        });

    }
    chartProgCenso = function () {
        $.ajax({
            type: "POST",
            url: base_url + "index.php/CedulaCenso/prog_piechart",
            success: function (data) {
                var org_array = [];
                var nombre_array = [];
                var obj = $.parseJSON(data);
                $.each(obj, function () {
                    var temp = [this['T_NOMBRE_PROGRAMA'], parseInt(this['total'])];
                    nombre_array.push(this['T_NOMBRE_PROGRAMA']);
                    org_array.push(temp);
                });
                Highcharts.chart('containerprogCenso', {
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
                        text: 'Programas'
                    },
                    plotOptions: {
                        column: {
                            depth: 50,
                            color: '#AC58FA',
                            dataLabels: {
                                enabled: true
                            }
                        }
                    },
                    xAxis: {
                        categories: nombre_array
                    },
                    yAxis: {
                        title: {
                            text: 'Total'
                        }
                    },
                    series: [{
                            name: 'programas',
                            data: org_array,
                            pointWidth: 25
                        }]
                });
            }
        });

    }
    var porcentajes = [];
    var posActual = 0;
    chartMunCensoMeta = function (idMunicipio) {
        $.ajax({
            type: "POST",
            url: base_url + "index.php/CedulaCenso/mun_piechart",
            data: {idMunicipio: idMunicipio},
            success: function (data) {
                var org_array = [];
                var metas_array = [];
                var nombres_array = [];
                var meta = 0, total = 0, porcentaje = 0, temPorcentaje = 0;
                var obj = $.parseJSON(data);
                $.each(obj, function () {
                    total = total + parseInt(this['total']);
                    meta += parseInt(this['E_META']);
                    var temp = [this['nomMunicipio'], parseInt(this['total'])];
                    var tempMeta = [this['nomMunicipio'], parseInt(this['E_META'])];
                    nombres_array.push(this['nomMunicipio']);
                    org_array.push(temp);
                    metas_array.push(tempMeta);
                    temPorcentaje = ((this['total'] * 100) / this['E_META']);
                    temPorcentaje = (temPorcentaje > 100) ? 100 : temPorcentaje;
                    temPorcentaje = (temPorcentaje < 0) ? 0 : temPorcentaje;
                    porcentajes.push(temPorcentaje);
                });
                $('#totalEncuestas').text(formatoNumeros(total));
                porcentaje = Math.round((total * 100) / meta);
                porcentaje = (porcentaje > 100) ? 100 : porcentaje;
                porcentaje = (porcentaje < 0) ? 0 : porcentaje;
                $('#porcentajeAvanceMun').text(parseFloat(porcentaje).toFixed(2) + "%");
                $('#myTab a[href="#grafMunicipioCenso"]').tab('show');
                Highcharts.chart('containermunMetas', {
                    chart: {
                        type: 'bar',
                        height: org_array.length * 85 + 120 // 55 per data item plus top and bottom margins
                    },
                    title: {
                        text: '<b>Municipios </b>'
                    },
                    xAxis: {
                        categories: nombres_array
                    },
                    yAxis: {
                        min: 0,
                        title: {
                            text: 'Total',
                            align: 'high'
                        },
                        labels: {
                            overflow: 'justify'
                        }
                    },
                    tooltip: {
                        formatter: function () {
                            return '<b>' + this.x + '</b><br/>' +
                                    this.series.name + ': ' + this.y
                        }
                    },
                    plotOptions: {
                        bar: {
                            dataLabels: {
                                enabled: true,
                        formatter: function() {
                            if (this.series.name ==="Encuestas levantadas")
                            {
                            return this.y+ " ("+obtenerPorcentaje()+"%)";
                        }
                        else
                        {
                            return this.y;
                        }
                        }

                            }
                        }
                    },
                    credits: {
                        enabled: false
                    },
                    series: [{
                            name: 'Encuestas levantadas',
                            data: org_array
                        }, {
                            name: 'Meta',
                            data: metas_array
                        }]

                });
            }
        });
    }
    obtenerPorcentaje = function()
    {
       var avance = 0;
       avance = porcentajes[posActual];
       posActual++;
       return parseFloat(avance).toFixed(2);
    }
    chartMunCenso = function (idMunicipio) {
        $.ajax({
            type: "POST",
            url: base_url + "index.php/CedulaCenso/mun_piechart",
            data: {idMunicipio: idMunicipio},
            success: function (data) {
                var org_array = [];
                var nombres_array = [];
                var obj = $.parseJSON(data);
                $.each(obj, function () {
                    var temp = [this['nomMunicipio'], parseInt(this['total'])];
                    nombres_array.push(this['nomMunicipio']);
                    org_array.push(temp);
                });
                Highcharts.chart('containermunCenso', {
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
                        text: 'Municipios'
                    },
                    plotOptions: {
                        column: {
                            depth: 50,
                            color: '#00cc66',
                            dataLabels: {
                                enabled: true
                            }
                        }
                    },
                    xAxis: {
                        categories: nombres_array
                    },
                    yAxis: {
                        title: {
                            text: 'Total'
                        },
                        labels: {
                            formatter: function () {
                                return this.value;
                            }
                        }
                    },
                    series: [{
                            name: 'municipios',
                            data: org_array,
                            pointWidth: 25
                        }]

                });
            }
        });
    }

    getGrafProgMunCenso = function (municipio) {
        //Obtiene los programas del municipio
        $.ajax({
            type: "POST",
            url: base_url + "index.php/CedulaCenso/getProgInMun",
            data: {municipio: municipio},
            success: function (data) {
                var arrayColores = ["#4dd2ff", "#33ff33", "#ff8c1a", "#40bf80", "#d24dff", "#ff4da6", "#ffff33", "#ff4d4d", "#ffc61a", "#4080bf"];
                var arrayDatos = [];
                var munTemp = "";
                var idActual = 0;
                var obj = $.parseJSON(data);
                $.each(obj, function () {
                    if (munTemp != this['T_NOMBRE_MUNICIPIO'].trim())
                    {
                        idActual++;
                        munTemp = this['T_NOMBRE_MUNICIPIO'].trim();
                        var tempIds = {};
                        //tempIds['color'] = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
                        tempIds['color'] = arrayColores[idActual - 1];
                        tempIds['name'] = this['T_NOMBRE_MUNICIPIO'].trim();
                        tempIds['id'] = idActual;
                        arrayDatos.push(tempIds);
                        var total = {};
                        if (this['T_PROGRAMA'].trim() != 'SEGURO POPULAR')
                        {
                            total['name'] = this['T_PROGRAMA'].trim();
                            total['parent'] = idActual
                            total['value'] = parseInt(this['total'], 10);
                            arrayDatos.push(total);
                        }
                    } else
                    {
                        var total = {};
                        if (this['T_PROGRAMA'].trim() != 'SEGURO POPULAR')
                        {
                            total['name'] = this['T_PROGRAMA'].trim();
                            total['parent'] = idActual
                            total['value'] = parseInt(this['total'], 10);
                            arrayDatos.push(total);
                        }
                    }

                });
            },
            error: function (data) {
//            console.log(data);
            }

        });
    }


    obtieneMunicipiosCenso = function (idPrograma, nombrePrograma)
    {
        $.ajax({
            type: "POST",
            url: base_url + "index.php/CedulaCenso/getMunPrograma",
            data: {idPrograma: idPrograma},
            success: function (data) {
                var org_array = [];
                var nombres_array = [];
                var obj = $.parseJSON(data);
                $.each(obj, function () {
                    var temp = [this['nomMunicipio'], parseInt(this['total'])];
                    nombres_array.push(this['nomMunicipio']);
                    org_array.push(temp);
                });
                $('#myTab a[href="#grafMunicipioCenso"]').tab('show');
                $("#municipiosCenso").text("Municipios del programa " + nombrePrograma);
                //Limpia el texto de las demas pestañas
                $("#localidadesCenso").text("Localidades");
                $("#mapaCenso").text("Mapa");
                $("#programasCenso").text("Programas");
                //Limpia las graficas de las demas pestañas
                $("#containerLocCenso").html("");
//                $("#containerprogCenso").html("");
                Highcharts.chart('containermunCenso', {
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
                        text: 'Municipios del programa <b>' + nombrePrograma + '</b>'
                    },
                    plotOptions: {
                        column: {
                            depth: 50,
                            color: '#00cc66',
                            dataLabels: {
                                enabled: true
                            }
                        }
                    },
                    xAxis: {
                        categories: nombres_array
                    },
                    yAxis: {
                        title: {
                            text: 'Total'
                        }
                    },
                    series: [{
                            name: 'municipios',
                            data: org_array,
                            pointWidth: 25
                        }]
                });
            }
        });
    }
    obtieneLocalidadesCenso = function (idMunicipio, nombreMunicipio)
    {
        $('#tablaLocalidades > tbody:last-child').html("");
        var faltantes = 0;
        var porcentaje = 0;
        globalIdMun = idMunicipio;
        $.ajax({
            type: "POST",
            url: base_url + "index.php/CedulaCenso/getConteoLocalidades",
            data: {idMunicipio: idMunicipio},
            success: function (data) {
                $("#locMunTitulo").html("Localidades del municipio <b>" + nombreMunicipio + "<b>");
                var loc_array = [];
                var nombres_array = [];
                var total = 0, meta = 0;
                var obj = $.parseJSON(data);
                $.each(obj, function () {
                    total += parseInt(this['total']);
                    meta += parseInt(this['E_META']);
                    var arrLoc = this['NOM_LOC'].split("|");
                    var temp = [arrLoc[0], parseInt(this['total'])];
                    nombres_array.push(arrLoc[0]);
                    loc_array.push(temp);
                    faltantes = this['E_META'] - this['total'];
                    faltantes = ((faltantes < 0) ? 0 : faltantes);
                    if (this['E_META'] != 0)
                    {
                        porcentaje = Math.round((this['total'] * 100) / this['E_META']);
                    }
                    porcentaje = (porcentaje > 100) ? 100 : porcentaje;
                    var classBar = "";
                    if (porcentaje < 50)
                        classBar = "progress-bar-danger";
                    else if ((porcentaje >= 50) && (porcentaje < 100))
                        classBar = "progress-bar-warning";
                    else
                        classBar = "progress-bar-success";
                    var valorPorcentaje = "";
                    if (this['E_META'] != 0)
                    {
//                        valorPorcentaje = "Sin meta asignada";
//                    else
                        valorPorcentaje = '<div class="progress progress-mini progress-striped active" style="width:100px; height:20px" data-percent="' + porcentaje + '%">' +
                                '<div class="progress-bar ' + classBar + '" style="width:' + porcentaje + '%"></div></div>';
                        //Agrega valores a la tabla, indicando el porcentaje de avance en base a la meta
                        $('#tablaLocalidades > tbody:last-child').append('<tr><td>' + this['NOM_LOC'] + '</td><td>' + this['E_META'] + '</td><td>' + this['total'] + '</td>' +
                                '<td>' + faltantes + '</td><td>' + valorPorcentaje + '</td></tr>')
                    }
                });
                $('#totalEncuestasLoc').text((total));
                porcentaje = Math.round((total * 100) / meta);
                porcentaje = (porcentaje > 100) ? 100 : porcentaje;
                porcentaje = (porcentaje < 0) ? 0 : porcentaje;
                $('#porcentajeAvanceLoc').text(parseFloat(porcentaje).toFixed(2) + "%");
                chartMunCensoMeta(idMunicipio);
                if (idMunicipio != 0)
                {
                    $("#localidadesCenso").show();
                    $("#productividadLocalidades").show();
                    $('#myTab a[href="#grafLocalidadesCenso"]').tab('show');
                    $("#municipiosCenso").text("Municipios");
                    $("#localidadesCenso").text("Localidades " + nombreMunicipio)
                } else
                {
                    $("#localidadesCenso").hide();
                    $("#productividadLocalidades").hide();
                }
                Highcharts.chart('containerLocCenso', {
                    chart: {
                        type: 'bar',
                        height: loc_array.length * 55 + 120 // 20px per data item plus top and bottom margins
                    },
                    title: {
                        text: 'Localidades del municipio <b>' + nombreMunicipio + '</b>'
                    },
                    xAxis: {
                        categories: nombres_array,
                        title: {
                            text: "Localidades"
                        }
                    },
                    yAxis: {
                        min: 0,
                        title: {
                            text: 'Total',
                            align: 'high'
                        },
                        labels: {
                            overflow: 'justify'
                        }
                    },
                    tooltip: {
                    },
                    plotOptions: {
                        bar: {
                            dataLabels: {
                                enabled: true
                            }
                        }
                    },
                    legend: {
                        layout: 'vertical',
                        align: 'right',
                        verticalAlign: 'top',
                        x: -40,
                        y: 80,
                        floating: true,
                        borderWidth: 1,
                        backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
                        shadow: true
                    },
                    credits: {
                        enabled: false
                    },
                    series: [{
                            name: "Localidades",
                            data: loc_array
                        }]
                });
                //obtieneProgramasCenso(idMunicipio, nombreMunicipio);
            }
        });
    }
    obtieneProgramasCenso = function (idMunicipio, nombreMunicipio)
    {
        //Obtiene los programas que conforman el municipio
        $.ajax({
            type: "POST",
            url: base_url + "index.php/CedulaCenso/prog_piechart",
            data: {idMunicipio: idMunicipio},
            success: function (data) {
                var org_array = [];
                var nombre_array = [];
                var obj = $.parseJSON(data);
                $.each(obj, function () {
                    var temp = [this['T_NOMBRE_PROGRAMA'], parseInt(this['total'])];
                    nombre_array.push(this['T_NOMBRE_PROGRAMA']);
                    org_array.push(temp);
                });
                $("#programasCenso").text("Programas " + nombreMunicipio);
                $("#mapaCenso").text("Mapa " + nombreMunicipio);
                Highcharts.chart('containerprogCenso', {
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
                        text: 'Programas del municipio <b>' + nombreMunicipio + '</b>'
                    },
                    plotOptions: {
                        column: {
                            depth: 50,
                            color: '#AC58FA',
                            dataLabels: {
                                enabled: true
                            }
                        }
                    },
                    xAxis: {
                        categories: nombre_array
                    },
                    yAxis: {
                        title: {
                            text: 'Total'
                        },
                        labels: {
                            formatter: function () {
                                return this.value;
                            }
                        }
                    },
                    series: [{
                            name: 'programas',
                            data: org_array,
                            pointWidth: 25
                        }]
                });
            }
        });

    }
    ////////////////// DASHBOARD, PADRONES DEPENDENCIAS ////////////////////////////
//Muestra grafica del conteo por municipio otros padrones
    getGrafMun = function (anio) {
        $.ajax({
            type: "POST",
            url: base_url + "index.php/welcome/mun_char_padron",
            data: {anio: anio},
            success: function (data) {
                var nombres_array = [];
                var mun_array = [];
                var obj = $.parseJSON(data);
                $.each(obj, function () {
                    var temp = [this['T_NOMBRE_MUNICIPIO'], parseInt(this['total'])];
                    nombres_array.push(this['T_NOMBRE_MUNICIPIO']);
                    mun_array.push(temp);
                });
                var graficaActual = "grafPadronesMun";
                graficaActual = (anio != "2016") ? graficaActual + "2017" : graficaActual;
                Highcharts.chart(graficaActual, {
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
                        text: 'Municipios'
                    },
                    plotOptions: {
                        column: {
                            depth: 50,
                            color: '#ff5c33'
                        }
                    },
                    xAxis: {
                        categories: nombres_array
                    },
                    yAxis: {
                        labels: {
                            formatter: function () {
                                return this.value;
                            }
                        },
                        title: {
                            text: 'Total'
                        }
                    },
                    series: [{
                            name: 'municipios',
                            data: mun_array,
                            pointWidth: 25
                        }]
                });
            }
        });

    }
    getGrafOtrosMun = function (anio) {
        $.ajax({
            type: "POST",
            url: base_url + "index.php/welcome/otros_mun_char_padron",
            data: {anio: anio},
            success: function (data) {
                var nombres_array = [];
                var mun_array = [];
                var obj = $.parseJSON(data);
                $.each(obj, function () {
                    var temp = [this['T_NOMBRE_MUNICIPIO'], parseInt(this['total'])];
                    nombres_array.push(this['T_NOMBRE_MUNICIPIO']);
                    mun_array.push(temp);
                });
                var graficaActual = "grafPadronesOtrosMun";
                graficaActual = (anio != "2016") ? graficaActual + "2017" : graficaActual;
                Highcharts.chart(graficaActual, {
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
                        text: 'Municipios'
                    },
                    plotOptions: {
                        column: {
                            depth: 50,
                            color: '#ff5c33'
                        }
                    },
                    xAxis: {
                        categories: nombres_array
                    },
                    yAxis: {
                        labels: {
                            formatter: function () {
                                return this.value;
                            }
                        },
                        title: {
                            text: 'Total'
                        }
                    },
                    series: [{
                            name: 'municipios',
                            data: mun_array,
                            pointWidth: 25
                        }]
                });
            }
        });

    }
    getGrafProg = function (anio) {
        $.ajax({
            type: "POST",
            url: base_url + "index.php/welcome/prog_char_padron",
            data: {anio: anio},
            success: function (data) {
                var nombre_array = [];
                var org_array = [];
                var nombre_otro_array = [];
                var org_otro_array = [];
                var cont = 0;
                var obj = $.parseJSON(data);
                $.each(obj, function () {
                    cont++;
                    if ((this['T_PROGRAMA'] != "SEGURO POPULAR") && (this['T_PROGRAMA'] != "DESAYUNOS ESCOLARES")) {
                        var temp = [this['T_PROGRAMA'], parseInt(this['total'])];
                        nombre_array.push(this['T_PROGRAMA']);
                        org_array.push(temp);
                    } else
                    {
                        var temp = [this['T_PROGRAMA'], parseInt(this['total'])];
                        nombre_otro_array.push(this['T_PROGRAMA']);
                        org_otro_array.push(temp);
                    }
                });
                var graficaActual = "grafPadronesProg";
                graficaActual = (anio != "2016") ? graficaActual + "2017" : graficaActual;
                Highcharts.chart(graficaActual, {
                    chart: {
                        type: 'bar'
                    },
                    title: {
                        text: 'Programas otros padrones'
                    },
                    xAxis: {
                        categories: nombre_array,
                        title: {
                            text: "Programas"
                        }
                    },
                    yAxis: {
                        min: 0,
                        title: {
                            text: 'Total',
                            align: 'high'
                        },
                        labels: {
                            overflow: 'justify',
                            formatter: function () {
                                return this.value;
                            }
                        }
                    },
                    tooltip: {
                    },
                    plotOptions: {
                        bar: {
                            dataLabels: {
                                enabled: true
                            }
                        }
                    },
                    legend: {
                        layout: 'vertical',
                        align: 'right',
                        verticalAlign: 'top',
                        x: -40,
                        y: 80,
                        floating: true,
                        borderWidth: 1,
                        backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
                        shadow: true
                    },
                    credits: {
                        enabled: false
                    },
                    series: [{
                            name: "Programas",
                            data: org_array
                        }]
                });
                Highcharts.chart('grafPadronesOtrosProg', {
                    chart: {
                        type: 'bar'
                    },
                    title: {
                        text: 'Programas otros padrones'
                    },
                    xAxis: {
                        categories: nombre_otro_array,
                        title: {
                            text: "Programas"
                        }
                    },
                    yAxis: {
                        min: 0,
                        title: {
                            text: 'Total',
                            align: 'high'
                        },
                        labels: {
                            overflow: 'justify',
                            formatter: function () {
                                return this.value;
                            }
                        }
                    },
                    tooltip: {
                    },
                    plotOptions: {
                        bar: {
                            dataLabels: {
                                enabled: true
                            }
                        }
                    },
                    legend: {
                        layout: 'vertical',
                        align: 'right',
                        verticalAlign: 'top',
                        x: -40,
                        y: 80,
                        floating: true,
                        borderWidth: 1,
                        backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
                        shadow: true
                    },
                    credits: {
                        enabled: false
                    },
                    series: [{
                            name: "Programas",
                            data: org_otro_array
                        }]
                });
            }
        });

    }
    getGrafDep = function (anio) {
        $.ajax({
            type: "POST",
            url: base_url + "index.php/welcome/org_char_padron",
            data: {anio: anio},
            success: function (data) {
                var nombre_array = [];
                var dep_array = [];
                var nombre_otro_array = [];
                var dep_otro_array = [];
                var cont = 0;
                var obj = $.parseJSON(data);
                $.each(obj, function () {
                    cont++;
                    if (this['T_DEPENDENCIA'] != "SECRETARIA DE SALUD DEL ESTADO DE QUERETARO")
                    {
                        var temp = [this['T_DEPENDENCIA'], parseInt(this['total'])];
                        nombre_array.push(this['T_DEPENDENCIA']);
                        dep_array.push(temp);
                    } else
                    {
                        var temp = [this['T_DEPENDENCIA'], parseInt(this['total'])];
                        nombre_otro_array.push(this['T_DEPENDENCIA']);
                        dep_otro_array.push(temp);
                    }
                });
                var graficaActual = "grafPadronesDep";
                graficaActual = (anio != "2016") ? graficaActual + "2017" : graficaActual;
                Highcharts.chart(graficaActual, {
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
                        text: 'Dependencias padrones'
                    },
                    plotOptions: {
                        column: {
                            depth: 50,
                            color: '#0AC2F0',
                            dataLabels: {
                                enabled: true
                            }
                        }

                    },
                    xAxis: {
                        categories: nombre_array
                    },
                    yAxis: {
                        labels: {
                            formatter: function () {
                                return this.value;
                            }
                        },
                        title: {
                            text: 'Total'
                        }
                    },
                    series: [{
                            name: 'dependencias',
                            data: dep_array,
                            pointWidth: 25
                        }]
                });
                Highcharts.chart('grafPadronesOtrasDep', {
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
                        text: 'Dependencias Secretaria de salud'
                    },
                    plotOptions: {
                        column: {
                            depth: 50,
                            color: '#0AC2F0',
                            dataLabels: {
                                enabled: true
                            }
                        }

                    },
                    xAxis: {
                        categories: nombre_otro_array
                    },
                    yAxis: {
                        labels: {
                            formatter: function () {
                                return this.value;
                            }
                        },
                        title: {
                            text: 'Total'
                        }
                    },
                    series: [{
                            name: 'dependencias',
                            data: dep_otro_array,
                            pointWidth: 25
                        }]
                });
            }
        });

    }
    getGrafProgMun = function (municipio) {
        //Obtiene los programas del municipio
        $.ajax({
            type: "POST",
            url: base_url + "index.php/welcome/getProgInMun",
            data: {municipio: municipio, anio: "2016"},
            success: function (data) {
                var arrayColores = ["#4dd2ff", "#33ff33", "#ff8c1a", "#40bf80", "#d24dff", "#ff4da6", "#ffff33", "#ff4d4d", "#ffc61a", "#4080bf"];
                var arrayDatos = [];
                var munTemp = "";
                var idActual = 0;
                var obj = $.parseJSON(data);
                $.each(obj, function () {
                    if (munTemp != this['T_NOMBRE_MUNICIPIO'].trim())
                    {
                        idActual++;
                        munTemp = this['T_NOMBRE_MUNICIPIO'].trim();
                        var tempIds = {};
                        //tempIds['color'] = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
                        tempIds['color'] = arrayColores[idActual - 1];
                        tempIds['name'] = this['T_NOMBRE_MUNICIPIO'].trim();
                        tempIds['id'] = idActual
                        arrayDatos.push(tempIds);
                        var total = {};
                        if (this['T_PROGRAMA'].trim() != 'SEGURO POPULAR')
                        {
                            total['name'] = this['T_PROGRAMA'].trim();
                            total['parent'] = idActual
                            total['value'] = parseInt(this['total'], 10);
                            arrayDatos.push(total);
                        }
                    } else
                    {
                        var total = {};
                        if (this['T_PROGRAMA'].trim() != 'SEGURO POPULAR')
                        {
                            total['name'] = this['T_PROGRAMA'].trim();
                            total['parent'] = idActual
                            total['value'] = parseInt(this['total'], 10);
                            arrayDatos.push(total);
                        }
                    }

                });
//                alert($.parseJSON((arrayDatos)));
                Highcharts.chart('beneficiariosPadron', {
                    credits: {
                        enabled: false
                    },
                    series: [{
                            type: "treemap",
                            layoutAlgorithm: 'stripes',
                            alternateStartingDirection: true,
                            levels: [{
                                    level: 1,
                                    layoutAlgorithm: 'sliceAndDice',
                                    dataLabels: {
                                        enabled: true,
                                        align: 'left',
                                        verticalAlign: 'top',
                                        style: {
                                            fontSize: '15px',
                                            fontWeight: 'bold'
                                        }
                                    }
                                }], data: arrayDatos
                        }],
                    title: {
                        text: 'Programas del municipio <b>' + municipio.toLowerCase() + '</b>'
                    }
                });
            },
            error: function (data) {
//            console.log(data);
            }

        });
    }
    ///Mapa interactivo
    mostrarEsconderPuntos = function (idMunicipio, seleccionado)
    {
        //Muestra u oculta los marcadores en el mapa interactivo, segun el filtro
        for (var i = 0; i < markers.length; i++) {
            if (idMunicipio === 0)
            {
                //Se esconden todos
                 markers[i].setVisible(seleccionado);
            } else
            {
                if (markers[i].category === idMunicipio) {
                    markers[i].setVisible(seleccionado);
                }
            }

        }

    }
    obtenerTotalPersonas = function () {
                $.ajax({
            type: "POST",
            url: base_url + "index.php/CedulaCenso/obtenerIntegrantesCenso",
            success: function (data) {
                var obj = $.parseJSON(data);
                $("#totalPersonas").html(formatoNumeros(obj[0]));
                $("#totalPrecalificadas").html(formatoNumeros(obj[1]));
            },
            error: function (data) {

            }

        });
    }


});
