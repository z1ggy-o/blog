(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{342:function(e,t,a){"use strict";a.r(t);var o=a(7),i=Object(o.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"motivation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#motivation"}},[e._v("#")]),e._v(" Motivation")]),e._v(" "),t("ul",[t("li",[e._v("MVCC is the most popular scheme used in DBMSs developed in the last decade. However, there is no standards about how to implement MVCC.")]),e._v(" "),t("li",[e._v("Many DBMSs tell people that they use MVCC and how they implement it. There are several design choices people need to make, however, no one tells why they choose such way to implement their MVCC.")]),e._v(" "),t("li",[e._v("This paper gives a comprehensive evaluation about MVCC in main memory DBMSs and shows the trade-offs of different design choices.")])]),e._v(" "),t("h2",{attrs:{id:"contribution"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#contribution"}},[e._v("#")]),e._v(" Contribution")]),e._v(" "),t("ul",[t("li",[e._v("A good introduction about MVCC.")]),e._v(" "),t("li",[e._v("Evaluation about how concurrency control protocol, version storage, garbage collection, and index management affect performance on a real in-memory DBMS.")]),e._v(" "),t("li",[e._v("Evaluation of different configurations that used by main stream DBMSs.")]),e._v(" "),t("li",[e._v("Advisings about how to achieve higher scalability.")])]),e._v(" "),t("h2",{attrs:{id:"solution"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#solution"}},[e._v("#")]),e._v(" Solution")]),e._v(" "),t("ul",[t("li",[e._v('This is an evaluation paper. There is no "solution" but evaluation analyses.')]),e._v(" "),t("li",[e._v("People mainly focus on concurrency control protocols when they talk about scalability. However, the evaluation results show that the version storage scheme is also one of the most important components to scaling an in-memory MVCC DBMS in a multi-core environment.")]),e._v(" "),t("li",[e._v("Delta storage scheme is good for write-intensive workloads especially only a subset of the attributes is modified. However, delta storage can have slow performance on read-heavy analytical workloads because it spends more time on traversing version chains.")]),e._v(" "),t("li",[e._v("Most DBMSs choose to use tuple-level GC. However, the evaluation result shows that transaction-level can provide higher performance (at least in main memory DBMS) because it has smaller memory footprint.")]),e._v(" "),t("li",[e._v("In terms of index management, logical pointer is always a better choice than physical pointers.")]),e._v(" "),t("li",[e._v("The design choices that Oracle/MySQL and NuoDB made seems have the best performance.")])]),e._v(" "),t("h2",{attrs:{id:"evaluation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#evaluation"}},[e._v("#")]),e._v(" Evaluation")]),e._v(" "),t("ul",[t("li",[e._v("They uses a DBMS implemented in CMU, called Peloton.")]),e._v(" "),t("li",[e._v("The evaluation platform has 40 cores with 128 GB memory.")]),e._v(" "),t("li",[e._v("Workloads are YCSB and TPC-C (both OLTP)")])]),e._v(" "),t("h2",{attrs:{id:"the-main-finding-of-this-paper"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#the-main-finding-of-this-paper"}},[e._v("#")]),e._v(" The main finding of this paper")]),e._v(" "),t("ul",[t("li",[e._v("If you want to learn MVCC, read this one.")]),e._v(" "),t("li",[e._v('Still, "Measure, Then build".')])])])}),[],!1,null,null,null);t.default=i.exports}}]);