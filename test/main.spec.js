import { expect } from 'chai';
import { sum, sub, mult, div } from '../src/main';

describe('Calc', () => {
    describe('smoke tests', () => {
        it('Deveria existir a funcao sum', () => {
            expect(sum).to.exist;
            expect(sum).to.be.a('function');
        });

        it('Deveria existir a funcao sub', () => {
            expect(sub).to.exist;
            expect(sub).to.be.a('function');
        });

        it('Deveria existir a funcao mult', () => {
            expect(mult).to.exist;
            expect(mult).to.be.a('function');
        });

        it('Deveria existir a funcao div', () => {
            expect(div).to.exist;
            expect(div).to.be.a('function');
        });
    });

    describe('Sum', () => {
        it('Devera retornar 4 apos somar 2 com 2', () => {
            let valor = sum(2, 2);
            expect(valor).to.equals(4);
        });
    });

    describe('Sub', () => {
        it('Devera retornar 2 apos subtrair 1 com 3', () => {
            let valor = sub(3, 1);
            expect(valor).to.equals(2);
        });

        it('Devera retornar -4 apos subtrair 6 com 10', () => {
            let valor = sub(6, 10);
            expect(valor).to.equals(-4);
        });
    });

    describe('Mult', () => {
        it('Devera retornar 4 apos multiplicar 2 com 2', () => {
            let valor = mult(2, 2);
            expect(valor).to.equals(4);
        });
    });

    describe('Div', () => {
        it('Devera retornar 1 apos dividir 2 com 2', () => {
            let valor = div(2, 2);
            expect(valor).to.equals(1);
        });

        it('Devera retornar a mensagem "nao é possivel divisao com 0" apos dividir qualquer numero com 0', () => {
            let valor = div(2, 0);
            expect(valor).to.equals('nao é possivel divisao com 0');
        });
    });
});