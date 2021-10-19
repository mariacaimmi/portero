
const apretandoBotones = () => {
    $('#elemento').css("background-color", "red");
}
var variable_global = 1;
/*const apretandoBotones2 = () => {
   if(variable_global == 1){
        $('.borrarTodo').hide();
        variable_global=0;
        }
        else{
         $('.borrarTodo').show();
        variable_global=1;
        }
}*/
const apretandoBotones2 = () => {
    if ($('.borrarTodo').is(':visible')) {
        $('.borrarTodo').hide();
    } else {
        $('.borrarTodo').show();
    }
}


const apretandoBotones3 = () => {
    $("#agergandoCositas").css("display", "block");
}

$(document).ready(function () {
    $('#colorcitos > button').addClass('btn').addClass('btn-danger');

});










$('.btn').on("click", function () {
    let num = $(this).html();
    $('#input').val(`${num}`);
    $(this).removeClass('btn-danger').addClass('btn-secondary');
    $('.btn').on("click", function(){
        $(this).removeClass('btn-secondary').addClass('btn-danger');
        $('#input').val('');
    });
});
    
        

  






















/*$(this).on('click', function () {
    $(this).removeClass('btn-danger').addClass('btn-secondary');

    $(this).on('click', function () {
        $(this).removeClass('btn-secondary').addClass('btn-danger');
    })
})*/