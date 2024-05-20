var func = function (x) {
  console.log(this, x);
};

func(1);

var obj = {
  method: func,
};

obj.method(2);

var obj1 = {
  outer: function () {
    console.log(this);

    var innerFunc = function () {
      console.log(this);
    };
    innerFunc(); // window

    var obj2 = {
      innerMethod: innerFunc,
    };
    obj2.innerMethod(); // obj2
  },
};

obj1.outer(); // obj1

var obj1This = {
  outer: function () {
    console.log(this);

    var innerFunc = function () {
      console.log(this);
    };
    innerFunc(); // window

    var self = this;
    var innerFunc2 = function () {
      console.log(self);
    };
    innerFunc2(); // obj1This
  },
};

obj1This.outer(); // obj1This

var objArrow = {
  outer: function () {
    console.log(this);
    var innerFunc = () => {
      console.log(this);
    };
    innerFunc(); // objArrow
  },
};

objArrow.outer(); // objArrow

setTimeout(function () {
  console.log(this);
}, 300); // window

[1, 2, 3, 4, 5].forEach(function (x) {
  console.log(this, x);
}); // window

document.body.innerHTML += '<button id="a">클릭</button>';
document.body.querySelector("#a").addEventListener("click", function (e) {
  console.log(this, e);
}); // button

var objBind = {
  0: "a",
  1: "b",
  2: "c",
  length: 3,
};

Array.prototype.push.call(obj, "d");
console.log(objBind);

var arrBind = Array.prototype.slice.call(obj);
console.log(arrBind);

var report = {
  sum: 0,
  count: 0,
  add: function () {
    console.log(this);
    var args = Array.prototype.slice.call(arguments);
    args.forEach(function (entry) {
      this.sum += entry;
      ++this.count;
    }, this);
  },
  average: function () {
    console.log(this);
    return this.sum / this.count;
  },
};

report.add(60, 85, 95);
console.log(report.sum, report.count, report.average());
