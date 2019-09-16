 import { GalacticCalculator } from './../src/galactic-cal.js'

 describe('GalacticCalculator', function() {
     //first test to fail
     it('should expect to fail/if it returns correct value of the age', function() {
       let age = 10;
       var galacticCalulation = new GalacticCalculator(age);
       console.log(age);

       expect(galacticCalulation.age).toEqual("23")
     })
   })
