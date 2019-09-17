 import { GalacticCalculator } from './../src/galactic-cal.js'

 describe('GalacticCalculator', function() {
     //first test to pass
     it('should expect to fail/if it returns correct value of the age', function() {
       let age = 35;
       const galacticCalulation = new GalacticCalculator(age);


       expect(galacticCalulation.age).toEqual("age")
     })
   })

 describe('GalacticCalculator', function() {

     it('should expect to pass/if it returns correct value of the age', function() {
       let age = 35;
       const galacticCalulation = new GalacticCalculator(age);


       expect(galacticCalulation.age).toEqual(age)
     })
   })
   describe('GalacticCalculator', function() {
       //first test to pass
       it('should expect to pass/if it returns correct value of the age in mercury years', function() {
         let age = 35;
         let galCal = new GalacticCalculator(age);
         let mercury = age / .22;

        expect(mercury).toEqual(159.0909090909091);

       })
     })
     describe('GalacticCalculator', function() {
         //first test to pass
         it('should expect to pass/if it returns correct value of the age in venus years', function() {
           let age = 35;
           let galCal = new GalacticCalculator(age);
           let mercury = age / .22;
           let venus= age / .62;

           console.log(venus);




          expect(venus).toEqual(56.45161290322581);

         })
       })
       describe('GalacticCalculator', function() {
           //first test to pass
           it('should expect to pass/if it returns correct value of the age in mercury years', function() {
             let age = 35;
             let galCal = new GalacticCalculator(age);
             let mercury = age / .22;
             let venus = age / .62;
             let mars = age / 1.88;
             let jupiter = age / 11.86;


             console.log(mars);



            expect(mars).toEqual(18.617021276595747);

           })
         })
         describe('GalacticCalculator', function() {
             //first test to pass
             it('should expect to pass/if it returns correct value of the age in mercury years', function() {
               let age = 35;
               let galCal = new GalacticCalculator(age);
               let mercury = age / .22;
               let venus = age / .62;
               let mars = age / 1.88;
               let jupiter = age / 11.86;
               console.log(jupiter);

              expect(jupiter).toEqual(2.9510961214165263);

             })
           })
