(function () {
  var quotes = [
    'Learn from yesterday. Live for today. Hope for tomorrow. – Albert Einstein',
    'One day, all your hard work will pay off.',
    'Life is short. Live it. Fear is natural. Face it. Memory is powerful. Use it.',
    'The earlier you start working on something, the earlier you will see results.',
    'It’s never too late to be what you might have been.',
    'Every morning you have two choices: continue to sleep with your dreams, or wake up and chase them.',
    'A river cuts through rock not because of its power but because of its persistence.',
    'Success is not final, failure is not fatal; it is the courage to continue that counts. – Winston Churchill',
    'Don’t stop until you’re proud.',
    'Work as hard as you can and then be happy in the knowledge you couldn’t have done any more.',
    'Work hard in silence. Let success make the noise.',
    'Winners will fail over and over again until they succeed.',
    'The man on top of the mountain didn’t fall there.',
    'Be so good they can’t ignore you.',
    'You have three choices: give up, give in or give it everything you have got.',
    'If you really want to do something, you’ll find a way. If you don’t, you’ll find an excuse.',
    'Successful people are not gifted. They just work hard, then succeed on purpose.',
    'The people who are crazy enough to believe they can change the world are the ones who do. – Steve Jobs',
    'The ink of the scholar is more holy than the blood of the martyr.',
    'Study hard, for the well is deep, and our brains are shallow. ― Richard Baxter'
  ];
  var button = document.getElementById('button');
  button.addEventListener('click', function() {
    document.getElementById('quoteField').innerHTML = quotes[Math.floor(Math.random() * quotes.length)];
  });
}());
