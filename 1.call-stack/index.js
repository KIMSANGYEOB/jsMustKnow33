function three() {
    console.log('call-stack!');
    throw Error('Error');
}

function two() {
    three();
}

function one() {
    two();
}

function zero() {
    const a = 1;
    one();
}
debugger;
zero();