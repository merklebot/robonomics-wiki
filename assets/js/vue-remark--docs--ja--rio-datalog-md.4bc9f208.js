(window.webpackJsonp=window.webpackJsonp||[]).push([[192],{"+juS":function(e,o,t){"use strict";t.r(o);var a=t("KHd+"),n=t("UQSp"),i=t("Kw5r");function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}i.a.config.optionMergeStrategies;var s={VueRemarkRoot:n.a},c=function(e){var o=e.options.components=e.options.components||{},t=e.options.computed=e.options.computed||{};Object.keys(s).forEach((function(e){"object"===r(s[e])&&"function"==typeof s[e].render||"function"==typeof s[e]&&"function"==typeof s[e].options.render?o[e]=s[e]:t[e]=function(){return s[e]}}))},p=i.a.config.optionMergeStrategies,l="__vueRemarkFrontMatter",A={excerpt:null,title:"Robonomics IO Datalog",contributors:["Vourhey","PaTara43"],translated:!0};var u=function(e){e.options[l]&&(e.options[l]=A),i.a.util.defineReactive(e.options,l,A),e.options.computed=p.computed({$frontmatter:function(){return e.options[l]}},e.options.computed)},d=Object(a.a)({},(function(){var e=this,o=e.$createElement,a=e._self._c||o;return a("VueRemarkRoot",[a("p",[e._v("Datalog module allows you to store any string on blockchain")]),a("p",[a("a",{attrs:{href:"https://www.youtube.com/watch?v=rs67AMyd-gE",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("https://www.youtube.com/watch?v=rs67AMyd-gE")])]),a("p",[e._v("For the examples the development network is used. Check "),a("a",{attrs:{href:"/docs/robonomics-test-network-manual/"}},[e._v("this")]),e._v(" out to set it up for yourself.")]),a("h2",{attrs:{id:"requirements"}},[a("a",{attrs:{href:"#requirements","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),e._v("Requirements")]),a("ul",[a("li",[a("code",{pre:!0},[e._v("robonomics")]),a("a",{attrs:{href:"https://github.com/airalab/robonomics/releases",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("executable")])]),a("li",[e._v("Account on parachain")])]),a("p",[e._v("You can find instructions on how to create an account "),a("a",{attrs:{href:"/docs/create-account-in-dapp"}},[e._v("here")])]),a("h2",{attrs:{id:"write"}},[a("a",{attrs:{href:"#write","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),e._v("Write")]),a("p",[e._v("Assuming local node is running:")]),a("pre",[a("code",{pre:!0},[e._v('% echo "Hello Robonomics" | ./robonomics io write datalog -s 0xb046fc3c322e91e14a61ad4f08a3809ee0de7092e73aa9b3c2b642a0f476d4d6\n')])]),a("p",[e._v("where "),a("code",{pre:!0},[e._v("0xb046fc3c322e91e14a61ad4f08a3809ee0de7092e73aa9b3c2b642a0f476d4d6")]),e._v(" is a private key for the account with tokens.\nIn this example the public key is 5H3iRnX16DH2sb2RLxMM8UhDZTvJjP84EhhKXv3sCiEDq6bH. Let's go to the "),a("a",{attrs:{href:"https://parachain.robonomics.network/",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("Dapp")]),e._v("\nand see what happened.")]),a("p",[e._v('In the Dapp go to Developer -> Chain state. In the "selected state query" list choose datalog and below choose your account. Click plus button on the right and you should see the following:')]),a("p",[a("g-image",{attrs:{src:t("SN2M"),alt:"Robonomics Chain State Datalog",title:"Robonomics Chain State Datalog"}})],1),a("h2",{attrs:{id:"remote"}},[a("a",{attrs:{href:"#remote","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),e._v("Remote")]),a("p",[e._v("If your local node is configured differently from defaults or you have a remote node, it's possible to specify it with "),a("code",{pre:!0},[e._v("--remote")]),e._v(" option")]),a("pre",[a("code",{pre:!0},[e._v('% echo "Hello Robonomics" | ./robonomics io write datalog -s 0xb046fc3c322e91e14a61ad4f08a3809ee0de7092e73aa9b3c2b642a0f476d4d6 --remote https://ipfs.infura.io:5001/\n')])])])}),[],!1,null,null,null);"function"==typeof c&&c(d),"function"==typeof u&&u(d);o.default=d.exports},SN2M:function(e,o){e.exports={type:"image",mimeType:"image/jpeg",src:"/assets/static/robonomics-dapp-chain-state-datalog.42db587.41943fd6738356417c7ac4133763802d.jpg",size:{width:2560,height:519},sizes:"(max-width: 2560px) 100vw, 2560px",srcset:["/assets/static/robonomics-dapp-chain-state-datalog.82a2fbd.41943fd6738356417c7ac4133763802d.jpg 480w","/assets/static/robonomics-dapp-chain-state-datalog.cbab2cf.41943fd6738356417c7ac4133763802d.jpg 1024w","/assets/static/robonomics-dapp-chain-state-datalog.2665e34.41943fd6738356417c7ac4133763802d.jpg 1920w","/assets/static/robonomics-dapp-chain-state-datalog.42db587.41943fd6738356417c7ac4133763802d.jpg 2560w"],dataUri:"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 2560 519' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-416641fb382794c5b28e6568655c64ed'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='40'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-416641fb382794c5b28e6568655c64ed)' width='2560' height='519' xlink:href='data:image/jpeg%3bbase64%2c/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAANAEADASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAABwMAAf/EAC4QAAECAwMJCQAAAAAAAAAAAAEAAgMHEVGR0gQFBhchMUFWlDVFYXF0hJOisv/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/EABYRAQEBAAAAAAAAAAAAAAAAAAABEf/aAAwDAQACEQMRAD8AV2yW0Cc4gZhDhwByiJs%2by6ZHaAnuBo8o8TEkZjK0cDQcfFWBbTcb1nF0YGR8v69gj54uJU1Gy/5fHUxcSS6iw3rVbYb0yGjMyNl/TZo%2bK%2bpi4lhI2X/HMAPuIuNJlW2G9arbDemQ0aajZf8AL46mLiU3ySl%2bwVbmMNtpGiOP6SfVthvU4waWGgINoO3epYsr/9k=' /%3e%3c/svg%3e"}},UQSp:function(e,o,t){"use strict";o.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}}}]);