import { GalacticCalculator} from './../src/galactic-cal.js';

describe('GalacticCalculator', function() {
  it('should expect to fail/if it returns correct value of the age', function() {
    let age = 35;
    let galactic = new GalacticCalculator(age);
    expect(galactic.age).toEqual(35)
  })
})
describe('GalacticCalculator', function() {
  it('should expect to pass/if it returns correct value of the age in mercury years', function() {
    let age = 27;
    let galactic = new GalacticCalculator(age);
    let mercury = age / .22;
    expect(galactic.mercuryLifeCal()).toEqual(mercury);

  })
})
// this test should return venus Calculator
describe('GalacticCalculator', function() {

  it('should expect to pass/if it returns correct value of the age in venus years', function() {
    let age = 35;
    let galactic = new GalacticCalculator(age);
    let venus= age / .62;

    expect(galactic.venusLifeCal()).toEqual(venus);

  })
})
// this test should return mars Calculator
describe('GalacticCalculator', function() {

  it('should expect to pass/if it returns correct value of the age in mars years', function() {
    let age = 35;
    let galactic = new GalacticCalculator(age);
    let mars = age / 1.88;

    expect(galactic.marsLifeCal()).toEqual(mars);

  })
})
// this test should return jupiter Calculator
describe('GalacticCalculator', function() {

  it('should expect to pass/if it returns correct value of the age in jupiter years', function() {
    let age = 35;
    let galactic = new GalacticCalculator(age);
    let jupiter = age / 11.86;

    expect(galactic.jupiterLifeCal()).toEqual(jupiter);

  })
})
describe('GalacticCalculator', function() {
  it('should expect to fail/if it returns correct value of the age', function() {
    let age = 35;
    let galactic = new GalacticCalculator(age);

    console.log(galactic.calculateLifeExpectancy());



    expect(lifeX.calculateLifeExpectancy()).toEqual(35)
  })
})
