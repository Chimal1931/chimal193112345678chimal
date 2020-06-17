$(function () {
    /********** DECLARACION DE VARIABLES Y FUNCIONES PARA CARGAR EL MAPA DE HCH*****/
    var map = null, marker = null;
    var globalIdMun = 0;
    var latLong = {lat: 20.591682, lng: -100.389889};
     var latLong1 = {lat: 19.254412,  lng: -103.744707};
    initMap = function () {
            
        map = new google.maps.Map(document.getElementById('googleMap'), {
            center: latLong,
            zoom: 12
        });
       
    }
    reloadMap = function ()
    {
        setTimeout(function () {
            google.maps.event.trigger(map, 'resize');
            map.setCenter(latLong);
        }, 50);
        initMap();
        if (globalIdMun == 0)
        {
            marker = new google.maps.Marker({
                position: latLong,
                map: map,
                draggable: false,
                title: 'Queretaro'
            });
            marker.setMap(marker);
        } else
        {

            getLocalidadesMun(globalIdMun);
        }
    }
    function chartOrg() {
        $.ajax({
            type: "POST",
            url: base_url + "index.php/welcome/org_piechart",
            success: function (data) {
                var org_array = [];
                var nombres_array = [];
                var obj = $.parseJSON(data);
                $.each(obj, function () {
                    nombres_array.push(this['T_NOMBRE']);
                    var temp = [this['T_NOMBRE'], parseInt(this['total'])];
                    org_array.push(temp);
                });
                Highcharts.chart('containerorg', {
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
    function chartProg() {
        $.ajax({
            type: "POST",
            url: base_url + "index.php/welcome/prog_piechart",
            success: function (data) {
                var org_array = [];
                var nombre_array = [];
                var obj = $.parseJSON(data);
                $.each(obj, function () {
                    var temp = [this['T_NOMBRE_PROGRAMA'], parseInt(this['total'])];
                    nombre_array.push(this['T_NOMBRE_PROGRAMA']);
                    org_array.push(temp);
                });
                Highcharts.chart('containerprog', {
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
    function chartMun() {
        $.ajax({
            type: "POST",
            url: base_url + "index.php/welcome/mun_piechart",
            success: function (data) {
                var org_array = [];
                var nombres_array = [];
                var obj = $.parseJSON(data);
                $.each(obj, function () {
                    var temp = [this['nomMunicipio'], parseInt(this['total'])];
                    nombres_array.push(this['nomMunicipio']);
                    org_array.push(temp);
                });
                Highcharts.chart('containermun', {
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
                        tempIds['id'] = idActual.toString();
                        arrayDatos.push(tempIds);
                        var total = {};
                        if (this['T_PROGRAMA'].trim() != 'SEGURO POPULAR')
                        {
                            total['name'] = this['T_PROGRAMA'].trim();
                            total['parent'] = idActual.toString();
                            total['value'] = parseInt(this['total'], 10);
                            arrayDatos.push(total);
                        }
                    } else
                    {
                        var total = {};
                        if (this['T_PROGRAMA'].trim() != 'SEGURO POPULAR')
                        {
                            total['name'] = this['T_PROGRAMA'].trim();
                            total['parent'] = idActual.toString();
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


    obtieneMunicipios = function (idPrograma, nombrePrograma)
    {
        $.ajax({
            type: "POST",
            url: base_url + "index.php/welcome/getMunPrograma",
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
                $('#myTab a[href="#grafMunicipio"]').tab('show');
                $("#municipiosHCH").text("Municipios del programa " + nombrePrograma);
                //Limpia el texto de las demas pestañas
                $("#localidadesHCH").text("Localidades");
                $("#mapaHCH").text("Mapa");
                $("#programasHCH").text("Programas");
                //Limpia las graficas de las demas pestañas
                $("#containerLoc").html("");
                $("#containerprog").html("");
                Highcharts.chart('containermun', {
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
    obtieneLocalidades = function (idMunicipio, nombreMunicipio)
    {
        globalIdMun = idMunicipio;
        $.ajax({
            type: "POST",
            url: base_url + "index.php/welcome/getLocalidades",
            data: {idMunicipio: idMunicipio},
            success: function (data) {
                var loc_array = [];
                var nombres_array = [];
                var obj = $.parseJSON(data);
                $.each(obj, function () {
                    var arrLoc = this['T_LOCALIDAD'].split("|");
                    var temp = [arrLoc[0], parseInt(this['total'])];
                    nombres_array.push(arrLoc[0]);
                    loc_array.push(temp);
                });
                chartMun();
                $('#myTab a[href="#grafLocalidades"]').tab('show');
                $("#municipiosHCH").text("Municipios");
                $("#localidadesHCH").text("Localidades " + nombreMunicipio)
                Highcharts.chart('containerLoc', {
                    chart: {
                        type: 'bar'
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
                obtieneProgramas(idMunicipio, nombreMunicipio);
            }
        });
    }
    obtieneProgramas = function (idMunicipio, nombreMunicipio)
    {
        //Obtiene los programas que conforman el municipio
        $.ajax({
            type: "POST",
            url: base_url + "index.php/welcome/prog_piechart",
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
                $("#programasHCH").text("Programas " + nombreMunicipio);
                $("#mapaHCH").text("Mapa " + nombreMunicipio);
                Highcharts.chart('containerprog', {
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
    getLocalidadesMun = function (idMunicipio) {
        var latLonArr = [];
        $.ajax({
            type: "POST",
            url: base_url + "index.php/welcome/latLonLocalidades",
            data: {idMunicipio: idMunicipio},
            success: function (data) {
                var latitud, longitud, nombre;
                var i = 0;
                var obj = $.parseJSON(data);
                $.each(obj, function () {
                    console.log(this['LATITUD'] + " " + this['LONGITUD']);
                    latitud = obtieneLatitud(this['LATITUD']);
                    longitud = obtieneLongitud(this['LONGITUD']);
                    nombre = this['NOM_LOC'];
//                     var temp = [[nombre, latitud,longitud]];
                    latLonArr.push([nombre, latitud, longitud]);
                    i++;
                });
                var infowindow = new google.maps.InfoWindow();

                var marker, i;
                var latCenter = parseFloat(latLonArr[0][1]);
                var lonCenter = parseFloat(latLonArr[0][2]);
                for (i = 0; i < latLonArr.length; i++) {
                    marker = new google.maps.Marker({
                        position: new google.maps.LatLng(latLonArr[i][1], latLonArr[i][2]),
                        draggable: false,
                        title: latLonArr[i][0],
                        map: map
                    });                   
                }
                 var latLngMarker = marker.getPosition(); // returns LatLng object
                map.setCenter(latLngMarker); // setCenter takes a LatLng object
                map.setZoom(10);
            }

        });

    }
    function obtieneLatitud(latitud)
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
    function obtieneLongitud(longitud)
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

    //AL cargar la pagina se muestra la grafica de municipios y programas hch
    chartProg();
    chartMun();
    chartOrg();
    initMap();

});