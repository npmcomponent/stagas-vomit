
# vomit

control flow callback<->promise magic helper

## example

```js
var math = {};

math.sum = function (a, b, cb) { cb(null, a+b); };
math.mul = function (a, b, cb) { cb(null, a*b); };

vomit(math, function (sum, mul) {
  return mul(sum(1, sum(2,2)), 3);
}, function(err, result){
  console.log(result); // 15
});
```

## License

MIT
