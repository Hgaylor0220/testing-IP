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
describe('GalacticCalculator', function() {
  it('should expect to pass/if it returns correct value of the age in venus years', function() {
    let age = 35;
    let galactic = new GalacticCalculator(age);
    let venus = age / .62;
    expect(galactic.venusLifeCal()).toEqual(venus);
  })
})
describe('GalacticCalculator', function() {
  it('should expect to pass/if it returns correct value of the age in mars years', function() {
    let age = 35;
    let galactic = new GalacticCalculator(age);
    let mars = age / 1.88;
    expect(galactic.marsLifeCal()).toEqual(mars);
  })
})
describe('GalacticCalculator', function() {
  it('should expect to pass/if it returns correct value of the age in jupiter years', function() {
    let age = 35;
    let galactic = new GalacticCalculator(age);
    let jupiter = age / 11.86;
    expect(galactic.jupiterLifeCal()).toEqual(jupiter);
  })
})
describe('GalacticCalculator', function() {
  it('should expect to pass/ returns the remaders life expectancy', function() {
    let age = 35;
    let galactic = new GalacticCalculator(age);
    expect(galactic.calculateLifeExpectancy()).toEqual(42)
  })
})
describe('GalacticCalculator', function() {
  it('should expect to pass/ returns the remaders life expectancy mercury', function() {
    let age = 35;
    let galactic = new GalacticCalculator(age);
    galactic.calculateLifeExpectancy();
    expect(galactic.calculateMercuryLifeExp()).toEqual(190.9090909090909)
  })
})
describe('GalacticCalculator', function() {
  it('should expect to pass/ returns the remaders life expectancy venus', function() {
    let age = 35;
    let galactic = new GalacticCalculator(age);
    galactic.calculateLifeExpectancy();
    expect(galactic.calculateVenusLifeExp()).toEqual(67.74193548387098)
  })
})
describe('GalacticCalculator', function() {
  it('should expect to pass/ returns the remaders life expectancy in mars', function() {
    let age = 35;
    let galactic = new GalacticCalculator(age);
    galactic.calculateLifeExpectancy();
    expect(galactic.calculateMarsLifeExp()).toEqual(22.340425531914896)
  })
})
describe('GalacticCalculator', function() {
  it('should expect to pass/ returns the remaders life expectancy in jupiter', function() {
    let age = 35;
    let galactic = new GalacticCalculator(age);
    galactic.calculateLifeExpectancy();
    expect(galactic.calculateJupiterLifeExp()).toEqual(3.5413153456998314)
  })
})
