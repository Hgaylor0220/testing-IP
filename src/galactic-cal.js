// Back-end
export class GalacticCalculator {
  constructor(age,mercury,venus,mars,jupiter){
    this.age = age;
    this.mercury = mercury;
    this.venus = venus;
    this.mars = mars;
    this.jupiter = jupiter;
}
  mercuryCal() {
     this.mercury = this.age / .22;
}
  venusCal() {
    this.venus = this.age / .62;
}
  marsCal() {
    this.mars = this.age / 1.88;
}
  jupiterCal() {
    this.jupiter = this.age / 11.86;
}


};
