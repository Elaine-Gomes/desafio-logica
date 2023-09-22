# 🎮Classificador de Nível de Herói

Este é um pequeno programa JavaScript que classifica o nível de um herói com base em sua quantidade de experiência (XP). O código utiliza variáveis, eventos do formulário, estruturas de decisão e um array de níveis para determinar o nível do herói com precisão.

## 🧩Como Funciona

1. O programa começa selecionando os elementos HTML do formulário (nome e XP) usando o `querySelector`.

2. Um evento de envio de formulário é adicionado ao formulário. Quando o formulário é enviado, a função `mostraNivel()` é chamada.

3. A função `mostraNivel()` obtém o nome do herói e a quantidade de XP fornecida no formulário.

4. Em seguida, ele itera por meio de uma matriz de níveis, verificando se a quantidade de XP se encaixa em algum dos intervalos de XP definidos.

5. Quando o nível apropriado é encontrado, a função para de iterar e exibe uma mensagem de alerta com o nome do herói e seu nível.

6. A função `limpaCampos()` é chamada para limpar os campos do formulário após a exibição do nível.

## 💡Exemplo de Saída

Por exemplo, se você inserir o nome "Batman" e 3000 XP no formulário e submetê-lo, você receberá uma mensagem de alerta que diz:

O Herói de nome "Batman" está no nível de Prata
