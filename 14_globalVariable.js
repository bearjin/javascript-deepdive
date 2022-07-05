const log = console.log;

var x = "global";

function foo() {
  log(x); // undefined
  var x = "local";
}

foo();
log(x); // global

var MYAPP = MYAPP || {};

MYAPP.name = "Lee";

log(MYAPP.name); // Lee

var MYAPP = MYAPP || {};

log(MYAPP);

MYAPP.name = "Kim";

log(MYAPP.name); // Kim
