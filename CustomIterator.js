
var costumeIterator = {
    [Symbol.iterator]() {
        var n1 = 1,
            n2 = 2;
        return {
            [Symbol.iterator]() {
                return this;
            },

            next() {
                let [tmp1, tmp2] = [n1, n2];
                n2 = n2 + 1;
                n1 = tmp2;
                if (n2 < 100) return { value: tmp1 + tmp2, done: false };
                else return { value: undefined, done: true };
            },
            return(v) {
                console.log("stopped before end");
                return { value: v, done: true };
            }
        };
    }
};


var it = costumeIterator[Symbol.iterator]();

for (let i = 0; i < 101; i++) {
    console.log(it.next().value);
}

