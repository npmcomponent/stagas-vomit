*This repository is a mirror of the [component](http://component.io) module [stagas/vomit](http://github.com/stagas/vomit). It has been modified to work with NPM+Browserify. You can install it using the command `npm install npmcomponent/stagas-vomit`. Please do not open issues or send pull requests against this repo. If you have issues with this repo, report it to [npmcomponent](https://github.com/airportyh/npmcomponent).*

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
