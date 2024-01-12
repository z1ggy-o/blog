(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{333:function(e,t,a){"use strict";a.r(t);var s=a(7),i=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"motivation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#motivation"}},[e._v("#")]),e._v(" MOTIVATION")]),e._v(" "),t("p",[e._v("Google needs a new distributed file system to meet the rapidly growing demands of Google’s data processing needs (e.g., the MapReduce).")]),e._v(" "),t("p",[e._v("Because Google is facing some technical challenges different with general use cases, they think it is better to develop a system that fits them well instead of following the traditional choices. For example, they chosen to trade off consistency for better performance.")]),e._v(" "),t("h2",{attrs:{id:"contribution"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#contribution"}},[e._v("#")]),e._v(" CONTRIBUTION")]),e._v(" "),t("p",[e._v("They designed and implemented a distributed file system, GFS. This system can leverage clusters consisted with large number of the machines. The design puts a lot of efforts on fault tolerance and availability because they think component failures are the norm rather than the exception.")]),e._v(" "),t("p",[e._v("This system is developed only for Google’s own programs. As a result, GFS does not provide POSIX APIs. Programs are designed and implemented based on GFS, which simplifies the design of GFS.")]),e._v(" "),t("h2",{attrs:{id:"solution"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#solution"}},[e._v("#")]),e._v(" SOLUTION")]),e._v(" "),t("ul",[t("li",[e._v("GFS uses a single master multiple chunkservers architecture. The master maintains all file system metadata and the chunkservers handle the file data. The master periodically communicates with each chunkserver in HeartBeat messages to give it instructions and collect its state.")]),e._v(" "),t("li",[e._v("Considering the characteristics of the workloads in Google (append only, sequential read), they decide to divide files into fixed-size chunks (64MB). Each chunk has a globally unique chunk handle assigned by the master, that’s how we can find a chunk of a specific file.")]),e._v(" "),t("li",[e._v("The client gives file name and in file offset to the master. Then, the master will send back the corresponding chunk handle and the chunkservers that have that chunk. After that, clients will communicate with chunkservers directly. This approach avoids the single master becoming the bottleneck.")]),e._v(" "),t("li",[e._v("To ensure high availability and also improve parallelism, each file chunk is replicated on multiple chunservers on different racks. The metadata in master is protected by the operation log, also this log is replicated on multiple machines.")]),e._v(" "),t("li",[e._v("When write happens, the data mutation propagates along the chunkservers incrementally. As a result, the write becomes faster, but clients can read stale data.")])]),e._v(" "),t("h2",{attrs:{id:"evaluation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#evaluation"}},[e._v("#")]),e._v(" EVALUATION")]),e._v(" "),t("ul",[t("li",[e._v("Micro-benchmarks on a small cluster with 16 chunkserver. Tested the read, write, and record append performance.")]),e._v(" "),t("li",[e._v("Two real world clusters in Google. One for production, another one for research and development.")])]),e._v(" "),t("h2",{attrs:{id:"limitation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#limitation"}},[e._v("#")]),e._v(" LIMITATION")]),e._v(" "),t("p",[e._v("With the increasing volume of data, the single master design can no longer cope with the demands.")]),e._v(" "),t("h2",{attrs:{id:"main-takeaway"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#main-takeaway"}},[e._v("#")]),e._v(" MAIN TAKEAWAY")]),e._v(" "),t("p",[e._v("There are times when we can discard generalization and design a dedicated system for a specific scenario, which leads to a more simply design.")])])}),[],!1,null,null,null);t.default=i.exports}}]);