interface IFunc {
    (x: number, y: number): number; //like delegate
}

var someIFunc: IFunc =
    function(x: number, y: number): number {
        return x + y;
    }

var func: (x: IFunc) => void; //lambda declaration
func = (num) => console.log(num); //lambda expression

func = function(num: IFunc) {
    num(1, 1);
}