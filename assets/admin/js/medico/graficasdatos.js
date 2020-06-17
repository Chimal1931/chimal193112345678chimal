
$.getJSON('<?=base_url() ?>index.php/Dashboard/getedades',  function(json,edades) {
  //console.log(json);
  //console.log(edades[0].id_genero);
if(json)
{
console.log(json);
    var m = json[0].pacientescontdos;
    var f = json[1].pacientescontdos;

  //  var precalificados = json.indicadores.precalificados;
    console.log(m);

      console.log(f);
         var ma = decimales(m,2,[' ',"'",'.']);
         var cadena = numeral (1000) .format ('0,0');
         var fa = decimales(f,2,[' ',"'",'.']);
        console.log(cadena);
console.log(ma);
console.log(fa);
Highcharts.setOptions({
  colors: ['#67CAF0', '#EB5FBC']
});
Highcharts.chart('container', {
chart: {
  plotBackgroundColor: null,
  plotBorderWidth: null,
  plotShadow: false,
  type: 'pie'
},
title: {
  text: 'Derecho Habiencias'
},
tooltip: {
  pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
},
plotOptions: {
  pie: {
    allowPointSelect: true,
    cursor: 'pointer',
    dataLabels: {
      enabled: false
    },
    showInLegend: true
  }
},
series: [{
  name: 'Derecho Habiencias',
  colorByPoint: true,
  data: [{
    name: 'Masculino',
    y:parseFloat(m),
  }, {
    name: 'Femenino',
    y:parseFloat(f),

  }]
}]
});
}
});


$.getJSON('<?=base_url() ?>index.php/Dashboard/getDH',  function(json) {
  //console.log(json);
  //console.log(edades[0].id_genero);
if(json)
{
console.log(json);
    var imms = json[0].dh;
    var isste = json[1].dh;
    var sp = json[2].dh;
    var otro = json[3].dh;
  //  var precalificados = json.indicadores.precalificados;
    console.log(imms);

      console.log(isste);
      console.log(sp);
      console.log(otro);


Highcharts.setOptions({
  colors: ['#01BAF2', '#71BF45', '#FAA74B','#000000']
});
Highcharts.chart('con', {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: 'pie'
  },
  title: {
    text: 'Derecho Habiencias'
  },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: {
        enabled: false
      },
      showInLegend: true
    }
  },
  series: [{
    name: 'Derecho Habiencias',
    colorByPoint: true,
    data: [{
      name: 'IMMS',
      y:parseFloat(imms),
    }, {
      name: 'ISSTE',
      y:parseFloat(isste),

    }, {
      name: 'seguro popular',
      y: parseFloat(sp),
      }, {
      name: 'Otro',
      y: parseFloat(otro),
    }]
  }]
});
}
});

$.getJSON('<?=base_url() ?>index.php/Dashboard/grupper',  function(json) {
  //console.log(json);
  //console.log(edades[0].id_genero);
if(json)
{
console.log(json);
 var grupo = json[0].gurpo;
 var grupo1 = json[1].gurpo;
 var grupo2 = json[2].gurpo;

  //   var isste = json[1].dh;
  //   var sp = json[2].dh;
  //   var otro = json[3].dh;
  // //  var precalificados = json.indicadores.precalificados;
    console.log(grupo);

      console.log(grupo1);
      console.log(grupo2);


Highcharts.setOptions({
  colors: ['#F9471F', '#D8F361', '#FAA74B']
});
Highcharts.chart('grupo', {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: 'pie'
  },
  title: {
    text: 'Registrados'
  },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: {
        enabled: false
      },
      showInLegend: true
    }
  },
  series: [{
    name: 'grupos',
    colorByPoint: true,
    data: [{
      name: 'ADULTO MAYOR',
      y:parseFloat(grupo),
    }, {
      name: 'CON DISCAPACIDAD',
      y:parseFloat(grupo1),

    }, {
      name: 'NINGUNO',
      y: parseFloat(grupo2),
      }, ]
  }]
});
}

});
function decimales(value, decimals, separators) {
    decimals = decimals >= 0 ? parseInt(decimals, 0) : 2;
    separators = separators || ['.', "'", ','];
    var number = (parseFloat(value) || 0).toFixed(decimals);
    if (number.length <= (4 + decimals))
    return number.replace('.', separators[separators.length - 1]);
    var parts = number.split(/[-.]/);
    value = parts[parts.length > 1 ? parts.length - 2 : 0];
    var result = value.substr(value.length - 3, 3) + (parts.length > 1 ?
      separators[separators.length - 1] + parts[parts.length - 1] : '');
      var start = value.length - 6;
      var idx = 0;
      while (start > -3) {
        result = (start > 0 ? value.substr(start, 3) : value.substr(0, 3 + start))
        + separators[idx] + result;
        idx = (++idx) % 2;
        start -= 3;
      }
      return (parts.length == 3 ? '-' : '') + result;
    }

$.getJSON('<?=base_url() ?>index.php/Dashboard/getedades',  function(json1) {
  //console.log(json);
  //console.log(edades[0].id_genero);
if(json1)
{
console.log(json1);
    var ma = json1[0].pacientescontdos;
    var fa = json1[1].pacientescontdos;
console.log(ma);
console.log(fa);
// Create the chart
Highcharts.chart('ju', {
    chart: {
        type: 'pie'
    },
    title: {
        text: 'GENERO'
    },
    plotOptions: {
        series: {
            dataLabels: {
                enabled: true,
                format: '{point.name}: {point.y:.1f}%'
            }
        }
    },

    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },

    series: [
        {
            name: "Generos",
            colorByPoint: true,
            data: [
                {
                    name: "masculino",
                    y: parseFloat(ma),
                    drilldown: "hombre"
                },
                {
                    name: "femenino",
                    y: parseFloat(fa),
                    drilldown: "mujer"
                }
            ]
        }
    ]

});
}

// $.get('<?=base_url() ?>index.php/Dashboard/getmedicamentos').done(function(medi) {
//   //console.log(json);
//   //console.log(edades[0].id_genero);
// console.log(medi);
// var ma =JSON.parse(medi);
// for(x=0; x<ma.length; x++) {
//   var medica =ma[x].medicamento
//   var cantidad =ma[x].medicamentos
//  console.log(medica);
//     console.log(ma[x].medicamento);
//     console.log(ma[x].medicamentos);

// }

console.log(ma);
$.getJSON('<?=base_url() ?>index.php/Dashboard/getmedicamentos',  function(json) {
  //console.log(json);
  //console.log(edades[0].id_genero);
if(json)
{
console.log(json);
 var can = json[0].medicamentos;
 var med = json[0].medicamento;
 var can1 = json[1].medicamentos;
 var med1 = json[1].medicamento;
 var can2 = json[2].medicamentos;
 var med2 = json[2].medicamento;
 var can3 = json[3].medicamentos;
 var med3 = json[3].medicamento;
 var can4 = json[4].medicamentos;
 var med4 = json[4].medicamento;
 var can5 = json[5].medicamentos;
 var med5 = json[5].medicamento;
 var can6 = json[6].medicamentos;
 var med6 = json[6].medicamento;
 var can7 = json[7].medicamentos;
 var med7 = json[7].medicamento;
 var can8 = json[8].medicamentos;
 var med8 = json[8].medicamento;
 var can9 = json[9].medicamentos;
 var med9 = json[9].medicamento;
 var can10 = json[10].medicamentos;
 var med10 = json[10].medicamento;
 var can11 = json[11].medicamentos;
 var med11 = json[11].medicamento;
 var can12 = json[12].medicamentos;
 var med12 = json[12].medicamento;
 var can13 = json[13].medicamentos;
 var med13 = json[13].medicamento;
 var can14 = json[14].medicamentos;
 var med14 = json[14].medicamento;
 var can15 = json[15].medicamentos;
 var med15 = json[15].medicamento;
 var can16 = json[16].medicamentos;
 var med16 = json[16].medicamento;
 var can17 = json[17].medicamentos;
 var med17 = json[17].medicamento;
 var can18 = json[18].medicamentos;
 var med18 = json[18].medicamento;
 var can19 = json[19].medicamentos;
 var med19 = json[19].medicamento;
 var can20 = json[20].medicamentos;
 var med20 = json[20].medicamento;
 var can21 = json[21].medicamentos;
 var med21 = json[21].medicamento;
 var can22 = json[22].medicamentos;
 var med22 = json[22].medicamento;
 var can23 = json[23].medicamentos;
 var med23 = json[23].medicamento;
 var can24 = json[24].medicamentos;
 var med24 = json[24].medicamento;
 var can25 = json[25].medicamentos;
 var med25 = json[25].medicamento;
 var can24 = json[24].medicamentos;
 var med24 = json[24].medicamento;
 var can25 = json[25].medicamentos;
 var med25 = json[25].medicamento;
 var can26 = json[26].medicamentos;
 var med26 = json[26].medicamento;
 var can27 = json[27].medicamentos;
 var med27 = json[27].medicamento;
 var can28 = json[28].medicamentos;
 var med28 = json[28].medicamento;
 var can29 = json[29].medicamentos;
 var med29 = json[29].medicamento;
 var can30 = json[30].medicamentos;
 var med30 = json[30].medicamento;
 var can31 = json[31].medicamentos;
 var med31 = json[31].medicamento;
 var can32 = json[32].medicamentos;
 var med32 = json[32].medicamento;
 var can33 = json[33].medicamentos;
 var med33 = json[33].medicamento;

 Highcharts.setOptions({
   colors: ['#F9471F', '#D8F361', '#FAA74B']
 });
Highcharts.chart('medicamento', {
  chart: {
          type: 'column'
      },
      title: {
          text: 'MEDICAMENTOS'
      },


      xAxis: {
          type: 'category',
          labels: {
              rotation: -45,
              style: {
                  fontSize: '13px',
                  fontFamily: 'Verdana, sans-serif'
              }
          }
      },

      legend: {
          enabled: false
      },
      tooltip: {
          pointFormat: ' <b>{point.y:.1f} </b>'
      },
  series:
      [
        {
            name: "medicamentos",
            colorByPoint: true,
            data: [
                { name: med,
                    y: parseFloat(can),
                },{
                  name: med1,
                  y: parseFloat(can1),
                },{
                  name: med2,
                  y: parseFloat(can2),
                },{
                  name: med3,
                  y: parseFloat(can3),
                  },{
                    name: med4,
                    y: parseFloat(can4),
                  },{
                    name: med5,
                    y: parseFloat(can5),
                  }
                  ,{
                    name: med6,
                    y: parseFloat(can6),
                  },{
                    name: med7,
                    y: parseFloat(can7),
                  },{
                    name: med8,
                    y: parseFloat(can8),
                  }
                  ,{
                    name: med9,
                    y: parseFloat(can9),
                  }
                  ,{
                    name: med10,
                    y: parseFloat(can10),
                  },{
                    name: med11,
                    y: parseFloat(can11),
                  },{
                    name: med12,
                    y: parseFloat(can12),
                  },{
                    name: med13,
                    y: parseFloat(can13),
                  },{
                    name: med14,
                    y: parseFloat(can14),
                  },{
                    name: med15,
                    y: parseFloat(can15),
                  },{
                    name: med16,
                    y: parseFloat(can16),
                  },{
                    name: med17,
                    y: parseFloat(can17),
                  },{
                    name: med18,
                    y: parseFloat(can18),
                  },{
                    name: med19,
                    y: parseFloat(can19),
                  },{
                    name: med20,
                    y: parseFloat(can20),
                  },{
                    name: med21,
                    y: parseFloat(can21),
                  },{
                    name: med22,
                    y: parseFloat(can22),
                  },{
                    name: med23,
                    y: parseFloat(can23),
                  },{
                    name: med24,
                    y: parseFloat(can24),
                  },{
                    name: med25,
                    y: parseFloat(can25),
                  },{
                    name: med26,
                    y: parseFloat(can26),
                  },{
                    name: med27,
                    y: parseFloat(can27),
                  },{
                    name: med28,
                    y: parseFloat(can28),
                  },{
                    name: med29,
                    y: parseFloat(can29),
                  },{
                    name: med30,
                    y: parseFloat(can30),
                  },{
                    name: med31,
                    y: parseFloat(can31),
                  },{
                    name: med32,
                    y: parseFloat(can32),
                  },{
                    name: med33,
                    y: parseFloat(can33),
                  }
            ]
        }
    ]

});



}
});
});
