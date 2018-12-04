describe('Main', function () {
    var array1;
    var expect;

    //roda uma vez antes do bloco
    before(function () {
        expect = require('chai').expect;
    });

    //roda uma vez depois do bloco
    after(function () {
    });

    //roda uma vez antes de cada bloco
    beforeEach(function () {
        array1 = [1, 2, 3];
    });

    //roda uma vez depois de cada bloco
    afterEach(function () {
    });

    it('Deve ser do tipo array', function () {
        array1.push(4);
        expect(array1).to.be.an('array');
    });

    it('Deve ter tamanho 4 ao adicionar um item', function () {
        array1.push(4);
        expect(array1).to.length(4);
    });

    it('Deve ter tamanho 2 ao remover um item', function () {
        array1.pop();
        expect(array1).to.length(2);
    });

    it('Deve ter valor 3 ao remover um item', function () {
        var valor = array1.pop();
        expect(valor === 3).to.be.true;
    });

    it('Devera ter o valor 4 ao incluir o item 4', function () {
        array1.push(4);
        expect(array1).to.include(4);
    });

    it('Devera nao ter o valor 4 na lista', function () {
        expect(array1).to.not.include(4);
    });
});














/*describe('Metodo A', function () {
    context('Case 1', function () {
        it('Deveria retornar 2', function () {
            //entrada de dados
            //chamada do metodo(função)
            //validar retorno
        });

        it('Deveria retornar 3', function () {
            //entrada de dados
            //chamada do metodo(função)
            //validar retorno
        });

        it('Deveria retornar 4', function () {
            //entrada de dados
            //chamada do metodo(função)
            //validar retorno
        });
    });

    context('Case 2', function () { });
});

describe('Metodo B', function () { });*/