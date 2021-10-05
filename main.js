document.getElementById('lbsInput').addEventListener('input',function(e){
    let lbs = e.target.value;
    document.getElementById('grames').innerHTML = lbs/0.0022046;
    document.getElementById('kilograms').innerHTML = lbs/2.2046;
    document.getElementById('ounces').innerHTML = lbs*16;
});