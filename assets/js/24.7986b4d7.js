(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{339:function(e,t,s){"use strict";s.r(t);var a=s(7),n=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"short-summary-short-summary"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#short-summary-short-summary"}},[e._v("#")]),e._v(" Short Summary {#short-summary}")]),e._v(" "),t("p",[e._v("HDDs are under utilized in hybrid cloud storage systems which makes SSD to handle most of\nthe requests.\nThis shorts the life of SSDs and also wants the utilization of HDDs.")]),e._v(" "),t("p",[e._v("The authors of this paper find that the write requests can have $μ$s-level latency when\nusing HDD if the buffer in HDD is not full.\nThey leverage this finding to let HDD to handle write requests if the requests can fit into\nthe in disk buffer.")]),e._v(" "),t("p",[e._v("This strategy can reduce SSD pressure which prolongs SSD life and still provide relative good\nperformance.")]),e._v(" "),t("h2",{attrs:{id:"what-is-the-problem-what-is-the-problem"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#what-is-the-problem-what-is-the-problem"}},[e._v("#")]),e._v(" What is the problem {#what-is-the-problem}")]),e._v(" "),t("p",[e._v("In hybrid storage system (e.g. SSDs with HDDs), there is an unbalancing storage utilization problem.")]),e._v(" "),t("p",[e._v("More specifically, SSDs are used as the cache layer of the whole system, then data in SSDs is\nmoved to HDDs. The original idea is to leverage the high performance of SSD to serve consumer\nrequests first, so consumer requests can have shorter latency.")]),e._v(" "),t("p",[e._v("However, in a real system, SSDs handle most of the write requests and HDDs are idle in more\nthan 90% of the time. This is a waste of HDD and SSD because SSD has short life limitation.\nAlso, deep queue depth makes requests suffering long latency even when we using SSDs.")]),e._v(" "),t("h2",{attrs:{id:"why-the-problem-is-interesting-important-why-the-problem-is-interesting-important"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#why-the-problem-is-interesting-important-why-the-problem-is-interesting-important"}},[e._v("#")]),e._v(" Why the problem is interesting (important)? {#why-the-problem-is-interesting--important}")]),e._v(" "),t("p",[e._v("The authors find a latency pattern of requests on HDD, which is introduced by the using of the in disk buffer.\nThe request latency of HDD can be classified as three categories: "),t("em",[e._v("fast, middle")]),e._v(", and "),t("em",[e._v("slow")]),e._v(".\nWrite requests data is put to the buffer first, then to the disk. When the buffer is full,\nHDD will block the coming requests until it flushes all the data in the buffer into disk.\nWhen there are free space in the buffer, request latency is in fast or middle range, otherwise\nin slow range.")]),e._v(" "),t("p",[e._v("The fast and middle latency is in $μ s$-level which similar with the performance of SSD.\nIf we can control the buffer in disk to handle requests which their size is in the buffer\nsize range, then we can get SSD-level performance when using HDD to handle small write\nrequests.")]),e._v(" "),t("h2",{attrs:{id:"the-idea-the-idea"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#the-idea-the-idea"}},[e._v("#")]),e._v(" The idea {#the-idea}")]),e._v(" "),t("p",[e._v("Dynamically dispatch write requests to SSD and HDD, which reduces SSD pressure and also\nprovides reasonable performance.")]),e._v(" "),t("p",[e._v("To achieve the goal, there are two key components in this paper:")]),e._v(" "),t("ul",[t("li",[e._v("Make sure requests to HDD are in the fast and middle latency range")]),e._v(" "),t("li",[e._v("Determining which write requests should be dispatch to HDD")])]),e._v(" "),t("p",[e._v("To handle the first challenge, the authors provided a prediction model. The model itself\nis simply comparing the current request size with pre-defined threshold.\nWe cannot know the write buffer size of HDD directly. However, we can get an approximate\nvalue of the buffer size through profiling. The threshold are the cumulative amount of written data for the\nfast/mid/slow stages.")]),e._v(" "),t("p",[e._v("Since we only want to use the fast and middle stages, we need to skip the slow stage.\nThere are two methods to do this. First, "),t("code",[e._v("sync")]),e._v(" system call from host can enforce the\nbuffer flush; second, HDD controller will flush the buffer when the buffer is full.\n"),t("code",[e._v("sync")]),e._v(" is a expensive operation, so the authors choose to use "),t("em",[e._v("padding data")]),e._v(" to full fill\nthe buffer, which can let controller to flush the data in the buffer.")]),e._v(" "),t("p",[e._v("The second reason of why we need padding data is we want to make sure the prediction model\nworking well. That means the prediction model needs a sequential continuous write requests.\nWhen HDD is idle, the controller will empty the buffer even when the buffer is not full,\nwhich break the prediction. Read requests also break the prediction.\nUsing padding data can help the system to maintain and adjust the prediction.\nMore specifically, when HDD is idle, the system use small size padding data to avoid disk\ncontrol flush the buffer; when read requests finished, since we cannot know if the disk\ncontroller flushes the buffer, the system use large size padding data to quickly full fill\nthe buffer, which can help recorrect the prediction model.\nThese padding data will be remove during the GC procedure.")]),e._v(" "),t("p",[e._v("Steering requests to HDDs is much easier to understand. The latency of request is related\nto the I/O queue depth.\nWe do profiling to find the relation between SSD's queue depth and the request request latency.\nIn a certain queue depth, the request latency on SSD will be greater than the latency of HDDs\nfast stage. We use the queue depth value as the threshold.\nWhen queue depth exceeds the threshold, the system stores data to the HDD instead of SSD.")]),e._v(" "),t("h2",{attrs:{id:"drawbacks-and-personal-questions-about-the-study-drawbacks-and-personal-questions-about-the-study"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#drawbacks-and-personal-questions-about-the-study-drawbacks-and-personal-questions-about-the-study"}},[e._v("#")]),e._v(" Drawbacks and personal questions about the study {#drawbacks-and-personal-questions-about-the-study}")]),e._v(" "),t("ul",[t("li",[e._v("Only works for small size of write requests")]),e._v(" "),t("li",[e._v("The consistency is not guaranteed")]),e._v(" "),t("li",[e._v("The disk cannot be managed as RAID (can we?)")]),e._v(" "),t("li",[e._v("GC is still a problem")])])])}),[],!1,null,null,null);t.default=n.exports}}]);