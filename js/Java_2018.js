// JavaScript Document 
window.onload = function(){     
var arrText1 = [
	"1.1 计算机语言发展史以及未来方向",
	"1.2 常见编程语言介绍",
	"1.3.1 Java发展简史",
	"1.3.2 Java的核心优势",
	"1.3.3 Java各版本的含义",
	"1.3.4 Java的特性和优势",
	"1.3.5 Java应用程序的运行机制",
	"1.3.6 JVM、JRE和JDK",
	"1.4.1 JDK下载和安装",
	"1.4.2 环境变量Path的配置",
	"1.4.3 测试JDK安装成功",
	"1.5.1 开发第一个Java程序",
	"1.5.2 第一个程序常见错误",
	"1.5.3 第一个Java程序的总结和提升",
	"1.5.4 最常用DOS命令",
	"1.6 常用Java开发工具",
	"1.7 eclipse使用10分钟入门",
	"1.7.1 下载和安装eclipse",
	"1.7.2 在eclipse中创建Java项目",
	"1.7.3 使用eclipse开发和运行Java程序",
	"1.8 30分钟完成桌球小游戏项目"
	];
	
	var arrText2 = [
	"2.1 注释",
	"2.2 标识符",
	"2.3 Java中的关键字_保留字",
	"2.4.1 变量的本质",
	"2.4.2 变量的分类",
	"2.5 常量(Constant)",
	"2.6 基本数据类型(primitive data type)",
	"2.6.1 整型变量_常量",
	"2.6.2 浮点型变量_常量",
	"2.6.3 字符型变量_常量",
	"2.6.4 boolean类型变量_常量",
	"2.7 运算符(operator)",
	"2.7.1 算术运算符",
	"2.7.2 赋值及其扩展赋值运算符",
	"2.7.3 关系运算符",
	"2.7.4 逻辑运算符",
	"2.7.5 位运算符",
	"2.7.6 字符串连接符",
	"2.7.7 条件运算符",
	"2.7.8 运算符优先级的问题",
	"2.8.1 自动类型转换",
	"2.8.2 强制类型转换",
	"2.8.3 基本类型转化时常见错误和问题",
	"2.9 简单的键盘输入和输出",
	"第二章 总结",
	"第二章 作业"
	];
	
	var arrText3 = [
	"3.0 控制语句",
	"3.1 选择结构",
	"3.1.1 if单选择结构",
	"3.1.2 if-else双选择结构",
	"3.1.3 if-else if-else多选择结构",
	"3.1.4 switch多选择结构",
	"3.2 循环结构",
	"3.2.1 while循环",
	"3.2.2 do-while循环",
	"3.2.3 for循环",
	"3.2.4 嵌套循环",
	"3.2.5 break语句和continue语句",
	"3.2.6 带标签的break和continue",
	"3.3 语句块",
	"3.4 方法",
	"3.5 方法的重载(overload)",
	"3.6 递归结构",
	"第三章 总结",
	"第三章 作业"
	];
	
	var arrText4 = [
	"4.1 面向过程和面向对象",
	"4.2 对象的进化史(数据管理和企业管理共通之处)",
	"4.3 对象和类的概念",
	"4.3.1 第一个类的定义",
	"4.3.2 属性(field，或者叫成员变量)",
	"4.3.3 方法",
	"4.3.4 一个典型类的定义和UML图",
	"4.4 面向对象的内存分析",
	"4.5 构造方法",
	"4.6 构造方法的重载",
	"4.7 垃圾回收机制(Garbage Collection)",
	"4.7.1 垃圾回收原理和算法",
	"4.7.2 通用的分代垃圾回收机制",
	"4.7.3 JVM调优和Full GC",
	"4.7.4 开发中容易造成内存泄露的操作",
	"4.8 this关键字",
	"4.9 static 关键字",
	"4.10 静态初始化块",
	"4.11 参数传值机制",
	"4.12 包",
	"4.13 package",
	"4.13.1 JDK中的主要包",
	"4.13.2 导入类import",
	"4.13.3 静态导入",
	"第四章 总结",
	"第四章 作业"
	];
	
	var arrText5 = [
	"5.1.1 继承的实现",
	"5.1.2 instanceof运算符",
	"5.1.3 继承使用要点",
	"5.1.4 方法的重写override",
	"5.2.1 Object类基本特性",
	"5.2.2 toString方法",
	"5.2.3 ==和equals方法",
	"5.3 super关键字",
	"5.3.1 继承树追溯",
	"5.4.1 封装的作用和含义",
	"5.4.2 封装的实现—使用访问控制符",
	"5.4.3 封装的使用细节",
	"5.5 多态(polymorphism)",
	"5.6 对象的转型(casting)",
	"5.7 final关键字",
	"5.8 抽象方法和抽象类",
	"5.9.1 接口的作用",
	"5.9.2 如何定义和使用接口",
	"5.9.3 接口的多继承",
	"5.9.4 面向接口编程",
	"5.10.1 内部类的概念",
	"5.10.2 内部类的分类",
	"5.11.1 String基础",
	"5.11.2 String类和常量池",
	"5.11.3 阅读API文档",
	"5.11.4 String类常用的方法",
	"5.11.5 字符串相等的判断",
	"5.12.1 开闭原则",
	"5.12.2 模板方法模式和回调机制",
	"5.12.3 组合模式"
	];
	
	var arrText6 = [
	"6.1 导引问题",
	"6.2 异常(Exception)的概念",
	"6.3 异常分类",
	"6.3.1 Error",
	"6.3.2 Exception",
	"6.3.3 RuntimeException运行时异常",
	"6.3.4 CheckedException已检查异常",
	"6.4 异常的处理方式之一：捕获异常",
	"6.5 异常的处理方式之二：声明异常(throws子句)",
	"6.6 自定义异常",
	"6.7 如何利用百度解决异常问题",
	"第六章 总结"
	];
	
	var arrText7 = [
	"7.1 数组概述和特点",
	"7.2.1 数组声明",
	"7.2.2 初始化",
	"7.3.1 数组的遍历",
	"7.3.2 for-each循环",
	"7.3.3 数组的拷贝",
	"7.3.4 java.util.Arrays类",
	"7.4 多维数组",
	"7.5 数组存储表格数据",
	"7.6.1 冒泡排序的基础算法",
	"7.6.2 冒泡排序的优化算法",
	"7.7 二分法查找",
	"第七章 总结",
	"第七章作业"
	];
	
	var arrText8 = [
	"8.1.1 包装类基本知识",
	"8.1.2 包装类的用途",
	"8.1.3 自动装箱和拆箱",
	"8.1.4 包装类的缓存问题",
	"8.2.1 String类",
	"8.2.2 StringBuffer和StringBuilder",
	"8.2.3 不可变和可变字符序列使用陷阱",
	"8.3 时间处理相关类",
	"8.3.1 Date时间类(java.util.Date)",
	"8.3.2 DateFormat类和SimpleDateFormat类",
	"8.3.3 Calendar日历类",
	"8.4 Math类",
	"8.5.1 File类的基本用法",
	"8.5.2 递归遍历目录结构和树状展现",
	"8.6 枚举",
	"第八章 总结",
	"第八章 作业"
	];
	
	var arrText9 = [
	"9.1 泛型Generics",
	"9.1.1 自定义泛型",
	"9.1.2 容器中使用泛型",
	"9.2 Collection接口",
	"9.3.1 List特点和常用方法",
	"9.3.2 ArrayList特点和底层实现",
	"9.3.3 LinkedList特点和底层实现",
	"9.3.4 Vector向量",
	"9.4 Map接口",
	"9.4.1 HashMap和HashTable",
	"9.4.2 HashMap底层实现详解",
	"9.4.3 二叉树和红黑二叉树",
	"9.4.4 TreeMap的使用和底层实现",
	"9.5 Set接口",
	"9.5.1 HashSet基本使用",
	"9.5.2 HashSet底层实现",
	"9.5.3 TreeSet的使用和底层实现",
	"9.6.1 迭代器介绍",
	"9.6.2 使用Iterator迭代器遍历容器元素（List_Set_Map）",
	"9.7 遍历集合的方法总结",
	"9.8 Collections工具类",
	"第九章 总结",
	"第九章 作业"
	];
	
	var arrText10 = [
	"10.1.2 流的概念",
	"10.1.3 第一个简单的IO流程序及深入理解",
	"10.1.4Java中流的概念细分",
	"10.1.5 Java中IO流类的体系",
	"10.1.6 四大IO抽象类",
	"10.2.1 文件字节流",
	"10.2.2 文件字符流",
	"10.2.3 缓冲字节流",
	"10.2.4 缓冲字符流",
	"10.2.5 字节数组流",
	"10.2.6 数据流",
	"10.2.7 对象流",
	"10.2.8 转换流",
	"10.3.1 序列化和反序列化是什么",
	"10.3.2 序列化涉及的类和接口",
	"10.3.3 序列化_反序列化的步骤和实例",
	"10.4.1 装饰器模式简介",
	"10.4.2 IO流体系中的装饰器模式",
	"10.5 Apache IOUtils和FileUtils的使用",
	"10.5.1 Apache基金会介绍",
	"10.5.2 FileUtils的妙用",
	"10.5.3 IOUtils的妙用",
	"第十章 总结",
	"第十章 作业"
	];
	
	var arrText11= [
	"11.1 基本概念",
	"11.1.1 程序",
	"11.1.2 进程",
	"11.1.3 线程",
	"11.1.4 线程和进程的区别",
	"11.1.5 进程与程序的区别",
	"11.2 Java中如何实现多线程",
	"11.2.1 通过继承Thread类实现多线程",
	"11.2.2 通过Runnable接口实现多线程",
	"11.3.1 线程状态",
	"11.3.2 终止线程的典型方式",
	"11.3.3 暂停线程执行sleep_yield",
	"11.3.4 线程的联合join()",
	"11.4.1 获取线程基本信息的方法",
	"11.4.2 线程的优先级",
	"11.5.1 什么是线程同步",
	"11.5.2 实现线程同步",
	"11.5.3 死锁及解决方案",
	"11.6 线程并发协作(生产者_消费者模式)",
	"11.7 任务定时调度",
	"第十一章 总结",
	"第十一章 作业"
	];
	
	var arrText12= [
	"12.1 基本概念",
	"12.2.1 TCP协议和UDP协议的联系和区别",
	"12.2.2 TCP协议",
	"12.2.3 UDP协议",
	"12.3 Java网络编程",
	"12.3.1 InetAddress",
	"12.3.2 InetSocketAddress",
	"12.3.3 URL类",
	"12.3.4 基于TCP协议的Socket编程和通信",
	"12.3.5 UDP通讯的实现",
	"第十二章 总结",
	"第十二章 作业"];
	
	var arrText13 = [
	"13.1 简介和项目目标",
	"13.2 游戏项目基本功能开发",
	"13.2.1 AWT技术画出游戏主窗口(0.1版)_01",
	"13.2.1 AWT技术画出游戏主窗口(0.1版)_02",
	"13.2.2 图形和文本绘制 (0.2版)",
	"13.2.3 ImageIO实现图片加载技术(0.3版)",
	"13.2.4 多线程和内部类实现动画效果(0.4版)",
	"13.2.5 双缓冲技术解决闪烁问题(0.4)",
	"13.2.6 GameObject类设计(0.5版)",
	"13.3 飞机类设计(0.6版)",
	"13.3.1 键盘控制原理",
	"13.3.2 飞机类：增加操控功能",
	"13.3.3 主窗口类：增加键盘监听",
	"13.4.1 炮弹类基本设计",
	"13.4.2 炮弹任意角度飞行路径",
	"13.4.3 容器对象存储多发炮弹",
	"13.5.1 矩形检测原理",
	"13.5.2 炮弹和飞机碰撞检测",
	"13.6 爆炸效果的实现(0.9版)",
	"13.6.1 爆炸类的基本设计",
	"13.6.2 主窗口类创建爆炸对象",
	"13.7.1 计时功能",
	"13.7.2 学员开发Java基础小项目案例展示和说明"
	];
	
	var arrNav = [
	"第一章 Java入门",
	"第二章 数据类型和运算符",
	"第三章 控制语句",
	"第四章 Java面向对象基础",
	"第五章Java面向对象进阶",
	"第六章 异常机制",
	"第七章 数组",
	"第八章 常用类",
	"第九章 容器",
	"第十章 IO技术",
	"第十一章 多线程技术",
	"第十二章 网络编程",
	"第十三章 J20飞机游戏项目"
	];
//创建导航框：
var oNav = document.createElement('div');
oNav.id = 'nav';
var oWrap = document.createElement('div');
var oUl = document.createElement('ul');
oWrap.appendChild(oUl);
oNav.appendChild(oWrap);
oWrap.id = 'wrap';
for(var i = 0; i < arrNav.length; i++){
	oUl.innerHTML += '<li class="template">'+arrNav[i]+'</li>';
}
document.body.appendChild(oNav);
var aLi = document.getElementsByClassName('template');
var oContent = document.createElement('div');
oContent.id = 'content';
oRight = document.createElement('div');
oLeft = document.createElement('div');
oContent.appendChild(oLeft);
oContent.appendChild(oRight);
oLeft.id = 'left';
oRight.id = 'right';
var oLeft_ul = document.createElement('ul');
var oRight_ul = document.createElement('ul');
oLeft.appendChild(oLeft_ul);
oRight.appendChild(oRight_ul);
oLeft_ul.className = 'left_ul';
oRight_ul.className = 'right_ul';
document.body.appendChild(oContent);



var oUl_left = document.getElementsByClassName('left_ul')[0];
var oUl_right = document.getElementsByClassName('right_ul')[0];

function fn1(arr,oli){
	//设置一个超链接#arr[i],用户点击这个链接的时候，浏览器将在文档中查找id为arr[i]的元素。
	var str_left = '';
	var str_right = '';
	for(var i = 0; i < arr.length; i++){
		str_left += '<li><a href="#'+ arr[i] +'">'+arr[i]+'</a></li>';	
		str_right += '<li id="'+ arr[i] +'"><img src="images/'+ arr[i] +'.jpg"></li>';		
	}
	oli.onclick = function(){
		oUl_left.innerHTML = str_left;
		oUl_right.innerHTML = str_right;
	}
}


fn1(arrText1,aLi[0]);
fn1(arrText2,aLi[1]);
fn1(arrText3,aLi[2]);
fn1(arrText4,aLi[3]);
fn1(arrText5,aLi[4]);
fn1(arrText6,aLi[5]);
fn1(arrText7,aLi[6]);
fn1(arrText8,aLi[7]);
fn1(arrText9,aLi[8]);
fn1(arrText10,aLi[9]);
fn1(arrText11,aLi[10]);
fn1(arrText12,aLi[11]);
fn1(arrText13,aLi[12]);

// fn1(aUl_left[1],aUl_right[1],arrText2);
// fn1(aUl_left[2],aUl_right[2],arrText3);
// fn1(aUl_left[3],aUl_right[3],arrText4);
// fn1(aUl_left[4],aUl_right[4],arrText5);
// fn1(aUl_left[5],aUl_right[5],arrText6);
// fn1(aUl_left[6],aUl_right[6],arrText7);
// fn1(aUl_left[7],aUl_right[7],arrText8);
// fn1(aUl_left[8],aUl_right[8],arrText9);
// fn1(aUl_left[9],aUl_right[9],arrText10);
// fn1(aUl_left[10],aUl_right[10],arrText11);
// fn1(aUl_left[11],aUl_right[11],arrText12);
// fn1(aUl_left[12],aUl_right[12],arrText13);

}

