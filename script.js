let quotes = [
  `"Não existe nada mais poderoso no mundo do que a ideia que chega na hora certa." - Victor Hugo`,
  `"A única pessoa livre é aquela que não tem medo do ridículo." - Luiz Fernando Veríssimo`,
  `"O sonho é que leva a gente para a frente. Se a gente for seguir a razão, fica aquietado, acomodado." - Ariano Suassuna`,
  `"Todos os nossos sonhos podem virar realidade, se tivermos a coragem de persegui-los." - Walt Disney`,
  `"O dia de amanhã ninguém usou. Pode ser seu." - Pagano Sobrinho`,
  `"Nós somos o que fazemos repetidamente. A excelência, então, não é um ato, mas um hábito." - Aristóteles`,
  `"Pouco conhecimento faz com que as pessoas se sintam orgulhosas. Muito conhecimento, com que se sintam humildes." - Leonardo DaVinci`,
  `"Ser feliz sem motivo é a mais autêntica forma de felicidade." - Carlos Drummond de Andrade`,
  `"Não existe um caminho para a felicidade. A felicidade é o caminho." - Mahatma Gandhi`,
  `"Sempre há outra chance, uma outra amizade, um outro amor. Para todo fim, um recomeço." - Antoine de Saint-Exupéry`,
  `"Eduquem os meninos e não será preciso castigar os homens." - Pitágoras`,
  `"Ouse, arrisque, não desista jamais e saiba valorizar quem te ama, esses sim merecem seu respeito. Quanto ao resto, bom, ninguém nunca precisou de restos para ser feliz" – Clarice Lispector`,
  `"Para ser um campeão você tem que acreditar em si mesmo quando ninguém mais acredita" – Muhammad Ali`,
  `"No fim tudo dá certo, e se não deu certo é porque ainda não chegou ao fim" – Fernando Sabino`,
  `"Você nunca sabe que resultados virão da sua ação. Mas se você não fizer nada, não existirão resultados" – Mahatma Gandhi`,
  `"O sucesso não tem a ver com o lugar de onde você veio, e sim com a confiança que você tem e o esforço que você está disposto a investir" – Michelle Obama`,
  `"Eu posso aceitar a falha, todos falham em alguma coisa. Mas eu não posso aceitar não tentar" – Michael Jordan`,
];

let quoteSpace = document.getElementById("quoteSpace");

function generateQuote() {
  let index = Math.floor(Math.random() * quotes.length);

  let quote = `<p class="quote">${quotes[index]}</p>`;

  quoteSpace.innerHTML = quote;
}
