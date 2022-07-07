'use-strict';

let kvadratas = {
    a:0,
    b:0,
    plotas: function(a,b){
        this.a=a;
        this.b=b;
        let plotas;
        plotas=a*b;
        return plotas;
    },
    perimetras: function(a,b){
        this.a=a;
        this.b=b;
        let perimetras;
        perimetras=(2*a)+(2*b);
        return perimetras;
    },
    istrizaine: function(a,b){
        this.a=a;
        this.b=b;
        let istrizaine;
        istrizaine=a*Math.sqrt(2);
        return istrizaine;   
    }
};

console.log(kvadratas.plotas(5,5));
console.log(kvadratas.perimetras(5,5));
console.log(kvadratas.istrizaine(5,5));

// <p></p> isvedimas