
const form = document.querySelector('#form');
const nome = document.querySelector('#nome');
const xp = document.querySelector('#xp');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    mostraNivel();
    limpaCampos();
});

function mostraNivel() {
    const nomeHeroi = nome.value;
    let xpValue = parseInt(xp.value);
    let nivel = '';

    const niveis = [
        { min: 0, max: 1000, nome: 'Ferro' },
        { min: 1001, max: 2000, nome: 'Bronze' },
        { min: 2001, max: 5000, nome: 'Prata' },
        { min: 6001, max: 7000, nome: 'Ouro' },
        { min: 7001, max: 8000, nome: 'Platina' },
        { min: 8001, max: 9000, nome: 'Ascendente' },
        { min: 9001, max: 10000, nome: 'Imortal' },
        { min: 10001, max: Infinity, nome: 'Radiante' }
    ];

    for (const nivelInfo of niveis) {  
      
            if (xpValue >= nivelInfo.min && xpValue <= nivelInfo.max) {
                nivel = nivelInfo.nome;
                break; // Termina o loop assim que encontrar o nível adequado
            }
    }

    const mensagem = `O Herói de nome ${nomeHeroi} está no nível de ${nivel}`;
    alert(mensagem);
}

function limpaCampos() {
    nome.value = '';
    xp.value = '';
}
