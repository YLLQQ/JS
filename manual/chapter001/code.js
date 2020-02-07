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