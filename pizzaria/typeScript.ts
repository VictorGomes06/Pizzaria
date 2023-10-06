
let valorDaPizza: number = 0;
let tamanho: string = "";
let peperoni = "", queijoExtra = "";

let tamanhoDaPizza = Number(prompt(`Qual o tamanho da pizza ? \n 1 - Pequena \n 2- Média \n 3 - Grande`))

switch (tamanhoDaPizza) {
    case 1:
        valorDaPizza = 14.50;
        tamanho = "P";
        break;
    case 2:
        valorDaPizza = 20.50;
        tamanho = "M";
        break;
    case 3:
        valorDaPizza = 30.50
        tamanho = "G";
        break;
    default: ("Por favor escolha um dos tamanhos informados acima")

}
let ecolhaPeperoni = Number(prompt(`Deseja adiconar peperoni ? \n 1 - Sim \n 2 - Não `))
switch (ecolhaPeperoni) {
    case 1:
        if (tamanhoDaPizza = 1) {
            valorDaPizza += 3.00
            peperoni = "Sim"
        }
        else {
            valorDaPizza += 1.00
            peperoni = "Sim"
        }
        break;
    case 2:
        peperoni = "Não";
        break;
    default: ("Por favor selecione uma das opções acima")
}
let escolhaQueijoExtra = Number(prompt(`Deseja adicionar queijo extra ? \n 1 - Sim \n 2 - Não `))
switch (escolhaQueijoExtra) {
    case 1:
        valorDaPizza += 1.00;
        queijoExtra = "Sim"
        break;
    case 2:
        queijoExtra = "Não"
        break;
    default: ("Por favor selecione uma das opções acima")
}
alert(`Tamanho da pizza : ${tamanho} \n Peperoni : ${peperoni} \n Queijo Extra : ${queijoExtra} \n Valor total do pedido ${valorDaPizza}d`);
