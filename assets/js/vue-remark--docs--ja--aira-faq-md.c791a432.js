(window.webpackJsonp=window.webpackJsonp||[]).push([[155],{UQSp:function(e,t,o){"use strict";t.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}},pYCS:function(e,t,o){"use strict";o.r(t);var n=o("KHd+"),r=o("UQSp"),i=o("Kw5r");function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}i.a.config.optionMergeStrategies;var s={VueRemarkRoot:r.a},p=function(e){var t=e.options.components=e.options.components||{},o=e.options.computed=e.options.computed||{};Object.keys(s).forEach((function(e){"object"===a(s[e])&&"function"==typeof s[e].render||"function"==typeof s[e]&&"function"==typeof s[e].options.render?t[e]=s[e]:o[e]=function(){return s[e]}}))},c=i.a.config.optionMergeStrategies,u="__vueRemarkFrontMatter",d={excerpt:null,title:"Frequently Asked Questions about AIRA",contributors:["Vourhey"],translated:!0};var l=function(e){e.options[u]&&(e.options[u]=d),i.a.util.defineReactive(e.options,u,d),e.options.computed=c.computed({$frontmatter:function(){return e.options[u]}},e.options.computed)},f=Object(n.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("VueRemarkRoot",[o("h2",{attrs:{id:"how-to-see-logs-from-main-services"}},[o("a",{attrs:{href:"#how-to-see-logs-from-main-services","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),e._v("How to see logs from main services?")]),o("p",[e._v("IPFS in real time:")]),o("pre",[o("code",{pre:!0},[e._v("journalctl -u ipfs -f\n")])]),o("p",[e._v("and Liability::")]),o("pre",[o("code",{pre:!0},[e._v("journalctl -u liability -f\n")])]),o("h2",{attrs:{id:"how-to-check-the-quantity-of-ipfs-peers"}},[o("a",{attrs:{href:"#how-to-check-the-quantity-of-ipfs-peers","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),e._v("How to check the quantity of IPFS peers?")]),o("pre",[o("code",{pre:!0},[e._v("ipfs pubsub peers \n")])]),o("h2",{attrs:{id:"ipfs-cant-connect-to-the-daemon-what-should-i-do"}},[o("a",{attrs:{href:"#ipfs-cant-connect-to-the-daemon-what-should-i-do","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),e._v("IPFS can't connect to the daemon, what should I do?")]),o("p",[e._v("Try to specify "),o("code",{pre:!0},[e._v("--api")]),e._v(" option")]),o("pre",[o("code",{pre:!0},[e._v("ipfs swarm peers --api=/ip4/127.0.0.1/tcp/5001/\n")])]),o("h2",{attrs:{id:"how-to-change-ethereum-address-of-aira"}},[o("a",{attrs:{href:"#how-to-change-ethereum-address-of-aira","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),e._v("How to change ethereum address of AIRA?")]),o("p",[e._v("Delete "),o("code",{pre:!0},[e._v("keyfile")]),e._v(" and "),o("code",{pre:!0},[e._v("keyfile-psk")]),e._v(" in "),o("code",{pre:!0},[e._v("/var/lib/liability")]),e._v(" and restart the service")]),o("pre",[o("code",{pre:!0},[e._v("systemctl restart liability\n")])]),o("h2",{attrs:{id:"ipfs-daemon-doesnt-start"}},[o("a",{attrs:{href:"#ipfs-daemon-doesnt-start","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),e._v("IPFS daemon doesn't start")]),o("p",[e._v("The error mostly occurs on single-board computers like Raspberry Pi or LattePanda after unexpected electricity lost.")]),o("p",[e._v("Usually the file "),o("code",{pre:!0},[e._v("/var/lib/ipfs/api")]),e._v(" is corrupted and one may see error:")]),o("pre",[o("code",{pre:!0},[e._v("Error: Failed to parse '/var/lib/ipfs/api' file.\n  error: failed to parse multiaddr \"\": empty multiaddr\nIf you're sure go-ipfs isn't running, you can just delete it.\nOtherwise check:\n  ps aux | grep ipfs\n")])]),o("p",[e._v("You can delete "),o("code",{pre:!0},[e._v("/var/lib/ipfs/api")]),e._v(" file and restart the service")])])}),[],!1,null,null,null);"function"==typeof p&&p(f),"function"==typeof l&&l(f);t.default=f.exports}}]);