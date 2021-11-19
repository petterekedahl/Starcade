function randomNumber(min, max)
{
  // Returns a random integer between the integers min and max. Max not included.
  // Example: randomNumber(3, 6) will return 3, 4 or 5.
  return min + Math.floor((max - min) * Math.random())
}

function noFunnyLetters(word){
  // Returnerar samma ord som den fick som argument men:
  // Å = A
  // Ä = A
  // Ö = O
  // Alltså utan ÅÄÖ eller åäo.
  // Om argumentet är "Gävleån" så returnernar funktionen "Gavlean".
  
  word = word.replace(/å/, 'a')
  word = word.replace(/Å/, 'A')
  word = word.replace(/ä/, 'a')
  word = word.replace(/Ä/, 'A')
  word = word.replace(/ö/, 'o')
  word = word.replace(/Ö/, 'O')
  
  return word
}

