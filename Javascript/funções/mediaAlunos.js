const alunos = [
    {
        nome: 'Maher',
        nota: 5,
        turma: 'b'
    },
    {
        nome: 'FiFi',
        nota: 9,
        turma: 'a'
    }]


function aprovaAlunos(alunos, media){

    let aprovados = [];

    for(i = 0; i < alunos.length; i++) {
        const {nota, nome} = alunos[i];

       if(nota >= media) {
        aprovados.push(nome)
       } 
    }

    return aprovados;
}

console.log(aprovaAlunos(alunos, 5));

