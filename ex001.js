var numero = 4



function primo(numero) {
    if (numero < 2) {
        return false;
    }else {
        for (var i = 2;  i<= Math.sqrt(numero); i++) {
          
          if (numero % i == 0)  {
            return false;
          }
    }
}
return true;

} 
