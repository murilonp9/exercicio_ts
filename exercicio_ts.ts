// Função de multiplicação
function multiplicar(a: number, b: number): number {
    return a * b;
}

// Função de saudação
function saudacao(nome: string): string {
    return "Olá " + nome;
}

// Usabilidade:
const resultadoMultiplicacao = multiplicar(5, 3);
const mensagemSaudacao = saudacao("João");

console.log("Resultado da multiplicação:", resultadoMultiplicacao);
console.log("Mensagem de saudação:", mensagemSaudacao);