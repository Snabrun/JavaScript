const {lisays, kerto, jako, vahennys } = require('./aritmeettiset');
test('2 + 3 = 5', () =>{
  expect(lisays(2,3)).toBe(5);
});
test('3 * 4 = 12', () => {
  expect(kerto(3, 4)).toBe(12);
});
test('5 - 6 = -1', () => {
  expect(vahennys(5, 6)).toBe(-1);
});
test('8 / 4 = 2', () => {
  expect(jako(8, 4)).toBe(2);
})

//JOUKKOTESTIT

test.each([[1, 1, 2], [-1, 2, 1], [2, 1, 3]])
('%i + %i equals %i', (a, b, expected) => {
  expect(lisays(a,b)).toBe(expected);
},);
test.each([[1, 1, 0], [-1, 2 , -3], [2, 2, 0]])
('*%i - %i equals %i', (a, b, expected) => {
expect(vahennys(a,b)).toBe(expected);
},);
test.each([[1, 1, 1], [-1, 2, -2], [2, 2, 4]])
('%i * %i equals %i', (a, b, expected) => {
  expect(kerto(a, b)).toBe(expected);
},);
test.each([[1, 1, 1], [-1, 2, -0,5], [2, 2, 1]])
('%i / %i equals %i', (a, b, expected) => {
  expect(jako(a, b)).toBe(expected);
},); 
