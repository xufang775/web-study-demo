var makePrison = function (prisoner) {
    return function () {
        return prisoner;
    }
};
var joshPrison = makePrison('Josh Powell');
var mikePrison = makePrison('Mike Mikowski');

console.log(joshPrison());
console.log(mikePrison());