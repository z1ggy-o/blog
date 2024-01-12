(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{360:function(e,a,t){"use strict";t.r(a);var o=t(7),n=Object(o.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("blockquote",[a("p",[e._v("Because the course asks us to not sharing source code, here, I will only jot down some hits to help you (or maybe only me, kk) to finish the project. I will not even describe the process of any specific function, because I don't think that would be very different from public the source code.")])]),e._v(" "),a("h2",{attrs:{id:"task-1-lru-replacement-policy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#task-1-lru-replacement-policy"}},[e._v("#")]),e._v(" Task #1 - LRU Replacement Policy")]),e._v(" "),a("p",[a("code",[e._v("BufferPoolManger")]),e._v(" contains all the frames.\n"),a("code",[e._v("LRUReplacer")]),e._v(" is an implementation of the "),a("code",[e._v("Replacer")]),e._v(" and it helps "),a("code",[e._v("BufferPoolManger")]),e._v(" to manage these frames.")]),e._v(" "),a("p",[e._v("This "),a("code",[e._v("LRU")]),e._v(' policy is not very "LRU" in my opinion. Refer the test cases we can see, if we '),a("code",[e._v("Unpin")]),e._v(" the same frame twice, we do not update the access time for this frame. Which means that we only need to inserte/delete page frames to/from the LRU container. There is no positon modification (assume we use conventional list + hash table implementation).")]),e._v(" "),a("p",[e._v("You may need to read the code associated with task 1 and task 2 before start programming for task 1. Thus, you can understand how "),a("code",[e._v("BufferPoolManager")]),e._v(" utlizes the "),a("code",[e._v("LRUReplacer")]),e._v(".")]),e._v(" "),a("p",[e._v("Actually, it is the "),a("code",[e._v("BufferPoolMangerInstance")]),e._v(" managing the pages in the buffer. The "),a("code",[e._v("LRUReplacer")]),e._v(" itself only contains page frames that we can use for storing new pages.\nIn other words, the reference (pin) count of pages that existed in the frames that in the "),a("code",[e._v("LRUReplacer")]),e._v(" is zero, and we can swap them out in anytime.")]),e._v(" "),a("p",[e._v("Since we need to handle the concurret access, latches (or locks) are necessary. If you are not fimilar with locks in C++ like me, you can check the "),a("code",[e._v("include/common/rwlatch.h")]),e._v(" to learn how Bustub (i.e., the DBMS that we are implementing) uses them.")]),e._v(" "),a("h2",{attrs:{id:"task-2-buffer-pool-manager-instance"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#task-2-buffer-pool-manager-instance"}},[e._v("#")]),e._v(" Task #2 - Buffer Pool Manager Instance")]),e._v(" "),a("p",[e._v("We use "),a("code",[e._v("Page")]),e._v(" as the container to manage the pages of our DB storage engine. "),a("code",[e._v("Page")]),e._v(" objects are pre-allocated for each frame in the buffer pool. We reuse existed "),a("code",[e._v("Page")]),e._v(" objects instead of creating a new one for every newly read in pages.")]),e._v(" "),a("p",[e._v("We "),a("span",{staticClass:"underline"},[e._v("pin")]),e._v(" a page when we want to use it, and we "),a("span",{staticClass:"underline"},[e._v("unpin")]),e._v(" a page when we do not need it anymore. Because we are using the page, the buffer pool manager will not move this page out. Thus, "),a("span",{staticClass:"underline"},[e._v("pin")]),e._v(" and "),a("span",{staticClass:"underline"},[e._v("unpin")]),e._v(" are hints to tell the pool manager which page it can swap out if there is no free space.")]),e._v(" "),a("p",[e._v("Caution, "),a("code",[e._v("frame")]),e._v(" and "),a("code",[e._v("page")]),e._v(" are refering to different concepts. "),a("code",[e._v("page")]),e._v(" is a chunk of data that stored in our DBMS; "),a("code",[e._v("frame")]),e._v(" is a slot in the page buffer that has the same size as the "),a("code",[e._v("page")]),e._v(". So, use "),a("code",[e._v("frame_id_t")]),e._v(" and "),a("code",[e._v("page_id_t")]),e._v(" at the right place.")]),e._v(" "),a("p",[e._v('The comments in the base code is not very clear. They use "page" to refer both data pages and page frames, which is confusing. Make sure which is the target that you want before coding.')]),e._v(" "),a("p",[a("code",[e._v("BufferPoolManager")]),e._v(" uses four components to manage pages and frames:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("page_table_")]),e._v(": a map that stores the mapping relationship between "),a("code",[e._v("page_id")]),e._v(" and "),a("code",[e._v("frame_id")]),e._v(".")]),e._v(" "),a("li",[a("code",[e._v("free_list_")]),e._v(": a linked-list that stores the free frames.")]),e._v(" "),a("li",[a("code",[e._v("replacer_")]),e._v(": a "),a("code",[e._v("LRUReplacer")]),e._v(" that stores used frames with zero pin count.")]),e._v(" "),a("li",[a("code",[e._v("pages_")]),e._v(": stores pre-allocated "),a("code",[e._v("Page")]),e._v(" objects.")])]),e._v(" "),a("p",[e._v("In terms of concurrency control, because we only have one latch for a whole buffer, the coarse-grained lock is unavoidable.")]),e._v(" "),a("p",[a("code",[e._v("BufferPoolManager")]),e._v(" is the "),a("code",[e._v("friend")]),e._v(" of "),a("code",[e._v("Page")]),e._v(", so we can access the "),a("code",[e._v("private")]),e._v(" members of "),a("code",[e._v("Page")]),e._v(". (This is a good example about when to use "),a("code",[e._v("friend")]),e._v(" -- when we need to change some member variables but we do not want give setters so that every one can change them.)")]),e._v(" "),a("p",[e._v("If we can do three things right, this task is not that difficult:")]),e._v(" "),a("ul",[a("li",[e._v("Move page to/from LRU.")]),e._v(" "),a("li",[e._v("Know when to flush a page. (Read points are very clear).")]),e._v(" "),a("li",[e._v("Which page metadata we need to update.")])]),e._v(" "),a("p",[a("strong",[e._v("Critical hints:")])]),e._v(" "),a("ul",[a("li",[e._v("Do read the header file and make sure your return value fits the function description. (I wasted few hours just because I returned "),a("code",[e._v("false")]),e._v(" in a function, however, they assume we should return "),a("code",[e._v("true")]),e._v("  in that case. Do not use your own judgement, just follow the description.)")]),e._v(" "),a("li",[e._v("What will happen if we "),a("code",[e._v("NewPage()")]),e._v(" then "),a("code",[e._v("Unpin()")]),e._v(" the same page immediately?")]),e._v(" "),a("li",[e._v("Do not use the iterator after you erased the corresponding element. The iterator is invalided, however, the compiler will not warn you.")])]),e._v(" "),a("h2",{attrs:{id:"task-3-parallel-buffer-pool-manager"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#task-3-parallel-buffer-pool-manager"}},[e._v("#")]),e._v(" Task #3 - Parallel Buffer Pool Manager")]),e._v(" "),a("p",[e._v("Task 3 is very straightforward. If our "),a("code",[e._v("BufferPoolManagerInstance")]),e._v(" is implemented in the right way, the only thing we need to do here is to allocate mutiple buffer instance and call corresponding member functions for each instance.")]),e._v(" "),a("p",[e._v("Some people have problems with the start index assignment and update. Please make sure you do everything right as the describtion told us.")]),e._v(" "),a("h2",{attrs:{id:"result"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#result"}},[e._v("#")]),e._v(" Result")]),e._v(" "),a("p",[e._v("Passed all test cases with full grades.")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/z1ggy-o/static%5Fresources/main/img/202203142113296.png",alt:"Project#1 grades"}})])])}),[],!1,null,null,null);a.default=n.exports}}]);