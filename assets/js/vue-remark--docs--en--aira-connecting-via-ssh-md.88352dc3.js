(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"1y0/":function(e,t,o){"use strict";o.r(t);var n=o("KHd+"),a=o("UQSp"),s=o("Kw5r");function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}s.a.config.optionMergeStrategies;var i={VueRemarkRoot:a.a},b=function(e){var t=e.options.components=e.options.components||{},o=e.options.computed=e.options.computed||{};Object.keys(i).forEach((function(e){"object"===r(i[e])&&"function"==typeof i[e].render||"function"==typeof i[e]&&"function"==typeof i[e].options.render?t[e]=i[e]:o[e]=function(){return i[e]}}))},d=s.a.config.optionMergeStrategies,c="__vueRemarkFrontMatter",u={excerpt:null,title:"Connecting AIRA via SSH",contributors:["akru"],translated:!0};var p=function(e){e.options[c]&&(e.options[c]=u),s.a.util.defineReactive(e.options,c,u),e.options.computed=d.computed({$frontmatter:function(){return e.options[c]}},e.options.computed)},g=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("VueRemarkRoot",[n("p",[e._v("It is more convenient to work with virtual machine via ssh connection. In this section we will configure VM.")]),n("blockquote",[n("p",[n("strong",[e._v("It's required to have your ssh public key on Github. In case you don't have one, please follow the "),n("a",{attrs:{href:"https://help.github.com/articles/adding-a-new-ssh-key-to-your-github-account/",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("link")])])])]),n("p",[e._v("Below is the walkthrough video:")]),n("p",[n("a",{attrs:{href:"https://www.youtube.com/embed/R6waDG5iwm0",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("https://www.youtube.com/embed/R6waDG5iwm0")])]),n("h2",{attrs:{id:"add-host-adapter"}},[n("a",{attrs:{href:"#add-host-adapter","aria-hidden":"true"}},[n("span",{staticClass:"icon icon-link"})]),e._v("Add Host Adapter")]),n("p",[e._v("Go to "),n("code",{pre:!0},[e._v("File")]),e._v(" -> "),n("code",{pre:!0},[e._v("Host Network Manager...")]),e._v(" or press "),n("code",{pre:!0},[e._v("Ctrl+H")])]),n("p",[n("g-image",{attrs:{src:o("rhv0"),alt:"VirtualBox Network Manager",title:"VirtualBox Network Manager"}})],1),n("p",[e._v("Click "),n("code",{pre:!0},[e._v("Create")]),e._v(" button.")]),n("h2",{attrs:{id:"add-the-second-adapter-to-the-vm"}},[n("a",{attrs:{href:"#add-the-second-adapter-to-the-vm","aria-hidden":"true"}},[n("span",{staticClass:"icon icon-link"})]),e._v("Add the Second Adapter to the VM")]),n("p",[e._v("Select imported VM and click "),n("code",{pre:!0},[e._v("Settings")]),e._v(". Go to "),n("code",{pre:!0},[e._v("Network")]),e._v(" tab and enable the second adapter")]),n("p",[n("g-image",{attrs:{src:o("Yu2C"),alt:"Add Second Adapter",title:"Add Second Adapter"}})],1),n("h2",{attrs:{id:"populate-authorized-keys"}},[n("a",{attrs:{href:"#populate-authorized-keys","aria-hidden":"true"}},[n("span",{staticClass:"icon icon-link"})]),e._v("Populate Authorized Keys")]),n("p",[e._v("Launch the VM and run the following command replacing "),n("code",{pre:!0},[e._v("<username>")]),e._v(" with your Github user name:")]),n("pre",[n("code",{pre:!0},[e._v("mkdir .ssh\nchmod 700 .ssh\ncurl -sSL https://github.com/<username>.keys >> .ssh/authorized_keys\n")])]),n("p",[e._v("Find out the VM's IP address by running:")]),n("pre",[n("code",{pre:!0},[e._v("ip a\n")])]),n("p",[e._v("You should look for an address which starts with "),n("code",{pre:!0},[e._v("192.168.xx.xx")])]),n("h2",{attrs:{id:"log-in-via-ssh"}},[n("a",{attrs:{href:"#log-in-via-ssh","aria-hidden":"true"}},[n("span",{staticClass:"icon icon-link"})]),e._v("Log in via SSH")]),n("p",[e._v("Now open your terminal and log in via SSH as usual using the address from the previous step:")]),n("pre",[n("code",{pre:!0},[e._v("ssh root@192.168.xx.xx\n")])])])}),[],!1,null,null,null);"function"==typeof b&&b(g),"function"==typeof p&&p(g);t.default=g.exports},UQSp:function(e,t,o){"use strict";t.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}},Yu2C:function(e,t){e.exports={type:"image",mimeType:"image/png",src:"/assets/static/add_second_adapter_to_vm.79e067c.6209c9ddd90888321a0fd574ec67ce77.png",size:{width:658,height:563},sizes:"(max-width: 658px) 100vw, 658px",srcset:["/assets/static/add_second_adapter_to_vm.79e067c.6209c9ddd90888321a0fd574ec67ce77.png 658w"],dataUri:"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 658 563' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-084c356444e4877da8d666db5fd6ed3a'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='40'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-084c356444e4877da8d666db5fd6ed3a)' width='658' height='563' xlink:href='data:image/png%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAAEAAAAA3CAYAAAC8TkynAAAACXBIWXMAAAsSAAALEgHS3X78AAAL4ElEQVRo3u1a%2bW9cxR3fP4C2KvxSRBvaAqFAKwgkFBKSJk1CStpK5apQ01btD5VQVSTED1VVqVIpVApSIIQ4CVcKtKVAwtEGkziJ7T29a3t3vev1fe3lPbzee9/e3t1Pv9/ZHXvxgR3HFqnrJ30082bemzfzme81b0a1b8/W0jNP7MMtm7ZUbtp0NzauIG66Ywu%2btflebNm5F7dt2Yo7tu3C7fdux2a6v2s753fgnt37sGnbTnz7nu3YdN8uemYn1X0ft929DbfSOxupjY0r3K8bb99c2fy9Pbjzvl0V1WO7b0bb07dWrr3%2bG/jiV2/A1RtuwJe/tjCuFuk3BfjZhXEjvnTd13HdLZvw8C9%2bjR0/%2bDHu2/8g9j/yGB765W/wwMM/xb179uMhqmMSNm7eSnU/w/5HD%2bCHj/0cDx34Fb67ay%2buunYDrrn%2bxkW%2btXRwW1d9ZQPu2fNA5c4du6H645%2bfqRxtOI4XG05Ujhw7gReOHpsHx3G4oQrOv3jsZcIJPP9SwwL49PuHGQ3Vtvm9ajsz9YeOHJ31znEcf%2b0k9en4nLZWCJXDou2GisrR2we%2b8lMFlMolLOWq0HNTxSJW96pgta9kMgmVtdOEC30BXHPEjT9dcKOkRDEy5oTb48X4%2bDg8Xg%2bUdE68UCqVUalUEIvHEY1GEYuEEUskEY1EkEqlkE6nEQgEkMlkxfPlcnn5oO9c1vtLwJjTCZXZ3Ik%2bVxDPnR3DJ2YnMokIurqssNsd6HY4MDg8RAPKV%2bekUplmTlHSOPWPk3j%2bxaN4791/4bWTb%2bDtd97F8WMNsHbZpwm4ki%2bPxwNVW3uHmDlFSSCRiC8skDT4egJisZi4z%2bdzJBklSvMCpdIUiqQeU1PVdD5w3eViobaXCm5DEGBuN8ERncLhVgeanEnkMhkEJyYQDocRDAaRJNGeTYCiKAiFQpicnBSqECEVkCm/x%2bWyjomS4HsG18n354DKQzXMV8/l/A3%2b1nLB73N/fH4/VLbOdjR68tjx/Bk8a/BBSSag1%2bvR3t4Oo6mdbIFnXgKYHK/Xi%2bHhYYyOjmKM4HK5RJnfHxA2IUG2gm2CHBjbjhS9y%2b/7fD5R56dOSPB9IBCcztfXzdQHMEETFKe2LgfcPz%2b1pTLRQMPpIoZSFXgShQXFvz7ll0PUCSvZj/c/%2bACnTp/Gh%2b%2bfgk6nhcVqI8PpQy6bwdBAP9QaLS5ebEabXouevn4MDA2TqhSIgHG43W6MjY0JAp1OpyDb6x0XBPqJICZU1nPe7fYIw8zkz5auSwG/m0gkqgSYO8kI%2bqN4otmDj8gbVPJpTEZiSJI94BnL5QvzSgDPCIsSN8YdEiJL9ywBPEMZUiX5DusbX5xyOdsKfqZerGXK4Lp6FZD5%2bvLlEiDVkKWAyVbZrZ1o6gngCwc9%2bEOjC7mIF806E3TqVmg0anT39s8hQIg3McjGhAdTES6rMm31ZZ6N42xU6tybLJP52W5qofr52r1UcDsecvWqNtLzfC6LeDQOpWbw6sVdzt5sL8BgKWAxlnoViUaIZcpLtgnsWeLxhHheGspYLIo0SQJ3ZCU8wnLA3/aQtKo6yAY4YwXoXDlYfVmK8ArI5nKfaQN4MCwBrAosDdlsFjl6R6YsFblcNS/v2V1yPbvcLA2%2bUCgs2kGZriTmEGA1t9Pg03jyown805FAKh6FQa8jL9CB5uYWMmIaTJXKc4wgz7gUZyna8uL7%2bpQJ4IFLQhgZumd7wKgnkJ/j9jOrLCHTBHSSGxwJZfFCWwQGX5oUuCQkgPVbUVIi4pvPBjAB3EixtiZwjY2g6fwF8gwdRKABLVo9rNS21d5Dz8bQbbfj3LnzsFrMsFkt0JCNsVK0qW1txkUiukWthrq1lQxwVBhS/gaTuxpSICEIYF%2bfyk2hL1Kgsc/MYrluRuXgZ1SgSoDsIJezW2TfzvqdJPUI19YHCVIXuUZgl8Y2gyOw0dERuifX53ZhcGAAwyPDwhVO1gIpVjFJ8EqD%2b1yuVwGzN4MDuhT%2bM0wzHp2EiUjRtLbAZrPNuyaTEiAJkCTMthnyypNEsb2QYs5gEeeydJ0qcF4aWFm30lBqgVihkBeSpuKIb0Ip4lRvHMlsUfj9OM8wdyKdIf2vCBsgUSIXF6cVYD0BUlfZsPE1SrN58UKTsCMsYewRHN12NDU1wWg0wdhmQKtGR3HEpJiRetsg1xT1ZSsF7h/HLhxL8CSIOEDXZsJTH/TgwN/NeORNC%2b5/2YK9r9lxP2H3KzbsftmKPa9YsfeVLux7tQtbGyz4S2MPprIpFKdmLDX/IyjVXCZ/xEOizmEvqwO7PI7gRLRH5RzVsfhdbky/3HUAq5gggPqk0hqMePy9btz9qgN7D7dgy2ETHn3LgQfftOPBv9nwkzfs2N5gxs0H2/CdQyZseNaAp053oZxTBAE86CKBpYdnM5vNTHsFTuvd3aeMUE1iPi9MG0EtScDvTjnwI5rlbYc02HTIgB1HjNjxkhE7j5qwnfJbDulx%2b3M63EV1N/1Vi9%2bftqBUI6BMy18lV8S50RxGhgbR%2bMlZaCmCbDdboNdqYDC2r6olv2wv0GYyocefxOl2J7q9EXRTvieYRs9EmvIp2HxJ9E9m0R/KoNuXgG08gX5PCKlkQvwhkrNbKBIo2AkGJ2oGLy8MW078I/j8Ir5F44Au8gJtniweN6TQ0j8BZJPo7rLAOTyIof5euEYGMdjrgNc1Nm3Vc2lljhGUkC60Pqa/kiRgnkiwA2qngic1UbSMpFDKZzHmclf/B477yOLH4SLDxT9JCiTy7ODYt892g4uxvVqh7WUToCe3RCacZj4j9Hop1%2bw44ErU7yUTYCIbEM2VcbI3hq4BJwpKHHby2aZ2M4rk81ET5/lC4TVBgI1U4MKYgoP2BPJTZRSzCoWoo%2bjt6xdBkBy41Oc1R0D1f0CBgoMsQtH8/58KmCkUtkeLONiXxeskBTlaAQ4NDyMY8MMfmIDbxYsXN0Zp4cKRHP/cmG0E/6cJsJMb/NCVxW/7i3h9lBYkFLo6HHbYbV3oMFsxMDCIEXKJZgpsTEajICIWr%2b4hrA0jyH%2bFU3nYx9Nwh7NLVIE1JAFdFooDhlI4qo%2biaTCJYi6NUJgWDtGoWK1NToYwEQpjnB6O0EKC9/040ls7XsDagX/bYzhhS%2bAMBUTJSAhmiwVmqw1Dg4PotpMqdFrRZbXQUrYN4/6AWFfzEndNEMDrdV7JeRN5BJP5JW8rrxkJMMhIcJ7fX3OxBuMAJkBsFHCwUxftzf6ttWYjQSagXC59aoCLbY%2bvE7BOwDoB6wSsE7BOwDoB6wSsE7BOwFohoFRaZBFUWfCAxJW243PJO0NMQKVyaWd65SkxuQG6nIPK9ae1Vgu8dTed593r6Xx55pQYE8CHBeS%2b/GftqMp6nn3eYhb/BRLV/4MJkSZE3Wflq2kSmVQS6VRiun65mO8UqKxL1Q5zcf/kwa5ErZ7rxAEJPizNNwue3Z0H1aNufOgwRg0nxJEZbpTLWDrkx6Sk8L0sF%2boTjWDIH4ErGEMsyvv20ekDjEsF94H7Ig9AykHzeQSuD1Od0zeBUX8I7kAcI5R3BkPwhuIYozJXMIIxz3hVAtKKMn3geangU6RBnwctrRro9QZ8fOYM2oxG6HQ6nD17Fmq1GhqtFh0dHWhsbERLSzM0ag3ON51Dt6MfT793Dh%2bfPQ0llb7kbzPxPGH8a66vrw/ddhu6eTeLvm/qMGF4xCmkzDHqhZIpwh12Qe86DbVeA63BhLiSRTiZhn1wDCqrzS62v3LZrDjLt1SwKmTTCgLBCfjGvXC7XGJGvF4P3fN5Xx%2bGhobEMVpP7WBUgMo8bhciCRp0XyuUgfPIFyvioKZUwcVB36Y0K84YpcSPWv5ef18vvPQNcdBqMowM9W3EH4Y3nEavz4kOtwX6zh5Y%2bkfgnkwKsISo3nr7HRhpljQ6A7HTtnTQrOsMRvDOkpHUyNTRCYPId4r7NlPHTEp1DFY3Tg00U4Z2M3Qmi2jnkr5bh1aNFmqdnvquF/e6GtRanUCzVo/Gi2o0tRhwvsWIJrUO5zUGfNJMZa06NDW34L9uRVtgVGYcaAAAAABJRU5ErkJggg==' /%3e%3c/svg%3e"}},rhv0:function(e,t){e.exports={type:"image",mimeType:"image/png",src:"/assets/static/virtualbox_network_manager.2671d65.079722374492cfe4bfa0cf05ddab56ad.png",size:{width:900,height:531},sizes:"(max-width: 900px) 100vw, 900px",srcset:["/assets/static/virtualbox_network_manager.82a2fbd.079722374492cfe4bfa0cf05ddab56ad.png 480w","/assets/static/virtualbox_network_manager.2671d65.079722374492cfe4bfa0cf05ddab56ad.png 900w"],dataUri:"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 900 531' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-dbb912647e29c0211baf5f90056bc8f2'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='40'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-dbb912647e29c0211baf5f90056bc8f2)' width='900' height='531' xlink:href='data:image/png%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAAEAAAAAmCAYAAAB0xJ2ZAAAACXBIWXMAAAsSAAALEgHS3X78AAAFiklEQVRo3u2Z229UVRTG54/wQYjRBwRFvFQi8oBgi5UYLlUgqOUO0iJEBFQSTDA%2b6IvxUTAk6oOxgBR8ITEqYCnT6XSuZ%2b63zr2dmc5MO3POmUvbaZnzufbutKlRSQkjIj2T/LLW2Xvttdf%2bzmVPsjWNW3ZU1%2b9ow0OPLVIWLnkaCxcvw8Ily6bs3UJ5Hn58KRY1vIgVLzfjuVVNWNHYjOWrm4i1WL6mGSub1qFhVSMaXlqLxQ0vYAHF123%2bWXUsWPwUHl36LB558hmaq0l5YvlKmrdJ0bz9/sdo/%2bQLpXlDC17bvA3rXt%2bKV1u21AWW65WNb6CldTcOHT%2bBPe%2b%2bh7Yjx9F%2b9AMcPPoh9h46wu3BYx/h6MlT2LZzD4%2bvZw1TbEXzps3YuK2V89beA9i8fbfSur8dmp6eHkWv1aJHq1d0ul70B0OQZRniiMjJ5/PI5XJk6TonESJy%2bRxvmwts/MjwMIaGhpDJpMmmuc9Ip2t%2bzWYpbnq%2besPrGBnhZLNZhVmaX9EYzRZEB4OIp8IYTAxQ5zBGcsNIiQmk5BT5NDiXR3Ykg7ScREZK33kBNLlI5OfAv7H4vxNjWhCNYPFAG%2brEp1c3oTd0BZVyFWES5CfLSVz%2b5QRSmTiK8iicETPO3tyHS12fQ5KlOS3mfkYURRIgB43d5sV1bwdO2Z6HPtWJilRFKBeF4WIbCl%2b2I5WKYqw0AXtcQN%2bVDSheO4a8VKQE/38B2NNAr4AZ6VQGBk8XIgNhyJKMUCSCuMuFiL4bmXQGyWQC0eggBn0Cog4tEskhnmA6Ub24k%2bLvNm5GAIsgIBwKwmoS4PX5IRcKcNgFmKxWGAQbwiRGMpGAyWiA3mCASXDCbndAuoOC54okSSjQ/EWC1VEsFvl1oeazdr4oKpx9qHl/zU7HTvvTC2Q5Z%2bdhsLEz3wBtjw4JWmAsHuOTMkrlMso1CnxwkfzRWlsJpVKJEsv0LagTtVxsVwiFQrQThRGLRuHz%2bxGhG8DaAoEA%2bkNhWlSe1xSPx%2bH1ehGNMevj/eFwhN/EYDDId5RiscRzsv5%2baguFw/yGRmMxLgQXoKvrBhyCBTarBUOpJCTa4gqSSK/CFIV/oEgfwnpRqCHS7tPv88Jus8Fhs8LY1wvBOlWbxWSAzSYgT0WXiwUMxKLwuBwI%2bH0QLGa4HDa6pqeTnmgWn6Utd4xuVnJwAH16PfxeD9xOB49lY1iO3HAWmpu09%2busLhjsblzXGeAKxiGOTSJXGr/nyJUqoqks9FYq1BtCj4lEcPrh7g%2bjz%2b6FNHYL4ugEj2U1SuNV3iZXFD5WpusC9xXkyhViAqmcDE8gCIc/jG6DBTdNNuRGJ3metFiE5rMLv6O1w40dP9ix74ILG74RsOa0CY1fm9F45h5C863%2byoiWb63Y/yPV0%2bFAW6eH6nLgze%2bptvMuNJ2hughWX8t3Ag5f9mD3eScOXfJg1zkH3qFxBzvdaLvoxnYat%2bu8G4cvWNFxzYSd51yU14UDFLOWcqw%2bbcb6s0ZoftWZYUsWYY7nYR0QoY/k0Bv%2bb9ARfVGqY1CGaUDi1hiXZnx9VEQvIyLCEJMgJGRYBmTex6yJYpkVBqd8M/NprC8pTvmJqT6WRx%2bVoAvSK%2bB2uzFvf8okNDaHk/uTt6qoVhXcug%2bozmJ22%2b3ibovy15wKrXl0bJz%2bCdYEqFarUBRlftz42jrHx1UBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBqGO%2boAowI4DT9afHYj69ApVKBRqTxcqPuup90Hm/wc4JmWVnhexskK05m81C43S5MUFKFIsF3vigUSbYAerY6CgXIRDww%2bf1IhaLUn8Zmp9/uwp/oB9Otxsuj%2bcBxAuX2wP2rWMn4X1GI25030S3VkvXNvwBEqBupr9YKE4AAAAASUVORK5CYII=' /%3e%3c/svg%3e"}}}]);