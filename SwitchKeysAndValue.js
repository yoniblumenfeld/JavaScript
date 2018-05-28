var test_obj = Object.create(null);
test_obj={
    you:"1",
    me:"2"
};
console.log(switchKeysAndValue.call(test_obj));
console.log(test_obj)
function switchKeysAndValue()
{
    let new_obj=Object.create(null);
    Object.entries(this).forEach(function switchKeysAndValues(x) {
        new_obj[x[1]]=x[0];
    });
    return new_obj;
}
