 var nextTab = ['', 'ubicacion', 'hogar', 'integrantes', 'carenciaAlimentacion', 'carenciaSalud', 'carenciaSeguridad', 'carenciaVivienda', 'carenciaServicios', 'percepcion', 'necesidades', 'cohesion', 'imagenes'];
function insertaCenso(formulario, metodo) {
    // console.log(formulario);
    $.ajax({
        type: "POST",
        url: base_url + "index.php/CedulaCenso/" + metodo,
        data: $(formulario).serialize(),
        success: function (data) {
            //Muestra en el input el id de encuesta
            alert("Guardado!");
            $("#idCenso").val(data);
            console.log(data);
            $('#myTab a[href="#hogar"]').tab('show');
            $("#tab2").removeClass('disabled disabledTab');
        },
        error: function (data) {
            console.log(data);
        }

    });
}
function actualizaCenso(formulario, metodo, num) {
    $.ajax({
        type: "POST",
        url: base_url + "index.php/CedulaCenso/" + metodo,
        data: $(formulario).serialize() + "&idCenso=" + $("#idCenso").val(),
        success: function (data) {
            alert("Guardado!");
            //$(formulario)[0].reset();
            if (num == 12)
            {
                $('#iframeImagenes').prop('src', base_url + 'index.php/CedulaCenso/insertaImagenes/edit/' + $("#idCenso").val());
            }
            $('#myTab a[href="#' + nextTab[num] + '"]').tab('show');
            $("#tab" + num).removeClass('disabled disabledTab');
            console.log(data);
        },
        error: function (data) {
            //console.log(data);
        }

    });
}
function finalizaCenso() {

    $.ajax({
        type: "POST",
        url: base_url + "index.php/CedulaCenso/finaliza",
        data: {formActual: 13, idCenso: $("#idCenso").val()},
        success: function (data) {
            alert("Guardado!");
            console.log(data);
            //Inserta en tabla panel de control
            insertaPanelControl();
        },
        error: function (data) {
            //console.log(data);
        }

    });
}
function insertaPanelControl() {
    $.ajax({
        type: "POST",
        url: base_url + "index.php/censoApp/insertPanelControl/"+$("#idCenso").val(),
       // data: {idEncuesta: $("#idCenso").val()},
        success: function (data) {
            console.log(data);

        },
        error: function (data) {
            console.log(data);
        }

    });
}
//Formulario Ubicación greográfica
$("#frmUbicacion").validate({
    // Specify the validation rules
    errorClass: 'customErrorClass',
    rules: {
        entidad: "required",
        municipio: "required",
        cveLocalidad: "required",
        localidad: "required",
        calle: "required",
        numext: "required",
        codpost: {
            required: true,
            maxlength: 5
        },
        colonia: "required",
        referencia: "required",
        programa: "required",
        organizacion: "required",
        delegacion: "required"
    },
    // Specify the validation error messages
    messages: {
        entidad: "El campo es requerido.",
        municipio: "Seleccione un municipio.",
        cveLocalidad: "Seleccione una localidad.",
        localidad: "El campo es requerido.",
        calle: "El campo es requerido.",
        numext: "El campo es requerido.",
        codpost: {
            required: "El campo es requerido.",
            maxlength: "Máximo 5 caracteres."
        },
        colonia: "El campo es requerido.",
        referencia: "El campo es requerido.",
        programa: "Seleccione un programa.",
        organizacion: "Seleccione una organización.",
        delegacion: "El campo es requerido."
    },
    submitHandler: function (form) {
        var metodo = "insertUbicacion";
        var idActual = $("#idCenso").val();
        if (idActual == 0)
        {
            insertaCenso(form, metodo);
        } else
        {
            var metodo = "insertUbicacionEdit";
            actualizaCenso(form, metodo, 2);
        }
    }
});
//Formualario ubicacion, para editar los datos
$("#frmUbicacionEdit").validate({
    // Specify the validation rules
    errorClass: 'customErrorClass',
    rules: {
        entidad: "required",
        municipio: "required",
        cveLocalidad: "required",
        localidad: "required",
        calle: "required",
        numext: "required",
        codpost: "required",
        colonia: "required",
        referencia: "required",
        programa: "required",
        organizacion: "required",
    },
    // Specify the validation error messages
    messages: {
        entidad: "El campo es requerido.",
        municipio: "Seleccione un municipio.",
        cveLocalidad: "Seleccione una localidad.",
        localidad: "El campo es requerido.",
        calle: "El campo es requerido.",
        numext: "El campo es requerido.",
        codpost: "El campo es requerido.",
        colonia: "El campo es requerido.",
        referencia: "El campo es requerido.",
        programa: "Seleccione un programa.",
        organizacion: "Seleccione una organización."

    },
    submitHandler: function (form) {
        var metodo = "insertUbicacionEdit";
        actualizaCenso(form, metodo, 2);
    }
});
//Formulario identificación y caracteristicas del hogar
$("#frmHogar").validate({
    // Specify the validation rules
    errorClass: 'customErrorClass',
    rules: {
        p2_1_1: "required",
        p2_1_1_otro: "required",
        p2_1_2: "required",
        p2_1_3: "required",
        p2_1_4: "required",
        p2_1_5: "required",
        p2_1_6: "required",
        p2_1_7: "required",
        p2_1_8: "required",
        p2_1_9: "required",
        p2_1_10: "required",
        p2_1_10_otro: "required",
        noTelefono: "required",
        tipo: "required",
        'p8': {
            required: true,
            minlength: 1
        }

    },
    // Specify the validation error messages
    messages: {
        p2_1_1: "Seleccione un registro.",
        p2_1_1_otro: "El campo es requerido.",
        p2_1_2: "Seleccione un registro.",
        p2_1_3: "El campo es requerido.",
        p2_1_4: "El campo es requerido.",
        p2_1_5: "Seleccione un registro.",
        p2_1_6: "El campo es requerido.",
        p2_1_7: "Seleccione un registro.",
        p2_1_8: "Seleccione un registro.",
        p2_1_9: "Seleccione un registro.",
        p2_1_10: "Seleccione un registro.",
        p2_1_10_otro: "El campo es requerido.",
        noTelefono: "El campo es requerido.",
        tipo: "Seleccione un registro.",
        'p8': {
            required: "Seleccione al menos un registro.",
            minlength: "Seleccione por lo menos uno."
        }
    },
    submitHandler: function (form) {
        var metodo = "insertCaracteristicasHogar";
        actualizaCenso(form, metodo, 3);
    }
});
$("#frmIntegrantes").validate({
    // Specify the validation rules
    errorClass: 'customErrorClass',
    rules: {
        aPaterno: "required",
        nombre: "required",
        fechaNac: "required",
        entNac: "required",
        sexo: "required",
        pTieneHijos: "required",
        pCuantos: "required",
        p15: "required",
        p16: "required",
        p17: "required",
        p18: "required",
        p19: "required",
        p20: "required",
        p21: "required",
        p22: "required",
        p23: "required",
        p24: "required",
        p25: "required",
        p26: "required",
        p27: "required",
        p28: "required",
        p29: "required",
        p30: "required"
    },
    // Specify the validation error messages
    messages: {
        aPaterno: "El campo es requerido",
        nombre: "El campo es requerido",
        fechaNac: "El campo es requerido",
        entNac: "El campo es requerido",
        pTieneHijos: "El campo es requerido",
        pCuantos: "El campo es requerido",
        sexo: "El campo es requerido",
        p15: "El campo es requerido",
        p16: "El campo es requerido",
        p17: "El campo es requerido",
        p18: "El campo es requerido",
        p19: "El campo es requerido",
        p20: "El campo es requerido",
        p21: "El campo es requerido",
        p22: "El campo es requerido",
        p23: "El campo es requerido",
        p24: "El campo es requerido",
        p25: "El campo es requerido",
        p26: "El campo es requerido",
        p27: "El campo es requerido",
        p28: "El campo es requerido",
        p29: "El campo es requerido",
        p30: "El campo es requerido"
    },
    submitHandler: function (form) {
        var metodo = "insertIntegrantes";
        actualizaCenso(form, metodo, 4);
    }
});
$("#frmCarenciaSalud").validate({
    // Specify the validation rules
    errorClass: 'customErrorClass',
    rules: {
        'p5_2': {
            required: true,
            minlength: 1
        },
        'p5_1': {
            required: true,
            minlength: 1
        },
        'p5_2_otro':
                {
                    required: true,
                },
        'p5_3': {
            required: true,
            minlength: 1
        },
        p5_4: "required",
        p5_5: "required",
        p5_5_otro: "required",
        p5_3_otro: "required"

    },
    // Specify the validation error messages
    messages: {
        'p5_2': {
            required: "Seleccione al menos un registro.",
            minlength: "Seleccione por lo menos uno."
        },
        'p5_1': {
            required: "Seleccione al menos un registro.",
            minlength: "Seleccione por lo menos uno."
        },
        'p5_2_otro':
                {
                    required: "El campo es obligatorio.",
                },
        'p5_3': {
            required: "Seleccione al menos un registro.",
            minlength: "Seleccione por lo menos uno."
        },
        p5_4: "Seleccione un registro.",
        p5_5: "Seleccione un registro.",
        p5_3_otro: "El campo es requerido.",
        p5_5_otro: "El campo es requerido."
    },
    submitHandler: function (form) {
        var metodo = "insertCarenciasSalud";
        actualizaCenso(form, metodo, 6);
    }
});
$("#frmcarenciaAlimentacion").validate({
    // Specify the validation rules
    errorClass: 'customErrorClass',
    rules: {
        p4_1_comidas: "required",
        p4_1_cantidad: "required",
        p4_1_1: "required",
        p4_1_2: "required",
        p4_1_3: "required",
        p4_1_4: "required",
        p4_1_5: "required",
        p4_1_6: "required",
        p4_2_1: "required",
        p4_2_2: "required",
        p4_2_3: "required",
        p4_2_4: "required",
        p4_2_5: "required",
        p4_2_6: "required"
    },
    // Specify the validation error messages
    messages: {
        p4_1_1: "Seleccione un registro.",
        p4_1_2: "Seleccione un registro.",
        p4_1_3: "Seleccione un registro.",
        p4_1_4: "Seleccione un registro.",
        p4_1_5: "Seleccione un registro.",
        p4_1_6: "Seleccione un registro.",
        p4_2_1: "Seleccione un registro.",
        p4_2_2: "Seleccione un registro.",
        p4_2_3: "Seleccione un registro.",
        p4_2_4: "Seleccione un registro.",
        p4_2_5: "Seleccione un registro.",
        p4_2_6: "Seleccione un registro.",
        p4_1_comidas: "Seleccione un registro.",
        p4_1_cantidad: "Campo requerido.",
    },
    submitHandler: function (form) {
        var metodo = "insertCarenciasAlimentacion";
        actualizaCenso(form, metodo, 5);
    }
});
$("#frmCarenciaSeguridad").validate({
    // Specify the validation rules
    errorClass: 'customErrorClass',
    rules: {
        p6_1: "required",
        p6_1_otro: "required",
        p6_1_parentesco: "required",
        p6_2: "required",
        p6_2_otro: "required",
        p6_2_parentesco: "required",
        p6_3: "required",
        p6_3_otro: "required",
        p6_3_parentesco: "required"
    },
    // Specify the validation error messages
    messages: {
        p6_1: "Seleccione un registro.",
        p6_1_otro: "El campo es requerido.",
        p6_1_parentesco: "Seleccione un registro.",
        p6_2: "Seleccione un registro.",
        p6_2_otro: "El campo es requerido.",
        p6_2_parentesco: "Seleccione un registro.",
        p6_3: "Seleccione un registro.",
        p6_3_otro: "El campo es requerido.",
        p6_3_parentesco: "Seleccione un registro."
    },
    submitHandler: function (form) {
        var metodo = "insertCarenciasSeguridadSocial";
        actualizaCenso(form, metodo, 7);
    }
});
$("#frmCarenciaSeguridad select").change(function () {
    if ($(this).val() == "Otro") {
        $(this).parent().find('input[type=text]').show();
        $(this).parent().find('input[type=text]').val("");
    } else {
        $(this).parent().find('input[type=text]').hide();
        $(this).parent().find('input[type=text]').val("-");
    }
});
$("#frmCarenciaVivienda").validate({
    // Specify the validation rules
    errorClass: 'customErrorClass',
    rules: {
        p7_1: "required",
        p7_2_1: "required",
        p7_2_2: "required",
        p7_3: "required",
        p7_4_1: "required",
        p7_4_2: "required",
        p7_5: "required",
        p7_6_1: "required",
        p7_6_2: "required",
        p7_7: "required"
    },
    // Specify the validation error messages
    messages: {
        p7_1: "Seleccione un registro.",
        p7_2_1: "Seleccione un registro.",
        p7_2_2: "El campo es requerido.",
        p7_3: "Seleccione un registro.",
        p7_4_1: "Seleccione un registro.",
        p7_4_2: "El campo es requerido.",
        p7_5: "Seleccione un registro.",
        p7_6_1: "Seleccione un registro.",
        p7_6_2: "El campo es requerido.",
        p7_7: "Seleccione un registro."
    },
    submitHandler: function (form) {
        var metodo = "insertCarenciasVivienda";
        actualizaCenso(form, metodo, 8);
    }
});
$("#frmCarenciaServicios").validate({
    // Specify the validation rules
    errorClass: 'customErrorClass',
    rules: {
        p8_1: "required",
        p8_2: "required",
        p8_3: "required",
        p8_4: "required",
        p8_5: "required",
        p8_6: "required",
        p8_7: "required",
        p8_8: "required"
    },
    // Specify the validation error messages
    messages: {
        p8_1: "Seleccione un registro.",
        p8_2: "Seleccione un registro.",
        p8_3: "Seleccione un registro.",
        p8_4: "Seleccione un registro.",
        p8_5: "Seleccione un registro.",
        p8_6: "Seleccione un registro.",
        p8_7: "Seleccione un registro.",
        p8_8: "Seleccione un registro."
    },
    submitHandler: function (form) {
        var metodo = "insertCarenciasServicios";
        actualizaCenso(form, metodo, 9);
    }
});
$("#frmCohesion").validate({
    // Specify the validation rules
    errorClass: 'customErrorClass',
    rules: {
//        nombreLider1: "required",
//        calificaLider1: "required",
//        nombreLider2: "required",
//        calificaLider2: "required",
//        nombreLider3: "required",
//        calificaLider3: "required",
//        nombreDelegado: "required",
//        calificaDelegado: "required"
    },
    // Specify the validation error messages
    messages: {
//        nombreLider1: "El campo es requerido.",
//        calificaLider1: "Seleccione un registro.",
//        nombreLider2: "El campo es requerido.",
//        calificaLider2: "Seleccione un registro.",
//        nombreLider3: "El campo es requerido.",
//        calificaLider3: "Seleccione un registro.",
//        nombreDelegado: "El campo es requerido.",
//        calificaDelegado: "Seleccione un registro."
    },
    submitHandler: function (form) {
        var metodo = "insertCohesionSocial";
        actualizaCenso(form, metodo, 12);
    }
});
$("#frmNecesidades").validate({
    // Specify the validation rules
    errorClass: 'customErrorClass',
    rules: {
        'p10_1': {
            required: true,
            minlength: 5,
            maxlength: 5
        },
        p10_1_otro: "required"
    },
    // Specify the validation error messages
    messages: {
        'p10_1': {
            required: "Seleccione 5 opciones.",
            minlength: "Seleccione 5 opciones.",
            maxlength: "Debe seleccionar solo 5 opciones."
        },
        p10_1_otro: "El campo es requerido"


    },
    submitHandler: function (form) {
        var metodo = "insertNecesidades";
        actualizaCenso(form, metodo, 11);
    }
});
//$("#frmValidaciones").validate({
//    // Specify the validation rules
//    errorClass: 'customErrorClass',
//    rules: {
//        'p12_1': {
//            required: true,
//            minlength: 1
//        },
//        valoracion: "required"
//    },
//    // Specify the validation error messages
//    messages: {
//        'p12_1': {
//            required: "Seleccione al menos uno.",
//            minlength: "Seleccione al menos uno."
//        },
//        valoracion: "El campo es obligatorio."
//
//    },
//    submitHandler: function (form) {
//        var metodo = "insertValidaciones";
//        actualizaCenso(form, metodo, 13);
//    }
//});
//$("#frmValidacionesEdit").validate({
//    // Specify the validation rules
//    errorClass: 'customErrorClass',
//    rules: {
//        'p13_1': {
//            required: true,
//            minlength: 1
//        },
//        valoracion: "required"
//    },
//    // Specify the validation error messages
//    messages: {
//        'p13_1': {
//            required: "Seleccione al menos uno.",
//            minlength: "Seleccione al menos uno."
//        },
//        valoracion: "El campo es obligatorio."
//
//    },
//    submitHandler: function (form) {
//        var metodo = "insertValidaciones";
//        actualizaCenso(form, metodo, 14);
//    }
//});
$("#frmPercepcion").validate({
    // Specify the validation rules
    errorClass: 'customErrorClass',
    rules: {
        p9_1: "required",
        'p9_2': {
            required: true,
            minlength: 3,
            maxlength: 3
        },
        p9_2_otro: "required",
        'p9_4': {
            required: true,
            minlength: 1
        },
        p9_3_1: "required",
        p9_3_2: "required",
        p9_3_3: "required",
    },
    // Specify the validation error messages
    messages: {
        p9_1: "Seleccione un registro.",
        p9_2_otro: "El campo es requerido.",
        'p9_2': {
            required: "Seleccione tres opciones.",
            minlength: "Seleccione tres opciones.",
            maxlength: "Seleccione tres opciones."
        },
        'p9_4': {
            required: "Seleccione al menos uno.",
            minlength: "Seleccione al menos uno."
        },
        p9_3_1: "Seleccione un registro.",
        p9_3_2: "Seleccione un registro.",
        p9_3_3: "Seleccione un registro.",
    },
    submitHandler: function (form) {
        var metodo = "insertSeguridadPublica";
        actualizaCenso(form, metodo, 10);
    }
});
$("#p2_1_7").change(function () {
    if ($("#p2_1_7").val() == "1") {
        $("#noTelefono").prop('disabled', false);
        $("#noTelefono").val("");
        $("#tipo").prop('disabled', false);
        $("#tipo").val("");
    } else if ($("#p2_1_7").val() == "2") {
        $("#noTelefono").prop('disabled', true);
        $("#noTelefono").val("0");
        $("#tipo").prop('disabled', true);
        $("#tipo").val("");
    } else {
        $("#noTelefono").prop('disabled', true);
        $("#noTelefono").val("");
        $("#tipo").prop('disabled', true);
        $("#tipo").val("");
    }
});
$("#p2_1_9").change(function () {
    if ($("#p2_1_9").val() == "1") {
        $("#p2_1_10").prop('disabled', false);
    } else if ($("#p2_1_9").val() == "2") {
        $("#p2_1_10").prop('disabled', true);
        $("#p2_1_10").val("");

        $("#p2_1_10_otro").hide();
        $("#p2_1_10_otro").val("-");
    } else {
        $("#p2_1_10").prop('disabled', true);
        $("#p2_1_10").val("");

        $("#p2_1_10_otro").hide();
        $("#p2_1_10_otro").val("-");
    }
});
$('input[type=checkbox].form5').on("change", function () {
    var target = $(this).parent().find('input[type=hidden]').val();
    if (target == 0)
    {
        target = 1;
    } else
    {
        target = 0;
    }
    $(this).parent().find('input[type=hidden]').val(target);
});
$("#p5_4").change(function () {
    if ($("#p5_4").val() == "1") {
        $("#p5_5").prop('disabled', false);
        $("#p5_5").val("");
    } else if ($("#p5_4").val() == "2") {
        $("#p5_5").prop('disabled', true);
        $("#p5_5").val("");
    } else {
        $("#p5_5").prop('disabled', true);
        $("#p5_5").val("");
    }
});
$("#p4_1_comidas").change(function () {
    if ($("#p4_1_comidas").val() == "a") {
        $("#totalComidas").show();
        $("#totalComidas").val("");
    } else {
        $("#totalComidas").hide();
        $("#totalComidas").val("0");
    }
});
$("#municipio").change(function () {
    if ($("#municipio").val() != 0)
    {
        $("#cveLocalidad").empty();
        $.ajax({
            type: "POST",
            url: base_url + "/index.php/CedulaCenso/getLocalidades",
            data: {cveMunicipio: $("#municipio").val()},
            success: function (data) {
                var obj = $.parseJSON(data);
                $.each(obj, function () {
                    $("#cveLocalidad").append('<option value="' + this['LOC'] + '">' + this['NOM_LOC'] + '</option>');
                });
                $("#cveLocalidad").append('<option value="-1">Otro</option>');

                $("#localidad").val($('select[name=cveLocalidad] option:selected').text());
            }
        });
    } else
    {
        $('#cveLocalidad').empty();
    }
});
$("#fechaNac").change(function () {
    //Se calcula la edad
    var edad =obtenerEdad($("#fechaNac").val());
    $("#edad").val(edad);
});


$("#municipio").change(function () {
    if ($("#municipio").val() != 0)
    {
        $("#cveLocalidad").empty();
        $.ajax({
            type: "POST",
            url: base_url + "/index.php/CedulaCenso/getLocalidades",
            data: {cveMunicipio: $("#municipio").val()},
            success: function (data) {
                var obj = $.parseJSON(data);
                $.each(obj, function () {
                    $("#cveLocalidad").append('<option value="' + this['ID_CTRL'] + '">' + this['LOCALIDAD'] + '</option>');
                });
                $("#cveLocalidad").append('<option value="-1">Otro</option>');

                $("#localidad").val($('select[name=cveLocalidad] option:selected').text());
            }
        });
    } else
    {
        $('#cveLocalidad').empty();
    }
});
$("#cveLocalidad").change(function () {

    if ($("#cveLocalidad").val() == -1)
    {
        //Se muestra el campo para que ingresen la localidad
        $("#localidad").show();
        $("#localidad").val("");
    } else
    {
        $("#localidad").val($('select[name=cveLocalidad] option:selected').text());
        $("#localidad").hide();
    }
});

$("#p2_1_1").change(function () {
    if ($("#p2_1_1").val() == '8') {
        $("#p2_1_1_otro").show();
        $("#p2_1_1_otro").val("");
    } else {
        $("#p2_1_1_otro").hide();
        $("#p2_1_1_otro").val("-");
    }
});
$("#p2_1_10").change(function () {
    if ($("#p2_1_10").val() == "4") {
        $("#p2_1_10_otro").show();
        $("#p2_1_10_otro").val("");
    } else {
        $("#p2_1_10_otro").hide();
        $("#p2_1_10_otro").val("-");
    }
});
$("#p5_3").change(function () {
    $("#p5_3_otro").hide();
    $("#p5_3_otro").val("");
     $("#p5_4").val("");
        $("#p5_5").val("");
    if ($("#p5_3").val() == "13") {
        $("#p5_4").prop('disabled', true);
        $("#p5_5").prop('disabled', true);
    } else {
         $("#p5_4").prop('disabled', false);
        $("#p5_5").prop('disabled', false);
    }
    if ($("#p5_3").val() == "12") {
        $("#p5_3_otro").show();
    } else {
         $("#p5_3_otro").hide();
    }
});
$("#p5_5").change(function () {
    if ($("#p5_5").val() == "g") {
        $("#p5_5_otro").show();
        $("#p5_5_otro").val("");
    } else {
        $("#p5_5_otro").hide();
        $("#p5_5_otro").val("-");
    }
});
$("#p7_2_1").change(function () {
    if ($("#p7_2_1").val() == "1") {
        $("#p7_2_2").show();
        $("#p7_2_2").val("");
    } else {
        $("#p7_2_2").hide();
        $("#p7_2_2").val("0");
    }
});
$("#p7_4_1").change(function () {
    if ($("#p7_4_1").val() == "1") {
        $("#p7_4_2").show();
        $("#p7_4_2").val("");
    } else {
        $("#p7_4_2").hide();
        $("#p7_4_2").val("0");
    }
});
$("#p7_6_1").change(function () {
    if ($("#p7_6_1").val() == "1") {
        $("#p7_6_2").show();
        $("#p7_6_2").val("");
    } else {
        $("#p7_6_2").hide();
        $("#p7_6_2").val("0");
    }
});
$("#p8_6").change(function () {
    $("#p8_7").val("");
    if (($("#p8_6").val() == "1") || ($("#p8_6").val() == "2")) {
        $("#p8_7").prop('disabled', false);
    } else {
        $("#p8_7").prop('disabled', true);
    }
});

function showInput()
{
    var visible = $("#p5_2_otro").is(":hidden");
    if (visible === true)
    {
        $("#p5_2_otro").show();
        $("#p5_2_otro").val("");
    } else
    {
        $("#p5_2_otro").hide();
        $("#p5_2_otro").val("-");
    }
}
function showOtro56()
{
    var visible = $("#p9_2_otro").is(":hidden");
    if (visible === true)
    {
        $("#p9_2_otro").show();
        $("#p9_2_otro").val("");
    } else
    {
        $("#p9_2_otro").hide();
        $("#p9_2_otro").val("-");
    }
}
function showOtroNec()
{
    var visible = $("#p10_1_otro").is(":hidden");
    if (visible === true)
    {
        $("#p10_1_otro").show();
        $("#p10_1_otro").val("");
    } else
    {
        $("#p10_1_otro").hide();
        $("#p10_1_otro").val("-");
    }
}
function showInput5()
{
    var visible = $("#p5_3_otro").is(":hidden");
    if (visible === true)
    {
        $("#p5_3_otro").show();
        $("#p5_3_otro").val("");
    } else
    {
        $("#p5_3_otro").hide();
        $("#p5_3_otro").val("-");
    }
}
$("#p6_1").change(function () {
    if ($("#p6_1").val() == "8") {
        $("#p6_1_parentesco option[value='']").attr('selected', 'selected');
        $("#p6_1_parentesco").prop('disabled', true);
    } else
    {
        $("#p6_1_parentesco").prop('disabled', false);
    }
    if ($("#p6_1").val() == "7") {
        $("#p6_1_otro").show();
        $("#p6_1_otro").val("");
    } else
    {
        $("#p6_1_otro").hide();
        $("#p6_1_otro").val("-");
    }
});
$("#p6_2").change(function () {
    if ($("#p6_2").val() == "5") {
        $("#p6_2_parentesco option[value='']").attr('selected', 'selected');
        $("#p6_2_parentesco").prop('disabled', true);
    } else
    {
        $("#p6_2_parentesco").prop('disabled', false);
    }
    if ($("#p6_2").val() == "4") {
        $("#p6_2_otro").show();
        $("#p6_2_otro").val("");
    } else
    {
        $("#p6_2_otro").hide();
        $("#p6_2_otro").val("-");
    }
});
$("#p4_1_comidas").change(function () {
    if ($("#p4_1_comidas").val() == "a") {
        $("#p4_1_cantidad").show();
    } else
    {
         $("#p4_1_cantidad").hide();
    }
});
$("#p6_3").change(function () {
    if ($("#p6_3").val() == "5") {
        $("#p6_3_parentesco option[value='']").attr('selected', 'selected');
        $("#p6_3_parentesco").prop('disabled', true);
    } else
    {
        $("#p6_3_parentesco").prop('disabled', false);
    }
    if ($("#p6_3").val() == "4") {
        $("#p6_3_otro").show();
        $("#p6_3_otro").val("");
    } else
    {
        $("#p6_3_otro").hide();
        $("#p6_3_otro").val("-");
    }
});

//Integrantes hogar
 $("#p17").change(function () {
     $("#p18").val("");
  if ($("#p17").val() == "8")
  {
                                    $("#p18").prop('disabled', true);
                                    $("#pTipoAtencion").prop('disabled', true);
                                }
                                else
                                {
                                    $("#p18").prop('disabled', false);
                                    $("#pTipoAtencion").prop('disabled', true);
                                }
                            });
                            $("#p18").change(function () {
                                  $("#pTipoAtencion").val("");
                                if ($("#p18").val() == "1")
                                    $("#pTipoAtencion").prop('disabled', false);
                                else
                                    $("#pTipoAtencion").prop('disabled', true);
                            });
                             $("#p19").change(function () {
                                  $("#curp").val("");
                                if ($("#p19").val() == "1")
                                    $("#curp").prop('disabled', false);
                                else
                                    $("#curp").prop('disabled', true);
                            });
                             $("#p21").change(function () {
                                  $("#cualLengua").val("");
                                if ($("#p21").val() == "0")
                                    $("#cualLengua").prop('disabled', true);
                                else
                                    $("#cualLengua").prop('disabled', false);
                            });
                             $("#p23").change(function () {
                                  $("#p24").val("");
                                   $("#p25").val("");
                                    $("#p26").val("");
                                if ($("#p23").val() == "0")
                                {
                                    $("#p24").prop('disabled', true);
                                    $("#p25").prop('disabled', true);
                                    $("#p26").prop('disabled', true);
                                } else
                                {
                                    $("#p24").prop('disabled', false);
                                    $("#p25").prop('disabled', false);
                                    $("#p26").prop('disabled', false);
                                }
                            });
                             $("#p25").change(function () {
                                  $("#p26").val("");
                             if ($("#p25").val() == "0")
                                         $("#p26").prop('disabled', true);
                                     else
                                          $("#p26").prop('disabled', false);
                                  });
                             $("#p28").change(function () {
                                  $("#p29").val("");
                                   $("#p30").val("");
                                if ($("#p28").val() == "0")
                                {
                                    $("#p29").prop('disabled', true);
                                    $("#p30").prop('disabled', true);
                                } else
                                {
                                    $("#p29").prop('disabled', false);
                                    $("#p30").prop('disabled', false);
                                }
                            });
                            $("#p29").change(function () {
                                 $("#p30").val("");
                             if ($("#p29").val() == "0")
                                        $("#p30").prop('disabled', true);
                                    else
                                        $("#p30").prop('disabled', false);
                                });
                                $("#sexo").change(function () {
                                 $("#pTieneHijos").val("");
                                 $("#pCuantos").val("");
                                 $("#pCuantos").val("");
                                if (($("#sexo").val() == "2") && ($("#edad").val() >= "10") && ($("#edad").val() <= "19"))
                                {
                                    $("#pTieneHijos").prop('disabled', false);
                                    $("#pCuantos").prop('disabled', false);

                                } else
                                {
                                    $("#pTieneHijos").prop('disabled', true);
                                    $("#pCuantos").prop('disabled', true);
                                }
                            })
                             $("#edad").change(function () {
                                 $("#pTieneHijos").val("");
                                 $("#pCuantos").val("");
                                 $("#pCuantos").val("");
                                if (($("#sexo").val() == "2") && ($("#edad").val() >= "10") && ($("#edad").val() <= "19"))
                                {
                                    $("#pTieneHijos").prop('disabled', false);
                                    $("#pCuantos").prop('disabled', false);

                                } else
                                {
                                    $("#pTieneHijos").prop('disabled', true);
                                    $("#pCuantos").prop('disabled', true);
                                }
                            });
                             $("#pTieneHijos").change(function () {
                                 $("#pCuantos").val("");
                             if ($("#pTieneHijos").val() == "1")
                                        $("#pCuantos").prop('disabled', false);
                                    else
                                        $("#pCuantos").prop('disabled', true);
                                });
                                $("#p18").change(function () {
                                    $("#pTipoAtencion").val("");
                                if ($("#p18").val() == "0")
                                    $("#pTipoAtencion").prop('disabled', true);
                                else
                                    $("#pTipoAtencion").prop('disabled', false);
                            });
function mostrarSig(num)
{
  // $('#myTab a[href="#carenciaAlimentacion"]').trigger('click');
    $('#myTab a[href="#' + nextTab[num] + '"]').tab('show');
}
function obtenerEdad(fechaNac)
{
    //alert(fechaNac);
    //Se separa la fecha de nac en anño, mes y dia
    var values = fechaNac.split("-");
    var dia = values[2];
    var mes = values[1];
    var ano = values[0];

    // Se obtiene el año, mes y dia actual
    var fecha_hoy = new Date();
    var anio_actual = fecha_hoy.getYear();
    var mes_actual = fecha_hoy.getMonth() + 1;
    var dia_actual = fecha_hoy.getDate();

    // realizamos el calculo
    var edad = (anio_actual + 1900) - ano;
    if (mes_actual < mes)
    {
        edad--;
    }
    if ((mes == mes_actual) && (dia_actual < dia))
    {
        edad--;
    }
    if (edad > 1900)
    {
        edad -= 1900;
    }

    return edad;
}
