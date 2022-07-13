
document.querySelectorAll('input').forEach(function(element){
    element.addEventListener('change', function () {
        this.value = this.value.replace(',','.')
    })
})
//calc Gkal -> kWt
calc_1_arg_1.addEventListener('change', function(){
    var GkalValue = parseFloat(this.value);
    var result = GkalValue * 1163;

    calc_1_result.value = result;
})
//calc kWt -> Gkal
calc_2_arg_1.addEventListener('change', function(){
    var kWtValue = parseFloat(this.value);
    var result = kWtValue / 1163;

    calc_2_result.value = result;
})
//calc kWt -> Gkal
calc_3.addEventListener('change', function(){
    var GkalValue = parseFloat(calc_3_arg_1.value);
    var T1Value = parseFloat(calc_3_arg_2.value);
    var T2Value = parseFloat(calc_3_arg_3.value);
    var result = GkalValue * 1000 / (T2Value - T1Value);
    calc_3_result.value = result;
})

//calc kWt -> Gkal
calc_4.addEventListener('change', function(){
    var kWtValue = parseFloat(calc_4_arg_1.value);
    var T1Value = parseFloat(calc_4_arg_2.value);
    var T2Value = parseFloat(calc_4_arg_3.value);
    var result = kWtValue / ((T2Value - T1Value) * 4183 * 1000 ) * 3600000;
    calc_4_result.value = result;
})
//calc check electric meter
calc_5.addEventListener('change', function(){
    var U = parseFloat(calc_5_arg_U.value);
    var I = parseFloat(calc_5_arg_I.value);
    var A = parseFloat(calc_5_arg_A.value);
    var N = parseFloat(calc_5_arg_N.value);
    var T = parseFloat(calc_5_arg_T.value);
    var Pu = Math.round((3600 * N) / (A *T) *100)/100
    var Pf = Math.round(U*I / 10)/100
    var Pd = Math.round( Math.abs(Pf-Pu) / Pu *100 )
    calc_5_result_u.value = Pu;
    calc_5_result_f.value = Pf;
    calc_5_result_d.value = Pd;
})