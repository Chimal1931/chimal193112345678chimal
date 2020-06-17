$(".tab-wizard").steps({
    headerTag: "h6"
    , bodyTag: "section"
    , transitionEffect: "fade"
    , titleTemplate: '<span class="step">#index#</span> #title#'
    , labels: {
        finish: "Guardar"
    }
    , onFinished: function (event, currentIndex) {
       swal("Form Submitted!", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lorem erat eleifend ex semper, lobortis purus sed.");

    }
});


/*var form = $(".validation-wizard").show();

$(".validation-wizard").steps({
    headerTag: "h6"
    , bodyTag: "section"
    , transitionEffect: "fade"
    , titleTemplate: '<span class="step">#index#</span> #title#'
    , labels: {
        finish: "Guardar"
    }
    , onStepChanging: function (event, currentIndex, newIndex) {
      console.log("onStepChanging");
        return currentIndex > newIndex || !(3 === newIndex && Number($("#age-2").val()) < 18) && (currentIndex < newIndex && (form.find(".body:eq(" + newIndex + ") label.error").remove(), form.find(".body:eq(" + newIndex + ") .error").removeClass("error")), form.validate().settings.ignore = ":disabled,:hidden", form.valid())
    }
    , onFinishing: function (event, currentIndex) {
      console.log("onFinishing");
        return form.validate().settings.ignore = ":disabled", form.valid()
    }
    , onFinished: function (event, currentIndex) {
      console.log("onFinished");
         var formData = new FormData($('.validation-wizard')[0]);
         $.ajax({
           url: base_url + 'index.php/Personal/altaPersonal',
           enctype: 'multipart/form-data',
           processData: false,  // Important!
           contentType: false,
           cache: false,
           type: 'POST',
           dataType: 'JSON',
           data: formData
         })
         .done(function(response) {
           if(response.inserted)
           {
             swal("ALTA  DE PERSONAL", "REALIZADO SATISFACTORIAMENTE");
             $('.altaPersonal').modal('hide');
             $('.validation-wizard')[0].reset();
           }
           else
           {
             swal("ALTA  DE PERSONAL", "INTENTE NUEVAMENTE");
           }
           console.log("success");
         })
         .fail(function() {
           console.log("error");
         })
         .always(function() {
           console.log("complete");
         });
    }
}),

$(".validation-wizard").validate({
    ignore: "input[type=hidden]"
    , errorClass: "text-danger"
    , successClass: "text-success"
    , highlight: function (element, errorClass) {
        $(element).removeClass(errorClass)
    }
    , unhighlight: function (element, errorClass) {
        $(element).removeClass(errorClass)
    }
    , errorPlacement: function (error, element) {
        error.insertAfter(element)
    }
    , rules: {
        email: {
            email: !0
        }
    }
})

var formEditar = $(".validation-wizard-editarPersonal").show();

$(".validation-wizard-editarPersonal").steps({
    headerTag: "h6"
    , bodyTag: "section"
    , transitionEffect: "fade"
    , titleTemplate: '<span class="step">#index#</span> #title#'
    , labels: {
      finish: "Guardar",
      next: "Siguiente",
      previous: "Anterior",
      cancel: "Cancelar"
    }
    , onStepChanging: function (event, currentIndex, newIndex) {
      return currentIndex > newIndex || !(3 === newIndex && Number($("#age-2").val()) < 18) && (currentIndex < newIndex && (formEditar.find(".body:eq(" + newIndex + ") label.error").remove(), formEditar.find(".body:eq(" + newIndex + ") .error").removeClass("error")), formEditar.validate().settings.ignore = ":disabled,:hidden", formEditar.valid())
    }
    , onFinishing: function (event, currentIndex) {
        return formEditar.validate().settings.ignore = ":disabled", formEditar.valid()
    }
    , onFinished: function (event, currentIndex) {
         // swal("Form Submitted!", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lorem erat eleifend ex semper, lobortis purus sed.");
         var formData = new FormData($('.validation-wizard-editarPersonal')[0]);
         //console.log(formData);
         $.ajax({
           url: base_url + 'index.php/Personal/modificarPersonal',
           enctype: 'multipart/form-data',
           processData: false,  // Important!
           contentType: false,
           cache: false,type: 'POST',
           dataType: 'JSON',
           data:formData
         })
         .done(function() {
           console.log("success");
           swal("MODIFICACION  DE PERSONAL", "REALIZADO SATISFACTORIAMENTE");
            $('#editarPersonal').modal('hide');
            $('.validation-wizard-editarPersonal')[0].reset();
         })
         .fail(function() {
           console.log("error");
         })
         .always(function() {
           console.log("complete");
         });

    }
}),
$(".validation-wizard-editarPersonal").validate({
    ignore: "input[type=hidden]"
    , errorClass: "text-danger"
    , successClass: "text-success"
    , highlight: function (element, errorClass) {
        $(element).removeClass(errorClass)
    }
    , unhighlight: function (element, errorClass) {
        $(element).removeClass(errorClass)
    }
    , errorPlacement: function (error, element) {
        error.insertAfter(element)
    }
    , rules: {
        email: {
            email: !0
        }
    }
})*/
