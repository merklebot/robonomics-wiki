(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{UQSp:function(e,n,o){"use strict";n.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}},lY16:function(e,n,o){"use strict";o.r(n);var t=o("KHd+"),i=o("UQSp"),s=o("Kw5r");function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}s.a.config.optionMergeStrategies;var a={VueRemarkRoot:i.a},l=function(e){var n=e.options.components=e.options.components||{},o=e.options.computed=e.options.computed||{};Object.keys(a).forEach((function(e){"object"===r(a[e])&&"function"==typeof a[e].render||"function"==typeof a[e]&&"function"==typeof a[e].options.render?n[e]=a[e]:o[e]=function(){return a[e]}}))},d=s.a.config.optionMergeStrategies,p="__vueRemarkFrontMatter",c={excerpt:null,title:"Passing dynamic parameters",contributors:["ensrationis","akru"],translated:!1};var u=function(e){e.options[p]&&(e.options[p]=c),s.a.util.defineReactive(e.options,p,c),e.options.computed=d.computed({$frontmatter:function(){return e.options[p]}},e.options.computed)},b=Object(t.a)({},(function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("VueRemarkRoot",[o("p",[e._v("In "),o("a",{attrs:{href:"/docs/connect-simple-cps/"}},[e._v("previous")]),e._v(" example we discussed how to create a simple CPS with Arduino. Our first CPS is able to do only one task: to blink a led. We suggest you to get through the first lesson. Now let's expand the example and teach our board to blink blue or red led depending on objective parameter.")]),o("blockquote",[o("p",[e._v("The source code of this lesson is "),o("a",{attrs:{href:"https://github.com/airalab/robonomics_tutorials/tree/master/arduino_with_args",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("here")]),e._v(".")])]),o("h2",{attrs:{id:"arduino"}},[o("a",{attrs:{href:"#arduino","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),e._v("Arduino")]),o("p",[e._v("The only difference in Arduino source code is instead of subscribing to one topic now we subscribe to "),o("code",{pre:!0},[e._v("/blink_red")]),e._v(" and "),o("code",{pre:!0},[e._v("/blink_blue")]),e._v(" topics")]),o("pre",[o("code",{pre:!0,attrs:{class:"language-c"}},[e._v('  #include <ros.h>\n  #include <std_msgs/Empty.h>\n\n  ros::NodeHandle nh;\n\n  void blink(int led, int mil) {\n\n    digitalWrite(led, HIGH);\n    delay(mil);\n    digitalWrite(led, LOW);\n    delay(mil);\n\n  }\n\n  void blinkRedCb(const std_msgs::Empty& msg) {\n    blink(13, 500);\n    blink(13, 500);\n    blink(13, 500);\n  }\n\n  void blinkBlueCb(const std_msgs::Empty& msg) {\n    blink(12, 500);\n    blink(12, 500);\n    blink(12, 500);\n  }\n\n  ros::Subscriber<std_msgs::Empty> subRed("blink_red", &blinkRedCb);\n  ros::Subscriber<std_msgs::Empty> subBlue("blink_blue", &blinkBlueCb);\n\n  void setup()\n  {\n    pinMode(13, OUTPUT);\n    pinMode(12, OUTPUT);\n\n    nh.initNode();\n    nh.subscribe(subRed);\n    nh.subscribe(subBlue);\n  }\n\n  void loop()\n  {\n    nh.spinOnce();\n    delay(1);\n  }\n')])]),o("h2",{attrs:{id:"ros"}},[o("a",{attrs:{href:"#ros","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),e._v("ROS")]),o("p",[e._v("We can pass arguments via objective which points to rosbag file. Have a look at "),o("code",{pre:!0},[e._v("blink.py")]),e._v(" script. The main difference is "),o("code",{pre:!0},[e._v("blink()")]),e._v(" method:")]),o("pre",[o("code",{pre:!0,attrs:{class:"language-python"}},[e._v('def blink(self, data):\n  if data.data == "blue":\n      rospy.loginfo("Blinking blue...")\n      self.blink_blue.publish(Empty())\n\n  if data.data == "red":\n      rospy.loginfo("Blinking red...")\n      self.blink_red.publish(Empty())\n\n  rospy.wait_for_service(\'/liability/finish\')\n  fin = rospy.ServiceProxy(\'/liability/finish\', FinishLiability)\n  fin(FinishLiabilityRequest(address=self.liability, success=True))\n  rospy.loginfo("Finished")\n')])]),o("p",[e._v("Now "),o("code",{pre:!0},[e._v("/blink")]),e._v(" topic has a "),o("code",{pre:!0},[e._v("String")]),e._v(" type. You can find prepared rosbags in "),o("code",{pre:!0},[e._v("rosbag")]),e._v(" folder.")]),o("h2",{attrs:{id:"aira"}},[o("a",{attrs:{href:"#aira","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),e._v("AIRA")]),o("p",[e._v("Connect to AIRA client via SSH as described "),o("a",{attrs:{href:"/docs/aira-connecting-via-ssh/"}},[e._v("here")]),e._v(". Do not forget to add "),o("code",{pre:!0},[e._v("COM1")]),e._v(" port in settings. Run the following command:")]),o("pre",[o("code",{pre:!0},[e._v("$ rosrun arduino_with_args blink.py\n")])]),o("p",[e._v("Also we need to add rosbag files to IPFS:")]),o("pre",[o("code",{pre:!0},[e._v("$ ipfs add rosbag/blink_blue.bag\n$ ipfs add rosbag/blink_red.bag\n")])]),o("p",[o("strong",[e._v("Before the next step you should approve XRT tokens on the Factory.")])]),o("p",[e._v("The last step is to build Dapp and launch. Take a look at the previous "),o("a",{attrs:{href:"/docs/connect-simple-cps/"}},[e._v("lesson")]),e._v(". To make Arduino blink the blue led send blue demand and blue offer messages. For the red one send corresponding messages.")]),o("p",[e._v("That's it! Now you are able to pass dynamic parameters to your cyber-physical system agent!")])])}),[],!1,null,null,null);"function"==typeof l&&l(b),"function"==typeof u&&u(b);n.default=b.exports}}]);