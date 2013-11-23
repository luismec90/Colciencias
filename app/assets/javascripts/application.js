$(document).ready(function() {
    $(".datepicker").datepicker({
        dateFormat: "dd/mm/yy",
        monthNames: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
        dayNamesMin: ["Dom", "Lun", "Mar", "Mié", "Juv", "Vie", "Sáb"]
    });

    $(".table input").keydown(function(e) {
       console.log(e.keyCode);
        switch (e.keyCode) {
            case 67:
                $(this).parent().parent().find("input.input1").focus();
                e.preventDefault();
                break;
            case 67:
                $(this).parent().parent().find("input.input2").focus();
                e.preventDefault();
                break;
            case 70:
                $(this).parent().parent().find("input.input3").focus();
                e.preventDefault();
            case 65:
                $(this).parent().parent().find("input.input3").focus();
                e.preventDefault();
                break;
            case 69:
                $(this).parent().parent().find("input.input5").focus();
                e.preventDefault();
                break;
            case 83:
                $(this).parent().parent().find("input.input13").focus();
                e.preventDefault();
                break;
            case 67:
                $(this).parent().parent().find("input.input1").focus();
                e.preventDefault();
                break;
            case 32:
                var fila = $(this).parent().parent().data("fila");
                $("#tabla2  tr[data-fila=" + fila + "]").find("input.input1").focus();
                e.preventDefault();
                break;
            default:
                if ((e.keyCode < 48 || e.keyCode > 57) && e.keyCode!=8 && e.keyCode!=9 && e.keyCode!=116) {
                    e.preventDefault();
                }
                break;
        }
    });
});
 