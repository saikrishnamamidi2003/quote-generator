let quoteList = [
    {
      quote: "Life is what happens when you're busy making other plans.",
      author: "John Lennon",
    },
    {
      quote: "The only way to do great work is to love what you do.",
      author: "Steve Jobs",
    },
    {
      quote: "In three words I can sum up everything I've learned about life: it goes on.",
      author: "Robert Frost",
    },
    {
      quote: "The future belongs to those who believe in the beauty of their dreams.",
      author: "Eleanor Roosevelt",
    },
    {
      quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      author: "Winston Churchill",
    },
    {
      quote: "The only limit to our realization of tomorrow will be our doubts of today.",
      author: "Franklin D. Roosevelt",
    },
    {
      quote: "Life is 10% what happens to us and 90% how we react to it.",
      author: "Charles R. Swindoll",
    },
    {
      quote: "The journey of a thousand miles begins with one step.",
      author: "Lao Tzu",
    },
    {
      quote: "Change your thoughts and you change your world.",
      author: "Norman Vincent Peale",
    },
    {
      quote: "The best way to predict the future is to create it.",
      author: "Peter Drucker",
    },
  ]
  let quoEle=document.getElementById("quote")
  let autEle=document.getElementById("author")
  function quotes(){
   let i= Math.floor(Math.random()*quoteList.length)
   quoEle.innerText=quoteList[i].quote
   autEle.innerText="__" + "  " + quoteList[i].author 
  }
 document.getElementById("getquote").onclick=quotes


  