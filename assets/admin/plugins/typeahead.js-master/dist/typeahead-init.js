var substringMatcher = function(strs) {
  return function findMatches(q, cb) {
    var matches, substringRegex;

    // an array that will be populated with substring matches
    matches = [];

    // regex used to determine if a string contains the substring `q`
    substrRegex = new RegExp(q, 'i');

    // iterate through the pool of strings and for any string that
    // contains the substring `q`, add it to the `matches` array
    $.each(strs, function(i, str) {
      if (substrRegex.test(str)) {
        matches.push(str);
      }
    });

    cb(matches);
  };
};

var states = ["JOSE ERICK MEDINA  MONTES","CARLOS JAVIER MALAGON MOYA","MARIA GUADALUPE RUIZ   HERNANDEZ","LUIS ARMANDO ESTRADA TORRES","HECTOR MAURICIO RODRIGUEZ VEGA","ANA LILIA RESENDIZ ROBLES","LETICIA ROJAS BALDERAS","MARIA DOLORES MARTINEZ MARTINEZ","MARTIN HERNANDEZ  COLIN ","ROBERTO CARLOS JIMENEZ ARIAS","GISELLE OBREGON DIAZ","LUIS MANUEL  SUAREZ DIAZ","ANA MARIA BALDERAS  GARCIA ","OSVALDO GUZMAN VAZQUEZ","AMANDA NIETO GONZALEZ ","RAUL RODRIGUEZ RUIZ","MARIA GUADALUPE TREJO ARELLANO","JULIO CABRERA RESENDIZ","RODRIGO  GUTIERREZ GUTIERREZ","JUSTO MONTOYA  DE LEON ","MARIA ESTHER GARCIA AGUILAR","ISRAEL RODRIGUEZ HERNANDEZ","JAQUELINE SERVIN GUTIERREZ","ADRIANA  MARTINEZ  MARIA","MERCED MORENO SAN ROMAN","HORACIO RAMIREZ GALVAN","ELISA RENDON  GUERRERO","ALEJANDRO FLORES GARCIA ","MARIA LILIA NORMA  CRISTOBAL  MORENO ","JOSE JUAN  FRANCO  MARTINEZ","ESMERALDA  HURTADO  RESENDIZ ","GERARDO  CHAVEZ RESENDIZ","CAMERINO HURTADO RINCON","JAIME SALDIVAR PEREZ","LUIS MANUEL  GOMEZ  CASTELLANOS","MARISELA  GONZALEZ  ALVAREZ ","NESTOR  GONZALEZ  GONZALEZ ","LORENA YASMIN LEDESMA  AVALOS ","ESPERANZA  MENDEZ  ALEGRIA ","ROSA BARCENAS SUAREZ","LUIS CELESTINO CAMPOS VELAZQUEZ","NORMA HERNANDEZ HUERTA","NORA JIMENEZ ROBLES","LUIS MANUEL  SUAREZ CAMACHO","CAMILA VEGA ESPINO","FERNANDO DANIEL  SEGOVIANO OLVERA","MARIANA MORAN RUIZ","OLGA LOPEZ REA","MARTIN AYALA SILIS","ROSALIA HERNANDEZ RUBIO","JORGE MUNOZ VELAZQUEZ","MYRIAM MOLINA MONTOYA"];

$('#the-basics .typeahead').typeahead({
  hint: true,
  highlight: true,
  minLength: 1
},
{
  name: 'states',
  source: substringMatcher(states)
});

// ---------- Bloodhound ----------

// constructs the suggestion engine
var states = new Bloodhound({
  datumTokenizer: Bloodhound.tokenizers.whitespace,
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  // `states` is an array of state names defined in "The Basics"
  local: states
});

$('#bloodhound .typeahead').typeahead({
  hint: true,
  highlight: true,
  minLength: 1
},
{
  name: 'states',
  source: states
});


// -------- Prefatch --------

var zonales = new Bloodhound({
  datumTokenizer: Bloodhound.tokenizers.whitespace,
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  // url points to a json file that contains an array of country names, see
  // https://github.com/twitter/typeahead.js/blob/gh-pages/data/countries.json
  prefetch: 'http://10.10.30.89/sedesoq/assets/plugins/typeahead.js-master/zonales.json'
});

// passing in `null` for the `options` arguments will result in the default
// options being used
$('#prefetch .typeahead').typeahead(null, {
  name: 'zonales',
  source: zonales
});

// -------- Custom --------

var nflTeams = new Bloodhound({
  datumTokenizer: Bloodhound.tokenizers.obj.whitespace('team'),
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  identify: function(obj) { return obj.team; },
  prefetch: 'http://10.10.30.89/sedesoq/assets/plugins/typeahead.js-master/nfl.json'
});

function nflTeamsWithDefaults(q, sync) {
  if (q === '') {
    sync(nflTeams.get('Detroit Lions', 'Green Bay Packers', 'Chicago Bears'));
  }

  else {
    nflTeams.search(q, sync);
  }
}

$('#default-suggestions .typeahead').typeahead({
  minLength: 0,
  highlight: true
},
{
  name: 'nfl-teams',
  display: 'team',
  source: nflTeamsWithDefaults
});

// -------- Multiple --------

var nbaTeams = new Bloodhound({
  datumTokenizer: Bloodhound.tokenizers.obj.whitespace('team'),
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  prefetch: '../plugins/typeahead.js-master/nba.json'
});

var nhlTeams = new Bloodhound({
  datumTokenizer: Bloodhound.tokenizers.obj.whitespace('team'),
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  prefetch: 'http://10.10.30.89/sedesoq/assets/plugins/typeahead.js-master/nhl.json'
});

$('#multiple-datasets .typeahead').typeahead({
  highlight: true
},
{
  name: 'nba-teams',
  display: 'team',
  source: nbaTeams,
  templates: {
    header: '<h3 class="league-name">NBA Teams</h3>'
  }
},
{
  name: 'nhl-teams',
  display: 'team',
  source: nhlTeams,
  templates: {
    header: '<h3 class="league-name">NHL Teams</h3>'
  }
});

// -------- Scrollable --------



$('#scrollable-dropdown-menu .typeahead').typeahead(null, {
  name: 'states',
  limit: 10,
  source: states
});
