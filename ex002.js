 let nome = "leonardo"
 let idade = 24
 let email = "leonardogmail.com"
 
 validarParticipante()
 function validarParticipante() {



   if (nome.length > 0 && nome.length < 50) {
    console.log('nome está valido')
 }else {
   console.log('nome inválido')
 }

 if (idade > 0 && idade < 100) {
  console.log('idade está valida');
 } else {
  console.log('idade está invalida');

 }
 if (email.includes('@')) {
console.log('o e-mail está correto');
 } else { 
  console.log('o e-mail está incorreto');
 }

 
 }
