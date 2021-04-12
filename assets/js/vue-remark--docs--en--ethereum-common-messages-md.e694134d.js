(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{UQSp:function(t,e,r){"use strict";e.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}},iVpy:function(t,e,r){"use strict";r.r(e);var o=r("KHd+"),s=r("UQSp"),n=r("Kw5r");function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}n.a.config.optionMergeStrategies;var m={VueRemarkRoot:s.a},d=function(t){var e=t.options.components=t.options.components||{},r=t.options.computed=t.options.computed||{};Object.keys(m).forEach((function(t){"object"===a(m[t])&&"function"==typeof m[t].render||"function"==typeof m[t]&&"function"==typeof m[t].options.render?e[t]=m[t]:r[t]=function(){return m[t]}}))},_=n.a.config.optionMergeStrategies,h="__vueRemarkFrontMatter",c={excerpt:null,title:"Ethereum Common Messages",contributors:["ensrationis","akru"],translated:!0};var i=function(t){t.options[h]&&(t.options[h]=c),n.a.util.defineReactive(t.options,h,c),t.options.computed=_.computed({$frontmatter:function(){return t.options[h]}},t.options.computed)},v=Object(o.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("VueRemarkRoot",[r("h2",{attrs:{id:"ethereum_commonaddressmsg"}},[r("a",{attrs:{href:"#ethereum_commonaddressmsg","aria-hidden":"true"}},[r("span",{staticClass:"icon icon-link"})]),t._v("ethereum_common/Address.msg")]),r("table",[r("thead",[r("tr",[r("th",[t._v("Field")]),r("th",[t._v("Type")]),r("th",[t._v("Description")])])]),r("tbody",[r("tr",[r("td",[t._v("address")]),r("td",[t._v("std_msgs/String")]),r("td",[t._v("Address in Ethereum blockchain")])])])]),r("h2",{attrs:{id:"ethereum_commonuint256msg"}},[r("a",{attrs:{href:"#ethereum_commonuint256msg","aria-hidden":"true"}},[r("span",{staticClass:"icon icon-link"})]),t._v("ethereum_common/UInt256.msg")]),r("table",[r("thead",[r("tr",[r("th",[t._v("Field")]),r("th",[t._v("Type")]),r("th",[t._v("Description")])])]),r("tbody",[r("tr",[r("td",[t._v("uint256")]),r("td",[t._v("std_msgs/String")]),r("td",[t._v("A wrapper for big integers")])])])]),r("h2",{attrs:{id:"ethereum_commontransfereventmsg"}},[r("a",{attrs:{href:"#ethereum_commontransfereventmsg","aria-hidden":"true"}},[r("span",{staticClass:"icon icon-link"})]),t._v("ethereum_common/TransferEvent.msg")]),r("table",[r("thead",[r("tr",[r("th",[t._v("Field")]),r("th",[t._v("Type")]),r("th",[t._v("Description")])])]),r("tbody",[r("tr",[r("td",[t._v("args_from")]),r("td",[r("a",{attrs:{href:"#ethereum_commonaddressmsg"}},[t._v("ethereum_common/Address")])]),r("td",[t._v("Sender address")])]),r("tr",[r("td",[t._v("args_to")]),r("td",[r("a",{attrs:{href:"#ethereum_commonaddressmsg"}},[t._v("ethereum_common/Address")])]),r("td",[t._v("Receiver address")])]),r("tr",[r("td",[t._v("args_value")]),r("td",[r("a",{attrs:{href:"#ethereum_commonuint256msg"}},[t._v("ethereum_common/UInt256")])]),r("td",[t._v("Amount of tokens")])])])]),r("h2",{attrs:{id:"ethereum_commonapprovaleventmsg"}},[r("a",{attrs:{href:"#ethereum_commonapprovaleventmsg","aria-hidden":"true"}},[r("span",{staticClass:"icon icon-link"})]),t._v("ethereum_common/ApprovalEvent.msg")]),r("table",[r("thead",[r("tr",[r("th",[t._v("Field")]),r("th",[t._v("Type")]),r("th",[t._v("Description")])])]),r("tbody",[r("tr",[r("td",[t._v("args_owner")]),r("td",[r("a",{attrs:{href:"#ethereum_commonaddressmsg"}},[t._v("ethereum_common/Address")])]),r("td",[t._v("Owner address")])]),r("tr",[r("td",[t._v("args_spender")]),r("td",[r("a",{attrs:{href:"#ethereum_commonaddressmsg"}},[t._v("ethereum_common/Address")])]),r("td",[t._v("Spender address")])]),r("tr",[r("td",[t._v("args_value")]),r("td",[r("a",{attrs:{href:"#ethereum_commonuint256msg"}},[t._v("ethereum_common/UInt256")])]),r("td",[t._v("Amount of tokens")])])])]),r("h2",{attrs:{id:"ethereum_commonaccountbalancesrv"}},[r("a",{attrs:{href:"#ethereum_commonaccountbalancesrv","aria-hidden":"true"}},[r("span",{staticClass:"icon icon-link"})]),t._v("ethereum_common/AccountBalance.srv")]),r("p",[r("strong",[t._v("Request")])]),r("table",[r("thead",[r("tr",[r("th",[t._v("Field")]),r("th",[t._v("Type")]),r("th",[t._v("Description")])])]),r("tbody",[r("tr",[r("td",[t._v("account")]),r("td",[r("a",{attrs:{href:"#ethereum_commonaddressmsg"}},[t._v("ethereum_common/Address")])]),r("td",[t._v("Ethereum address")])])])]),r("p",[r("strong",[t._v("Response")])]),r("table",[r("thead",[r("tr",[r("th",[t._v("Field")]),r("th",[t._v("Type")]),r("th",[t._v("Description")])])]),r("tbody",[r("tr",[r("td",[t._v("balance")]),r("td",[r("a",{attrs:{href:"#ethereum_commonuint256msg"}},[t._v("ethereum_common/UInt256")])]),r("td",[t._v("Balance in Wei")])])])]),r("h2",{attrs:{id:"ethereum_commonaccounttoaddressallowancesrv"}},[r("a",{attrs:{href:"#ethereum_commonaccounttoaddressallowancesrv","aria-hidden":"true"}},[r("span",{staticClass:"icon icon-link"})]),t._v("ethereum_common/AccountToAddressAllowance.srv")]),r("p",[r("strong",[t._v("Request")])]),r("table",[r("thead",[r("tr",[r("th",[t._v("Field")]),r("th",[t._v("Type")]),r("th",[t._v("Description")])])]),r("tbody",[r("tr",[r("td",[t._v("account")]),r("td",[r("a",{attrs:{href:"#ethereum_commonaddressmsg"}},[t._v("ethereum_common/Address")])]),r("td",[t._v("Ethereum address")])]),r("tr",[r("td",[t._v("to")]),r("td",[r("a",{attrs:{href:"#ethereum_commonaddressmsg"}},[t._v("ethereum_common/Address")])]),r("td",[t._v("Ethereum address")])])])]),r("p",[r("strong",[t._v("Response")])]),r("table",[r("thead",[r("tr",[r("th",[t._v("Field")]),r("th",[t._v("Type")]),r("th",[t._v("Description")])])]),r("tbody",[r("tr",[r("td",[t._v("amount")]),r("td",[r("a",{attrs:{href:"#ethereum_commonuint256msg"}},[t._v("ethereum_common/UInt256")])]),r("td",[t._v("Balance in Wn")])])])]),r("h2",{attrs:{id:"ethereum_commonaccountssrv"}},[r("a",{attrs:{href:"#ethereum_commonaccountssrv","aria-hidden":"true"}},[r("span",{staticClass:"icon icon-link"})]),t._v("ethereum_common/Accounts.srv")]),r("p",[r("strong",[t._v("Request")])]),r("p",[t._v("Request is empty")]),r("p",[r("strong",[t._v("Response")])]),r("table",[r("thead",[r("tr",[r("th",[t._v("Field")]),r("th",[t._v("Type")]),r("th",[t._v("Description")])])]),r("tbody",[r("tr",[r("td",[t._v("accounts")]),r("td",[r("a",{attrs:{href:"#ethereum_commonaddressmsg"}},[t._v("ethereum_common/Address[]")])]),r("td",[t._v("List of available accounts")])])])]),r("h2",{attrs:{id:"ethereum_commonallowancesrv"}},[r("a",{attrs:{href:"#ethereum_commonallowancesrv","aria-hidden":"true"}},[r("span",{staticClass:"icon icon-link"})]),t._v("ethereum_common/Allowance.srv")]),r("p",[r("strong",[t._v("Request")])]),r("p",[t._v("Request is empty")]),r("p",[r("strong",[t._v("Response")])]),r("table",[r("thead",[r("tr",[r("th",[t._v("Field")]),r("th",[t._v("Type")]),r("th",[t._v("Description")])])]),r("tbody",[r("tr",[r("td",[t._v("amount")]),r("td",[r("a",{attrs:{href:"#ethereum_commonuint256msg"}},[t._v("ethereum_common/UInt256")])]),r("td",[t._v("Amount of XRT the Factory is allowed to spend")])])])]),r("h2",{attrs:{id:"ethereum_commonapprovesrv"}},[r("a",{attrs:{href:"#ethereum_commonapprovesrv","aria-hidden":"true"}},[r("span",{staticClass:"icon icon-link"})]),t._v("ethereum_common/Approve.srv")]),r("p",[r("strong",[t._v("Request")])]),r("table",[r("thead",[r("tr",[r("th",[t._v("Field")]),r("th",[t._v("Type")]),r("th",[t._v("Description")])])]),r("tbody",[r("tr",[r("td",[t._v("spender")]),r("td",[r("a",{attrs:{href:"#ethereum_commonaddressmsg"}},[t._v("ethereum_common/Address")])]),r("td",[t._v("Who is allowed to spend")])]),r("tr",[r("td",[t._v("value")]),r("td",[r("a",{attrs:{href:"#ethereum_commonuint256msg"}},[t._v("ethereum_common/UInt256")])]),r("td",[t._v("How much tokens are allowed")])])])]),r("p",[r("strong",[t._v("Response")])]),r("table",[r("thead",[r("tr",[r("th",[t._v("Field")]),r("th",[t._v("Type")]),r("th",[t._v("Description")])])]),r("tbody",[r("tr",[r("td",[t._v("txhash")]),r("td",[t._v("std_msgs/Uint8[32]")]),r("td",[t._v("Transaction hash")])])])]),r("h2",{attrs:{id:"ethereum_commonbalancesrv"}},[r("a",{attrs:{href:"#ethereum_commonbalancesrv","aria-hidden":"true"}},[r("span",{staticClass:"icon icon-link"})]),t._v("ethereum_common/Balance.srv")]),r("p",[r("strong",[t._v("Request")])]),r("p",[t._v("Request is empty")]),r("p",[r("strong",[t._v("Response")])]),r("table",[r("thead",[r("tr",[r("th",[t._v("Field")]),r("th",[t._v("Type")]),r("th",[t._v("Description")])])]),r("tbody",[r("tr",[r("td",[t._v("balance")]),r("td",[r("a",{attrs:{href:"#ethereum_commonuint256msg"}},[t._v("ethereum_common/UInt256")])]),r("td",[t._v("The balance of default account")])])])]),r("h2",{attrs:{id:"ethereum_commonblocknumbersrv"}},[r("a",{attrs:{href:"#ethereum_commonblocknumbersrv","aria-hidden":"true"}},[r("span",{staticClass:"icon icon-link"})]),t._v("ethereum_common/BlockNumber.srv")]),r("p",[r("strong",[t._v("Request")])]),r("p",[t._v("Request is empty")]),r("p",[r("strong",[t._v("Response")])]),r("table",[r("thead",[r("tr",[r("th",[t._v("Field")]),r("th",[t._v("Type")]),r("th",[t._v("Description")])])]),r("tbody",[r("tr",[r("td",[t._v("number")]),r("td",[t._v("std_msgs/Uint64")]),r("td",[t._v("Current block number")])])])]),r("h2",{attrs:{id:"ethereum_commontransfersrv"}},[r("a",{attrs:{href:"#ethereum_commontransfersrv","aria-hidden":"true"}},[r("span",{staticClass:"icon icon-link"})]),t._v("ethereum_common/Transfer.srv")]),r("p",[r("strong",[t._v("Request")])]),r("table",[r("thead",[r("tr",[r("th",[t._v("Field")]),r("th",[t._v("Type")]),r("th",[t._v("Description")])])]),r("tbody",[r("tr",[r("td",[t._v("to")]),r("td",[r("a",{attrs:{href:"#ethereum_commonaddressmsg"}},[t._v("ethereum_common/Address")])]),r("td",[t._v("Ethereum address")])]),r("tr",[r("td",[t._v("value")]),r("td",[r("a",{attrs:{href:"#ethereum_commonuint256msg"}},[t._v("ethereum_common/UInt256")])]),r("td",[t._v("The amount of tokens")])])])]),r("p",[r("strong",[t._v("Response")])]),r("table",[r("thead",[r("tr",[r("th",[t._v("Field")]),r("th",[t._v("Type")]),r("th",[t._v("Description")])])]),r("tbody",[r("tr",[r("td",[t._v("txhash")]),r("td",[t._v("std_msgs/Uint8[32]")]),r("td",[t._v("Transaction hash")])])])]),r("h2",{attrs:{id:"ethereum_commontransferfromsrv"}},[r("a",{attrs:{href:"#ethereum_commontransferfromsrv","aria-hidden":"true"}},[r("span",{staticClass:"icon icon-link"})]),t._v("ethereum_common/TransferFrom.srv")]),r("p",[r("strong",[t._v("Request")])]),r("table",[r("thead",[r("tr",[r("th",[t._v("Field")]),r("th",[t._v("Type")]),r("th",[t._v("Description")])])]),r("tbody",[r("tr",[r("td",[t._v("owner")]),r("td",[r("a",{attrs:{href:"#ethereum_commonaddressmsg"}},[t._v("ethereum_common/Address")])]),r("td",[t._v("Owner's address")])]),r("tr",[r("td",[t._v("to")]),r("td",[r("a",{attrs:{href:"#ethereum_commonaddressmsg"}},[t._v("ethereum_common/Address")])]),r("td",[t._v("Another account")])]),r("tr",[r("td",[t._v("value")]),r("td",[r("a",{attrs:{href:"#ethereum_commonuint256msg"}},[t._v("ethereum_common/UInt256")])]),r("td",[t._v("The amount of tokens")])])])]),r("p",[r("strong",[t._v("Response")])]),r("table",[r("thead",[r("tr",[r("th",[t._v("Field")]),r("th",[t._v("Type")]),r("th",[t._v("Description")])])]),r("tbody",[r("tr",[r("td",[t._v("txhash")]),r("td",[t._v("std_msgs/Uint8[32]")]),r("td",[t._v("Transaction hash")])])])])])}),[],!1,null,null,null);"function"==typeof d&&d(v),"function"==typeof i&&i(v);e.default=v.exports}}]);