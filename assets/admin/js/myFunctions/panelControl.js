$(function () {
    chartNoCarencias = function () {
        $.ajax({
            type: "POST",
            url: base_url + "index.php/TableroCarencias/obtenerConteoNoCarencias",
            success: function (data) {
                var org_array = [];
                var nombres_array = [];
                var obj = $.parseJSON(data);
                $.each(obj, function () {
                    nombres_array.push(this['E_C_ALIMENTARIA_NO_CARENCIAS']);
                    var temp = [this['E_C_ALIMENTARIA_NO_CARENCIAS'], parseInt(this['TOTAL'])];
                    org_array.push(temp);
                });
                Highcharts.chart('conteoPorNoCarencia', {
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
                        text: 'Conteo por número de carencias'
                    },
                    plotOptions: {
                        column: {
                            depth: 50,
                            color: '#3399ff',
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
                            name: 'Número de personas',
                            data: org_array,
                            pointWidth: 25
                        }]
                });
            }
        });
    }
    chartNoCV = function () {
        //Calidad de vivienda
        $.ajax({
            type: "POST",
            url: base_url + "index.php/TableroCarencias/obtenerConteoCV",
            success: function (data) {
                var cv_array = [];
                var nombres_array = ["MURO", "TECHO", "PISO", "HACINAMIENTO"];
                 var obj = $.parseJSON(data);
                   cv_array.push(["MURO", parseInt(obj[0]['MURO_TOTAL'])]);
                   cv_array.push(["TECHO", parseInt(obj[0]['TECHO_TOTAL'])]);
                   cv_array.push(["PISO", parseInt(obj[0]['PISO_TOTAL'])]);
                   cv_array.push(["HACINAMIENTO", parseInt(obj[0]['HAC_TOTAL'])]);
                Highcharts.chart('conteoCV', {
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
                        text: 'Conteo de subcarencias calidad de vivienda'
                    },
                    plotOptions: {
                        column: {
                            depth: 50,
                            color: '#3399ff',
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
                            name: 'Número de personas',
                            data: cv_array,
                            pointWidth: 25
                        }]
                });
            }
        });
    }
    chartNoSB = function () {
        //Calidad de vivienda
        $.ajax({
            type: "POST",
            url: base_url + "index.php/TableroCarencias/obtenerConteoSB",
            success: function (data) {
                var sb_array = [];
                var nombres_array = ["LUZ", "AGUA", "DRENAJE", "COMBUS"];
                var obj = $.parseJSON(data);
                sb_array.push(["LUZ", parseInt(obj[0]['LUZ_TOTAL'])]);
                sb_array.push(["AGUA", parseInt(obj[0]['AGUA_TOTAL'])]);
                sb_array.push(["DRENAJE", parseInt(obj[0]['DRENAJE_TOTAL'])]);
                sb_array.push(["COMBUS", parseInt(obj[0]['COMBUS_TOTAL'])]);
                Highcharts.chart('conteoSB', {
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
                        text: 'Conteo subcarencias servicios básicos'
                    },
                    plotOptions: {
                        column: {
                            depth: 50,
                            color: '#3399ff',
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
                            name: 'Número de personas',
                            data: sb_array,
                            pointWidth: 25
                        }]
                });
            }
        });
    }
    chartNoRE = function () {
        //Calidad de vivienda
        $.ajax({
            type: "POST",
            url: base_url + "index.php/TableroCarencias/obtenerConteoRE",
            success: function (data) {
                var re_array = [];
                var nombres_array = ["NO ASISTE", "NO PRIMARIA", "NO SECUNDARIA"];
                var obj = $.parseJSON(data);
                re_array.push(["NO ASISTE", parseInt(obj[0]['CRITERIO1'])]);
                re_array.push(["NO PRIMARIA", parseInt(obj[0]['CRITERIO2'])]);
                re_array.push(["NO SECUNDARIA", parseInt(obj[0]['CRITERIO3'])]);
                Highcharts.chart('conteoRE', {
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
                        text: 'Conteo presenta carencia rezago educativo'
                    },
                    plotOptions: {
                        column: {
                            depth: 50,
                            color: '#3399ff',
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
                            name: 'Número de personas',
                            data: re_array,
                            pointWidth: 25
                        }]
                });
            }
        });
    }
    chartTipoCarencias = function () {
        $.ajax({
            type: "POST",
            url: base_url + "index.php/TableroCarencias/obtenerConteoTipoCarencias",
            success: function (data) {
                var carencias_array = [];
                var nombres_array = [];
                var obj = $.parseJSON(data);
                $.each(obj, function () {
                    nombres_array = ["Alimentación", "Salud", "Seguridad Social", "Rezago Educativo", "Calidad Vivienda", "Servicios Básicos"];
                    carencias_array = [["Alimentación", parseInt(this['PRESENTA_ALI'])], ["Salud", parseInt(this['PRESENTA_SALUD'])],
                        ["Seguridad Social", parseInt(this['PRESENTA_SS'])], ["Rezago Educativo", parseInt(this['PRESENTA_RE'])],
                        ["Calidad Vivienda", parseInt(this['PRESENTA_CV'])], ["Serviciios Básicos", parseInt(this['PRESENTA_SB'])]];
                });
                Highcharts.chart('conteoPorCarencia', {
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
                        text: 'Conteo por tipo de carencia'
                    },
                    plotOptions: {
                        column: {
                            depth: 50,
                            color: '#3399ff',
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
                            data: carencias_array,
                            pointWidth: 25
                        }]
                });
            }
        });

    }
    chartCarenciasHogar = function () {
        $.ajax({
            type: "POST",
            url: base_url + "index.php/TableroCarencias/obtenerConteoCarenciasHogar",
            success: function (data) {
                var carencias_array = [];
                var nombres_array = [];
                var obj = $.parseJSON(data);
                $.each(obj, function () {
                    nombres_array = ["Alimentación", "Salud", "Seguridad Social", "Rezago Educativo", "Calidad Vivienda", "Servicios Básicos"];
                    carencias_array = [["Alimentación", parseInt(this['PRESENTA_ALI'])], ["Salud", parseInt(this['PRESENTA_SALUD'])],
                        ["Seguridad Social", parseInt(this['PRESENTA_SS'])], ["Rezago Educativo", parseInt(this['PRESENTA_RE'])],
                        ["Calidad Vivienda", parseInt(this['PRESENTA_CV'])], ["Serviciios Básicos", parseInt(this['PRESENTA_SB'])]];
                });
                Highcharts.chart('conteoCarenciaHogar', {
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
                        text: 'Número de carencias (por hogar)'
                    },
                    plotOptions: {
                        column: {
                            depth: 50,
                            color: '#3399ff',
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
                            data: carencias_array,
                            pointWidth: 25
                        }]
                });
            }
        });

    }
    informacionGeneral = function()
    {
        // $.ajax({
        //     type: "POST",
        //     url: base_url + "index.php/TableroCarencias/obtenerTotalEncuestas",
        //     success: function (data) {
        //         var obj = $.parseJSON(data);
        //         $("#noEncuestas").text(formatoNumeros(obj[0]["TOTAL"]) );
        //         $("#fecha").text(obj[0]["FECHA"]);
        //     }
        // });
        // $.ajax({
        //     type: "POST",
        //     url: base_url + "index.php/TableroCarencias/obtenerTotalEncuestados",
        //     success: function (data) {
        //         var obj = $.parseJSON(data);
        //         $("#noEncuestados").text(formatoNumeros(obj[0]["TOTAL"]));
        //     }
        // });
        // $.ajax({
        //     type: "POST",
        //     url: base_url + "index.php/TableroCarencias/obtenerPrecalificados",
        //     success: function (data) {
        //         var obj = $.parseJSON(data);
        //         $("#noCredenciales").text(formatoNumeros(obj[0]["TOTAL"]));
        //     }
        // });
    }
    chartCalificaciones = function () {
        $.ajax({
            type: "POST",
            url: base_url + "index.php/TableroCarencias/conteoCalificacion",
            success: function (data) {
                var calificado_array = [];
                var nocalificado_array = [];
                var nombres_array = ["Calificaciones"];
                var obj = $.parseJSON(data);
                $.each(obj, function () {
                    // calificado_array = [["Precalificados", parseInt(this['CALIFICADOS'])]];
                    // nocalificado_array = [["No Calificados", parseInt(this['NO_CALIFICADOS'])]];
                    calificado_array = [["3 o Más carencias", (97799.00)]];
                    nocalificado_array = [["Familias encuestadas", (152947.00)]];
                });
                Highcharts.chart('conteoCalificacion', {
                    chart: {
                        type: 'bar',
                        height: calificado_array.length * 205 + 120 // 55 per data item plus top and bottom margins
                    },
                    title: {
                        // text: '<b>Personas precalificadas</b>'
                        text: '<b>Familias con 3 o más carencias</b>'
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
                                    this.series.name + ': ' + this.y + '<br/>' +
                                    'Total: ' + this.point.stackTotal;
                        }
                    },
                    plotOptions: {
                        bar: {
                            dataLabels: {
                                enabled: true
                            }
                        }
                    },
                    credits: {
                        enabled: false
                    },
                    series: [{
                            name: '3 o Más carencias',
                            data: calificado_array
                        }, {
                            name: 'Familias encuestadas',
                            data: nocalificado_array
                        }]

                });
            }
        });
    }
    //Reajusta el ancho de la grafica dentro del tab
    $(document).on('shown.bs.tab', 'a[data-toggle="tab"]', function () {
        $('.chart').each(function () {
            $(this).highcharts().reflow();
        });
    })

    //informacionGeneral();
    chartNoCarencias();
    chartTipoCarencias();
    chartNoCV();
    chartNoSB();
    chartNoRE();
    chartCalificaciones();
});
