const assert = require('chai').assert;
const index = require('../index.js');

describe('index.js', ()=>{

    //***********************************FIZZ************************************ */
    it('Test if multiples of 3 returns Fizz', ()=>{
        const result = index.isFizzBuzz(3);
        assert.equal(result,'Fizz');
    })
    it('Test if multiples of 3 returns Fizz part 2', ()=>{
        const result = index.isFizzBuzz(9);
        assert.equal(result,'Fizz');
    })
    it('Test if multiples of 3 returns Fizz part 3', ()=>{
        const result = index.isFizzBuzz(33);
        assert.equal(result,'Fizz');
    })

    //***********************************BUZZ************************************ */
    it('Test if multiples of 5 returns Buzz', ()=>{
        const result = index.isFizzBuzz(5);
        assert.equal(result,'Buzz');
    })
    it('Test if multiples of 5 returns Buzz part 2', ()=>{
        const result = index.isFizzBuzz(20);
        assert.equal(result,'Buzz');
    })
    it('Test if multiples of 5 returns Buzz part 3', ()=>{
        const result = index.isFizzBuzz(55);
        assert.equal(result,'Buzz');
    })

    //*********************************FIZZBUZZ********************************** */
    it('Test if multiples of 15 returns FizzBuzz', ()=>{
        const result = index.isFizzBuzz(15);
        assert.equal(result,'FizzBuzz');
    })
    it('Test if multiples of 15 returns FizzBuzz part 2', ()=>{
        const result = index.isFizzBuzz(30);
        assert.equal(result,'FizzBuzz');
    })
    it('Test if multiples of 15 returns FizzBuzz part 3', ()=>{
        const result = index.isFizzBuzz(45);
        assert.equal(result,'FizzBuzz');
    })

    //*******************************NO FIZZBUZZ********************************* */
    it('Test if random number returns nothing', ()=>{
        const result = index.isFizzBuzz(1);
        assert.equal(result,'Its not Fizz nor Buzz');
    })
    it('Test if random number returns nothing part 2', ()=>{
        const result = index.isFizzBuzz(0);
        assert.equal(result,'Its not Fizz nor Buzz');
    })
    it('Test if random number returns nothing part 3', ()=>{
        const result = index.isFizzBuzz(49);
        assert.equal(result,'Its not Fizz nor Buzz');
    })


    //*********************************NEGATIVE********************************** */
    it('Test if negative number returns FizzBuzz', ()=>{
        const result = index.isFizzBuzz(-15);
        assert.equal(result,'FizzBuzz');
    })
    it('Test if negative number returns Fizz', ()=>{
        const result = index.isFizzBuzz(-3);
        assert.equal(result,'Fizz');
    })
    it('Test if negative number returns Buzz', ()=>{
        const result = index.isFizzBuzz(-5);
        assert.equal(result,'Buzz');
    })

    
    //*********************************Letters********************************** */
    it('Test if letter returns advertisement', ()=>{
        const result = index.isFizzBuzz('a');
        assert.equal(result,'Only numbers please');
    })

    it('Test if letter returns advertisement part 2', ()=>{
        const result = index.isFizzBuzz('c');
        assert.equal(result,'Only numbers please');
    })

    it('Test if letter returns Fizz', ()=>{
        const result = index.isFizzBuzz('3');
        assert.equal(result,'Fizz');
    })
});