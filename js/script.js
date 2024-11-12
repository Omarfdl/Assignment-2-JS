//Use an array to hold the value of the quotes
const quotes = [
  {
    author: "Oscar Wilde",
    quote: "Be yourself; everyone else is already taken.",
  },
  {
    author: "Robert Frost",
    quote:
      "In three words I can sum up everything I've learned about life: it goes on.",
  },
  {
    author: "Dr. Seuss",
    quote: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
  },
  {
    author: "Mark Twain",
    quote: "If you tell the truth, you don't have to remember anything.",
  },
  {
    author: "Oscar Wilde",
    quote:
      "To live is the rarest thing in the world. Most people exist, that is all.",
  },
  
];

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    return `"${randomQuote.quote}" --${randomQuote.author}`;
}

document.getElementById('quoteButton').addEventListener('click', function() {
  const randomQuote = getRandomQuote();
  document.getElementById('quoteDisplay').innerText = randomQuote;
});







// ----------------- 9 - 12 -----------------

// 9- Write a program that allows userto insert integerthen print a multiplication table up to 12.
function q9(){
  let num = Number(prompt("Enter number"));

  for(var i = 1; i <= 12; i++){
      console.log(num * i);
  }
}

// q9();



// 10- Write a program that allows to user to insert number then print all even numbers between 1 to this number
function q10(){
  let num = Number(prompt("Enter number"));

  for(var i = 1; i <= num; i++){
      if(i % 2 == 0)
          console.log(i);
  }
}

// q10();



// 11- Write a program that take two integers then print the power
function q11(){
  let num1 = Number(prompt("Enter number 1"));
  let num2 = Number(prompt("Enter number 2"));
  let res = 1;

  for(var i = 0; i < num2; i++){
      res *= num1;
  }

  console.log(res);
}

// q11();



// 12- Write a program to enter marks of five subjects and calculate total, average and percentage.
function q12(){
  let numbers = [];
  let n = 1;
  let total = 0, avg = 0, percent = 0;

      for(let i = 0; i < 5; i++){
          numbers[i] = Number(prompt("Enter number " + n));
          n++;
      }

      for(let i = 0; i < numbers.length; i++){
          total += numbers[i];
      }
      
      percent = (total / 500) * 100;
      avg = total / numbers.length;

      console.log("Total marks = " + total);
      console.log("Average Marks = " + avg);
      console.log("Percentage = " + percent);
}

// q12();
