const name = 'Leticia';


// Não podemos alterar o valor 

name: 'Leticia';

const user = {
    name: 'Leticia'
};

//se for um objeto podemos trocar suas propriedades
user.name = 'Cruz';

//não podemos fzer o objeto "apontar" para outro lugar
user = {
    name:'Leticia'
};

const persons =['Leticia', 'Roberta', 'Fernanda'];

//podemos adicionar novos itens
persons.push('João');

//podemos remover algum item 
persons.shift();

//podemos alterar diretamente
persons[1] = 'James';

console.log('\nArray após as alterações: ', persons);





