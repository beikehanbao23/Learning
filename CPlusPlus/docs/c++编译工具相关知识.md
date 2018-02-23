# c++编译相关知识

如下图


![](l1.jpg)

## gcc

GNU编译器套装（英语：GNU Compiler Collection，缩写为GCC）它可以编译很多种编程语言（括C、C++、Objective-C、Fortran、Java等等）。当你的程序只有一个源文件时，直接就可以用gcc命令编译它。但是当你的程序包含很多个源文件时，用gcc命令逐个去编译时，你就很容易混乱而且工作量大所以出现了make工具

以GPL及LGPL许可证所发行的自由软件，也是GNU项目的关键部分，也是GNU工具链的主要组成部分之一。GCC（特别是其中的C语言编译器）也常被认为是跨平台编译器的事实标准。1985年由理查德·马修·斯托曼开始发展，现在由自由软件基金会负责维护工作。

原名为GNU C语言编译器（GNU C Compiler），因为它原本只能处理C语言。GCC在发布后很快地得到扩展，变得可处理C++。之后也变得可处理Fortran、Pascal、Objective-C、Java、Ada，Go与其他语言。

许多操作系统，包括许多类Unix系统，如Linux及BSD家族都采用GCC作为标准编译器。苹果电脑预装的Mac OS X操作系统也采用这个编译器。

GCC原本用C开发，后来因为LLVM、Clang的崛起，它更快地将开发语言转换为C++。许多C的爱好者在对C++一知半解的情况下主观认定C++的性能一定会输给C，但是Taylor给出了不同的意见，并表明C++不但性能不输给C，而且能设计出更好，更容易维护的程序（GCC's move to C++）。

## g++

g++则是GCC的c++编译器。

## LLVM

LLVM是一个自由软件项目，它是一种编译器基础设施，以C++写成。它是为了任意一种编程语言而写成的程序，利用虚拟技术创造出编译时期、链接时期、运行时期以及“闲置时期”的最优化。它最早以C/C++为实现对象，而目前它已支持包括ActionScript、Ada、D语言、Fortran、GLSL、Haskell、Java字节码、Objective-C、Swift、Python、Ruby、Rust、Scala[1]以及C#[2]等语言。

LLVM项目的发展起源于2000年伊利诺伊大学厄巴纳-香槟分校维克拉姆·艾夫（Vikram Adve）与克里斯·拉特纳（Chris Lattner）的研究，他们想要为所有静态及动态语言创造出动态的编译技术。LLVM是以BSD授权来发展的开源软件。2005年，苹果电脑雇用了克里斯·拉特纳及他的团队为苹果电脑开发应用程序系统[3]，LLVM为现今Mac OS X及iOS开发工具的一部分。

LLVM的命名最早源自于底层虚拟机（Low Level Virtual Machine）的首字母缩写[4]，由于这个项目的范围并不局限于创建一个虚拟机，这个缩写导致了广泛的疑惑。LLVM开始成长之后，成为众多编译工具及低级工具技术的统称，使得这个名字变得更不贴切，开发者因而决定放弃这个缩写的意涵[5]，现今LLVM已单纯成为一个品牌，适用于LLVM下的所有项目，包含LLVM中介码（LLVM IR）、LLVM除错工具、LLVM C++标准库等。

因LLVM对产业的贡献，计算机协会于2012年将ACM软件系统奖授与Adve、Lattner及Evan Cheng[6]。

## Clang
Clang（发音为/ˈklæŋ/类似英文单字clang[1]） 是一个C、C++、Objective-C和Objective-C++编程语言的编译器前端。它采用了底层虚拟机（LLVM）作为其后端。它的目标是提供一个GNU编译器套装（GCC）的替代品。作者是克里斯·拉特纳（Chris Lattner），在苹果公司的赞助支持下进行开发，而源代码授权是使用类BSD的伊利诺伊大学厄巴纳-香槟分校开源码许可。

Clang项目包括Clang前端和Clang静态分析器等。[2]

目录 
1	概述
2	性能
3	版本历史
4	参考文献
5	外部链接
概述
这个软件项目在2005年由苹果电脑发起，是LLVM编译器工具集的前端（front-end），目的是输出代码对应的抽象语法树（Abstract Syntax Tree, AST），并将代码编译成LLVM Bitcode。接着在后端（back-end）使用LLVM编译成平台相关的机器语言 。Clang支持C、C++、Objective C。

在Clang语言中，使用Stmt来代表statement。Clang代码的单元（unit）皆为语句（statement），语法树的节点（node）类型就是Stmt。另外Clang的表达式（Expression）也是语句的一种，Clang使用Expr来代表Expression，Expr本身继承自Stmt。节点之下有子节点列表（sub-node-list）。

Clang本身性能优异，其生成的AST所耗用掉的内存仅仅是GCC的20%左右。2014年1月发行的FreeBSD 10.0版将Clang/LLVM作为默认编译器[3]。



## make

make 是用来执行Makefile的，Makefile是类unix环境下(比如Linux)的类似于批处理的"脚本"文件。其基本语法是: 目标+依赖+命令，只有在目标文件不存在，或目标比依赖的文件更旧，命令才会被执行。由此可见，Makefile和make可适用于任意工作，不限于编程。比如，可以用来管理latex。Makefile+make可理解为类unix环境下的项目管理工具，但它太基础了，抽象程度不高，而且在windows下不太友好(针对visual studio用户)，makefile在一些简单的工程完全可以人工手动操作下，但是当工程非常大的时候，手写makefile也是非常麻烦的，如果换了个平台makefile又要重新修改。，于是就有了跨平台项目管理工具cmake。
makefile命令中就包含了调用gcc（也可以是别的编译器）去编译某个源文件的命令。

## cmake

cmake是跨平台项目管理工具，它用更抽象的语法来组织项目。虽然，仍然是目标，依赖之类的东西，但更为抽象和友好，比如你可用math表示数学库，而不需要再具体指定到底是math.dll还是libmath.so，在windows下它会支持生成visual studio的工程，在linux下它会生成Makefile，甚至它还能生成eclipse工程文件。也就是说，从同一个抽象规则出发，它为各个编译器定制工程文件。 cmake是抽象层次更高的项目管理工具，cmake命令执行的CMakeLists.txt文件

## qmake

qmake是Qt专用的项目管理工具，对应的工程文件是*.pro，在Linux下面它也会生成Makefile，当然，在命令行下才会需要手动执行qmake，完全可以在qtcreator这个专用的IDE下面打开*.pro文件，使用qmake命令的繁琐细节不用你管了。
同样的工具还有autotool,但我觉得cmake更方便。最近，我已经完全转入cmake编译工程了，工程目录十分清晰。至于qmake，是qt下编译工具。


到最后CMakeLists.txt文件谁写啊？亲，是你自己手写的。

当然如果你用IDE，类似VS这些一般它都能帮你弄好了，你只需要按一下那个三角形

接着是qmake，qmake是什么，先说一下Qt这个东西。Qt是跨平台C++图形用户界面应用程序开发框架。它既可以开发GUI程序，也可用于开发非GUI程序，比如控制台工具和服务器。简单的说就是C++的第三方库，使用这个库你可以很容易生成windows，Linux，MAC os等等平台的图形界面。现在的Qt还包含了开发各种软件一般需要用到的功能模块（网络，数据库，XML，多线程啊等等），比你直接用C++（只带标准内裤那种）要方便和简单。

你可以用Qt简简单单就实现非常复杂的功能，是因为Qt对C++进行了扩展，你写一行代码，Qt在背后帮你写了几百上千行，而这些多出来的代码就是靠Qt专有的moc编译器（The Meta-Object Compiler）和uic编译器（User Interface Complier）来重新翻译你那一行代码。问题来了，你在进行程序编译前就必须先调用moc和uic对Qt源文件进行预处理，然后再调用编译器进行编译。上面说的那种普通makefile文件是不适用的，它没办法对qt源文件进行预处理。所以qmake就产生了。
qmake工具就是Qt公司制造出来，用来生成Qt 专用makefile文件，这种makefile文件就能自动智能调用moc和uic对源程序进行预处理和编译。qmake当然必须也是跨平台的，跟cmake一样能对应各种平台生成对应makefile文件。15.qmake是根据Qt 工程文件（.pro）来生成对应的makefile的。工程文件（.pro）相对来说比较简单，一般工程你都可以自己手写，但是一般都是由Qt的开发环境 Qt Creator自动生成的，你还是只需要按下那个邪恶三角形就完事了。

还没有完，由于qmake很简单很好用又支持跨平台，而且是可以独立于它的IDE，所以你也可以用在非Qt工程上面，照样可以生成普通的makefile，只要在pro文件中加入CONFIG -= qt  就可以了。


### cmake vs qmake
这样qmake和cmake有什么区别？      

不好意思，cmake也是同样支持Qt程序的，cmake也能生成针对qt 程序的那种特殊makefile，只是cmake的CMakeLists.txt 写起来相对与qmake的pro文件复杂点。     
qmake 是为 Qt 量身打造的，使用起来非常方便，但是cmake功能比qmake强大。     一般的Qt工程你就直接使用qmake就可以了，cmake的强大功能一般人是用不到的。     当你的工程非常大的时候，又有qt部分的子工程，又有其他语言的部分子工程，据说用cmake会方便，我也没试过。


不同平台有不同的toolchain，如gcc，msvc，ndk gcc，clang，要便于切换



#### 参考：

[知乎](https://www.zhihu.com/question/27455963)

[GNU工具链](https://zh.wikipedia.org/wiki/GNU%E5%B7%A5%E5%85%B7%E9%93%BE)

[gcc](https://zh.wikipedia.org/wiki/GCC)

[Cygwin](https://zh.wikipedia.org/wiki/Cygwin)
