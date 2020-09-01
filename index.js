module.exports = {
    isFizzBuzz(number){

        if (number%3==0 && number%5!=0 && number!=0)
        {
            return 'Fizz';
        }

        if (number%5==0 && number%3!=0 && number!=0)
        {
            return 'Buzz';
        }     

        if (number%5==0 && number%3==0 && number!=0)
        {
            return 'FizzBuzz';
        } 

        if (number<0)
        {
            return 'Only positive numbers please';
        }
        return 'Its not Fizz nor Buzz'
    }
}