function outer(){
    let val="outer function";
    function innerOne(){
        let innerone_val=12;
        console.log(val);
    }
    innerOne();                             
    function innerTwo(){
        console.log(innerone_val)
    }
    innerTwo();
}

// outer();

function OUTER(){
    const value="outer value";
    function INNER(){
        console.log("Inner : ", value)
    }
    return INNER;
}
const myfun=OUTER();
console.log(myfun)   // It return the function, so we have to excute ([Function: INNER])
myfun();            //  Inner :  outer value

/* ***************** Note ***************

A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time

*/
