function Armazene(){
    let numero = document.getElementById('numero').value
    localStorage.setItem('Número',numero)


    alert('O número armazenado é: '+numero)
}