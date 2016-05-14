interface ISumFunc {
    (x: number, y: number): number; //like delegate
}

var someSumFunc: (x: ISumFunc) => void; //lambda expression
someSumFunc = (num) => console.log(num); //another lambda expression

someSumFunc = function (num: ISumFunc) {
    num(1,1);
}