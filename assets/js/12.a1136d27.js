(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{327:function(v,_,t){"use strict";t.r(_);var e=t(7),r=Object(e.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("hr"),v._v(" "),_("p",[v._v("这是本系列笔记的第二个部分。这个部分里，我们来看一看保护模式的一大改变——寻址方法，以及配合而来的保护功能。另一个大改变是对多任务的支持，我们在之后的篇章里再谈。")]),v._v(" "),_("p",[v._v("多提一句，保护模式，protected mode，其实是 protected virtual-address mode 的略称。虚拟内存在保护模式下成为可能，不过这一篇中我们不谈它。另外，本文描述的保护机制皆基于段而言，分页模式下有另外的保护方法。")]),v._v(" "),_("p",[v._v("其余章节如下：")]),v._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"/posts/articles/x86%E6%B1%87%E7%BC%96%E7%AC%94%E8%AE%B0%E7%AC%AC%E4%B8%80%E9%83%A8%E5%88%86"}},[v._v("第一部分: 计算机基础和实模式")])]),v._v(" "),_("li",[_("a",{attrs:{href:"/posts/articles/x86%E6%B1%87%E7%BC%96%E7%AC%94%E8%AE%B0%E7%AC%AC%E4%BA%8C%E9%83%A8%E5%88%86"}},[v._v("第二部分：保护模式下的分段寻址和权限")])]),v._v(" "),_("li",[_("a",{attrs:{href:"/posts/articles/x86%E6%B1%87%E7%BC%96%E7%AC%94%E8%AE%B0%E7%AC%AC%E4%B8%89%E9%83%A8%E5%88%86"}},[v._v("第三部分：多任务支持")])]),v._v(" "),_("li",[_("a",{attrs:{href:"/posts/articles/x86%E6%B1%87%E7%BC%96%E7%AC%94%E8%AE%B0%E7%AC%AC%E5%9B%9B%E9%83%A8%E5%88%86"}},[v._v("第四部分：分页机制")])])]),v._v(" "),_("h2",{attrs:{id:"段寄存器的改变"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#段寄存器的改变"}},[v._v("#")]),v._v(" 段寄存器的改变")]),v._v(" "),_("p",[v._v("上一篇中我们提到，8086 为了增强自己的寻址能力，提出了分段模型。它在段寄存器里存储段基地址，然后利用此地址与偏移地址结合实现寻址。")]),v._v(" "),_("p",[v._v("Intel 在 80286 处理器中提出了新的段选择器设计。80826 还是一个 16 位的处理器，但是它的地址线被继续扩充至 24 位。如此一来，分段访问是不可避免的。\n但是，处理器的设计者没有选择之前的左移策略，而是提出了一个新的段寄存器设计以及随之而来的新的寻址方式，提升了寻址的速度。先来看看新的段寄存器的结构：")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://raw.githubusercontent.com/z1ggy-o/static_resources/main/img/32bits-registers.jpg",alt:""}})]),v._v(" "),_("p",[v._v("如图所示，段寄存器被分为了两个部分：第一个部分是 16 位的"),_("em",[v._v("段选择器")]),v._v("，还有一个对我们隐藏的"),_("em",[v._v("描述符高速缓存器")]),v._v("。我们可以向段选择器部分赋值，但是高速缓存器部分是由处理器自己控制的。")]),v._v(" "),_("p",[v._v("在这个结构之下，我们不再是直接向段选择器赋值段基地址，而是给与一个叫做"),_("em",[v._v("段选择子")]),v._v("的值。然后通过它找到对应的段描述符，最终通过描述符中的记录的段基实现寻址。也就是说，我们现在需要间接性的获得段基地址。")]),v._v(" "),_("p",[v._v("有些人把 80286 的这种工作模式叫做“16 位保护模式”。这样的方式使得 80286 不再需要使用左移的方式来获得段基地址，也同时提供了保护能力。因为 80286 还是 16 位的处理器，虽然寻址能力增强了，但是每个段内还是只能有 16 位的寻址能力。但因为当时软件的缘故，很多人没有利用 286 的保护模式。所以，一般谈到保护模式的时候，都是以 80386 的 32 位架构为例，本文也是如此。但是 286 才是第一个引入保护模式和多任务的处理器，是一个颇具影响力的处理器。")]),v._v(" "),_("h2",{attrs:{id:"新结构下的访问方法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#新结构下的访问方法"}},[v._v("#")]),v._v(" 新结构下的访问方法")]),v._v(" "),_("p",[v._v("上面提到，在新的结构下，我们通过段选择子来找到段描述符，最终实现寻址。那么从哪里找呢？答案是"),_("em",[v._v("描述符表")]),v._v("。我们得先在内存中创建一个描述符表，然后将描述符放入其中，在此之后，才能够进行正常的寻址，这也是处理器总是从实模式开始运行的原因。")]),v._v(" "),_("p",[v._v("描述符的大小是固定的。依据描述符表的基地址以及描述符在表中的 index，就能找到该描述符。描述符在表中的 index 由段选择子提供，而为了记录描述符表的基地址，处理器增加了新的寄存器。")]),v._v(" "),_("p",[v._v("首先，对于整个系统，有一个全局的描述符表，叫做 global descriptor table (GDT)。为了存放它的起始地址，我们有了一个新的寄存器，GDTR。之所以叫“全局”，是相对任务私有空间而言，在这个篇章内，我们先按下不表。")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://raw.githubusercontent.com/z1ggy-o/static_resources/main/img/gdt-gdtr.jpg",alt:""}})]),v._v(" "),_("p",[v._v("当我们为段寄存器赋值新的段选择子时，处理器会自动的从 GDTR 获取基地址，并根据计算获得相应的段描述符。获取到的段描述符被缓存在段寄存器的高速缓存区中。在不改变段选择子的情况下，处理器会直接使用缓存区中的描述符，而不是每次都访问 GDT。")]),v._v(" "),_("p",[v._v("通过描述符表和描述符来进行寻址的方法还可以任务之间的隔离。这一篇章我们先集中于寻址方法，多任务在下一篇再说。")]),v._v(" "),_("h2",{attrs:{id:"保护模式保护些什么"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#保护模式保护些什么"}},[v._v("#")]),v._v(" 保护模式保护些什么？")]),v._v(" "),_("p",[v._v("在 Intel 提出 IA32 的 32 位处理器架构之后，数据线和地址线的长度得到了统一，都是 32 位。如此一来，不需要分段模型，我们也可以随意地访问 32 位数值所能表达的内存空间（4GB）。但是，处理器的设计者没有抛弃分段模型，而是将其目的由增强寻址能力，变为了提供保护能力。")]),v._v(" "),_("p",[v._v("那么保护模式保护了些什么呢？最重要的是三个部分：")]),v._v(" "),_("ul",[_("li",[v._v("访问范围的保护")]),v._v(" "),_("li",[v._v("类型保护")]),v._v(" "),_("li",[v._v("访问权限保护")])]),v._v(" "),_("p",[v._v("下图是段描述符内的各种信息情况。可以看到除了我们需要的段基地址之外，描述符中还添加了许多其他的域。")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://raw.githubusercontent.com/z1ggy-o/static_resources/main/img/segment-descriptor.jpg",alt:""}})]),v._v(" "),_("p",[v._v("其中，"),_("code",[v._v("段界限")]),v._v("部分告诉我们段的长度是多少。处理器会在我们发送请求的时候检测我们给出的 offset 是否超出了段的范围，这是访问范围的保护。")]),v._v(" "),_("p",[v._v("图中还可以看到一个 "),_("code",[v._v("Type")]),v._v(" 区域。它表明该段的类型，是数据段，还是代码段？如果我们想赋值一个数据段给 CS 寄存器从而运行里面的内容，那是被禁止的。这是类型保护。")]),v._v(" "),_("p",[v._v("最后，在图中还有一个 "),_("code",[v._v("DPL")]),v._v(" 区域，即 descriptor privilege level，代表该段的访问权限。处理器会在更改段寄存器内容前，检测访问请求者是否有访问该内存段的权限。")]),v._v(" "),_("p",[v._v("对于各个部分的保护，其具体的检查方式就不在此赘述。大家可以参阅书籍以及处理器手册。")]),v._v(" "),_("h2",{attrs:{id:"保护模式的权级保护"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#保护模式的权级保护"}},[v._v("#")]),v._v(" 保护模式的权级保护")]),v._v(" "),_("p",[v._v("从刚才的图中我们可以看到 DPL 一共是 2 位。所以，我们可以有四个不同的等级，数值越低，则权限等级越高。即，0 级是最高的等级。")]),v._v(" "),_("p",[v._v("权限等级设计使得程序指令所能访问的空间可以得到限制。这是我们想要的，特别是 i32 作为一个为多任务而生的架构，防止恶意程序对其他任务搞破坏是很重要的。")]),v._v(" "),_("p",[v._v("例如，操作系统内核的代码和数据十分重要。将内核所使用的内存段设为高权限，而让一般的程序运行在低权限，如此一来，一般的程序不能访问到高权限的内存地址，也就不能接触内核，从而使得系统的安全性得到了提高。")]),v._v(" "),_("p",[v._v("那么，随之而来的问题是，我们知道段有了自己的访问权限，并且在段描述符中得以表达。可是访问请求者，即"),_("strong",[v._v("指令的权级是如何表达的呢")]),v._v("？")]),v._v(" "),_("p",[v._v("这个问题乍一看有些没头脑。我们都知道，操作系统它有高权限等级，一般用户程序的进程有低权限等级，这不就分开了呗？可是，对于处理器来说，它可不知道什么操作系统和用户程序的区别，这些是我们抽象的逻辑单位。所有程序都是指令流，指令本身可没什么高低的说法。")]),v._v(" "),_("p",[v._v("应对这个问题，聪明的处理器设计者想出了一个法子，就是让 DPL 分饰两角。即，指令所在的段的等级，就是指令的等级。")]),v._v(" "),_("p",[v._v("可执行的指令被存放在代码段中，代码段被赋值给 CS 寄存器。CS 和 IP 两个寄存器引导着下一个将要执行的指令的位置。当一个代码段的描述符被加载到 CS 寄存器后，该段的 DPL 就成为了该段内指令的等级。CS 寄存器中描述符的 DPL 就有了一个新名字，叫 CPL，current privilege level。")]),v._v(" "),_("h2",{attrs:{id:"特权级转换"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#特权级转换"}},[v._v("#")]),v._v(" 特权级转换")]),v._v(" "),_("p",[v._v("上面我们举过一个例子，我们将内核程序的段描述符的 DPL 设置为高等级，将一般用户程序的段描述符的 DPL 设置为低等级。如此一来，就算一般用户知道内核程序的代码和数据在哪，处理器也会阻止它进行访问。")]),v._v(" "),_("p",[v._v("但是这也带来了一个问题，那就是，其实有些内核的内容我们是想要给一般用户程序使用的。例如，内核提供给其他程序的公共函数。现在，这些内容没法被用户程序直接使用了。")]),v._v(" "),_("p",[v._v("解决这个问题的方法倒也直接，把用户指令的权限等级给提高了就行了呗。但是，用户程序是不可能自己给自己提升权限等级的，不然谁想在低等级呢？处理器设计者给出的方案是，提供一些特定的入口，使得正在运行的代码通过这些入口后特权级得到转换。")]),v._v(" "),_("p",[v._v("这种入口有两个，分别是"),_("em",[v._v("依从代码")]),v._v("和"),_("em",[v._v("门")]),v._v("：")]),v._v(" "),_("ul",[_("li",[v._v("依从代码：代码段的描述符中 "),_("code",[v._v("Type")]),v._v(" 域中有一个 "),_("code",[v._v("C")]),v._v(" 位，表明该代码段是否是依存代码。\n"),_("ul",[_("li",[v._v("依存代码可以被比它低等级的程序直接调用。")]),v._v(" "),_("li",[v._v("在跳转控制，载入代码段时，处理器不会改变 CS 中的 CPL 字段。使得依从代码在其调用者的权限等级下运行。")])])]),v._v(" "),_("li",[v._v("门：是一种描述符。和段描述符的使用方法类似，也是被存放在描述符表中。门描述符内存放着目标函数所在代码段的段选择子和段内偏移。（简直是描述符的连接大联欢^.^)\n"),_("ul",[_("li",[v._v("我们可以使用 "),_("code",[v._v("jmp far")]),v._v(" 和 "),_("code",[v._v("call far")]),v._v(" 来调用门，实现代码控制转移。")]),v._v(" "),_("li",[_("code",[v._v("jmp far")]),v._v(" 和依从代码类似，处理器在转移时，不会更改 CS 的 CPL 字段，使得被调用函数工作在请求者的特权级上。")]),v._v(" "),_("li",[_("code",[v._v("call far")]),v._v(" 则使用目标代码段的特权级别运行。而且，除了 return 之外，不能把控制转移到低特权级的代码段（即，高级别函数不能调用低级别函数）。")])])])]),v._v(" "),_("p",[v._v("为了配合特权级的切换和数据保护，每个任务针对每个特权级别都有单独的栈空间。在切换特权级的同时，也会切换到相应等级的栈。")]),v._v(" "),_("h2",{attrs:{id:"权级保护的最后一块拼图-rpl"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#权级保护的最后一块拼图-rpl"}},[v._v("#")]),v._v(" 权级保护的最后一块拼图——RPL")]),v._v(" "),_("p",[v._v("根据之前的描述，在拥有了 CPL 和 DPL 控制访问权限，也拥有了依从代码和门使得低特权程序能够调用操作系统提供的公共函数，似乎保护模式已经完整了。可惜的是，我们没有考虑一个特殊情况，就是有人会搞破坏！")]),v._v(" "),_("p",[v._v("以一个 I/O 请求为例，它是通过操作系统提供的接口来实现的。用户程序调用 I/O 请求函数，同时给出读写的磁盘地址和内存地址。我们通过门调用了系统的 I/O 函数，相应函数的地址被导入 CS 寄存器，CPL 也随着被更改到更高的等级。I/O 函数由操作系统提供，我们暂且简单地认为操作系统是可靠的。那么，整个函数的运行过程是安全的。")]),v._v(" "),_("p",[v._v("但是，I/O 请求函数的运行过程中，并不是所有的元素都是操作系统控制的。具体的来说，读写请求的磁盘地址和内存地址是由用户程序提供的。如下图所示，如果低特权程序将高特权级的内存地址作为参数给到 I/O 请求函数，因为该函数拥有最高特权，它就代替了低特权程序访问到了该程序本不该访问到的内存空间。")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://raw.githubusercontent.com/z1ggy-o/static_resources/main/img/cpl-and-rpl.jpg",alt:""}})]),v._v(" "),_("p",[v._v("这其实就是保护模式工作原理的一个漏洞。即，保护模式仅仅在修改寄存器的时候检测当前指令的特权级。而在上面的例子中，用户程序没有直接访问高级别的数据段，处理器就提供不了保护。")]),v._v(" "),_("p",[v._v("上述漏洞的问题在于，处理器只是单纯的执行指令，它可不知道这个指令属于谁。为了解决这个问题，处理器设计者提出了一个软硬结合方案，即让操作系统参与到权限检测的过程中来。")]),v._v(" "),_("p",[v._v("具体来说，因为是操作系统提供的高特权函数，它可以在函数代码中包含一些信息，使得处理器可以知道数据的来源。这个信息就是 RPL，request priviledge level. 因为我们依靠段选择子来进行寻址，所以，RPL 是被嵌入到段选择子中的。")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://raw.githubusercontent.com/z1ggy-o/static_resources/main/img/segment-selector.jpg",alt:""}})]),v._v(" "),_("p",[v._v("在引入了 RPL 之后，低特权程序在调用操作系统提供的函数时，函数中会设置参数中的选择子的 RPL 为低特权程序的权级。处理器在使用选择子的时候，除了比较 DPL 和 CPL 之外，也会比较 DPL 和 RPL。如此一来，就杜绝了上述系统函数代替低特权程序访问其不能访问的空间的问题。用 Intel 的话来说，RPL 的引入“确保了特权代码不会代替应用程序访问一个段，除非应用程序自己拥有访问那个段的权限”。")]),v._v(" "),_("p",[v._v("需要注意的是，处理器本身仅仅是添加了检查 RPL 的步骤而已。设置 RPL 是软件自己来进行的。")]),v._v(" "),_("p",[v._v("基本的特权级检查规则可以请查看本书的 14.1 节或者处理器手册。")]),v._v(" "),_("h2",{attrs:{id:"总结"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[v._v("#")]),v._v(" 总结")]),v._v(" "),_("ul",[_("li",[v._v("新架构中，段寄存器的结构进行了升级。由段选择器和缓存区组成。")]),v._v(" "),_("li",[v._v("开启保护模式之后，我们使用段选择子，到描述符表中获取段描述符的方式进行寻址。")]),v._v(" "),_("li",[v._v("通过描述符中的 DPL，CS 寄存器中的 CPL，以及段选择子中的 RPL，我们得以实现了保护功能。")])])])}),[],!1,null,null,null);_.default=r.exports}}]);