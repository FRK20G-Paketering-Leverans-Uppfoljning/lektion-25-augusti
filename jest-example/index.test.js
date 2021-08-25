const { add, subtract, multiply } = require('./index');

//Strängen nedan förklarar vad testet ska göra och det förväntade resultatet
//Funktionen efter är det som kör testet
it('should return the sum of two numbers', () => {
  const expected = 10;
  const actual = add(5, 5);

  //Assertion
  expect(actual).toBe(expected);
});

it('should return the difference of two numbers positive', () => {
  //Arrange
  const expected = 5;

  //Act
  const actual = subtract(10, 5);

  //Assert
  expect(actual).toBe(expected);
});

it('should return the difference of two numbers negative', () => {
  //Arrange
  const expected = -10;

  //Act
  const actual = subtract(5, 15);

  //Assert
  expect(actual).toBe(expected);
});

/**
 * Skriv testfall till funktionen multiply(x, y), som tar två tal som parametrar. 
 * Funktionen multiplicerar dessa två tal och returnerar summan. 
 * Ifall något annat än siffror skickas in ska ett felmeddelande returneras. Exempel: multiply(2, 5) === 10
 */

/**
 * Testfall:
 * Ett test som kollar att två tal multipliceras
 * Ett test som kollar att ett felmeddelande returneras om något annat siffror skickas in som parameter
 */

it('should return the product of two numbers', () => {
  //Arrange
  const expected = 1350;

  //Act
  const actual = multiply(54, 25);

  //Assert
  expect(actual).toBe(expected);
});

it('should return a error message if parameter is not an number', () => {
  //Arrange
  const expected = 'Illegal input';

  //Act
  const actual = multiply('Hej', 1);
  const actualSecond = multiply(1, 'Hej');
  const actualThird = multiply('Hej', 'Hej');

  //Assert
  expect(actual).toBe(expected);
  expect(actualSecond).toBe(expected);
  expect(actualThird).toBe(expected);
});