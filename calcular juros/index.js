import input from 'readline-sync';
console.log("Aplicaçao de Juros:");

let valor = input.question('Informe o valor devido: R$');


if (valor > 0){
    let dias = input.question('Informe quantos dias se passaram desde o vencimentos do boleto: ');
        if(dias > 0){
           if(dias >= 15){
            let juros = 10;
            let valorJuros = (valor / 100) * juros;
            let totalDivida = Number(valor) + Number(valorJuros);
            
            console.log("Taxa de Juros: "+juros+"%");
            console.log("Valor total com Juros: R$ "+totalDivida);
        
            console.log("Valor original da divida: R$"+valor);
            console.log("dias em atrasados: "+dias+" dias");
        }else{
            let juros = 5;
            let valorJuros = (valor / 100) * juros;
            let totalDivida = Number(valor) + Number(valorJuros);
            
            console.log("Taxa de Juros: "+juros+"%");
            console.log("Valor total com Juros: R$ "+totalDivida);
        
            console.log("Valor original da divida: R$"+valor);
            console.log("dias em atrasados: "+dias+" dias");
           }
        }else{
            console.log("coloque a quantidade de dias")
        }

}else{
    console.log("coloque um valor")
}
