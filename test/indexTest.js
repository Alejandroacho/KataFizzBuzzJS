const assert = require('chai').assert;
const index = require('../index.js');

describe('Test de isFizzBuzz :D', function(){

    describe('Normal Cases', function(){
        it('Test if multiples of 3 returns Fizz', function(){
            const result = index.isFizzBuzz(33);
            assert.equal(result,'Fizz');
        })
    
        it('Test if multiples of 5 returns Buzz', function(){
            const result = index.isFizzBuzz(55);
            assert.equal(result,'Buzz');
        })
    
        it('Test if multiples of 15 returns FizzBuzz', function(){
            const result = index.isFizzBuzz(45);
            assert.equal(result,'FizzBuzz');
        })
    
        it('Test if random number returns nothing', function(){
            const result = index.isFizzBuzz(0);
            assert.equal(result,'Its not Fizz nor Buzz');
        })
    
        it('Test if random number returns nothing', function(){
            const result = index.isFizzBuzz(49);
            assert.equal(result,'Its not Fizz nor Buzz');
        })
    })
    
    describe('Negative cases', function(){
        it('Test if negative number returns FizzBuzz', function(){
            const result = index.isFizzBuzz(-15);
            assert.equal(result,'FizzBuzz');
        })
    
        it('Test if negative number returns Fizz', function(){
            const result = index.isFizzBuzz(-3);
            assert.equal(result,'Fizz');
        })
    
        it('Test if negative number returns Buzz', function(){
            const result = index.isFizzBuzz(-5);
            assert.equal(result,'Buzz');
        })
    
        it('Test if negative returns its not a FizzBuzz', function(){
            const result = index.isFizzBuzz(-17);
            assert.equal(result,'Its not Fizz nor Buzz');
        })
    })

    describe('Letters cases', function(){
        it('Test if letter returns advertisement', function(){
            const result = index.isFizzBuzz('e');
            assert.equal(result,'Only numbers please');
        })
    
        it('Test if letter returns Fizz', function(){
            const result = index.isFizzBuzz('3');
            assert.equal(result,'Fizz');
        })
    
        it('Test if letter returns Buzz', function(){
            const result = index.isFizzBuzz('5');
            assert.equal(result,'Buzz');
        })
    
        it('Test if letter returns FizzBuzz', function(){
            const result = index.isFizzBuzz('15');
            assert.equal(result,'FizzBuzz');
        })
    
        it('Test if letter returns its not a FizzBuzz', function(){
            const result = index.isFizzBuzz('17');
            assert.equal(result,'Its not Fizz nor Buzz');
        })
    })

});