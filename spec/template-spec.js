import { Galactic } from './../src/test-project.js'

  describe('Galactic', function() {
    //first test to fail
    it('should expect to fail/if it doesnt return a planet', function() {
      let mercuryCalculator = "Mercury";
      let venusCalculator = "Venus";
      let marsCalculator = "Mars";
      let jupiterCalculator = "Jupiter";
      var galacticCalulation = new Galactic(mercuryCalculator,venusCalculator,marsCalculator,jupiterCalculator);

      expect(galacticCalulation.jupiterCalculator).toEqual(jupiterCalculator)
    })


    it('expect pass/ calculator give you a number ', function() {
      var mercuryCalculator = .24;
      let venusCalculator = "Venus";
      let marsCalculator = "Mars";
      let jupiterCalculator = "Jupiter";
      let earthYears = 1;
      var galacticCalculation = new Galactic(mercuryCalculator,venusCalculator,marsCalculator,jupiterCalculator);
      console.log(galacticCalculation);

      galacticCalculation.ageCalculator();
      expect(mercuryCalculator).toEqual(.24)
    })

  //   it('expect pass/ should check length of letter', function() {
  //      let letter = "this ia a test sentence";
  //      var alphabet1 = new Alphabet(letter);
  //      var newSentence = alphabet1.length;
  //      alphabet1.naMes();
  //        expect(alphabet1.newSentence).toEqual(newSentence);
  //
  //   })
  //
  //   it('should pass/ should add count characters in a sentence', function() {
  //     let letter = "this ia a test sentence";
  //      var alphabet1 = new Alphabet(letter);
  //
  //      alphabet1.naMes();
  //       expect(letter.length).toEqual(letter.length);
  //
  //   })
  //
  //
  // }
})
