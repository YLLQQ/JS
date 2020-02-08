var x;//声明一个变量x
x = 0;//通过等号赋值给变量
x;//通过变量获取值

/**
 * 数据类型 
 */
x = 1;//数字
x = 0.01;//整数和实数共用一种数据类型
x = "hello world";//由双引号的文本构成的字符串
x = 'JavaScript';//单引号内的文本同样构成字符串
x = true;
x = false;
x = null;//null是一个特殊的值，意思是“空”
x = undefined;//undefined和null非常相似

/**
 * 对象，对象是名/值对的集合，或字符串到值映射的集合
 * 对象是由花括号括起来的，属性:属性值，属性间以逗号分割
 */
var book = {
    topic: "JavaScript",
    fat: true
}

/**
 * 通过“.”或“[]”来访问属性 
 */
book.topic//=>"JavaScript"
book["fat"]//=>true
book.author = "Flanagan"//通过赋值创建一个新属性
book.contents = {}//{}是一个空对象，它没有属性

/**
 * 数组
 */
var primes = [2, 3, 5, 7];//"["和"]"确定边界
primes[0]//=>2 数组索引由0开始
primes.length//=>4 数组元素个数
primes[primes.length - 1]//=>7 数组最后一个元素
primes[4] = 9;//通过赋值增加新元素
primes[4] = 11;//通过赋值来改变已有元素
var empty = [];//[]是空数组，它具有0个元素
empty.length//=>0

/**
 * 数组和对象中都可以包含另一个数组或对象
 */
var points = [
    { x: 0, y: 0 },
    { x: 1, y: 1 }
]
var data = {
    trial1: [[1, 2], [3, 4]],
    trial2: [[2, 3], [4, 5]]
}

/**
 * 运算符
 */
3 + 2//=>5
3 - 2//=>1
3 * 2//=>6
3 / 2//=>1.5
points[1].x - points[0].x//=>1
"3" + "2"//=>"32" “+”可以完成加法运算可以完成字符串连接

var count = 0;
count++;//自增1
count--;//自减1
count += 2;//自增2
count *= 3;//自乘3
count//=>6

/**
 *关系运算符
 */
var x = 2, y = 3;
x == y//=>false
x != y//=>true
x < y//=>true
x <= y//=>true
x > y//=>false
x >= y//=>false
"two" == "three"//=>false 两个字符串不相等
"two" > "three"//=>true "tw"在字母表中的索引大于"th"
false == (x > y);//=>true

/**
 * 逻辑运算符
 */
(x == 2) && (y == 3);//=>true
(x > 3) || (y < 3);//=>false
!(x == y);//true

/**
 * 函数，一段带有参数的JavaScript代码段，可以多次调用
 */
function plus1(x) {
    return x + 1;
}

plus1(y);//=>4

// 函数可以赋值给变量
var square = function (x) {
    return x * x;
}

square(plus1(y));//=>16

/**
 * 方法，函数和对象组成
 * 
 * 当函数赋值给对象的属性，我们称之为“方法”，所有的JavaScript都含有方法
 */
var a = [];

a.push(1, 2, 3);
a.reverse();

// 定义自己的方法，“this”关键字是对定义方法的对象的引用
points.dist = function () {
    var p1 = this[0];
    var p2 = this[1];
    var a = p2.x - p1.x;
    var b = p2.y - p1.y;

    return Math.sqrt(a * a + b * b);
}

points.dist();

/**
 * 控制语句
 */
function abs(x) {
    if (x >= 0) {
        return x;
    } else {
        return -x;
    }
}

function factorial(n) {
    var product = 1;

    while (n > 1) {
        product *= n;
        n--;
    }

    return product;
}

factorial(4);//=>24

function factorial2(n) {
    var i, product = 1;

    for (i = 2; i <= n; i++) {
        product *= i;
    }

    return product;
}

factorial2(5);//=>120

function Point(x, y) {
    this.x = x;
    this.y = y;
}

var p = new Point(1, 1);

//通过给构造函数的prototype对象赋值来给Point对象定义方法 
Point.prototype.r = function () {
    return Math.sqrt(this.x * this.x + this.y * this.y);
}

p.r();
