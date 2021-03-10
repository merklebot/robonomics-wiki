(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{OeJU:function(s,e,t){"use strict";t.r(e);var a=t("KHd+"),n=t("UQSp"),r=t("Kw5r");function l(s){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(s){return typeof s}:function(s){return s&&"function"==typeof Symbol&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s})(s)}r.a.config.optionMergeStrategies;var o={VueRemarkRoot:n.a},p=function(s){var e=s.options.components=s.options.components||{},t=s.options.computed=s.options.computed||{};Object.keys(o).forEach((function(s){"object"===l(o[s])&&"function"==typeof o[s].render||"function"==typeof o[s]&&"function"==typeof o[s].options.render?e[s]=o[s]:t[s]=function(){return o[s]}}))},i=r.a.config.optionMergeStrategies,c="__vueRemarkFrontMatter",_={excerpt:null,title:"Passing dynamic parameters"};var v=function(s){s.options[c]&&(s.options[c]=_),r.a.util.defineReactive(s.options,c,_),s.options.computed=i.computed({$frontmatter:function(){return s.options[c]}},s.options.computed)},d=Object(a.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("VueRemarkRoot",[t("h1",{attrs:{id:"passing-dynamic-parameters"}},[t("a",{attrs:{href:"#passing-dynamic-parameters","aria-hidden":"true"}},[s._v("#")]),s._v("Passing dynamic parameters")]),t("p",[s._v("In "),t("a",{attrs:{href:"/docs/connect-simple-cps/"}},[s._v("previous")]),s._v(" example we discussed how to create a simple CPS with Arduino. Our first CPS is able to do only one task: to blink a led. We suggest you to get through the first lesson. Now let's expand the example and teach our board to blink blue or red led depending on objective parameter.")]),t("blockquote",[t("p",[s._v("The source code of this lesson is "),t("a",{attrs:{href:"https://github.com/airalab/robonomics_tutorials/tree/master/arduino_with_args",target:"_blank",rel:"nofollow noopener noreferrer"}},[s._v("here")]),s._v(".")])]),t("h2",{attrs:{id:"arduino"}},[t("a",{attrs:{href:"#arduino","aria-hidden":"true"}},[s._v("#")]),s._v("Arduino")]),t("p",[s._v("The only difference in Arduino source code is instead of subscribing to one topic now we subscribe to "),t("code",{pre:!0},[s._v("/blink_red")]),s._v(" and "),t("code",{pre:!0},[s._v("/blink_blue")]),s._v(" topics")]),t("pre",[t("code",{pre:!0,attrs:{class:"hljs language-c"}},[s._v("  "),t("span",{pre:!0,attrs:{class:"hljs-meta"}},[s._v("#"),t("span",{pre:!0,attrs:{class:"hljs-meta-keyword"}},[s._v("include")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-meta-string"}},[s._v("<ros.h>")])]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-meta"}},[s._v("#"),t("span",{pre:!0,attrs:{class:"hljs-meta-keyword"}},[s._v("include")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-meta-string"}},[s._v("<std_msgs/Empty.h>")])]),s._v("\n\n  ros::NodeHandle nh;\n\n  "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-title"}},[s._v("blink")]),t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("("),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("int")]),s._v(" led, "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("int")]),s._v(" mil)")]),s._v(" ")]),s._v("{\n\n    digitalWrite(led, HIGH);\n    delay(mil);\n    digitalWrite(led, LOW);\n    delay(mil);\n\n  }\n\n  "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-title"}},[s._v("blinkRedCb")]),t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("("),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" std_msgs::Empty& msg)")]),s._v(" ")]),s._v("{\n    blink("),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("13")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("500")]),s._v(");\n    blink("),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("13")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("500")]),s._v(");\n    blink("),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("13")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("500")]),s._v(");\n  }\n\n  "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-title"}},[s._v("blinkBlueCb")]),t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("("),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" std_msgs::Empty& msg)")]),s._v(" ")]),s._v("{\n    blink("),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("12")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("500")]),s._v(");\n    blink("),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("12")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("500")]),s._v(");\n    blink("),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("12")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("500")]),s._v(");\n  }\n\n  "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("ros::Subscriber<std_msgs::Empty> "),t("span",{pre:!0,attrs:{class:"hljs-title"}},[s._v("subRed")]),t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"blink_red"')]),s._v(", &blinkRedCb)")])]),s._v(";\n  "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("ros::Subscriber<std_msgs::Empty> "),t("span",{pre:!0,attrs:{class:"hljs-title"}},[s._v("subBlue")]),t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"blink_blue"')]),s._v(", &blinkBlueCb)")])]),s._v(";\n\n  "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-title"}},[s._v("setup")]),t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("()")]),s._v("\n  ")]),s._v("{\n    pinMode("),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("13")]),s._v(", OUTPUT);\n    pinMode("),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("12")]),s._v(", OUTPUT);\n\n    nh.initNode();\n    nh.subscribe(subRed);\n    nh.subscribe(subBlue);\n  }\n\n  "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-title"}},[s._v("loop")]),t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("()")]),s._v("\n  ")]),s._v("{\n    nh.spinOnce();\n    delay("),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1")]),s._v(");\n  }")])]),t("h2",{attrs:{id:"ros"}},[t("a",{attrs:{href:"#ros","aria-hidden":"true"}},[s._v("#")]),s._v("ROS")]),t("p",[s._v("We can pass arguments via objective which points to rosbag file. Have a look at "),t("code",{pre:!0},[s._v("blink.py")]),s._v(" script. The main difference is "),t("code",{pre:!0},[s._v("blink()")]),s._v(" method:")]),t("pre",[t("code",{pre:!0,attrs:{class:"hljs language-python"}},[t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("def")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-title"}},[s._v("blink")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("self, data")]),s._v("):")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" data.data == "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"blue"')]),s._v(":\n      rospy.loginfo("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Blinking blue..."')]),s._v(")\n      self.blink_blue.publish(Empty())\n\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" data.data == "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"red"')]),s._v(":\n      rospy.loginfo("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Blinking red..."')]),s._v(")\n      self.blink_red.publish(Empty())\n\n  rospy.wait_for_service("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'/liability/finish'")]),s._v(")\n  fin = rospy.ServiceProxy("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'/liability/finish'")]),s._v(", FinishLiability)\n  fin(FinishLiabilityRequest(address=self.liability, success="),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("True")]),s._v("))\n  rospy.loginfo("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Finished"')]),s._v(")")])]),t("p",[s._v("Now "),t("code",{pre:!0},[s._v("/blink")]),s._v(" topic has a "),t("code",{pre:!0},[s._v("String")]),s._v(" type. You can find prepared rosbags in "),t("code",{pre:!0},[s._v("rosbag")]),s._v(" folder.")]),t("h2",{attrs:{id:"aira"}},[t("a",{attrs:{href:"#aira","aria-hidden":"true"}},[s._v("#")]),s._v("AIRA")]),t("p",[s._v("Connect to AIRA client via SSH as described "),t("a",{attrs:{href:"/docs/aira-connecting-via-ssh/"}},[s._v("here")]),s._v(". Do not forget to add "),t("code",{pre:!0},[s._v("COM1")]),s._v(" port in settings. Run the following command:")]),t("pre",[t("code",{pre:!0},[s._v("$ rosrun arduino_with_args blink.py\n")])]),t("p",[s._v("Also we need to add rosbag files to IPFS:")]),t("pre",[t("code",{pre:!0},[s._v("$ ipfs add rosbag/blink_blue.bag\n$ ipfs add rosbag/blink_red.bag\n")])]),t("p",[t("strong",[s._v("Before the next step you should approve XRT tokens on the Factory.")])]),t("p",[s._v("The last step is to build Dapp and launch. Take a look at the previous "),t("a",{attrs:{href:"/docs/connect-simple-cps/"}},[s._v("lesson")]),s._v(". To make Arduino blink the blue led send blue demand and blue offer messages. For the red one send corresponding messages.")]),t("p",[s._v("That's it! Now you are able to pass dynamic parameters to your cyber-physical system agent!")])])}),[],!1,null,null,null);"function"==typeof p&&p(d),"function"==typeof v&&v(d);e.default=d.exports},UQSp:function(s,e,t){"use strict";e.a={name:"VueRemarkRoot",render:function(s){return s("div",null,this.$slots.default)}}}}]);