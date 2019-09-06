import { Galactic } from './../src/test-project.js'

  describe('Galactic', function() {
    //first test to fail
    it('should expect to fail/if it doesnt return a planet', function() {
      let mercuryCalculator = "Mercury";
      let venusCalculator = "Venus";
      let mmarsCalculator = "Mars";
      let jupiterCalculator = "Jupiter";
      let galacticCalulation = new Galactic(mercuryCalculator,venusCalculator,marsCalculator,jupiterCalculator);
      console.log(jupiterCalculator);

      expect(galacticCalulation.jupiterCalculator).toEqual(jupiterCalculator)
    })
  //
  //   it('expect pass/ userinput through letter', function() {
  //     let letter = "a";
  //     var alphabet1 = new Alphabet(letter);
  //     console.log(alphabet1);
  //     alphabet1.naMes();
  //     expect(alphabet1.letter).toEqual("a")
  //   })
  //
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
