function randomNumber(min, max)
{
  // Returns a random integer between the integers min and max. Max not included.
  // Example: randomNumber(3, 6) will return 3, 4 or 5.
  return min + Math.floor((max - min) * Math.random())
}

