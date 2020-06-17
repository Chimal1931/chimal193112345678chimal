function insertaCedula(formulario, metodo) {
    // console.log(formulario);
    $.ajax({
        type: "POST",
        url: base_url + "index.php/cedulaHCH/" + metodo,
        data: $(formulario).serialize(),
        success: function (data) {
            //Muestra en el input el id de encuesta
            alert("Guardado!");
            $("#idEncuesta").val(data);
            //$(formulario)[0].reset();
            console.log(data);
            $('#myTab a[href="#hogar"]').tab('show');

        },
        error: function (data) {
            //console.log(data);
        }

    });
}
function actualizaCedula(formulario, metodo, num) {
    var nextTab = ['', 'ubicacion', 'hogar', 'integrantes', 'carenciaAlimentacion', 'carenciaSalud', 'carenciaSeguridad', 'carenciaVivienda', 'carenciaServicios', 'proyectosProductivos', 'percepcion', 'necesidades', 'cohesion', 'validaciones'];
    $.ajax({
        type: "POST",
        url: base_url + "index.php/cedulaHCH/" + metodo,
        data: $(formulario).serialize() + "&idEncuesta=" + $("#idEncuesta").val(),
        success: function (data) {
            alert("Guardado!");
            //$(formulario)[0].reset();
            $('#myTab a[href="#' + nextTab[num] + '"]').tab('show');
            console.log(data);
        },
        error: function (data) {
            //console.log(data);
        }

    });
}
function finalizaCedula(formulario, metodo) {
    
    $.ajax({
        type: "POST",
        url: base_url + "index.php/cedulaHCH/" + metodo,
        data: $(formulario).serialize() + "&idEncuesta=" + $("#idEncuesta").val(),
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
        url: base_url + "index.php/panelControl/insertPanelControl",
        data: {idEncuesta: $("#idEncuesta").val()},
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
        var metodo = "insertUbicacion";
        insertaCedula(form, metodo);
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
        actualizaCedula(form, metodo, 2);
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
        noTelefono: "required"

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
        noTelefono: "El campo es requerido."
    },
    submitHandler: function (form) {
        var metodo = "insertCaracteristicasHogar";
        actualizaCedula(form, metodo, 3);
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
                }

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
                }
    },
    submitHandler: function (form) {
        var metodo = "insertCarenciasSalud";
        actualizaCedula(form, metodo, 6);
    }
});
$("#frmcarenciaAlimentacion").validate({
    // Specify the validation rules
    errorClass: 'customErrorClass',
    rules: {
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
        p4_2_6: "Seleccione un registro."
    },
    submitHandler: function (form) {
        var metodo = "insertCarenciasAlimentacion";
        actualizaCedula(form, metodo, 5);
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
        p_6_1: "Seleccione un registro.",
        p_6_1_otro: "El campo es requerido.",
        p6_1_parentesco: "El campo es requerido.",
        p_6_2: "Seleccione un registro.",
        p_6_2_otro: "El campo es requerido.",
        p6_2_parentesco: "El campo es requerido.",
        p_6_3: "Seleccione un registro.",
        p_6_3_otro: "El campo es requerido.",
        p6_3_parentesco: "El campo es requerido."
    },
    submitHandler: function (form) {
        var metodo = "insertCarenciasSeguridadSocial";
        actualizaCedula(form, metodo, 7);
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
        actualizaCedula(form, metodo, 8);
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
        actualizaCedula(form, metodo, 9);
    }
});
$("#frmCohesion").validate({
    // Specify the validation rules
    errorClass: 'customErrorClass',
    rules: {
        p12_1_1: "required",
        p12_1_2: "required",
        p12_1_3: "required",
        p12_1_4: "required",
        p12_1_5: "required",
        p12_1_6: "required",
        nombreLider: "required",
        calificaLider: "required",
        nombreDelegado: "required",
        calificaDelegado: "required"
    },
    // Specify the validation error messages
    messages: {
        p12_1_1: "Seleccione un registro.",
        p12_1_2: "Seleccione un registro.",
        p12_1_3: "Seleccione un registro.",
        p12_1_4: "Seleccione un registro.",
        p12_1_5: "Seleccione un registro.",
        p12_1_6: "Seleccione un registro.",
        nombreLider: "El campo es requerido.",
        calificaLider: "Seleccione un registro.",
        nombreDelegado: "El campo es requerido.",
        calificaDelegado: "Seleccione un registro."
    },
    submitHandler: function (form) {
        var metodo = "insertCohesionSocial";
        actualizaCedula(form, metodo, 13);
    }
});
$("#frmProyectos").validate({
    // Specify the validation rules
    errorClass: 'customErrorClass',
    rules: {
        p9_1: "required",
        p9_3: "required",
        'p9_2': {
            required: true,
            minlength: 1
        }
    },
    // Specify the validation error messages
    messages: {
        p9_1: "Seleccione un registro.",
        p9_3: "El campo es requerido.",
        'p9_2': {
            required: "Seleccione al menos un registro.",
            minlength: "Seleccione por lo menos uno."
        }
    },
    submitHandler: function (form) {
        var metodo = "insertProyectosProductivos";
        actualizaCedula(form, metodo, 10);
    }
});
$("#frmNecesidades").validate({
    // Specify the validation rules
    errorClass: 'customErrorClass',
    rules: {
        'p11_1': {
            required: true,
            minlength: 5,
            maxlength: 5
        },
        p11_1_otro: "required"
    },
    // Specify the validation error messages
    messages: {
        'p11_1': {
            required: "Seleccione 5 opciones.",
            minlength: "Seleccione 5 opciones.",
            maxlength: "Debe seleccionar solo 5 opciones."
        },
        p11_1_otro: "El campo es requerido"


    },
    submitHandler: function (form) {
        var metodo = "insertNecesidades";
        actualizaCedula(form, metodo, 12);
    }
});
$("#frmValidaciones").validate({
    // Specify the validation rules
    errorClass: 'customErrorClass',
    rules: {
        'p13_1': {
            required: true,
            minlength: 1
        },
        valoracion: "required"
    },
    // Specify the validation error messages
    messages: {
        'p13_1': {
            required: "Seleccione al menos uno.",
            minlength: "Seleccione al menos uno."
        },
        valoracion: "El campo es obligatorio."

    },
    submitHandler: function (form) {
        var metodo = "insertValidaciones";
        finalizaCedula(form, metodo);
    }
});
$("#frmPercepcion").validate({
    // Specify the validation rules
    errorClass: 'customErrorClass',
    rules: {
        p10_1: "required",
        'p10_2': {
            required: true,
            minlength: 3,
            maxlength: 3
        },
        p10_3_1: "required",
        p10_3_2: "required",
        p10_3_3: "required",
        p10_4_1: "required",
        p10_4_2: "required",
        p10_4_3: "required",
        p10_4_4: "required",
        p10_4_5: "required",
        p10_4_6: "required",
        p10_4_7: "required",
        p10_4_8: "required",
        p10_4_9: "required",
        p10_4_10: "required",
        p10_4_11: "required",
        p10_4_12: "required",
        p10_5: "required",
        p10_6_1: "required",
        p10_6_2: "required",
        p10_6_3: "required",
        p10_6_4: "required",
        p10_6_5: "required",
        p10_6_6: "required",
        p10_7_1: "required",
        p10_7_2: "required",
        p10_7_3: "required",
        p10_7_4: "required",
        p10_7_5: "required",
        p10_7_6: "required"

    },
    // Specify the validation error messages
    messages: {
        p10_1: "Seleccione un registro.",
        'p10_2': {
            required: "Seleccione tres opciones.",
            minlength: "Seleccione tres opciones.",
            maxlength: "Seleccione tres opciones."
        },
        p10_3_1: "Seleccione un registro.",
        p10_3_2: "Seleccione un registro.",
        p10_3_3: "Seleccione un registro.",
        p10_4_1: "Seleccione un registro.",
        p10_4_2: "Seleccione un registro.",
        p10_4_3: "Seleccione un registro.",
        p10_4_4: "Seleccione un registro.",
        p10_4_5: "Seleccione un registro.",
        p10_4_6: "Seleccione un registro.",
        p10_4_7: "Seleccione un registro.",
        p10_4_8: "Seleccione un registro.",
        p10_4_9: "Seleccione un registro.",
        p10_4_10: "Seleccione un registro.",
        p10_4_11: "Seleccione un registro.",
        p10_4_12: "Seleccione un registro.",
        p10_5: "Seleccione un registro.",
        p10_6_1: "Seleccione un registro.",
        p10_6_2: "Seleccione un registro.",
        p10_6_3: "Seleccione un registro.",
        p10_6_4: "Seleccione un registro.",
        p10_6_5: "Seleccione un registro.",
        p10_6_6: "Seleccione un registro.",
        p10_7_1: "Seleccione un registro.",
        p10_7_2: "Seleccione un registro.",
        p10_7_3: "Seleccione un registro.",
        p10_7_4: "Seleccione un registro.",
        p10_7_5: "Seleccione un registro.",
        p10_7_6: "Seleccione un registro."
    },
    submitHandler: function (form) {
        var metodo = "insertSeguridadPublica";
        actualizaCedula(form, metodo, 11);
    }
});
$("#p2_1_7").change(function () {
    if ($("#p2_1_7").val() == "Si") {
        $("#noTelefono").prop('disabled', false);
        $("#noTelefono").val("");
    } else if ($("#p2_1_7").val() == "No") {
        $("#noTelefono").prop('disabled', true);
        $("#noTelefono").val("0");
    } else {
        $("#noTelefono").prop('disabled', true);
        $("#noTelefono").val("");
    }
});
$("#p2_1_9").change(function () {
    if ($("#p2_1_9").val() == "Si") {
        $("#p2_1_10").prop('disabled', false);
    } else if ($("#p2_1_9").val() == "No") {
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
$("#municipio").change(function () {
    if ($("#municipio").val() != 0)
    {
        $("#cveLocalidad").empty();
        $.ajax({
            type: "POST",
            url: base_url + "/index.php/cedulaHCH/getLocalidades",
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
    if ($("#p2_1_1").val() == "Otro") {
        $("#p2_1_1_otro").show();
        $("#p2_1_1_otro").val("");
    } else {
        $("#p2_1_1_otro").hide();
        $("#p2_1_1_otro").val("-");
    }
});
$("#p2_1_10").change(function () {
    if ($("#p2_1_10").val() == "Otro") {
        $("#p2_1_10_otro").show();
        $("#p2_1_10_otro").val("");
    } else {
        $("#p2_1_10_otro").hide();
        $("#p2_1_10_otro").val("-");
    }
});
$("#p7_2_1").change(function () {
    if ($("#p7_2_1").val() == "Si") {
        $("#p7_2_2").show();
        $("#p7_2_2").val("");
    } else {
        $("#p7_2_2").hide();
        $("#p7_2_2").val("0");
    }
});
$("#p7_4_1").change(function () {
    if ($("#p7_4_1").val() == "Si") {
        $("#p7_4_2").show();
        $("#p7_4_2").val("");
    } else {
        $("#p7_4_2").hide();
        $("#p7_4_2").val("0");
    }
});
$("#p7_6_1").change(function () {
    if ($("#p7_6_1").val() == "Si") {
        $("#p7_6_2").show();
        $("#p7_6_2").val("");
    } else {
        $("#p7_6_2").hide();
        $("#p7_6_2").val("0");
    }
});
$("#p8_5").change(function () {
    if ($("#p8_5").val() == "Si") {
        $("#p8_6").prop('disabled', false);
    } else {
        $("#p8_6").prop('disabled', true);
    }
});
$("#p8_7").change(function () {
    if ($("#p8_7").val() != "Leña o carbón") {
        $("#p8_8").prop('disabled', true);
    } else {
        $("#p8_8").prop('disabled', false);
    }
});
$("#p9_1").change(function () {
    if ($("#p9_1").val() != "Si") {
        $("#opciones").hide();
    } else {
        $("#opciones").show();
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
function showInputProyecto()
{
    var visible = $("#p9_3").is(":hidden");
    if (visible === true)
    {
        $("#p9_3").show();
        $("#p9_3").val("");
    } else
    {
        $("#p9_3").hide();
        $("#p9_3").val("-");
    }
}
function showOtroNec()
{
    var visible = $("#p11_1_otro").is(":hidden");
    if (visible === true)
    {
        $("#p11_1_otro").show();
        $("#p11_1_otro").val("");
    } else
    {
        $("#p11_1_otro").hide();
        $("#p11_1_otro").val("-");
    }
}
$("#p6_1").change(function () {
    if ($("#p6_1").val() == "Ninguno") {
        $("#p6_1_parentesco").prop('disabled', true);
    }
    else
    {
         $("#p6_1_parentesco").prop('disabled', false);
    }
});
$("#p6_2").change(function () {
    if ($("#p6_2").val() == "Ninguno") {
        $("#p6_2_parentesco").prop('disabled', true);
    }
    else
    {
         $("#p6_2_parentesco").prop('disabled', false);
    }
});
$("#p6_3").change(function () {
    if ($("#p6_3").val() == "Ninguno") {
        $("#p6_3_parentesco").prop('disabled', true);
    }
    else
    {
         $("#p6_3_parentesco").prop('disabled', false);
    }
});
function mostrarSig()
{
    $('#myTab a[href="#carenciaAlimentacion"]').trigger('click');
}