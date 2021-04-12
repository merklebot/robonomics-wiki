(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{UQSp:function(t,e,n){"use strict";e.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}},UtMj:function(t,e,n){"use strict";n.r(e);var o=n("KHd+"),r=n("UQSp"),a=n("Kw5r");function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}a.a.config.optionMergeStrategies;var i={VueRemarkRoot:r.a},l=function(t){var e=t.options.components=t.options.components||{},n=t.options.computed=t.options.computed||{};Object.keys(i).forEach((function(t){"object"===s(i[t])&&"function"==typeof i[t].render||"function"==typeof i[t]&&"function"==typeof i[t].options.render?e[t]=i[t]:n[t]=function(){return i[t]}}))},p=a.a.config.optionMergeStrategies,c="__vueRemarkFrontMatter",d={excerpt:null,title:"Configuration Options Description",contributors:["LoSk-p","Vourhey"],translated:!0};var u=function(t){t.options[c]&&(t.options[c]=d),a.a.util.defineReactive(t.options,c,d),t.options.computed=p.computed({$frontmatter:function(){return t.options[c]}},t.options.computed)},v=Object(o.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("VueRemarkRoot",[n("p",[t._v("Basically, you can think of the package as a black box with one input (sensor data) and many outputs.\nFor now only SDS011 sensor is supported, but if you are familiar with Python it'd be easy to add other sensors as well.")]),n("p",[t._v("Have a look at "),n("a",{attrs:{href:"https://github.com/airalab/sensors-connectivity/blob/master/config/default.json",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("configuration")]),t._v(" file:")]),n("pre",[n("code",{pre:!0,attrs:{class:"language-json"}},[t._v('{\n   "general":{\n      "publish_interval":30\n   },\n   "comstation":{\n      "enable":false,\n      "port":"/dev/ttyUSB0",\n      "work_period":300,\n      "geo":"",\n      "public_key":""\n   },\n   "httpstation":{\n      "enable":true,\n      "port":8001\n   },\n   "mqttstation": {\n      "enable": true,\n      "host": "connectivity.robonomics.network",\n      "port": 1883\n   },\n   "luftdaten":{\n      "enable":true\n   },\n   "robonomics":{\n      "enable":true,\n      "ipfs_provider":"/ip4/127.0.0.1/tcp/5001/http",\n      "ipfs_topic":"airalab.lighthouse.5.robonomics.eth"\n   },\n   "datalog":{\n      "enable":false,\n      "path":"",\n      "suri":"",\n      "remote":"wss://substrate.ipci.io",\n      "dump_interval":3600,\n      "temporal_username":"",\n      "temporal_password":""\n   },\n   "dev":{\n      "sentry":""\n   }\n}\n')])]),n("p",[t._v("At the moment it's possible to publish data to "),n("a",{attrs:{href:"https://luftdaten.info/",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("Luftdaten")]),t._v(", "),n("a",{attrs:{href:"https://robonomics.network/",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("Robonomics Network")]),t._v(" and "),n("a",{attrs:{href:"https://github.com/airalab/robonomics",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("Datalog")]),t._v(".\nThe last one is experimental!")]),n("blockquote",[n("p",[t._v("DO NOT edit "),n("code",{pre:!0},[t._v("config/default.json")]),t._v(" file. Instead make a copy")])]),n("p",[t._v("Play around with the configuration!")]),n("p",[t._v("Explanation of options:")]),n("table",[n("thead",[n("tr",[n("th",[t._v("Field")]),n("th",[t._v("Description")])])]),n("tbody",[n("tr",[n("td",[n("code",{pre:!0},[t._v("general/publish_interval")])]),n("td",[t._v("integer number from 1 and above. Tells how often send measurements. Keep in mind that if measurements from sensors come less often than this number connectivity sends last data")])]),n("tr",[n("td",[n("code",{pre:!0},[t._v("comstation/enable")])]),n("td",[t._v("true/false. Enabling/disabling the station")])]),n("tr",[n("td",[n("code",{pre:!0},[t._v("comstation/port")])]),n("td",[t._v("valid path to com port, for example "),n("code",{pre:!0},[t._v("/dev/ttyUSB0")]),t._v(". It is where a sensor is connected to")])]),n("tr",[n("td",[n("code",{pre:!0},[t._v("comstation/work_period")])]),n("td",[t._v("integer from 0 to 1800. For SDS011 sensor 0 means continuous work. Recommended period is 300 seconds")])]),n("tr",[n("td",[n("code",{pre:!0},[t._v("comstation/geo")])]),n("td",[n("code",{pre:!0},[t._v("lat,lon")]),t._v(" a string with two floats separated by a comma. It represents latitude and longitude of a sensor")])]),n("tr",[n("td",[n("code",{pre:!0},[t._v("comstation/public_key")])]),n("td",[t._v("Ed25519 verifying key in hex format. If not provided connectivity generates a new one")])]),n("tr",[n("td",[n("code",{pre:!0},[t._v("httpstation/enable")])]),n("td",[t._v("true/false. Enabling/disabling the station")])]),n("tr",[n("td",[n("code",{pre:!0},[t._v("httpstation/port")])]),n("td",[t._v("what port listen to")])]),n("tr",[n("td",[n("code",{pre:!0},[t._v("mqttstation/enable")])]),n("td",[t._v("true/false. Enabling/disabling the station")])]),n("tr",[n("td",[n("code",{pre:!0},[t._v("mqttstation/host")])]),n("td",[t._v("the hostname or IP address of the remote broker")])]),n("tr",[n("td",[n("code",{pre:!0},[t._v("mqttstation/port")])]),n("td",[t._v("the network port of the server host to connect to")])]),n("tr",[n("td",[n("code",{pre:!0},[t._v("luftdaten/enable")])]),n("td",[t._v("true/false. Whether or not publish data to "),n("a",{attrs:{href:"https://devices.sensor.community/",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("Luftdaten")]),t._v(". Don't forget to register the sensor's mac address on the site")])]),n("tr",[n("td",[n("code",{pre:!0},[t._v("robonomics/enable")])]),n("td",[t._v("true/false. Whether or not publish data to IPFS topic according to Robonomics communication protocol")])]),n("tr",[n("td",[n("code",{pre:!0},[t._v("robonomics/ipfs_proveder")])]),n("td",[t._v("an endpoint for IPFS daemon. By default it's "),n("code",{pre:!0},[t._v("/ip4/127.0.0.1/tcp/5001/http")]),t._v(" that means local daemon. The endpoint must by in multiaddr format. For example for "),n("a",{attrs:{href:"https://infura.io/",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("Infura.io")]),t._v(" it would be "),n("code",{pre:!0},[t._v("/dns/ipfs.infura.io/tcp/5001/https")])])]),n("tr",[n("td",[n("code",{pre:!0},[t._v("robonomics/ipfs_topic")])]),n("td",[t._v("IPFS topic's name. If you want to use "),n("a",{attrs:{href:"https://sensors.robonomics.network",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("DApp")]),t._v(" provided by Robonomics team leave it untouched")])]),n("tr",[n("td",[n("code",{pre:!0},[t._v("datalog/enable")])]),n("td",[t._v("true/false. Enable/Disable saving log to "),n("a",{attrs:{href:"https://ui.ipci.io/",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("Robonomics on Substrate chain")])])]),n("tr",[n("td",[n("code",{pre:!0},[t._v("datalog/path")])]),n("td",[t._v("full path to "),n("code",{pre:!0},[t._v("robonomics")]),t._v(" executable file. You can find the latest release on "),n("a",{attrs:{href:"https://github.com/airalab/robonomics/releases",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("this")]),t._v(" page")])]),n("tr",[n("td",[n("code",{pre:!0},[t._v("datalog/suri")])]),n("td",[t._v("a private key from substrate chain account")])]),n("tr",[n("td",[n("code",{pre:!0},[t._v("datalog/remote")])]),n("td",[t._v("an endpoint to substrate instance")])]),n("tr",[n("td",[n("code",{pre:!0},[t._v("datalog/dump_interval")])]),n("td",[t._v("specify a period of time for collecting log in seconds")])]),n("tr",[n("td",[n("code",{pre:!0},[t._v("datalog/temporal_username")])]),n("td",[t._v("set username to upload files to "),n("a",{attrs:{href:"https://temporal.cloud/",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("Temporal.Cloud")]),t._v(" (Optional)")])]),n("tr",[n("td",[n("code",{pre:!0},[t._v("detalog/temporal_password")])]),n("td",[t._v("set password to upload files to "),n("a",{attrs:{href:"https://temporal.cloud/",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("Temporal.Cloud")]),t._v(" (Optional)")])]),n("tr",[n("td",[n("code",{pre:!0},[t._v("dev/sentry")])]),n("td",[t._v("for development purpose. If you have a "),n("a",{attrs:{href:"https://sentry.io/",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("Sentry.io")]),t._v(" account you can put sentry's credentials in here")])])])]),n("h2",{attrs:{id:"scenario-1-connect-sds011-to-serial-port"}},[n("a",{attrs:{href:"#scenario-1-connect-sds011-to-serial-port","aria-hidden":"true"}},[n("span",{staticClass:"icon icon-link"})]),t._v("Scenario #1: Connect SDS011 to serial port")]),n("p",[t._v("The easiest and the most straightforward way to connect your sensor to the network is using the serial port")]),n("p",[t._v("Connect you SDS011 sensor to a USB port, let's assume it got "),n("code",{pre:!0},[t._v("/dev/ttyUSB0")]),t._v(" address")]),n("pre",[n("code",{pre:!0,attrs:{class:"language-json"}},[t._v('{\n   "general":{\n      "publish_interval":30            \n   },\n   "comstation":{\n      "enable":true,\n      "port":"/dev/ttyUSB0",\n      "work_period":300,\n      "geo":"59.944954,30.294534",\n      "public_key":""\n   },\n   "httpstation":{\n      "enable":false,\n      "port":8001\n   },\n   "luftdaten":{\n      "enable":true\n   },\n   "robonomics":{\n      "enable":true,\n      "ipfs_provider":"/ip4/127.0.0.1/tcp/5001/http",\n      "ipfs_topic":"airalab.lighthouse.5.robonomics.eth"\n   },\n   "datalog":{\n      "enable":false,\n      "path":"",\n      "suri":"",\n      "remote":"wss://substrate.ipci.io",\n      "dump_interval":3600,\n      "temporal_username":"",\n      "temporal_password":""\n   },\n   "dev":{\n      "sentry":""\n   }\n}\n')])]),n("h2",{attrs:{id:"scenario-2-connect-sds011-via-http"}},[n("a",{attrs:{href:"#scenario-2-connect-sds011-via-http","aria-hidden":"true"}},[n("span",{staticClass:"icon icon-link"})]),t._v("Scenario #2: Connect SDS011 via HTTP")]),n("h3",{attrs:{id:"connectivity-configuration"}},[n("a",{attrs:{href:"#connectivity-configuration","aria-hidden":"true"}},[n("span",{staticClass:"icon icon-link"})]),t._v("Connectivity Configuration")]),n("pre",[n("code",{pre:!0,attrs:{class:"language-json"}},[t._v('{\n   "general":{\n      "publish_interval":30            \n   },\n   "comstation":{\n      "enable":false,\n      "port":"/dev/ttyUSB0",\n      "work_period":300,\n      "geo":"59.944954,30.294534",\n      "public_key":""\n   },\n   "httpstation":{\n      "enable":true,\n      "port":8001\n   },\n   "luftdaten":{\n      "enable":true\n   },\n   "robonomics":{\n      "enable":true,\n      "ipfs_provider":"/ip4/127.0.0.1/tcp/5001/http",\n      "ipfs_topic":"airalab.lighthouse.5.robonomics.eth"\n   },\n   "datalog":{\n      "enable":false,\n      "path":"",\n      "suri":"",\n      "remote":"wss://substrate.ipci.io",\n      "dump_interval":3600,\n      "temporal_username":"",\n      "temporal_password":""\n   },\n   "dev":{\n      "sentry":""\n   }\n}\n')])]),n("blockquote",[n("p",[t._v("Do not forget to open the port in system firewall")]),n("p",[t._v("On NixOS you can do:")]),n("pre",[n("code",{pre:!0},[t._v("networking.firewall.allowedTCPPorts = [ 31313 ];\n")])])]),n("h2",{attrs:{id:"scenario-3-connect-sds011-via-mqtt"}},[n("a",{attrs:{href:"#scenario-3-connect-sds011-via-mqtt","aria-hidden":"true"}},[n("span",{staticClass:"icon icon-link"})]),t._v("Scenario #3: Connect SDS011 via MQTT")]),n("h3",{attrs:{id:"connectivity-configuration-1"}},[n("a",{attrs:{href:"#connectivity-configuration-1","aria-hidden":"true"}},[n("span",{staticClass:"icon icon-link"})]),t._v("Connectivity Configuration")]),n("pre",[n("code",{pre:!0,attrs:{class:"language-json"}},[t._v('{\n   "general":{\n      "publish_interval":30\n   },\n   "comstation":{\n      "enable":false,\n      "port":"/dev/ttyUSB0",\n      "work_period":300,\n      "geo":"",\n      "public_key":""\n   },\n   "httpstation":{\n      "enable":true,\n      "port":8001\n   },\n   "mqttstation": {\n      "enable": true,\n      "host": "connectivity.robonomics.network",\n      "port": 1883\n   },\n   "luftdaten":{\n      "enable":true\n   },\n   "robonomics":{\n      "enable":true,\n      "ipfs_provider":"/ip4/127.0.0.1/tcp/5001/http",\n      "ipfs_topic":"airalab.lighthouse.5.robonomics.eth"\n   },\n   "datalog":{\n      "enable":false,\n      "path":"",\n      "suri":"",\n      "remote":"wss://substrate.ipci.io",\n      "dump_interval":3600,\n      "temporal_username":"",\n      "temporal_password":""\n   },\n   "dev":{\n      "sentry":""\n   }\n}\n')])]),n("h2",{attrs:{id:"scenario-4-connect-multiple-sensors-and-publish-to-datalog"}},[n("a",{attrs:{href:"#scenario-4-connect-multiple-sensors-and-publish-to-datalog","aria-hidden":"true"}},[n("span",{staticClass:"icon icon-link"})]),t._v("Scenario #4: Connect Multiple Sensors and Publish to Datalog")]),n("h3",{attrs:{id:"install-robonomics"}},[n("a",{attrs:{href:"#install-robonomics","aria-hidden":"true"}},[n("span",{staticClass:"icon icon-link"})]),t._v("Install Robonomics")]),n("p",[t._v("From "),n("code",{pre:!0},[t._v("root")]),t._v(" user do:")]),n("pre",[n("code",{pre:!0},[t._v('echo "https://github.com/airalab/airapkgs/archive/nixos-unstable.tar.gz nixos" > /root/.nix-channels\nnix-channel --update\n')])]),n("p",[t._v("Then edit "),n("code",{pre:!0},[t._v("/etc/nixos/configuration.nix")]),t._v(" and add:")]),n("pre",[n("code",{pre:!0},[t._v("...\n  environment.systemPackages = with pkgs; [\n        substrate-node-robonomics-bin\n  ];\n...\n")])]),n("p",[t._v("Run rebuild and find out where "),n("code",{pre:!0},[t._v("robonomics")]),t._v(" is:")]),n("pre",[n("code",{pre:!0},[t._v("nixos-rebuild switch\nwhereis robonomics\n")])]),n("p",[t._v("Let's assume you got the following path: "),n("code",{pre:!0},[t._v("/nix/store/2gz2ik17w5xad8w819bsb05a23pbjbya-system-path/bin/robonomics")])]),n("h3",{attrs:{id:"configuration"}},[n("a",{attrs:{href:"#configuration","aria-hidden":"true"}},[n("span",{staticClass:"icon icon-link"})]),t._v("Configuration")]),n("pre",[n("code",{pre:!0,attrs:{class:"language-json"}},[t._v('{\n   "general":{\n      "publish_interval":30            \n   },\n   "comstation":{\n      "enable":false,\n      "port":"/dev/ttyUSB0",\n      "work_period":300,\n      "geo":"59.944954,30.294534",\n      "public_key":""\n   },\n   "httpstation":{\n      "enable":true,\n      "port":8001\n   },\n   "luftdaten":{\n      "enable":true\n   },\n   "robonomics":{\n      "enable":true,\n      "ipfs_provider":"/ip4/127.0.0.1/tcp/5001/http",\n      "ipfs_topic":"airalab.lighthouse.5.robonomics.eth"\n   },\n   "datalog":{\n      "enable":true,\n      "path":"/nix/store/2gz2ik17w5xad8w819bsb05a23pbjbya-system-path/bin/robonomics",\n      "suri":"0x...",\n      "remote":"wss://substrate.ipci.io",\n      "dump_interval":3600,\n      "temporal_username":"temporaluser",\n      "temporal_password":"temporalpass"\n   },\n   "dev":{\n      "sentry":""\n   }\n}\n')])])])}),[],!1,null,null,null);"function"==typeof l&&l(v),"function"==typeof u&&u(v);e.default=v.exports}}]);