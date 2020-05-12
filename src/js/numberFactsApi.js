document.addEventListener("DOMContentLoaded", function() {
    
    //////////////////////////// NUMBERS API ////////////////////////////
    let factMathNumber = document.querySelector('.fact-math__number');
    let factMathText = document.querySelector('.fact-math__text');
    let prevMathNumbers = []

    let factTriviaNumber = document.querySelector('.fact-trivia__number');
    let factTriviaText = document.querySelector('.fact-trivia__text');
    let prevTriviaNumbers = []

    let factDateNumber = document.querySelector('.fact-date__number');
    let factDateText = document.querySelector('.fact-date__text');
    let prevDateNumbers = []
    
    
    //Function for random NUMBERS
    const getFactMath = async () => {
        
        let randomNumber = Math.floor(Math.random() * 10000);
        // console.log('randomNumber', randomNumber)

        try{
            if(!prevMathNumbers.includes(randomNumber)){
                prevMathNumbers.push(randomNumber)

                factMathNumber.innerText = randomNumber;
                factMathText.innerText = 'loading...';
                factMathText.style.opacity = '0.3';

                const response = await fetch('http://numbersapi.com/'+randomNumber+'/math?json');
                const json = await response.json();
                // console.log('JSON', json)
    
                if(json){
                    // console.log('Number from JSON', json.number)
                    const {number, text} = json;
                    factMathNumber.innerText = number;
                    factMathText.innerText = text;
                    factMathText.style.opacity = '1';
                }
            }
        }catch{
            console.log('Error!')
        }
        
        setTimeout(getFactMath, 5000);
        // console.log('prev-numbers', prevMathNumbers)
    }
    getFactMath();


    //Function for random TRIVIA
    const getFactTrivia = async () => {
        
        let randomNumber = Math.floor(Math.random() * 10000);
        // console.log('randomNumber', randomNumber)

        try{
            if(!prevTriviaNumbers.includes(randomNumber)){
                prevTriviaNumbers.push(randomNumber)

                factTriviaNumber.innerText = randomNumber;
                factTriviaText.innerText = 'loading...';
                factTriviaText.style.opacity = '0.3';

                const response = await fetch('http://numbersapi.com/'+randomNumber+'/trivia?json');
                const json = await response.json();
                // console.log('JSON', json)
    
                if(json){
                    // console.log('Number from JSON', json.number)
                    const {number, text} = json;
                    factTriviaNumber.innerText = number;
                    factTriviaText.innerText = text;
                    factTriviaText.style.opacity = '1';
                }
            }
        }catch{
            console.log('Error!')
        }
        
        setTimeout(getFactTrivia, 5000);
        // console.log('prev-numbers', prevTriviaNumbers)
    }
    getFactTrivia();



    //Function for random DATE
    const getFactDate = async () => {
        
        let randomNumber = Math.floor(Math.random() * 3000);
        // console.log('randomNumber', randomNumber)

        try{
            if(!prevDateNumbers.includes(randomNumber)){
                prevDateNumbers.push(randomNumber)

                factDateNumber.innerText = randomNumber;
                factDateText.innerText = 'loading...';
                factDateText.style.opacity = '0.3';

                const response = await fetch('http://numbersapi.com/'+randomNumber+'/year?json');
                const json = await response.json();
                // console.log('JSON', json)
    
                if(json){
                    // console.log('Number from JSON', json.number)
                    const {number, text} = json;
                    factDateNumber.innerText = number;
                    factDateText.innerText = text;
                    factDateText.style.opacity = '1';
                }
            }
        }catch{
            console.log('Error!')
        }
        
        setTimeout(getFactDate, 5000);
        // console.log('prev-numbers', prevDateNumbers)
    }
    getFactDate();

});