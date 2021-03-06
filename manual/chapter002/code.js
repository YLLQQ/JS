/**
 * 字符集为Unicode
 * 区分大小写
 * JavaScript会忽略程序中标识之间的空格，多数情况下会忽略换行符
 * JavaScript将换行符，回车符，杭分隔符，段分隔符识别为行结束符。回车符加换行符在一起被解析为一个单行结束符。
 */

/**
 * 直接量，程序中直接使用的数据值
 */

/**
 * 标识符，用来对变量和函数进行命名，或者用做JavaScript代码中某些循环语句中的跳转位置的标记
 * 标识符必须以字母、下划线或美元符号开始。后续的字符可以是字母、数字、下划线或美元符
 *
 * 出于可移植性和易于书写的考虑，通常我们只使用ASCII字母和数字来书写标识符。
 * 然而需要注意的是，JavaScript允许标识符中出现Unicode字符全集中的字母和数字。
 */

/**
 * JavaScript使用分号（;）将语句分开。
 * 缺少分隔符，一条语句的结束就称为下一条语句的开始，反之亦然。在JavaScript中，如果语句各自独占一行，通常可以省略语句之间的分号（程序结尾或右花括号之前的分号也可以省略）。
 * 需要注意的是，JavaScript并不是在所有换行处都填补分号；只有在缺少了分号就无法正确解析代码的时候，JavaScript才会填补分号。
 * 换句话讲，如果当前语句和随后的非空格字符不能当成一个整体来分析的话，JavaScript就在当前语句行结束处填补分号。
 *
 * 但有如下例外：1，如果涉及到关键字return，break或continue后紧跟着换行，JavaScript则会在换行处填补分号；
 * 2，涉及到“++”或“--”时 如果将其作为后缀表达式，它和表达式应当在同一行。否则，行尾处将填补分号，同时他们将作为下一行代码的前缀操作符并与之一起解析。
 */

/**
 * JavaScript中的数据类型分为两类：原始类型和对象类型
 * 原始类型包括：数字、字符串、布尔值、null（空）、undefined（未定义）
 * 对象类型，对象是属性的集合，每个属性都有“名/值对组成”。其中有一个特殊对象--全局对象（global object）
 * 通常情况下，对象是“命名值”的无序集合。但数组对象表示带编号的值的有序集合。
 * 另一种特殊对象，函数。函数是具有与它相关联的可执行代码的对象，通过调用函数来运行可执行代码，并返回运算结果。
 * 如果函数用来初始化（使用new运算符）一个新建的对象，我们称之为构造函数。每个构造函数定义了一类对象--由构造函数初始化的对象组成的集合。
 * 类可以看作是对象类型的子类型，除了数组类和函数类之外，JavaScript语言核心定义了其他三种有用的类，日期（Date），正则（RegExp），错误（Error）
 *
 * JavaScript解释器有自己的内存管理机制，可以自动对内存进行垃圾回收。
 * 这意味着程序可以按需创建对象，程序员则不必担心这些对象的销毁和内存回收。
 * 当不再有任何引用指向一个对象，解释器就会知道这个对象没用了，然后自动回收它所占用的内存资源。
 *
 * JavaScript变量是无类型的，变量可以被赋予任何类型的值，同样一个变量也可以重新赋予不同类型的值。
 * 使用var关键字来生命变量。
 * JavaScript采用词法作用域。
 * 不在任何函数内声明的变量称为全局变量，它在JavaScript程序中的任何地方都是可见的。
 * 在函数内声明的变量具有函数作用域，并且只在函数内可见。
 */

/**
 * JavaScript不区分整数值和浮点数值。
 * JavaScript中的所有数字均用浮点数值表示。采用IEEE754标准定义的64位浮点格式表示数字。
 * 当一个数字直接出现在JavaScript中，我们称之为数字直接量
 * 注意，任何数字直接添加负号可以得到他们的负值。但负号是一元求反运算符，并不是数字直接量语法的组成部分。
 *
 * JavaScript中的算数运算在溢出（overflow）、下溢（underflow）或被零整除时不会报错。
 *
 * 当数字运算结果超出JavaScript所能表示的数字上限（溢出），结果为一个特殊的无穷大值。
 * 同样的，当负数的值超过JavaScript所能表示的负数范围，结果为负无穷大，在JavaScript中以-Infinity表示。
 * 无穷大值的行为特性和我们所期望的保持一致：基于他们的加减乘除运算结果仍是无穷大。
 *
 * 下溢（underflow）是当运算结果无限接近于零并比JavaScript能表示的最小值的时候发生的一种情形。
 * 这种情况下，JavaScript会返回0.当一个负数值发生下溢时，JavaScript返回一个特殊的值“负零”。
 * 这个值几乎和正常的零完全一样。
 *
 * 被零整除在JavaScript中并不报错：它只是简单的返回无穷大（Infinity）或负无穷大（-Infinity）。
 * 但有一个例外，零除以零是没有意义的，这种整除运算结果也是一个非数字（not-a-number）的值，用NaN表示。
 * 无穷大除以无穷大，给任意负数作开方运算或者算数运算符与不是数字或无法转换为数字的操作数一起使用时都将返回NaN。
 *
 * JavaScript中的非数字值有一点特殊：它和任何值都不相等，包括自身。
 * 也就是说，没办法通过x==NaN来判断变量x是否是NaN。
 * 相反，应当使用x!=NaN来判断，当且仅当x为NaN的时候，表达式的结果才为true。
 * 函数isNaN()的作用与之类似，如果参数是NaN或者是一个非数字值（比如字符串或对象），则返回true。
 * isFinite()，在参数不是NaN,Infinity或-Infinity的时候返回true。
 *
 * 负零值和正零值几乎一模一样，除了作为除数之外（正无穷大和负无穷大不等）
 *
 * JavaScript中的数字具有足够的精确度，并可以近似于0.1.
 */

/**
 * JavaScript语言核心包括Date()函数，用来创建表示日期和时间的对象。
 *
 * getMonth()从0开始计数月份
 * getDate()从1开始计数的天数
 * getDay()得到星期几，0代表星期日，5，代表星期一
 */

/**
 * 字符串是一组由16位值组成的不可变的有序序列，每个字符通常来自于Unicode字符集。
 * 字符串的长度是其所含16位值的个数。
 * JavaScript字符串和其数组的索引从零开始。
 * 空字符串（empty string）长度为0，JavaScript中并没有表示单个字符的“字符型”。
 */

/**
 * undefined, null, 0, -0, NaN, ""(空字符串)，这些值会被转换为false。
 * 所有其他值，包括所有对象（数组）都会被转换成true。
 * false和上面6个可以转换为false的值有时称为假值，其他的值称为真值。
 * JavaScript期望使用一个布尔值的时候，假值会被当为false，真值会被当成true。
 */

/**
 * null，表示一个特殊值，常用来描述“空值”。
 * 对null执行typeof，结果显示“object”，也就是说，可以将null认为是一个特殊的对象值，含义是“非对象”。
 * 但通常认为null是它自由类型的唯一一个成员，它可以表示数字、字符串和对象是“无值”的。
 *
 * undefined，表示更深层次的“空值”，表明变量没有初始化。
 * 如果要查询对象属性或数组元素的值时返回undefined则说明这个属性或元素不存在。
 * 如果函数没有返回任何值，则返回undefined。引用没有提供实参的函数形参的值也会得到undefined。
 * undefined是预定义的全局变量，表示“未定义”。
 */

/**
 * 全局对象
 *
 * 全局属性：undefiend、Infinity和NaN
 * 全局函数：isNaN() parseInt() eval()
 * 构造函数：Date() RegExp() String() Object() Array()
 * 全局对象：Math JSON
 *
 * “==”等于运算符将原始值和其包装对象视为相等，但“===”全等运算符将它们视为不等。
 */

/**
 * 声明变量使用var关键字，如果未在声明语句中给变量指定初始值，那么虽然声明了这个变量，但在给它存入一个值之前，它的初始值都是undefined。
 *
 * 在函数体内，局部变量的优先级高于同名的全局变量。
 * 尽管在全局作用域编写代码时可以不写var，但声明局部变量时则必须使用var语句。
 * 
 * 由于函数作用域的特性，局部变量在整个函数体始终是有定义的，也就是说，在函数体内局部变量遮盖了同名的全局变量。
 * 
 * 当使用var声明一个变量时，创建这个属性是不可配置的，也就是说这个变量无法通过delete运算符删除。
 * 如果没有使用严格模式并给一个未声明的变量赋值的话，JavaScript会自动创建一个全局变量。
 * 以这种方式创建的变量是全局对象的正常的可配置属性，并且可以删除它们。
 */

/**
 * this，并不是一个常量，它在程序的不同地方返回的值也不相同。
 * this关键字经常在面向对象编程中出现。
 * 在一个方法体内，this返回调用这个方法的对象。
 */
