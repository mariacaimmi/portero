
const apretandoBotones = () => {
    $('#elemento').css("background-color", "red");
}
var variable_global = 1;
const apretandoBotones2 = () => {
   if(variable_global == 1){
        $('.borrarTodo').hide();
        variable_global=0;
        }
        else{
         $('.borrarTodo').show();
        variable_global=1;
        }
}


const apretandoBotones3 = () => {
    $("#agergandoCositas").css("display", "block");
 }
