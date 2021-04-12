(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{"3YYx":function(e,o,t){"use strict";t.r(o);var a=t("KHd+"),n=t("UQSp"),A=t("Kw5r");function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}A.a.config.optionMergeStrategies;var s={VueRemarkRoot:n.a},i=function(e){var o=e.options.components=e.options.components||{},t=e.options.computed=e.options.computed||{};Object.keys(s).forEach((function(e){"object"===r(s[e])&&"function"==typeof s[e].render||"function"==typeof s[e]&&"function"==typeof s[e].options.render?o[e]=s[e]:t[e]=function(){return s[e]}}))},c=A.a.config.optionMergeStrategies,l="__vueRemarkFrontMatter",d={excerpt:null,title:"Connect ROS-compatibale Drone To Robonomics Parachain. Part 1. Launch by Transaction",contributors:["PaTara43"],translated:!1};var g=function(e){e.options[l]&&(e.options[l]=d),A.a.util.defineReactive(e.options,l,d),e.options.computed=c.computed({$frontmatter:function(){return e.options[l]}},e.options.computed)},p=Object(a.a)({},(function(){var e=this,o=e.$createElement,a=e._self._c||o;return a("VueRemarkRoot",[a("p",[a("strong",[e._v("In this article we will show that with the help of Robonomics tools you can control any ROS-compatitable device. We will find a random drone simulation package on the web and adjust it to run with Robonomics.")]),a("strong",[e._v("Requirements:")])]),a("ul",[a("li",[e._v("Ubuntu 18.04 LTS")]),a("li",[e._v("ROS Melodic + Gazebo + RViz (installation manual "),a("a",{attrs:{href:"http://wiki.ros.org/melodic/Installation",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("here")]),e._v(")")]),a("li",[e._v("Robonomics node (binary file) (download latest release "),a("a",{attrs:{href:"https://github.com/airalab/robonomics/releases",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("here")]),e._v(")")])]),a("p",[e._v("The entire process of coding this part of demo is presented in a video below.")]),a("p",[a("a",{attrs:{href:"https://www.youtube.com/watch?v=fDpwhBasQ5o&feature=youtu.be",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("https://www.youtube.com/watch?v=fDpwhBasQ5o&feature=youtu.be")])]),a("h2",{attrs:{id:"1-find-a-simulation"}},[a("a",{attrs:{href:"#1-find-a-simulation","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),e._v("1. Find a simulation")]),a("p",[e._v("Let's surf the web. Google for "),a("code",{pre:!0},[e._v("ROS drone simulator")]),e._v(". The first link will mostly likely show you the "),a("code",{pre:!0},[e._v("tum_simulator")]),e._v(" page on "),a("a",{attrs:{href:"http://wiki.ros.org/tum_simulator",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("http://wiki.ros.org/tum_simulator")])]),a("p",[a("g-image",{attrs:{src:t("EROI"),alt:"tum_simulator",title:"tum_simulator"}})],1),a("p",[e._v("It's pretty outdated, so we better find a fork for our system. Google for "),a("code",{pre:!0},[e._v("tum_simulator Ubuntu 18 Gazebo 9 fork")]),e._v(". The first result is a GitHub "),a("a",{attrs:{href:"https://github.com/tahsinkose/sjtu-drone",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("repo")]),e._v(" with an appropriate package. Dowload it")]),a("pre",[a("code",{pre:!0},[e._v("mkdir -p drone_simulator_ws/src\ncd drone_simulator_ws/src\ngit clone https://github.com/tahsinkose/sjtu-drone\ncd ..\ncatkin build\n")])]),a("p",[e._v("Don’t forget to add source command to "),a("code",{pre:!0},[e._v("~/.bashrc")]),e._v(":")]),a("pre",[a("code",{pre:!0},[e._v('echo "source /home/$USER/drone_simulator_ws/devel/setup.bash" >> ~/.bashrc\nsource "~/.bashrc"\n')])]),a("p",[e._v("Now we can run the simulation to see what do we need to do to take the drone under parachain control.")]),a("pre",[a("code",{pre:!0},[e._v("roslaunch sjtu_drone simple.launch\n")])]),a("h2",{attrs:{id:"2-inspect-ros-topics"}},[a("a",{attrs:{href:"#2-inspect-ros-topics","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),e._v("2. Inspect ROS topics")]),a("p",[e._v("When the simulation is runnung, in a new tab run the following command to see the list of topics used by the drone:")]),a("pre",[a("code",{pre:!0},[e._v("rostopic list\n")])]),a("p",[e._v("Let's take a look at "),a("code",{pre:!0},[e._v("/cmd_vel")]),e._v(", "),a("code",{pre:!0},[e._v("/drone/takeoff")]),e._v(" and "),a("code",{pre:!0},[e._v("/drone/land")]),e._v(":")]),a("pre",[a("code",{pre:!0},[e._v("rostopic info /cmd_vel\nrostopic info /drone/takeoff\nrostopic info /drone/land\n")])]),a("p",[a("g-image",{attrs:{src:t("QeXA"),alt:"topics_info",title:"topics_info"}})],1),a("p",[e._v("As may be seen, there should be messages of "),a("code",{pre:!0},[e._v("Twist")]),e._v(" and "),a("code",{pre:!0},[e._v("Empty")]),e._v(" types, they are parts of "),a("code",{pre:!0},[e._v("std_msgs")]),e._v(" and "),a("code",{pre:!0},[e._v("geometry_msgs")]),e._v(", we'll use this in the controller. Shut the simulation for a while.")]),a("h2",{attrs:{id:"3-download-controller-package"}},[a("a",{attrs:{href:"#3-download-controller-package","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),e._v("3. Download controller package")]),a("p",[e._v("Globally, the main difference from the casual ROS robot controller is a block of code, which checks all the transactions in the network using "),a("a",{attrs:{href:"https://wiki.robonomics.network/docs/rio-overview/",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("Robonomics IO")]),e._v(". The package itself is available on GitHub. Download it and build the workspace:")]),a("pre",[a("code",{pre:!0},[e._v("cd ~/drone_simulator_ws/src\ngit clone https://github.com/PaTara43/drone_simulator_controller\ncd drone_simulator_controller/src\nchmod +x *.py\ncd ~/drone_simulator_ws/src\ncatkin build\n")])]),a("h2",{attrs:{id:"4-manage-accounts-in-dapp"}},[a("a",{attrs:{href:"#4-manage-accounts-in-dapp","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),e._v("4. Manage accounts in DAPP")]),a("p",[e._v("Since we are testing, let's create a local robonomics network node with robonomics binary file:")]),a("pre",[a("code",{pre:!0},[e._v("./robonomics --dev\n")])]),a("p",[a("strong",[e._v("Important!")]),e._v(" Before next launches it is necessary to remove a directory "),a("code",{pre:!0},[e._v("db")]),e._v(" with")]),a("pre",[a("code",{pre:!0},[e._v("rm -rf /home/$USER/.local/share/robonomics/chains/dev/db\n")])]),a("p",[e._v("After a successful launch create accounts following "),a("a",{attrs:{href:"/docs/create-account-in-dapp"}},[e._v("this")]),e._v(" manual. "),a("strong",[e._v("Do not forget to save each account's seed and address! You will need them for transactions")]),e._v(". Add these addresses, seeds and path to robonomics binary file to file "),a("code",{pre:!0},[e._v("config.config")]),e._v(" in "),a("code",{pre:!0},[e._v("robonomics_ws/src/robonomics_sample_controller/src")]),e._v(". Transfer some money (units) to these accounts:")]),a("p",[a("g-image",{attrs:{src:t("rh+M"),alt:"balances",title:"balances"}})],1),a("h2",{attrs:{id:"5-launching-the-drone-under-parachain-control"}},[a("a",{attrs:{href:"#5-launching-the-drone-under-parachain-control","aria-hidden":"true"}},[a("span",{staticClass:"icon icon-link"})]),e._v("5. Launching the drone under parachain control")]),a("p",[e._v("Up to now the "),a("strong",[e._v("only thing running")]),e._v(" should be the robonomics local node. In a separate terminal launch drone simulation:")]),a("pre",[a("code",{pre:!0},[e._v("roslaunch sjtu_drone simple.launch\n")])]),a("p",[e._v("Run the script:")]),a("pre",[a("code",{pre:!0},[e._v("rosrun drone_simulator_controller drone_sample_controller.py\n")])]),a("p",[a("g-image",{attrs:{src:t("lVn+"),alt:"launched_drone",title:"launched_drone"}})],1),a("p",[e._v("Now you can send a transaction triggering the drone to start flying. To do so, you should use the Robonomics IO "),a("code",{pre:!0},[e._v("write")]),e._v(" subcommand of robonomics binary file:")]),a("pre",[a("code",{pre:!0},[e._v('echo "ON" | ./robonomics io write launch -r <DRONE_ADDRESS> -s <EMPLOYER’S_KEY>\n')])]),a("p",[e._v("Where "),a("code",{pre:!0},[e._v("<DRONE_ADDRESS>")]),e._v("  and "),a("code",{pre:!0},[e._v("<EMPLOYER’S_KEY>")]),e._v(" are replaced with  previously saved strings accordingly.\nYou should see the log "),a("code",{pre:!0},[e._v('"Taking Off"')]),e._v(" and the drone should start flying:")]),a("p",[a("g-image",{attrs:{src:t("giHJ"),alt:"flying",title:"flying"}})],1),a("p",[e._v("That's how any ROS-compatitable robot can be controlled by Robonomics parachain control. Proceed to "),a("a",{attrs:{href:"/docs/connect-any-ros-compatitable-robot-under-robonomics-parachain-control-2"}},[e._v("part 2")]),e._v(" to learn more")])])}),[],!1,null,null,null);"function"==typeof i&&i(p),"function"==typeof g&&g(p);o.default=p.exports},EROI:function(e,o){e.exports={type:"image",mimeType:"image/jpeg",src:"/assets/static/tum_simulator.884c109.37d852abdefe0dfe21f79f0fcba70464.jpg",size:{width:1044,height:581},sizes:"(max-width: 1044px) 100vw, 1044px",srcset:["/assets/static/tum_simulator.82a2fbd.37d852abdefe0dfe21f79f0fcba70464.jpg 480w","/assets/static/tum_simulator.884c109.37d852abdefe0dfe21f79f0fcba70464.jpg 1044w"],dataUri:"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 1044 581' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-5ded69d9eef9157bc01a377ac2c23b06'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='40'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-5ded69d9eef9157bc01a377ac2c23b06)' width='1044' height='581' xlink:href='data:image/jpeg%3bbase64%2c/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAkAEADASIAAhEBAxEB/8QAGwABAAIDAQEAAAAAAAAAAAAAAAMHAgQFAQb/xAAtEAACAQMCBQIFBQEAAAAAAAABAgMABBESMQUGBxMhIkEjUWFxoRRSYmOBwf/EABcBAQEBAQAAAAAAAAAAAAAAAAABAgP/xAAcEQEAAgMBAQEAAAAAAAAAAAAAAQIRElFSITH/2gAMAwEAAhEDEQA/APsX59E/bc8D4spMYUg3EgxufI7W41EZ%2blTp1HuIXjmXhXFnMbKe2ZpMMFBGMdkDz4/FW2q6nEZuZBpJ1YuQSPuMV0LftoixiYyH5s%2bSa7TenHOK2U/b9Y7m6Ds3KvE7cjAAkaRc/b4R/wBqZerc5Yg8vXoAA89yQj3/AKfp%2bRVwYpipvXyus9UzddYrmBVI5W4nMSdoXdsff4VZSdYLhLcSjlniLnSD21eTWPpjtb1cmKYpvXyaz1TcXV%2b4nHePLPEYjsYnkkG3vjtf9ry46uXKz26ry1xNw76T2HdgPIGWzFt5q4J5lh06gTn5GvYWZ41ZgMn9pJFNq/upieuFdZgvHkC5DE58Yrds3V5kKkGoprKaW6curGPJ04IrYtLUxTqwi0%2bfJrE4wsZy6NKUrLRSlKDUv11FPU43wFTVWVp3DDGW1r/FgM1hxCGaVouyxUZIY/Kpoi5VNMkbpsTuTVz8TDgzrE0xDwxthSMkewwKnS6ktohHAFRAMgAbeaUqKle%2bnDuAwwFztWX62f0%2boece1KUGLX041eoe/tUkF5M9zGjEaW38UpQdMqrMCRkjagUDYAUpQf/Z' /%3e%3c/svg%3e"}},QeXA:function(e,o){e.exports={type:"image",mimeType:"image/jpeg",src:"/assets/static/topics_info.09bc54b.2bb2f31520eb588000fc149e08342c71.jpg",size:{width:734,height:588},sizes:"(max-width: 734px) 100vw, 734px",srcset:["/assets/static/topics_info.09bc54b.2bb2f31520eb588000fc149e08342c71.jpg 734w"],dataUri:"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 734 588' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-2f1d21c6995ee9531f6e5431f400733c'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='40'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-2f1d21c6995ee9531f6e5431f400733c)' width='734' height='588' xlink:href='data:image/jpeg%3bbase64%2c/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAzAEADASIAAhEBAxEB/8QAGwABAAIDAQEAAAAAAAAAAAAAAAIEAQMHBgX/xAA3EAABAwIEAwYDBQkAAAAAAAABAgMRAAQFEiExBhNhFCJBUXHRMoGRFiMzscEkJic0Q2JjcqH/xAAZAQADAQEBAAAAAAAAAAAAAAAAAQIEAwX/xAAfEQACAQMFAQAAAAAAAAAAAAAAAQMCERMEITFRYRT/2gAMAwEAAhEDEQA/APLnAbWD%2b8FlOn9Q6efhRWBWmVRHEViDMJJdMD10rwvPfzLIcuMxQNDZaETPn/2qjt%2btLcJdC1qPfQpgDKehn9BTUTNOD06U1hNszq3xFYhKiM2Zc6dJTpvVq2wQXtwy0ni3B2FuElTjygEgQTtlFchfu3niCtcQI7oy/lUA84Ihxen9xqsSHg9O4fY5CDkHH3DvdHkTA8/TrWt7gllxALvH3DgShMiSU6TXEy84TJcWTt8RoXXFJyqcWU%2bRUYoxIPnXZ2X7E2MH%2bIPDWn%2bU%2b9fC4osU8Nu26LXifCcUDiSvNZu5ggyBBmfX5VzOB5ClGJMagtumfaS3iTaFo5jWiSTmgkg%2bo2qC7fEAjMpDRCTvywSOu21bEWbjgUtu3bUAn4kvOECNxPn0qm81clCAi2fSZjmJUtQXp10%2blWk%2bzqFOPZfxbQyI0CJ/Kou818gLetdddClMfQVqNndAT2Z6In8M7VF62fYnnMuNxp3kxVDJG2IJHOt9BOjg16etZFoSB9/aifN0VXpQMm81ylAZ21yJ7iswFQpSgD6Bt7OVJ7dMJlOog9PWirW1yKy37ZUNYzbj3qyh5txCycQcSCmIUEySPltVN4FxtCTeMqbSe6lRgjTx0qUvSbGg9njRb8x4pHvWR2aQCt/L490e9Dbpj%2bZt9p3P02qLzKW5yvsuf6E/qBVXGSItZMLfIjSUp3%2bu1ZAs4EruZ8e4n3qvSgZleXMck5Z0neKxSlAHvVYBhmV/9m%2bECPvFab9aoXmEWLdipxDEL5yUznVtp1pSvH08tbkSbfKMFFdV%2bRcYPYot0qSxCikGc6vL1rYcKsU4NjTot08xmyDjaiSSlXOaTI%2bSiPnSle9IklsXFU21dnjaUpXE2ClKUAf/2Q==' /%3e%3c/svg%3e"}},UQSp:function(e,o,t){"use strict";o.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}},giHJ:function(e,o){e.exports={type:"image",mimeType:"image/jpeg",src:"/assets/static/flying.96669a0.a6bf97cba6b5be4991778146a1fd9013.jpg",size:{width:1910,height:938},sizes:"(max-width: 1910px) 100vw, 1910px",srcset:["/assets/static/flying.82a2fbd.a6bf97cba6b5be4991778146a1fd9013.jpg 480w","/assets/static/flying.cbab2cf.a6bf97cba6b5be4991778146a1fd9013.jpg 1024w","/assets/static/flying.96669a0.a6bf97cba6b5be4991778146a1fd9013.jpg 1910w"],dataUri:"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 1910 938' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-4e96a83f98b45d550daa7e102a6c2310'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='40'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-4e96a83f98b45d550daa7e102a6c2310)' width='1910' height='938' xlink:href='data:image/jpeg%3bbase64%2c/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAfAEADASIAAhEBAxEB/8QAHAAAAgICAwAAAAAAAAAAAAAABgcEBQACAQMI/8QANhAAAQMDAwIBCQYHAAAAAAAAAQIDBAAFEQYSMSFBYQcTFBUWIiOBoSQyQnGR0VFSVFWiscH/xAAYAQEBAQEBAAAAAAAAAAAAAAACAwQABf/EACERAAICAgAHAQAAAAAAAAAAAAABAhEDEgQTITFBUaHB/9oADAMBAAIRAxEAPwBXm7yMkBu2DCsYMNuutV7dShDim7Xt2hRzCR8xQPjwrMeFV1Rv5cfQVytaTFIcbTb7DtWFJ3N25CVAHuD2NHunLTAkWOI8/FbcddbClKVnOf1pLng0/dEx/SdP2pIeZbK0KQAsnlIyc4HiMUJ0qI5oJLojX1Haijaq3R1HPJ3ZH1rX1Baf7cx/l%2b9FEO1NuhPnZe1SvwttlWDjjJIzVv7LxvRnFmS%2bFBsqTlKRj8x16fOi0Zhfez1p/oWv1P71yLBaQkj1ewe%2bTuz/ALokefsKYt7jMSHHLhbYi3XlLBSlC8HAB6A9cdKUzmpLq2BiWojHJSk5%2blXwcPLPevghm4iOGtvIPKvzWDtS7nHTITUc357aRuc2nt2H1qlrKKikevpH0W6r4%2bk5bSOPxE/8NOryQ3GO%2b1GiPSEtvBS1KC1YG0oyT16cpHj1rz8eDTCtNhuj8OPIjsIUy62FJytPvDxFRzKqcUCailXaxqTdRaUsk5x1d7l3eU0D9miHzgHbhOEj5mhzWflY1DFjRF2%2b0RrdBmo3MuuOIfeWjPU7QSEfMGol/e1HN0axpqDabLGhsj4oZjtoeWeyt/AOOhIwT/GghjQt4VbnJLhjB1KgnzBVlSh/NnG3vxmi5N0/wxtUV95nTbjJl3JxmcqBLdAcekBC1FXON4SEhXPAHSoIAZhvONIZW265sbUt74zWOv3UkDjkkEVbjRd%2bU2kOR0pZUrIAeSRngkDPOPyq71foOHBEZzTk6RLS4drrUttKFsgJHvFQODk56DOMcmjekkuv36zqvuf/2Q==' /%3e%3c/svg%3e"}},"lVn+":function(e,o){e.exports={type:"image",mimeType:"image/jpeg",src:"/assets/static/launched_drone.2665e34.cd20c8a130348635ebbaf7c3b2d28737.jpg",size:{width:1920,height:967},sizes:"(max-width: 1920px) 100vw, 1920px",srcset:["/assets/static/launched_drone.82a2fbd.cd20c8a130348635ebbaf7c3b2d28737.jpg 480w","/assets/static/launched_drone.cbab2cf.cd20c8a130348635ebbaf7c3b2d28737.jpg 1024w","/assets/static/launched_drone.2665e34.cd20c8a130348635ebbaf7c3b2d28737.jpg 1920w"],dataUri:"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 1920 967' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-f40d39b3e95676f923b8af4fb9fe2ea2'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='40'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-f40d39b3e95676f923b8af4fb9fe2ea2)' width='1920' height='967' xlink:href='data:image/jpeg%3bbase64%2c/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAgAEADASIAAhEBAxEB/8QAHAAAAQQDAQAAAAAAAAAAAAAABgABBAcCAwUI/8QAMhAAAQMDAgMECAcAAAAAAAAAAQIDBAAFEQYhEhMxFEFxsQciIzJSYXKBFRY0UZGh0v/EABkBAAIDAQAAAAAAAAAAAAAAAAAEAQIDBf/EAB0RAAMAAQUBAAAAAAAAAAAAAAABAhEDEhMxUSL/2gAMAwEAAhEDEQA/AKqOqogJxEhbH4HP9VIa1nDaQE/hltXsMkpfBz9nB0oApVrsQ/xT4GMzWpd4Ups1rSBndCn9/wCXKhP6sdWwtLVvhMrI2cSXOJPhleKG6Y%2b6fCjYvA458LwRpa3LjsLPNSpxpKiAvvIrXF0zblRmy6l1bhG6uYU/0Nq7EVaxFYw0pXs0dFDfYVIt0d56IyW2lEEde7v76yEDjfli08GCw6VfF2hflmtMrTdsaiPrbaeC0tqUDzlbECjE2WcGuappKW84KlOJAHzJzsKF9T3aPaX5ECVxqeLIIU1hSSFoyN8/sRVph28SitWpWaZRVKlSrU6gqcDJAPQ01On3h40EnoeJtGY%2bhPkKhae1HEcjPWt1sIltvKKXHJSY7XAniJ4nD022AFTYn6dj6E%2bQqupNquKpr7zUV0oLilJUMdMnfrSltrDQhCTymStV%2blS5XaJ2CJ2aNBdQtl5hDZJCdwPaEkq232A%2b9Brrktxsyne0utrXyUSS2vluFOBsTsCBgY38BRLcbbd5VjMBllTMcvc8sltADi8YyFdQflnFZaesVzjQnkXDtLLHrOIjrUeBJCT6/DnHF1A8aqrtfS7Iemm8Po//2Q==' /%3e%3c/svg%3e"}},"rh+M":function(e,o){e.exports={type:"image",mimeType:"image/jpeg",src:"/assets/static/balances.979351d.a8c7966b22767f0ef371982bb9ca7f4c.jpg",size:{width:1800,height:542},sizes:"(max-width: 1800px) 100vw, 1800px",srcset:["/assets/static/balances.82a2fbd.a8c7966b22767f0ef371982bb9ca7f4c.jpg 480w","/assets/static/balances.cbab2cf.a8c7966b22767f0ef371982bb9ca7f4c.jpg 1024w","/assets/static/balances.979351d.a8c7966b22767f0ef371982bb9ca7f4c.jpg 1800w"],dataUri:"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 1800 542' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-309c514879d58a173a62f00e8c0b8c75'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='40'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-309c514879d58a173a62f00e8c0b8c75)' width='1800' height='542' xlink:href='data:image/jpeg%3bbase64%2c/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAATAEADASIAAhEBAxEB/8QAGQAAAwEBAQAAAAAAAAAAAAAAAAIDAQQI/8QAKhAAAQMCAwcEAwAAAAAAAAAAAQACEQMSITFRBDJBYWKRkhMiUnFCcvD/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABURAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIRAxEAPwD04GWVIbe6RiHVCVSqy1jiLp/dTIYdobPp5Dh9qlePSdudlBrGYGQ7P5JrBofNZTjHcz0TSOjsgywaHzWGmCMneaaR0dkSOjsikLAAMHfd0qbAYG8ZPyVXwR%2bHHhyUacQzcz05IJ1arxXpQc4GSttNRwouxQhINp1He7HinvdqhCAvdqi92qEIFe92GP8AQuelUfDMeOnJCFKP/9k=' /%3e%3c/svg%3e"}}}]);