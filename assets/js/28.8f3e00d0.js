(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{343:function(t,a,v){"use strict";v.r(a);var _=v(7),e=Object(_.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("好久没有记录，这一次就从周记开始重新拾起来。")]),t._v(" "),a("h2",{attrs:{id:"工作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#工作"}},[t._v("#")]),t._v(" 工作")]),t._v(" "),a("p",[t._v("这周的工作不太顺利。偶然间发现了几个硬件的 bug，导致固件开发的复杂度又提升了。想了几个 workaround，但是效果还不是特别理想。\n不过还是秉着“先做对，再做好”的理念，先让功能工作起来再说。")]),t._v(" "),a("p",[t._v("主要内容还是围绕着 Trim 进行的。有以下几点值得记录的地方：")]),t._v(" "),a("ul",[a("li",[t._v("盘内状态主要还是 L2P table 和盘内数据两个部分。L2P table 的状态是瞬间的，但盘内数据则不一定。因为我们一般按照一定的规则来对数据进行下刷，所以数据下刷的位置本身就是一个 timestamp。\n这个信息是有意义的。比如上电恢复的时候，就可以按照下刷顺序重读盘内数据来恢复到掉电前的状态。如果在其中打入一些特殊数据，就可以作为标识来作为一些状态分界线来使用。")]),t._v(" "),a("li",[t._v("基于上一条，我们可以把盘的数据看作 log，如此一来，有一些 DBMS 和 file system 的技法就可以借用来做状态记录和恢复。例如，DBMS 中，就有为了提高性能，在不停止工作的情况下做 checkpoint 的技法，是可以借鉴来使用的。")]),t._v(" "),a("li",[t._v("分析问题还是要注重抽象出其根本结构，并且保持清晰，才能设计出合理的方案")]),t._v(" "),a("li",[t._v("最后，一定要格式清晰地记录工作中的流程。类似化学实验室的实验记录本一样，把做什么，结果如何记录下来。否则会丢掉很多有用的信息。")])]),t._v(" "),a("h2",{attrs:{id:"生活"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生活"}},[t._v("#")]),t._v(" 生活")]),t._v(" "),a("p",[t._v("这周舍友搬来一起住了。")]),t._v(" "),a("ul",[a("li",[t._v("读书：《普通人的散装生活》-- 赵国全。是一位在东莞工作的保安写的观察小记录。文风有以前论坛长文的感觉，读起来还怪还好。内容就是周围一些偏“底层”工种的生活，真实，但是不矫情。")]),t._v(" "),a("li",[t._v("听歌：Get You -- Daniel Caesar. 之前他的 Best Part 也很好听。")]),t._v(" "),a("li",[t._v("运动：健身房跑路，整个人蒙住了")])])])}),[],!1,null,null,null);a.default=e.exports}}]);