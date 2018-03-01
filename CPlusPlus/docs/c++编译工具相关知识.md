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

性能
测试证明Clang编译Objective-C代码时速度为GCC的3倍[4]，还能针对用户发生的编译错误准确地给出建议[5]。
参考 [wiki/Clang](https://zh.wikipedia.org/wiki/Clang)

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

## ICC

Intel C++编译器（英语：Intel C++ Compiler），经常被称为icc 或 icl，一种C语言与C++的编译器，可以在Mac OS X，Linux与Microsoft Windows上运行，由英特尔公司研发。
对于IA-32与Intel x86-64架构，这个编译器能产生优化的代码，但是对于非Intel但是兼容于Intel架构的处理器，如AMD处理器，这个编译器就无法产出优化的代码。针对IA-64（Itanium 2）处理器，这个编译器的特定版本（11.1版），适用于发展在Linux平台上的应用程序。[icc](https://zh.wikipedia.org/wiki/Intel_C%2B%2B%E7%B7%A8%E8%AD%AF%E5%99%A8)
Intel Compiler曾经被指控编译出来的Code会检查目标电脑的CPU Vendor ID，如果不是Genuine Intel(Intel本身CPU的Vendor ID)，就会刻意“反优化”代码，造成在非Intel CPU的电脑上运行性能低落。根据测试，这个差异可以高达47%。这不仅仅是“针对Intel优化”而已，而是刻意的反优化竞争对手的code。这同时也替Intel惹来了反托拉斯法的调查。[3]

## Boost C++ Libraries

Boost C++ 库（Libraries）是一组扩充C++功能的经过同行评审（Peer-reviewed）且开放源代码程序库。大多数的函数为了能够以开放源代码、封闭项目的方式运作，而授权于Boost软件许可协议（Boost Software License）之下。许多Boost的开发人员是来自C++标准委员会，而部分的Boost库成为C++的TR1标准之一。[1]

为了要确保库的效率与弹性，Boost广泛的使用模板（template）功能。而它是针对各式领域的C++用户与应用领域（Application Domain）上，包含的库类别从像smart_ptr 库这种类通用库，到像是文件系统的操作系统抽象层，甚至能够利用Boost来开发额外的库或是给高级的C++用户利用，像是MPL。

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

## Cygwin [链接](https://zh.wikipedia.org/wiki/Cygwin)

Cygwin是许多自由软件的集合，最初由Cygnus Solutions开发，用于各种版本的Microsoft Windows上，运行类UNIX系统。Cygwin的主要目的是通过重新编译，将POSIX系统（例如Linux、BSD，以及其他Unix系统）上的软件移植到Windows上。Cygwin移植工作在Windows NT上比较好，在Windows 95和Windows 98上，相对差劲一些。目前Cygwin由Red Hat等负责维护。

目录 
1	简介
2	历史
3	参见
4	外部链接
简介
Cygwin包括了一套库，该库在Win32系统下实现了POSIX系统调用的API；还有一套GNU开发工具集（比如GCC、GDB），这样可以进行简单的软件开发；还有一些UNIX系统下的常见程序。2001年，新增了X Window System。

另外还有一个名为MinGW的库，可以跟Windows本地的MSVCRT库（Windows API）一起工作。MinGW占用内存、硬盘空间都比较少，能够链接到任意软件，但它对POSIX规范的实现没有Cygwin库完备。

Red Hat规定，Cygwin库遵守GNU通用公共许可证，但也可以跟匹配开源定义的自由软件链接。Red Hat另有价格不菲的许可协议，这样使用Cygwin库的专属软件，就可以进行再发布。

用户可以通过Cygwin Mailing Lists，订阅若干个Cygwin相关的邮件列表。

历史
Cygwin始于1995年，最初作为Cygnus工程师Steve Chamberlain的一个项目。当时Windows NT和Windows 95将COFF作为目标代码，而GNU已经支持x86和COFF，以及C语言库newlib。这样至少在理论上，可以将GCC重定向，作为交叉编译器，从而产生能在Windows上运行的可执行程序。在后来的实践中，这很快实现了。

接下来的问题是如何在Windows系统中引导编译器，这需要对Unix的足够模拟，以使Autoconf的shell script可以运行，这样就用到像bash这样的shell，进而需要Fork和standard I/O。Windows含有类似的功能，所以Cygwin库只需要进行翻译调用、管理私有数据，比如文件描述符。

1996年后，由于看到cygwin可以提供Windows系统上的Cygnus嵌入式工具（以往的方案是使用DJGPP），其他工程师也加入了进来。特别吸引人的是，Cygwin可以实现three-way cross-compile，例如可以在Sun工作站上build，如此就形成Windows-x-MIPS cross-compiler，这样比单纯在PC上编译要快不少。1998年起，Cygnus开始将Cygwin包作为产品来提供。

## MinGW

MinGW（Minimalist GNU for Windows），又称mingw32，是将GCC编译器和GNU Binutils移植到Win32平台下的产物，包括一系列头文件（Win32API）、库和可执行文件。
另有可用于产生32位及64位Windows可执行文件的MinGW-w64项目，是从原本MinGW产生的分支[1]。如今已经独立发展[2]。
### 历史
MinGW是从Cygwin（1.3.3版）基础上发展而来

MinGW（Minimalist GNU for Windows），又称mingw32，是将GCC编译器和GNU Binutils移植到Win32平台下的产物，包括一系列头文件（Win32API）、库和可执行文件。
另有可用于产生32位及64位Windows可执行文件的MinGW-w64项目，是从原本MinGW产生的分支[1]。如今已经独立发展[2]。

#### 参考：

[知乎](https://www.zhihu.com/question/27455963)

[GNU工具链](https://zh.wikipedia.org/wiki/GNU%E5%B7%A5%E5%85%B7%E9%93%BE)

[gcc](https://zh.wikipedia.org/wiki/GCC)

[Cygwin](https://zh.wikipedia.org/wiki/Cygwin)

[gcc](https://zh.wikipedia.org/wiki/GCC)

[wiki](https://zh.wikipedia.org/wiki/Boost_C%2B%2B_Libraries)
