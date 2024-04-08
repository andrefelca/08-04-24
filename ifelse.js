
 /**o algoritimo ifelse serve para validaçao de dados, por exemplo:
 * if (variavel1 == variavel2) { algo ira acontecer se a variavel1 for igual a variavel2} else { algo ira acontecer se a variavel1 for diferente da variavel2 }
 * 
 * if: nome do algoritimo
 * parenteses (): local onde se declaram os parenteses ou expressao a ser validada 
 * chaves {}:bloco de codigos a serem executados , ou seja, tudo que estiver dentro do bloco de codigos, que esiveram dentro do bloco {}, caso a validaçao do algoritimo "if" retorne falsa
 * 
 * operadores logicos  
 * 
 * operadores logios 
 * 
 * == serve para comparar se uma variavel/valor é igual a outra
 * != serve para comparar se uma variavel/valor é diferente da outra
 * > serve para comparar se uma variavel/valor é maior que a outra
 * < serve para comparar se uma variavel/valor é menor a outra
 * >= serve para comparar se uma variavel/valor é maior ou igual a outra
 * <= serve para comparar se uma variavel/valor é menor ou igual a outra
 * 
 * se "falso": adicionar o ponto de exclamaçao no inicio da declaraçao de parametros/expressao, por exemplo: 
 * if (variavel1 == variavel2) { bloco de codigo } aqui significa que: se a comparaçao da variavel1 ou a variavel2 retornar falso, os codigos que estavam dentro do bloco de codigo serao executados, nao havendo a necessidade do uso da causula "else"
 * 
 * criar um valor onde voce ira declarar duas variaveis< cada uma com um valor DIFERENTE da outra, entao havera uma resposta diferente para cada situaçao 
 * 
 * vamos criar dois inputs, onde cada iput ira para cada uma das duas variaveis, ou seja:
 * <input type="text" id="txtVar1"/>
 * <input type="text" id="txtVar2"/>
 * 
 * var txtVar1 = document.getElementById("txtVar1")
 * var txtVar2 = document.getElementById("txtVar2")
 * 
 * txtVar1.value que tem que ser comparado com o txtVar2.value
 * 
 * evitar os dados via console.log()
 */

 function check(){
    var txtVar1 = document.getElementById("txtVar1");
    var txtVar2 = document.getElementById("txtVar2");
    
    if(txtVar1.value == txtVar2.value){
        console.log("verdadeiro");
    }
    else{
        console.log("falso");
    }
    
    };