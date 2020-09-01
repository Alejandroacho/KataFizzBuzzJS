const assert = require('chai').assert;
const index = require('../index.js');

describe('index.js', ()=>{
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
});