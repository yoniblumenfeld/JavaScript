let arr=[1,2,3,4];
arr.reduce(function (s,v,idx) {
   console.log(s);
   console.log(idx);
   console.log(v);
   return s+v;
});