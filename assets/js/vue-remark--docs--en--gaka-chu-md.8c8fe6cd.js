(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{Kpjx:function(e,t,a){"use strict";a.r(t);var n=a("KHd+"),o=a("UQSp"),r=a("Kw5r");function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}r.a.config.optionMergeStrategies;var s={VueRemarkRoot:o.a},c=function(e){var t=e.options.components=e.options.components||{},a=e.options.computed=e.options.computed||{};Object.keys(s).forEach((function(e){"object"===i(s[e])&&"function"==typeof s[e].render||"function"==typeof s[e]&&"function"==typeof s[e].options.render?t[e]=s[e]:a[e]=function(){return s[e]}}))},l=r.a.config.optionMergeStrategies,b="__vueRemarkFrontMatter",h={excerpt:null,title:"Gaka-Chu setup and software Installation",contributors:["PaTara43"],translated:!0};var p=function(e){e.options[b]&&(e.options[b]=h),r.a.util.defineReactive(e.options,b,h),e.options.computed=l.computed({$frontmatter:function(){return e.options[b]}},e.options.computed)},d=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("VueRemarkRoot",[n("p",[n("a",{attrs:{href:"https://www.youtube.com/watch?v=GxlYxaykqTU",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("https://www.youtube.com/watch?v=GxlYxaykqTU")])]),n("p",[n("strong",[e._v("In this article we will go through some installation and launching steps to set up a robot-painter. Requirements:")])]),n("ul",[n("li",[e._v("KUKA KR6 R900 sixx with KRC4 and a SmartPad;")]),n("li",[e._v("Intel NUC with "),n("a",{attrs:{href:"http://wiki.ros.org/melodic/Installation/Ubuntu",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("ROS melodic")]),e._v(" installed;")]),n("li",[e._v("Table, paint, brush, water.")])]),n("h2",{attrs:{id:"software-installation-on-krc4"}},[n("a",{attrs:{href:"#software-installation-on-krc4","aria-hidden":"true"}},[n("span",{staticClass:"icon icon-link"})]),e._v("Software installation on KRC4")]),n("p",[e._v("EKI interface is required on both, KRC4 and NUC. Detailed information on how to set it up on KRC4 is presented "),n("a",{attrs:{href:"https://github.com/AlexeiOvcharov/kuka_experimental/tree/a915bf4e932990379c84164713e7ae11a24a2a13/kuka_eki_hw_interface/krl",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("here")]),e._v(". Launch it on robot's controller.")]),n("h2",{attrs:{id:"software-installation-on-nuc"}},[n("a",{attrs:{href:"#software-installation-on-nuc","aria-hidden":"true"}},[n("span",{staticClass:"icon icon-link"})]),e._v("Software installation on NUC")]),n("p",[e._v("Create a catkin workspace:")]),n("pre",[n("code",{pre:!0},[e._v("mkdir -p ~/catkin_ws/src\ncd ~/catkin_ws/\ncatkin build\n")])]),n("p",[e._v("Download ROS packages. All the scripts are stored "),n("a",{attrs:{href:"https://github.com/airalab/robot_painter/tree/test_branch",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("here")]),e._v(". Clone the repository:")]),n("pre",[n("code",{pre:!0},[e._v("cd src\ngit clone --branch test_branch https://github.com/airalab/robot_painter\ncd robot_painter\nrm -rf scenes\nmv * ../\ncd ..\nrmdir robot_painter\n")])]),n("p",[e._v("You may need some header files and libraries to make it all work correctly. Download them:")]),n("pre",[n("code",{pre:!0},[e._v("cd ~\ngit clone https://github.com/PaTara43/kuka_moveit_webots\ncd kuka_moveit_webots\nsudo mv -r headers/* usr/include/c++/7/\nsudo mv libs/* usr/local/lib/\ncd ~\nsvn checkout https://github.com/PX4/Matrix/trunk/matrix\nmv matrix -r /usr/include/c++/7/\nsudo apt-get install ros-melodic-brics-actuator\ncd ~/catkin_ws\ncatkin build\n")])]),n("p",[e._v("Add source command to "),n("code",{pre:!0},[e._v(".bashrc")]),e._v(" file:")]),n("pre",[n("code",{pre:!0},[e._v("echo “source ~/catkin_ws/devel/setup.bash” >> ~/.bashrc\nsource ~/.bashrc\n")])]),n("p",[e._v("Up to now. you should be able to launch the scripts. If something goes wrong, try some "),n("a",{attrs:{href:"https://github.com/airalab/robot_painter/issues",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("troubleshooting")])]),n("h2",{attrs:{id:"filling-in-constants"}},[n("a",{attrs:{href:"#filling-in-constants","aria-hidden":"true"}},[n("span",{staticClass:"icon icon-link"})]),e._v("Filling in constants")]),n("p",[e._v("First of all, the robot needs to know canvas location and orientation as well as the paint tin position. All of this is specified in "),n("code",{pre:!0},[e._v("fake_painter_enviroment_tf/src/tf_broadcaster.cpp")]),e._v(". Let's take a look into it.")]),n("pre",[n("code",{pre:!0},[e._v("// Plane constants\nconst double A = -0.0641;\nconst double B = 0.0214;\nconst double C = 0.9977;\nconst double D = -0.2198;\n\n// Canvas transform\nconst double px = 0.52;\nconst double py = -0.24;\nconst double qx = -0.011;\nconst double qy = -0.032;\nconst double qz = 0.0;\nconst double qw = 0.999;\n")])]),n("p",[e._v("These are the plane equation constants which specify canvas position in 3-D space. They are to be obtained during a calibration process described below. Next goes the paint.")]),n("pre",[n("code",{pre:!0},[e._v("colorTransform.transform.translation.x = 0.5;\ncolorTransform.transform.translation.y = 0.2;\ncolorTransform.transform.translation.z = 0.258;\n")])]),n("p",[e._v("These are paint tin coordinates. They also may be specified while calibrating. Canvas size is specified in")]),n("pre",[n("code",{pre:!0},[e._v("canvas.width = 0.5;\ncanvas.height = 0.4;\n")])]),n("p",[e._v("Several more important constants are stored in "),n("code",{pre:!0},[e._v("local_task_planner/src/Drawing.cpp")]),e._v(":")]),n("pre",[n("code",{pre:!0},[e._v("const double COLOR_BOTLE_HEIGHT = 0.06;\nconst double COLOR_HEIGHT = 0.045;\nconst double HEIGHT_OFFSET = COLOR_BOTLE_HEIGHT - COLOR_HEIGHT + 0.02;\nconst double BRUSH_HEIGHT = 0.01;\nconst double BRUSH_WIDTH = 0.01;\n")])]),n("p",[e._v("Their names say it all, so fill them in according to the situation.")]),n("h2",{attrs:{id:"calibrating-gaka-chu"}},[n("a",{attrs:{href:"#calibrating-gaka-chu","aria-hidden":"true"}},[n("span",{staticClass:"icon icon-link"})]),e._v("Calibrating Gaka-Chu")]),n("p",[e._v("The calibration process itself is pretty simple.")]),n("p",[e._v("1) Start EKI interface on the KRC4:")]),n("p",[e._v("Log in in 'AUT' mode, turn on drivers and launch the script "),n("code",{pre:!0},[e._v("eki_hw_interface")])]),n("p",[e._v("2) Start EKI interface on the NUC")]),n("pre",[n("code",{pre:!0},[e._v("roslaunch kuka_eki_hw_interface test_hardware_interface.launch\n")])]),n("p",[e._v("It should output endless logs.")]),n("p",[e._v("3) Start RViz")]),n("pre",[n("code",{pre:!0},[e._v("roslaunch kuka_moveit_config demo.launch\n")])]),n("p",[e._v("You should see the following:")]),n("p",[n("g-image",{attrs:{src:a("L0J8"),alt:"KUKA in RViz",title:"KUKA in RViz"}})],1),n("p",[e._v("Try moving the end effector and clicking 'Plan and Execute'. The robot should move. On SmartPad go to "),n("strong",[e._v("Display -> Actual position")]),e._v(" and observe end effector's coordinate. Place a canvas horizontally to the robot base. Plug a brush into the brush holder and carefully move it till it barely touches the canvas. At this position, save end effector's coordinates. Repeat 12-15 times. Also, save the coordinates of the canvas center and paint tin.\nWhen you have a set of coordinates, use "),n("a",{attrs:{href:"https://github.com/nakata5321/Matlab_scripts_gaka-chu",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("these")]),e._v(" Matlab scripts to resolve the missing constants and quaternion. Paste them. Rebuild your workspace with")]),n("pre",[n("code",{pre:!0},[e._v("cd ~/catkin_workspace\nrm -rf build logs devel\ncatkin build\n")])]),n("h2",{attrs:{id:"testing-gaka-chu-calibration"}},[n("a",{attrs:{href:"#testing-gaka-chu-calibration","aria-hidden":"true"}},[n("span",{staticClass:"icon icon-link"})]),e._v("Testing Gaka-Chu calibration")]),n("p",[e._v("When calibrated, Gaka-Chu needs to be tested by drawing the borders of canvas. To make him do so execute each in new terminal:")]),n("pre",[n("code",{pre:!0},[e._v("roslaunch kuka_eki_hw_interface test_hardware_interface.launch\nroslaunch kuka_moveit_config demo.launch\nrosrun fake_painter_enviroment_tf tf_broadcaster\nrosrun local_task_planner draw_workspace\n")])]),n("p",[e._v("After this, you should see a canvas contour in RViz:")]),n("p",[n("g-image",{attrs:{src:a("O0ag"),alt:"KUKA in RViz canvas",title:"KUKA in RViz canvas"}})],1),n("p",[e._v('In terminal press "S" to perform testing. Robot\'s end effector should move right above the borders of the canvas and the brush should gently touch the canvas during the entire movement. If not so, try recalibrating. If the canvas model is rotated wrong, you can rotate it by changing quaternion in Matlab.')]),n("h2",{attrs:{id:"making-art"}},[n("a",{attrs:{href:"#making-art","aria-hidden":"true"}},[n("span",{staticClass:"icon icon-link"})]),e._v("Making art")]),n("p",[e._v("You need 6 basic modules to make it all work:")]),n("ul",[n("li",[e._v("EKI interface;")]),n("li",[e._v("MOVEit + RViz;")]),n("li",[e._v("Environment frames broadcasting;")]),n("li",[e._v("Picture converter service;")]),n("li",[e._v("Trajectories drawing module;")]),n("li",[e._v("Starting trigger.")])]),n("p",[e._v("Let's launch them one by one.")]),n("h3",{attrs:{id:"eki-interface"}},[n("a",{attrs:{href:"#eki-interface","aria-hidden":"true"}},[n("span",{staticClass:"icon icon-link"})]),e._v("Eki interface")]),n("p",[e._v("On KRC4 launch "),n("code",{pre:!0},[e._v("eki_hw_interface")]),e._v(", on NUC in a new terminal do:")]),n("pre",[n("code",{pre:!0},[e._v("roslaunch kuka_eki_hw_interface test_hardware_interface.launch\n")])]),n("h3",{attrs:{id:"rviz-and-moveit"}},[n("a",{attrs:{href:"#rviz-and-moveit","aria-hidden":"true"}},[n("span",{staticClass:"icon icon-link"})]),e._v("RViz and MOVEit")]),n("p",[e._v("You need a planner and a simulation. Launch them with")]),n("pre",[n("code",{pre:!0},[e._v("roslaunch kuka_moveit_config demo.launch\n")])]),n("h3",{attrs:{id:"environment"}},[n("a",{attrs:{href:"#environment","aria-hidden":"true"}},[n("span",{staticClass:"icon icon-link"})]),e._v("Environment")]),n("p",[e._v("Tell the robot where the paint tin and the canvas are. Note that it is not necessary to launch "),n("code",{pre:!0},[e._v("draw workspace")]),e._v(" node, the "),n("code",{pre:!0},[e._v("tf_broadcaster")]),e._v(" shares the canvas size. It just doesn't show it in RViz.")]),n("pre",[n("code",{pre:!0},[e._v("rosrun fake_painter_enviroment_tf tf_broadcaster\n")])]),n("h3",{attrs:{id:"pictures-processor"}},[n("a",{attrs:{href:"#pictures-processor","aria-hidden":"true"}},[n("span",{staticClass:"icon icon-link"})]),e._v("Pictures processor")]),n("p",[e._v("All incoming pictures need to be processed. Launch the service.")]),n("pre",[n("code",{pre:!0},[e._v("rosrun picture_preprocessing TextConverter.py\n")])]),n("p",[e._v("When it receives the call, it processes a picture with a HP filter and creates a rosbag file with trajectories.")]),n("h3",{attrs:{id:"trajectories-drawer"}},[n("a",{attrs:{href:"#trajectories-drawer","aria-hidden":"true"}},[n("span",{staticClass:"icon icon-link"})]),e._v("Trajectories drawer")]),n("p",[e._v("The mainest script here is the trajectories drawer itself. It waits for the picture, calls TextConverter service and draws the painting.")]),n("pre",[n("code",{pre:!0},[e._v("rosrun local_task_planner trajectory_drawing\n")])]),n("h2",{attrs:{id:"send-the-robot-a-picture-to-draw"}},[n("a",{attrs:{href:"#send-the-robot-a-picture-to-draw","aria-hidden":"true"}},[n("span",{staticClass:"icon icon-link"})]),e._v("Send the robot a picture to draw")]),n("p",[e._v("The robot listens to a specific ROS-topic where you need to pass the path to a desired picture. The picture should be square (width equals height) and made of lines. Send the path:")]),n("pre",[n("code",{pre:!0},[e._v("rostopic pub /run std_msgs/String \"data: '<path_to_picture>'\"\n")])]),n("p",[e._v("After that. Two windows pop up showing the contours and the tracks. Close them and see Gaka-Chu drawing. Watch out for safety and alwasy be ready to press emergency stop button.\nWhen Gaka-Chu finishes his art, you can send another path to picture and painter repeats the whole process.")])])}),[],!1,null,null,null);"function"==typeof c&&c(d),"function"==typeof p&&p(d);t.default=d.exports},L0J8:function(e,t){e.exports={type:"image",mimeType:"image/png",src:"/assets/static/kuka_rviz.2665e34.8dcac7f86c22fd95bb7a99a3569fb5a3.png",size:{width:1920,height:1080},sizes:"(max-width: 1920px) 100vw, 1920px",srcset:["/assets/static/kuka_rviz.82a2fbd.8dcac7f86c22fd95bb7a99a3569fb5a3.png 480w","/assets/static/kuka_rviz.cbab2cf.8dcac7f86c22fd95bb7a99a3569fb5a3.png 1024w","/assets/static/kuka_rviz.2665e34.8dcac7f86c22fd95bb7a99a3569fb5a3.png 1920w"],dataUri:"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 1920 1080' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-d24cfc278984bbd6b67b36277aab7c30'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='40'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-d24cfc278984bbd6b67b36277aab7c30)' width='1920' height='1080' xlink:href='data:image/png%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAAEAAAAAkCAYAAAA5DDySAAAACXBIWXMAAAsSAAALEgHS3X78AAAM5klEQVRo3rVaaXBT1xXO7077p0kDCYQABi/YliXZGGy8g/GCgQA2xmYZh7BNIJAE0mbaDE1pwnSSMG2nf9ppfqQzTdNpp02mbSYLgbAHCMaLbK3etFqyJWuxJXmDr%2bdc6ZlnRcY2dgyH%2b9599z2/853vbPfxWHJyMuJJ4soVUKizUbnvBLa/%2bEvUvfoOal/%2bDWqOn8XmI2dQ9sKbqDp0GrWHj6N8RzXKqneioqYWVbV12LBtO4qqtqCiugYV9btRXl%2bPyt17sGnPHlSSlOzYgVK6VlZXh9LaXajau1dc47XFNTUorK5GEV2PJ/nbt2PbCwew59hL2H3sGA6ePIWte/Zhc1099r90AtUN%2b1G5cxed70ZBeQWWL18u9ElKSoqr52PxJlNSUsSNpaWlaGm6C127Bu2aFmhammDUa9Fh1MFk0JLoYSTh0WTkY50YI8eRc6NBP0kMeh1a6TmNd75FMz276W4j9DptROjZfH160U7cYzIaZHPtYk7b3oYOkxGffPxvrFixAlMZ%2baEALFu2DFWbKtFJyhoIgA76Bd0denjdTgx6%2bxH0e2jsRWDAhVDAi0HfAI0DNLrFGB70TsgwjzQXpGvj4UHcHwni/mgwMpKMDw/JZHAGIlsf/u7cWCgAYBx3bl5/dACYARs3luLyxfM4/9mnuHH1MrQastyt67hD0tbSCJ3mFv2SqzBoNdC0tgqWtJJV9e0t6DS0E2htQkw6DXo6DOjrteLK11/hwpef4eL5z7834edfu3wR//vPx4L6U9H/4QAkJGB9STE%2b/fxLfP7Fl/j6wnlcv3pF0NdANGO30BHVmHbaNk30nETbRhTU0FyrmGdp17SKe5hN%2bXl54vkKhQLp6ekPkemuTy1paWnIyMjAW2feFOPKlSsfzQU2VVbCHxyC2%2buD3WZDv8uJUDCIR/2xm7tQUJAvXlClUkGpVMYXemlVRvrEuWoaib2flVar1Xj717%2baGwAVFRWw9fZCY/Wh3eqH3RNCf2BYKHP//n3cu3ePRpmI8/tidHsDGB0bE2siMg67pTsKQPqUAKiZGco1SMwoJeXIoooMpAlRiDGVLJyarhDnq9IixwoGbEoAFHNgwKZNGAyG4AsFYXU4SVwIDIUxMjIilJKAkIt8Tv7DoNgtxID8CAMmWUyMGchIVyGpIBVLNyvx7NpKJFctR25WNkpysrGeZEfxOuwsLUR5fg5K163F9pI8bC3MRW72agHMvDOgklxgfHwcVosFbezn2nYYKJW5XC6MkXUlZSeUlCnu9XrFOqfTCY/HI54jGBAHAKa8gsasNCWq1i7CmvVrsflwPX730m589NOD%2bPtrB/Dh60fx4c%2bP42%2b/eBkfvf4i/krjn187ijN7t%2bEPxxqwZX2RAEE13wCMjo4KZSxWKxwOB%2bx2u2BArPKxALDSNoobLHyfd2AANnPnRAyIBSCDGKAmAHLzliG1PANrtmbh1P5NOEdAvHtoN949vBdnDzfg7YZqvFG3BS9Xb0Y9MeDdA7vw39PHcLqhltxFMX8MWLp0qXCBQCAAi2AARXy9XpzHUl8OQDxg%2bGc4HIK504jCgoLvAiC5QIYSqdkZSKxMxvL1aVhZkgh1hgpquqZSpEHBUZ7uTU1NReqqVchKXI639m3HBycP4UTNFqSlPwCAY8ysAJDnSnkMCIVCggE9PT0wm83Csg8DQDofHh7G0NCQGCMAhNFDABTIAOCXmySkqFLBsUCNVGU2VOlKEeAiElkv3ZdJFj5ctQE/27UVfzl1GHs3lSGZgGHFZxkEk6IA8ETSd1xA8nWTyQSdTgeNRoPBwcG4wS42BvT19U2sZQYwAIWFBSJX8wvyy04lahWluCnWZGZmClBKVqtwdEsp/nTiBTy3vpDiSOQar8nKysLZt85MD0BSYkpU%2bQcsiI0BrBRbn12hq6trEgCxMUAaR0LDMS4QFi5QXFxMRVDEQhII/NLS%2bYN5tZiXFJLmxHo6zlq9GglLnsHzpXk4d2QfinLWQMmKR5/F980IgNxifhj7SeIECPEA6OzsFCzo6OgQgZBdI14a5D/8t9fXi6Ew1eWjYzEMKBQMkOqAB8qpJigea%2b1YcNR8D82nrEjAK89txHuH6pGdlSnSqXTfagJoRgDU1G5ASck6UjzloS7AlmflTSR%2bfyBuoBOARP9p82mocCKghkLRmBBhQFFRoShzJaUla7HiOTk54sUlECYqwThFk/DzVcl470AdfntkD1ZHnyGtnXEM2FVbj7KycqyiqBrPBcJE3fHxMUpnVnR3dwtX4HKYAeD5iIzLxnEqksZgtXooYHrR399HmcOPMBVT3BBxDJBK4Ui0jgDBvUFu7jrkUa8gRfGJeCAsnznpnNfUFq3F%2b68exrljB7CafF5iCAMwYxcoP/4O1pbXYGXCUiSnpMSUwuXU3lLb6/fCbjUjQC2v19OPoYBPHPu9HgQH/eI6jzzHEqJjD63z0XVPvwu%2bAQ/CwYCoBNkFWFm5n0uKTWVtyaJinVIpMoJiZQIaNuTh5M6tOFm7FWsIAK4D5M%2bZURrcdvAUctdXEgC8c5IyqR3eUFqKu9Tetty9jds3uQW%2bC11bi2h/9e0srdBrI6NR1xY5jx4baZ5HQ/R6F1lfpMGYSlBiwkxEUo4VTX52MXblZ%2bGPx/fj/VcOYEvROtEXSGs4CwgAFNMwoGFPPYqoOpNvHEzsCG3ciGs3ruMq9fA3r1/FN9euQNN8F82Nt/EtAdJ46waa79xC4%2b1vxHETHTd9e1NsRExco/EOiZHa5g6DFvn5eVEXeGDVKbvCmIAo4oU6khmSExNxpLIE/3zjBD547UU8X1WKVQRAZtQFGIAzb54mtqU/HIDtO3aQ3%2bVPWiTfEbL1UPTXazFAVB5w9wm6W2iOFerpNMHtcqDLZIBW00Ju0gMHuUqnUY%2bersi17g4jzN0d8JFLOMgFimQuIKf/VBLPFUS6o3a5OCMFZ/fX4tzBOmwrzBEMmHUlyHmZHyotmpwGK9DXa4PTYUWf047xkRDl90GhaDDgxdhwkGQIQ/4BOO0WDJOf3xsNi3Uso5wGxZpg5D6xH1Aw0Q7Phv5yYeCKMpUUA/Lx%2b6MNeP94AzZmq5BILpwZDZAzzgJ8MTHxQQ0wCQAKgl63i1JZADaLWWyI8N6fiwCRLOvp6xWKO%2b1W9NrMouPzElOcDjvclAFGqBTmMUAB0SHrBqVoLeX%2bmYoEQAq9c1VOFl6p2YwDVRuRtHwZFi1ePClezLkXqKyoIOo7RWTvczqiGcAraK6n1tjc3UkR3k1uMQALgcG052DHbHCTywxRxTgyMgyPu58AcNN98wcAK/uDH/4ITy58Cj9%2b4id4etEiLKY5VnZWWSAWgFgXYAtbzN2kmFFsf7t67cIlWFFPnxNhYge7g7Wni0DoFEBw6nQ5exHw%2bwUAAx63mJMYIPUCcuVn6wZPPPEEFixYgCVLlmARKf/000%2bJc35/KWDOeUdIcgFmgEcKgswGAqGTAp%2bH2UHU5hjAcaHLFAl%2bZhIGYJAKoBGqAOUA5EcBiPX/mWYCSTlW9vHHH8fiZxbjyQVPYuHChSJzSfSfcSE0HQA%2bTx9Z2EdU74ef6M7W7rVZ0EGRnkEJDVGVR8LHnA26Rb43iTgQGvSJ4McsGaY1UiE0qbCZocQCwm6UkJBALTC976qUSW6liBZEc98RisaAXrtVuAALK8ZzFqL8gNslYgADxMfdVOhYKUXa2GWIDbyOMwEHSRbOArwhwt3gVPX9TEUAoebKUCVqA3k8mbctMd4W54DmctiE1VkhTmlSeuORLTwaDgr34H1/jg3MBM4UYzLlIwB0CgDSoxuY8ZSaTTCcBIasm5zHPcFIEDR3k7UpAwSoCOL6X%2boD/N6BaFzwUGC0CetLMYBjwmgcAIqi7fBUSs0WBHnho1Sq5h8AruZs5i4R3bkoYr92UGfo93lFh%2bchAAIEAGcE9n%2buDxgIdoF%2bSp2sODdC4WgMYADi7wnOTeS9wvwBQDEgSBGeqzpWhOl%2bf2xY0P/e6LA4lqo%2baY20Thq5MhTVId3DdYDUDj%2bKxadjQcQV1PMDQKQZKkVrSzP0bc1ob22iep/Hu%2bIjKX8c5Y%2bgRp0m2vlpqGdoi4juwWjQUodIHWQ3McJCriHtCU7XBD2qyDda5lQHSO3wpStXcOmrL3Dt8gXcuHoJ1y9fFN3h1UsXRJfHrXJL42Rplh1zC61pboRR3y52hPLy1s3w4%2bijCz%2bbLT8vLmDuNJD/m%2bBx2eH3uODt752QgT4HzTvENblE5u3oc1hECeyT6gdygTJqsbOzs5Gbmyu2wOZbcqMj7yyJQkgxh0KovKxMFDwc1Vsabwna8/d%2bTdMd0ee3kWX5238Xpb%2bmOzcFG9gtuoxatEsuEnUPt9MmgLH1dMBKgFrF%2bH2ISQgb7ZN//UMo/7D/H/B/njEMSam6CWoAAAAASUVORK5CYII=' /%3e%3c/svg%3e"}},O0ag:function(e,t){e.exports={type:"image",mimeType:"image/png",src:"/assets/static/kuka_rviz_canvas.2665e34.5934bfaf4ec17a99beae7b04141f4a91.png",size:{width:1920,height:1080},sizes:"(max-width: 1920px) 100vw, 1920px",srcset:["/assets/static/kuka_rviz_canvas.82a2fbd.5934bfaf4ec17a99beae7b04141f4a91.png 480w","/assets/static/kuka_rviz_canvas.cbab2cf.5934bfaf4ec17a99beae7b04141f4a91.png 1024w","/assets/static/kuka_rviz_canvas.2665e34.5934bfaf4ec17a99beae7b04141f4a91.png 1920w"],dataUri:"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 1920 1080' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-1002fe35af89531db149a3e1a422ba41'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='40'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-1002fe35af89531db149a3e1a422ba41)' width='1920' height='1080' xlink:href='data:image/png%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAAEAAAAAkCAYAAAA5DDySAAAACXBIWXMAAAsSAAALEgHS3X78AAAMuklEQVRo3sVa6XNT1xXPH9CZdjqTpGHIhM141WLJNt4X8G4nAYNjMM5GCFlKoFnKdKZt9mUmHzrTTj9kmvZbP3SmM0nbaSYLgQAGAsS7bGvzJsmSJVuyFluSN/zrOffpyc9CNi6Y1nA499139fzO7/7OdsV9aWlpSCa7U3ZBrctD/VOn0fTyWzjy2sdoOf0Rmk99iP0vv4fq595G44k30fLCKdQePISaQ0%2bgrrkFjS1HUHmgCeWNj6HuUDPqWo%2bStKKx7Uk0tLWh/mgb9h08iCq6V3PkCKpaDsfv8dqK5maUHTqEcrqfTEqamnDgueNoO/kKjp48iedffwOP0%2bcbD7fi2CunceiZY6h/4jAebW1DSU0dduzYIexJTU1Naud9ySbT09PFB6uqqtDb3QXjgAEDhl4YerthMQ1iyGKE1TxIYoKFhLXVwmOj0NI4uZjp8709Xejs%2bAE99Ozurk6YjANi3kRiNhk3ILTWKMmQxSyupbkBMTc40I8hqwX/%2bPwz7Nq1C2tt8roAbN%2b%2bHY0N9RgmY80EwBD9gtEhEwJeN2b8UwgHfaQnEJr2IBLyYyYwTXqatFfo6Ix/tdBcmO4tRWewPB/G8kJY0iQ352axFJeZDYhifTThmmQxEgKwhI5rV%2b4cAGZAdXUVLp4/i7NffoGr7RcxaOhG5/Ur6CDp7%2b2E0XCdfkk7zIMGGPr6BEv6aFdNA70YNg8QaP1CrEYDxobMmJxw4NJ33%2bLcN1/i/Nmv7pnw8y9fPI9//%2btzQf216L8%2bADt3Yt/eCnzx1Tf46utv8N25s7jSfgl95AZmohm7hZGoxrQb7DfErkkG%2b4mCBprrE/MsA4Y%2b8RlmU0lxsXi%2bWq2GSqW6J5KVlQWNRoP3331b6JSUlDtzgYb6egTDs/D6A3COj2PK40YkHMad/jhtIygtLREvmJ2dDa1We0%2bEjdbpdPjgvXfuDoC6ujqMT0zA4AhgwBGE0xfBVGhOGLO8vIybN2%2bSVoi4Xhba6w9hYXFRrJFkCU77aAwA1f8QAPVdMKChATPhCAKRMBwuN4kHodko5ufnhVEyEEpRzil/GBSnnRhQIjHgXhm/qQyoJxdYWlqCw25HP/v5IKUrSmUejweLtLuysXEjFYb7/X6xzu12w%2bfziecIBtwGAI2GtUZo5fj/BsDCwoIwxu5wwOVywel0CgYkGp8IABs9TnGDhT83PU3XY8PxGJD0xclYLb2wRh4L2ZjBmw7Atm3bhAuEQiHYBQMo4ptM4jqR%2bkoAkgHDP3PRCMaGzSgrLU0OABvBu07jbB5n6aBV6aBRa6DWSJLFmUOINJYN3xQAlLlSGQMikYhgwNjYGGw2m9jZ9QCQr%2bfm5jA7Oyu0BECUALCsDUAcCC2yclXYWVyIHQV7oMnNgk6TDT3dq8jPQ1FuDvJzdCijcTYxJJPSnmy0EhAOshsEIDUGAE%2bk3uICsq9brVYYjUYYDAbMzMwkDXaJMWBycjK%2bVmKAhVxgBQD5pePClFdnY2/udugbynH0WDP%2b8Opz%2bOTVF/HHX7yIv7zxEj59XZKPTjyFd4614vHKCmTFQLgjBqTuTo8Zv8KCxBjARvHusyuMjIysAiAxBsh6PjKX4AIxBpSVUbGiFi/Iu5QoOo0OeQXpSGvUo/poMX71ZBN%2b2daCM0eb8VrLfrzU1IjW6go8X1uOv/36NN58uoWAy0ZOTo54pvzc3NxcfPjBe7dPg4UVOuTkMkq74yAkA2B4eFiwYGhoSARCdo1kaZD/8N%2bJwARmo1SXLyzGGWAjAPZWVMQBkF5W0nq9XgKAxlqSzGINUgu0UGWv%2bHwWfS49M0tkhRMNlfjk9HGcfGK/uKcXz9PHn8P6w/ffvT0AzS2V2Lu3iAxPX9cFeOfZeCtJMBhKGugEILF/%2bgMGKpwIqNlILCZEBQAV5eWiDBaGxigbN5yvmQk8p86WfJ%2bMksFio1hyabfrC3Lx%2b58/i6caa5FBhZU%2btvPyWsGAjQBwuKUVNTX0kIyMpC4QJeouLS1SOnNgdHRUuAKXwwwAz0uypNBLVCQtwuHwUcD0Y2pqkjJHEFEqprghKi8vE/W60gWU1E3qFgSC0sc5I2hps94/dgT795URAzQCNOm%2bVGFumAG1pz5Gfm0zUnZuQ1p6ekIpXEvtLbW9QT%2bcDhtC1PL6fVOYDQXEOOj3ITwTFPdZ8xxLhMY%2bWheg%2b74pDwLTXkTDIakSTCiF5YC1VlZIBIg1A1CZp8PvXn4WDeUlUJFL5MSoL8uGATjw/Bso3FdPAPDJSfqqdriyqgpd1N72dt3AjWvcAnfB2N8r2l/TAEsfTIOSthj7pevY2ELzrM2x%2byO0%2bxwEyykIyi6gfNm1GCADIYPEc1mZmTjxaC0%2bPfMK6gkAToUyOKz5%2baylbvA2ADzT1opy2hXlwUH8RKi6GpevXkE79fDXrrTj%2b8uXYOjpQk/nDfxAgHRev4qejuvovPG9GHfTuPuHa%2bIgIn6PdAeJhdrmIfMgShSlsJy3%2bWVvSYkJIq/jQkiTuhvH6/bhN082o7a0SAJAAZQMxjtv/VaAsS4ATQcPori4ZNUi5YkQl69W0yCmicrT3klBdzvNsUFjw1Z4PS6MWM0YNPSSm4zBRa4ybDFhbES6NzpkgW10CAFyCZdd2Q4nCYDiWhvbfXKN%2bFjJFD0yU3bi9eZH8dc3z%2bD4/gYCQB0PgpLIQXADabCC0hK/gLxodRqsw%2bTEONwuBybdTizNRyi/zwhDwyE/FufCJLOYDU7D7bRjjvz85kJUrGNZ4DQo1oSlz9lGRB2gdAGlf/NOq7n0VWdSPCpAGpXDKrUKmUR5mdY6AkGVkU4uUIM/nTmFFx6rEaxQMkp%2b/obaYb65e/dKDbAKAAqCfq%2bHUlkI43abOBDhsz8PASLvrG9yQhjudjowMW4THZ%2bfmOJ2OeGlDDBPpTDrEAVEl0M6D1DFfFYuWVn4d8onOfpcKoZ0e9GQnYM8YgLnf34/sZ4MK9ap8VLDPvyZYsDT1eVIofdng5Wl8Kb0AvV1dUR9t4jsk25XLAP4Bc1N1BrbRodFhJ8hBtgJDKY9Bztmg5dcZpYqxvn5Ofi8UwSAVwCQGAOUADAwPFdGtUJddRUaK8tRkM%2b7zsdc0n0t0TuDYkBDvg7PNlRDn5GKh7Zske4pyuv/ohdYDUCiC/AO222jZJhFHH97JpzCJdhQ36QbUWIHu4NjbIRAGBZAcOr0uCcQCgYFANM%2br5hzJTkPkCM9G8BUZ50RS8dpGZmC3hwP8vK02LNHi3wyfOvDW/GjH/8EP73/fjz4s4ewhQBgFiem1rs%2bEZJdgBngk4Mgs4FAGKbA52N2ELU5BnBcGLFKwc9GwgDMUAE0TxXg7QBIbGeFrwvRCuO59FWrpQOS/Hw9HnlkC%2b4n4x/euhUPPvAAtpJO7C82XAfcDoCAb5J2OEBUn0KQ6M67PTFuxxBFegYlMktVHgmPORuMinxvFXEgMhMQwY9ZMkdrpEKoNF4JKnuAW/K/TosMVQGBVUBrqNChFnjPnmwhKlWGSNNyzFp1LnCnLpAcACkGTDgdwgVY2DCesxPlp71SlccA8XiUCh0HpchxdhliA6/jTMBBkkWZBZSFS2L1pyYpIiOrswqhzyklo9WU1jjHr5wSKTOIslbY1CMxPhbngOZxjYtdZ4M4pcnpjTXv8EI0LNyDz/05NjATOFMsKoyXAVC6gNJn40bEdD6lw4aqChRW5lORky3So3xOqFyvfMY9OBOUgqBtlHabMkCIiiCu/%2bU%2bIOifjsUFHwXGcbH7cgzgmLCQDIDS5ACsnAuusIArPLVGrbi/%2bggssZK8JwBwNTduGxHRnYsi9msXdYbBgF90eD4CIEQAcEZg/%2bf6gIFgF5ii1MmGcyPEcULJANnXE/03cbzewacylSbObQ4AFAPCFOG5qmNDmO7Li3OC/jcX5sRYrvrkNfI6WXNlKKpD%2bozLvjYAt54OyyfD2tXjNU6EE8G8awCkZqgKfb09MPX3YKCvm%2bp91l3iS1L%2bcpS/BLUYDbHOz0A9Q78kxhVtHqQOkTrIUWKEnVyjrEw6E9SvEQDvVJJ1j3dVB8jt8IVLl3Dh269x%2beI5XG2/gCsXz4vusP3COdHlcavc27laehRjbqENPZ2wmAbEiVBxcZF4Pu/MZn8pqo49Uy6pN8UFbMNm8n8rfB4ngj4P/FMTcZmedNG8S9xTijTvxKTLLkrggFw/UClcQy12Xl6eAKKwsAAFBZsnhYWFKCoqovI5n3ShVAip76IQqq2pEQUPR/XezuuC9vx9v6G7Q/T5/bSz/N3/CKW/7o5rgg3sFiOWQQzILhJzD697XAAzPjYEBwVUh6zviVhFG//Pz/4ujF/v/wf8B5Bw/zB1L9KiAAAAAElFTkSuQmCC' /%3e%3c/svg%3e"}},UQSp:function(e,t,a){"use strict";t.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}}}]);