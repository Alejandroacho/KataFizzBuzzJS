module.exports = {
    isFizzBuzz(number){

        if (typeof number != 'number')
        {
            number = parseInt(number);
            if (isNaN(number))
            {
                return 'Only numbers please';
            }
        }

        var FizzCondition = number%3;
        var BuzzCondition = number%5;

        if (FizzCondition==0 && BuzzCondition!=0 && number!=0)
        {
            return 'Fizz';
        }

        if (BuzzCondition==0 && FizzCondition!=0 && number!=0)
        {
            return 'Buzz';
        }     

        if (BuzzCondition==0 && FizzCondition==0 && number!=0)
        {
            return 'FizzBuzz';
        } 

        return 'Its not Fizz nor Buzz'
    }
}