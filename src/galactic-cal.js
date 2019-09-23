export class GalacticCalculator {
  constructor(age,earthLifeExp) {
    this.age = age;
    this.earthLifeExp = earthLifeExp;
  }
  mercuryLifeCal(){
    return this.age /.22;
  }
  venusLifeCal(){
    return this.age /.62;
  }
  marsLifeCal(){
    return this.age /1.88;
  }
  jupiterLifeCal(){
    return this.age /11.86;
  }
  calculateLifeExpectancy(){
     this.earthLifeExp = 77 - this.age; 
  }
  calculateMercuryLifeExp(){
     return this.earthLifeExp /.22;
  }
  calculateVenusLifeExp(){
     return this.earthLifeExp /.62;
  }
  calculateMarsLifeExp(){
     return this.earthLifeExp /1.88;
  }
  calculateJupiterLifeExp(){
     return this.earthLifeExp /11.86;
  }
}
