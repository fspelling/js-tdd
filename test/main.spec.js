/*
 Desafio FizzBuzz
 Escreva uma lib que receba um número e:
 Se o número for divisível por 3, no lugar do número escreva 'Fizz' - X
 Se o número for divisível por 5, no lugar do número escreva 'Buzz' - X
 Se o número for divisível por 3 e 5, no lugar do número escreva 'FizzBuzz' - X
 Se não for múltiplo de nada, retorna o número
*/

import { expect } from 'chai';
import FizzBuzz from '../src/main';

describe('Main', () => {
    it('Deveria retornar a msg "Fizz" quando o numero for multiplo de 3', () => {
        expect(FizzBuzz(3)).to.equals('Fizz');
        expect(FizzBuzz(6)).to.equals('Fizz');
    });

    it('Deveria retornar a msg "Buzz" quando o numero for multiplo de 5', () => {
        expect(FizzBuzz(5)).to.equals('Buzz');
        expect(FizzBuzz(10)).to.equals('Buzz');
    });

    it('Deveria retornar a msg "FizzBuzz" quando o numero for multiplo de 3 e 5', () => {
        expect(FizzBuzz(15)).to.equals('FizzBuzz');
    });

    it('Deveria retornar a o proprio numero quando nao for multiplo de 3 e 5', () => {
        expect(FizzBuzz(1)).to.equals(1);
        expect(FizzBuzz(2)).to.equals(2);
    });
});