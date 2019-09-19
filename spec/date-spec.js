import { GalacticCalculator} from './../src/galactic-cal.js';

describe('GalacticCalculator', function() {
  //first test to fail
  it('should expect to fail/if it returns correct value of the age', function() {
    let age = 35;
    let galactic = new GalacticCalculator(age);
    console.log(galactic);

    expect(galactic.age).toEqual("age")
  })
})
// second test should pass
describe('GalacticCalculator', function() {
  //second test to pass
  it('should expect to fail/if it returns correct value of the age', function() {
    let age = 35;
    let galactic = new GalacticCalculator(age);
    console.log(galactic);

    expect(galactic.age).toEqual(35)
  })
})
// this test should pass
describe('GalacticCalculator', function() {
  it('should expect to pass/if it returns correct value of the age', function() {
    let age = 27;
    let galactic = new GalacticCalculator(age);
    let earthdays = 365;
    console.log(galactic);
    expect(galactic.earthdays).toEqual(earthdays)
  })
})
// this test should return mercury Calculator
describe('GalacticCalculator', function() {
  it('should expect to pass/if it returns correct value of the age in mercury years', function() {
    let age = 27;
    let galactic = new GalacticCalculator(age);
    let mercury = age / .22;
    expect(galactic.mercury).toEqual(mercury);

  })
})
// this test should return venus Calculator
describe('GalacticCalculator', function() {

  it('should expect to pass/if it returns correct value of the age in venus years', function() {
    let age = 35;
    let galactic = new GalacticCalculator(age);
    let mercury = age / .22;
    let venus= age / .62;
    expect(galactic.venus).toEqual(venus);

  })
})
// this test should return mars Calculator
describe('GalacticCalculator', function() {

  it('should expect to pass/if it returns correct value of the age in mercury years', function() {
    let age = 35;
    let galactic = new GalacticCalculator(age);
    let mercury = age / .22;
    let venus = age / .62;
    let mars = age / 1.88;
    let jupiter = age / 11.86;

    expect(galactic.mars).toEqual(mars);

  })
})
// this test should return jupiter Calculator
describe('GalacticCalculator', function() {

  it('should expect to pass/if it returns correct value of the age in mercury years', function() {
    let age = 35;
    let galactic = new GalacticCalculator(age);
    let mercury = age / .22;
    let venus = age / .62;
    let mars = age / 1.88;
    let jupiter = age / 11.86;

    expect(galactic.jupiter).toEqual(jupiter);

  })
})
