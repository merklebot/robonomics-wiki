(window.webpackJsonp=window.webpackJsonp||[]).push([[268],{TqGK:function(e,o,t){"use strict";t.r(o);var r=t("KHd+"),n=t("UQSp"),s=t("Kw5r");function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}s.a.config.optionMergeStrategies;var i={VueRemarkRoot:n.a},l=function(e){var o=e.options.components=e.options.components||{},t=e.options.computed=e.options.computed||{};Object.keys(i).forEach((function(e){"object"===a(i[e])&&"function"==typeof i[e].render||"function"==typeof i[e]&&"function"==typeof i[e].options.render?o[e]=i[e]:t[e]=function(){return i[e]}}))},p=s.a.config.optionMergeStrategies,c="__vueRemarkFrontMatter",u={excerpt:null,title:"Robonomics + Prometheus + Grafana",contributors:["Vourhey"],translated:!1};var d=function(e){e.options[c]&&(e.options[c]=u),s.a.util.defineReactive(e.options,c,u),e.options.computed=p.computed({$frontmatter:function(){return e.options[c]}},e.options.computed)},h=Object(r.a)({},(function(){var e=this,o=e.$createElement,r=e._self._c||o;return r("VueRemarkRoot",[r("p",[r("strong",[e._v("The following instruction is provided by "),r("a",{attrs:{href:"https://github.com/hubobubo",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("Hubo Bubo")])])]),r("p",[r("strong",[e._v("The original article is located "),r("a",{attrs:{href:"https://github.com/hubobubo/robonomics/wiki/Robonomics-(XRT)-metrics-using-Prometheus-and-Grafana",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("here")])])]),r("h2",{attrs:{id:"introduction"}},[r("a",{attrs:{href:"#introduction","aria-hidden":"true"}},[r("span",{staticClass:"icon icon-link"})]),e._v("Introduction")]),r("p",[e._v("To better monitor and maintain Robonomics node(s) it's good to setup a monitoring based on Prometheus Server and Grafana. This doc will show how to configure each one of it to fully monitor your node.")]),r("h2",{attrs:{id:"prerequisites"}},[r("a",{attrs:{href:"#prerequisites","aria-hidden":"true"}},[r("span",{staticClass:"icon icon-link"})]),e._v("Prerequisites")]),r("ul",[r("li",[r("a",{attrs:{href:"https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-18-04",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("Server Setup with Ubuntu 18.04")])]),r("li",[r("a",{attrs:{href:"https://blog.aira.life/installing-and-running-the-robonomics-validator-in-the-polkadot-network-487ad4c1a567",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("Robonomics parachain collator installed")])]),r("li",[e._v("Make sure you have robonomics.service working on your machine and port 9615 is reachable ")])]),r("h2",{attrs:{id:"step-1--creating-service-users"}},[r("a",{attrs:{href:"#step-1--creating-service-users","aria-hidden":"true"}},[r("span",{staticClass:"icon icon-link"})]),e._v("Step 1 — Creating Service Users")]),r("p",[e._v("For security purposes, we’ll begin by creating two new user accounts, prometheus and node"),r("em",[e._v("exporter. Create these two users, and use the ")]),e._v("--no-create-home"),r("em",[e._v(" and ")]),e._v("--shell /bin/false_ options so that these users can’t log into the server.")]),r("pre",[r("code",{pre:!0},[e._v("sudo useradd --no-create-home --shell /bin/false prometheus\nsudo useradd --no-create-home --shell /bin/false node_exporter\n")])]),r("p",[e._v("Before we download the Prometheus binaries, create the necessary directories for storing Prometheus’ files and data. Following standard Linux conventions, we’ll create a directory in "),r("em",[e._v("/etc")]),e._v(" for Prometheus’ configuration files and a directory in "),r("em",[e._v("/var/lib")]),e._v(" for its data.")]),r("pre",[r("code",{pre:!0},[e._v("sudo mkdir /etc/prometheus\nsudo mkdir /var/lib/prometheus\n")])]),r("p",[e._v("Now, set the user and group ownership on the new directories to the prometheus user.")]),r("pre",[r("code",{pre:!0},[e._v("sudo chown prometheus:prometheus /etc/prometheus\nsudo chown prometheus:prometheus /var/lib/prometheus\n")])]),r("h2",{attrs:{id:"step-2--downloading-prometheus"}},[r("a",{attrs:{href:"#step-2--downloading-prometheus","aria-hidden":"true"}},[r("span",{staticClass:"icon icon-link"})]),e._v("Step 2 — Downloading Prometheus")]),r("p",[e._v("First, download and unpack the current stable version of Prometheus into your home directory. You can find the latest binaries on the "),r("a",{attrs:{href:"https://prometheus.io/download/",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("Prometheus download page.")])]),r("pre",[r("code",{pre:!0},[e._v("wget https://github.com/prometheus/prometheus/releases/download/v2.21.0/prometheus-2.21.0.linux-amd64.tar.gz\n")])]),r("p",[e._v("Now, unpack the downloaded archive.")]),r("pre",[r("code",{pre:!0},[e._v("tar xvf prometheus-2.21.0.linux-amd64.tar.gz\n")])]),r("p",[e._v("This will create a directory called prometheus-2.21.0.linux-amd64 containing two binary files (prometheus and promtool), "),r("em",[e._v("consoles")]),e._v(" and "),r("em",[e._v("console_libraries")]),e._v(" directories containing the web interface files, a license, a notice, and several example files.")]),r("p",[e._v("Copy the two binaries to the "),r("em",[e._v("/usr/local/bin")]),e._v(" directory.")]),r("pre",[r("code",{pre:!0},[e._v("sudo cp prometheus-2.21.0.linux-amd64/prometheus /usr/local/bin/\nsudo cp prometheus-2.21.0.linux-amd64/promtool /usr/local/bin/\n")])]),r("p",[e._v("Set the user and group ownership on the binaries to the prometheus user created in Step 1.")]),r("pre",[r("code",{pre:!0},[e._v("sudo chown prometheus:prometheus /usr/local/bin/prometheus\nsudo chown prometheus:prometheus /usr/local/bin/promtool\n")])]),r("p",[e._v("Copy the consoles and "),r("em",[e._v("console_libraries")]),e._v(" directories to "),r("em",[e._v("/etc/prometheus")]),e._v(".")]),r("pre",[r("code",{pre:!0},[e._v("sudo cp -r prometheus-2.21.0.linux-amd64/consoles /etc/prometheus\nsudo cp -r prometheus-2.21.0.linux-amd64/console_libraries /etc/prometheus\n")])]),r("p",[e._v("Set the user and group ownership on the directories to the prometheus user. Using the -R flag will ensure that ownership is set on the files inside the directory as well.")]),r("pre",[r("code",{pre:!0},[e._v("sudo chown -R prometheus:prometheus /etc/prometheus/consoles\nsudo chown -R prometheus:prometheus /etc/prometheus/console_libraries\n")])]),r("p",[e._v("Now that Prometheus is installed, we’ll create its configuration and service files in preparation of its first run.")]),r("h2",{attrs:{id:"step-3--configuring-prometheus"}},[r("a",{attrs:{href:"#step-3--configuring-prometheus","aria-hidden":"true"}},[r("span",{staticClass:"icon icon-link"})]),e._v("Step 3 — Configuring Prometheus")]),r("p",[e._v("In the "),r("em",[e._v("/etc/prometheus")]),e._v(" directory, use nano or your favorite text editor to create a configuration file named "),r("em",[e._v("prometheus.yml")]),e._v(".")]),r("pre",[r("code",{pre:!0},[e._v("sudo nano /etc/prometheus/prometheus.yml\n")])]),r("p",[e._v("In the global settings, define the default interval for scraping metrics. Note that Prometheus will apply these settings to every exporter unless an individual exporter’s own settings override the globals.")]),r("pre",[r("code",{pre:!0},[e._v("global:\n  scrape_interval: 15s\n")])]),r("p",[e._v("This scrape_interval value tells Prometheus to collect metrics from its exporters every 15 seconds, which is long enough for most exporters.\nNow, add Prometheus itself to the list of exporters to scrape from with the following scrape_configs directive:")]),r("pre",[r("code",{pre:!0},[e._v("...\nscrape_configs:\n  - job_name: 'prometheus'\n    scrape_interval: 5s\n    static_configs:\n      - targets: ['localhost:9090']\n")])]),r("p",[e._v("Prometheus uses the "),r("em",[e._v("job_name")]),e._v(" to label exporters in queries and on graphs, so be sure to pick something descriptive here.")]),r("p",[e._v("And, as Prometheus exports important data about itself that you can use for monitoring performance and debugging, we’ve overridden the global scrape_interval directive from 15 seconds to 5 seconds for more frequent updates.")]),r("p",[e._v("Lastly, Prometheus uses the "),r("em",[e._v("static_configs")]),e._v(" and "),r("em",[e._v("targets")]),e._v(" directives to determine where exporters are running. Since this particular exporter is running on the same server as Prometheus itself, we can use localhost instead of an IP address along with the default port, 9090.")]),r("p",[e._v("Your configuration file should now look like this:")]),r("pre",[r("code",{pre:!0},[e._v("global:\n  scrape_interval: 15s\n\nscrape_configs:\n  - job_name: 'prometheus'\n    scrape_interval: 5s\n    static_configs:\n      - targets: ['localhost:9090']\n")])]),r("p",[e._v("Save the file and exit your text editor.")]),r("p",[e._v("Now, set the user and group ownership on the configuration file to the prometheus user created in Step 1.")]),r("pre",[r("code",{pre:!0},[e._v("sudo chown prometheus:prometheus /etc/prometheus/prometheus.yml\n")])]),r("p",[e._v("With the configuration complete, we’re ready to test Prometheus by running it for the first time.")]),r("h2",{attrs:{id:"step-4--running-prometheus"}},[r("a",{attrs:{href:"#step-4--running-prometheus","aria-hidden":"true"}},[r("span",{staticClass:"icon icon-link"})]),e._v("Step 4 — Running Prometheus")]),r("p",[e._v("Start up Prometheus as the "),r("em",[e._v("prometheus")]),e._v(" user, providing the path to both the configuration file and the data directory.")]),r("pre",[r("code",{pre:!0},[e._v("sudo -u prometheus /usr/local/bin/prometheus \\\n    --config.file /etc/prometheus/prometheus.yml \\\n    --storage.tsdb.path /var/lib/prometheus/ \\\n    --web.console.templates=/etc/prometheus/consoles \\\n    --web.console.libraries=/etc/prometheus/console_libraries\n")])]),r("p",[e._v("The output contains information about Prometheus’ loading progress, configuration file, and related services. It also confirms that Prometheus is listening on port "),r("em",[e._v("9090")]),e._v(".")]),r("pre",[r("code",{pre:!0},[e._v('_log output_\nSep 14 17:55:53 robonomics systemd[1]: Started Prometheus.\nSep 14 17:55:53 robonomics prometheus[29488]: level=info ts=2020-09-14T15:55:53.347Z caller=main.go:310 msg="No time or size retention was set so using the default time retention" duration=15d\nSep 14 17:55:53 robonomics prometheus[29488]: level=info ts=2020-09-14T15:55:53.350Z caller=main.go:346 msg="Starting Prometheus" version="(version=2.21.0, branch=HEAD, revision=e83ef207b6c2398919b69cd87d2693cfc2fb4127)"\nSep 14 17:55:53 robonomics prometheus[29488]: level=info ts=2020-09-14T15:55:53.351Z caller=main.go:347 build_context="(go=go1.15.2, user=root@a4d9bea8479e, date=20200911-11:35:02)"\nSep 14 17:55:53 robonomics prometheus[29488]: level=info ts=2020-09-14T15:55:53.351Z caller=main.go:348 host_details="(Linux 4.15.0-112-generic #113-Ubuntu SMP Thu Jul 9 23:41:39 UTC 2020 x86_64 robonomics (none))"\nSep 14 17:55:53 robonomics prometheus[29488]: level=info ts=2020-09-14T15:55:53.351Z caller=main.go:349 fd_limits="(soft=1024, hard=4096)"\nSep 14 17:55:53 robonomics prometheus[29488]: level=info ts=2020-09-14T15:55:53.351Z caller=main.go:350 vm_limits="(soft=unlimited, hard=unlimited)"\nSep 14 17:55:53 robonomics prometheus[29488]: level=info ts=2020-09-14T15:55:53.357Z caller=main.go:701 msg="Starting TSDB ..."\nSep 14 17:55:53 robonomics prometheus[29488]: level=info ts=2020-09-14T15:55:53.368Z caller=web.go:523 component=web msg="Start listening for connections" address=0.0.0.0:9090\nSep 14 17:55:53 robonomics prometheus[29488]: level=info ts=2020-09-14T15:55:53.372Z caller=head.go:644 component=tsdb msg="Replaying on-disk memory mappable chunks if any"\nSep 14 17:55:53 robonomics prometheus[29488]: level=info ts=2020-09-14T15:55:53.373Z caller=head.go:658 component=tsdb msg="On-disk memory mappable chunks replay completed" duration=12.659µs\nSep 14 17:55:53 robonomics prometheus[29488]: level=info ts=2020-09-14T15:55:53.373Z caller=head.go:664 component=tsdb msg="Replaying WAL, this may take a while"\nSep 14 17:55:53 robonomics prometheus[29488]: level=info ts=2020-09-14T15:55:53.380Z caller=head.go:716 component=tsdb msg="WAL segment loaded" segment=0 maxSegment=1\nSep 14 17:55:53 robonomics prometheus[29488]: level=info ts=2020-09-14T15:55:53.381Z caller=head.go:716 component=tsdb msg="WAL segment loaded" segment=1 maxSegment=1\nSep 14 17:55:53 robonomics prometheus[29488]: level=info ts=2020-09-14T15:55:53.381Z caller=head.go:719 component=tsdb msg="WAL replay completed" checkpoint_replay_duration=48.125µs wal_replay_duration=8.253748ms total_replay_duration=8.343335ms\nSep 14 17:55:53 robonomics prometheus[29488]: level=info ts=2020-09-14T15:55:53.383Z caller=main.go:721 fs_type=EXT4_SUPER_MAGIC\nSep 14 17:55:53 robonomics prometheus[29488]: level=info ts=2020-09-14T15:55:53.384Z caller=main.go:724 msg="TSDB started"\nSep 14 17:55:53 robonomics prometheus[29488]: level=info ts=2020-09-14T15:55:53.384Z caller=main.go:850 msg="Loading configuration file" filename=/etc/prometheus/prometheus.yml\nSep 14 17:55:53 robonomics prometheus[29488]: level=info ts=2020-09-14T15:55:53.384Z caller=main.go:881 msg="Completed loading of configuration file" filename=/etc/prometheus/prometheus.yml totalDuration=908.135µs remote_storage=6.693µs web_handler=819ns query_engine=1.383µs scrape=400.232µs scrape_sd=41.679µs notify=1.1µs notify_sd=1.847µs rules=1.522µs\nSep 14 17:55:53 robonomics prometheus[29488]: level=info ts=2020-09-14T15:55:53.384Z caller=main.go:673 msg="Server is ready to receive web requests."\n')])]),r("p",[e._v("If you get an error message, double-check that you’ve used YAML syntax in your configuration file and then follow the on-screen instructions to resolve the problem.")]),r("p",[e._v("Now, halt Prometheus by pressing "),r("em",[e._v("CTRL+C")]),e._v(", and then open a new "),r("em",[e._v("systemd")]),e._v(" service file.")]),r("pre",[r("code",{pre:!0},[e._v("sudo nano /etc/systemd/system/prometheus.service\n")])]),r("p",[e._v("The service file tells "),r("em",[e._v("systemd")]),e._v(" to run Prometheus as the prometheus user, with the configuration file located in the "),r("em",[e._v("/etc/prometheus/prometheus.yml")]),e._v(" directory and to store its data in the "),r("em",[e._v("/var/lib/prometheus")]),e._v(" directory.Copy the following content into the file:")]),r("pre",[r("code",{pre:!0},[e._v("[Unit]\nDescription=Prometheus\nWants=network-online.target\nAfter=network-online.target\n\n[Service]\nUser=prometheus\nGroup=prometheus\nType=simple\nExecStart=/usr/local/bin/prometheus \\\n    --config.file /etc/prometheus/prometheus.yml \\\n    --storage.tsdb.path /var/lib/prometheus/ \\\n    --web.console.templates=/etc/prometheus/consoles \\\n    --web.console.libraries=/etc/prometheus/console_libraries\n\n[Install]\nWantedBy=multi-user.target\n")])]),r("p",[e._v("Finally, save the file and close your text editor. To use the newly created service, reload systemd.")]),r("pre",[r("code",{pre:!0},[e._v("sudo systemctl daemon-reload\n")])]),r("p",[e._v("You can now start Prometheus using the following command:")]),r("pre",[r("code",{pre:!0},[e._v("sudo systemctl start prometheus\n")])]),r("p",[e._v("To make sure Prometheus is running, check the service’s status.")]),r("pre",[r("code",{pre:!0},[e._v("sudo systemctl status prometheus\n")])]),r("p",[e._v("The output tells you Prometheus’ status, main process identifier (PID), memory use, and more.")]),r("p",[e._v("If the service’s status isn’t active, follow the on-screen instructions and re-trace the preceding steps to resolve the problem before continuing the tutorial.")]),r("pre",[r("code",{pre:!0},[e._v("* prometheus.service - Prometheus\n   Loaded: loaded (/etc/systemd/system/prometheus.service; enabled; vendor preset: enabled)\n   Active: active (running) since Mon 2020-09-14 17:59:48 CEST; 24h ago\n Main PID: 29650 (prometheus)\n    Tasks: 9 (limit: 4915)\n   CGroup: /system.slice/prometheus.service\n           `-29650 /usr/local/bin/prometheus --config.file /etc/prometheus/prometheus.yml --storage.tsdb.path /var/lib/prometheus/ --web.console.templates=/etc/prometheus/consoles --web.console.libraries=/etc/prometheus/console_libraries\n")])]),r("p",[e._v("When you’re ready to move on, press "),r("em",[e._v("Q")]),e._v(" to quit the status command. Lastly, enable the service to start on boot.")]),r("pre",[r("code",{pre:!0},[e._v("sudo systemctl enable prometheus\n")])]),r("p",[e._v("Now that Prometheus is up and running, we can install an additional exporter to generate metrics about our server’s resources.")]),r("h2",{attrs:{id:"step-5--downloading-node-exporter"}},[r("a",{attrs:{href:"#step-5--downloading-node-exporter","aria-hidden":"true"}},[r("span",{staticClass:"icon icon-link"})]),e._v("Step 5 — Downloading Node Exporter")]),r("p",[e._v("To expand Prometheus beyond metrics about itself only, we’ll install an additional exporter called Node Exporter. Node Exporter provides detailed information about the system, including CPU, disk, and memory usage. Download the current stable version of Node Exporter into your home directory. You can find the latest binaries on "),r("a",{attrs:{href:"https://prometheus.io/download/",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("Prometheus download page.")])]),r("pre",[r("code",{pre:!0},[e._v("wget https://github.com/prometheus/node_exporter/releases/download/v1.0.1/node_exporter-1.0.1.linux-amd64.tar.gz\n")])]),r("p",[e._v("Now, unpack the downloaded archive.")]),r("pre",[r("code",{pre:!0},[e._v("tar xvf node_exporter-1.0.1.linux-amd64.tar.gz\n")])]),r("p",[e._v("This will create a directory called "),r("em",[e._v("node_exporter-1.0.1.linux-amd64")]),e._v(" containing a binary file named "),r("em",[e._v("node_exporter")]),e._v(", a license, and a notice.")]),r("p",[e._v("Copy the binary to the "),r("em",[e._v("/usr/local/bin")]),e._v(" directory and set the user and group ownership to the node_exporter user that you created in Step 1.")]),r("pre",[r("code",{pre:!0},[e._v("sudo cp node_exporter-1.0.1.linux-amd64/node_exporter /usr/local/bin\nsudo chown node_exporter:node_exporter /usr/local/bin/node_exporter\n")])]),r("p",[e._v("Now that you’ve installed Node Exporter, let’s test it out by running it before creating a service file for it so that it starts on boot.")]),r("h2",{attrs:{id:"step-6--running-node-exporter"}},[r("a",{attrs:{href:"#step-6--running-node-exporter","aria-hidden":"true"}},[r("span",{staticClass:"icon icon-link"})]),e._v("Step 6 — Running Node Exporter")]),r("p",[e._v("The steps for running Node Exporter are similar to those for running Prometheus itself. Start by creating the Systemd service file for Node Exporter.")]),r("pre",[r("code",{pre:!0},[e._v("sudo nano /etc/systemd/system/node_exporter.service\n")])]),r("p",[e._v("Copy the following content into the service file:")]),r("pre",[r("code",{pre:!0},[e._v("[Unit]\nDescription=Node Exporter\nWants=network-online.target\nAfter=network-online.target\n\n[Service]\nUser=node_exporter\nGroup=node_exporter\nType=simple\nExecStart=/usr/local/bin/node_exporter --collector.systemd\n\n[Install]\nWantedBy=multi-user.target\n")])]),r("p",[e._v("Save the file and close your text editor. Finally, reload systemd to use the newly created service.")]),r("pre",[r("code",{pre:!0},[e._v("sudo systemctl daemon-reload\n")])]),r("p",[e._v("You can now run Node Exporter using the following command:")]),r("pre",[r("code",{pre:!0},[e._v("sudo systemctl start node_exporter\n")])]),r("p",[e._v("Verify that Node Exporter’s running correctly with the status command.")]),r("pre",[r("code",{pre:!0},[e._v("sudo systemctl status node_exporter\n")])]),r("p",[e._v("Like before, this output tells you Node Exporter’s status, main process identifier (PID), memory usage, and more. If the service’s status isn’t active, follow the on-screen messages and re-trace the preceding steps to resolve the problem before continuing.")]),r("pre",[r("code",{pre:!0},[e._v("_Output_\n* node_exporter.service - Node Exporter\n   Loaded: loaded (/etc/systemd/system/node_exporter.service; enabled; vendor preset: enabled)\n   Active: active (running) since Mon 2020-09-14 17:58:25 CEST; 1 day 1h ago\n Main PID: 29612 (node_exporter)\n    Tasks: 7 (limit: 4915)\n   CGroup: /system.slice/node_exporter.service\n           `-29612 /usr/local/bin/node_exporter --collector.systemd\n")])]),r("p",[e._v("Lastly, enable Node Exporter to start on boot.")]),r("pre",[r("code",{pre:!0},[e._v("sudo systemctl enable node_exporter\n")])]),r("p",[e._v("With Node Exporter fully configured and running as expected, we’ll tell Prometheus to start scraping the new metrics.")]),r("h2",{attrs:{id:"step-7--configuring-prometheus-to-scrape-node-exporter"}},[r("a",{attrs:{href:"#step-7--configuring-prometheus-to-scrape-node-exporter","aria-hidden":"true"}},[r("span",{staticClass:"icon icon-link"})]),e._v("Step 7 — Configuring Prometheus to Scrape Node Exporter")]),r("p",[e._v("Because Prometheus only scrapes exporters which are defined in the scrape_configs portion of its configuration file, we’ll need to add an entry for Node Exporter, just like we did for Prometheus itself. Open the configuration file.")]),r("pre",[r("code",{pre:!0},[e._v("sudo nano /etc/prometheus/prometheus.yml\n")])]),r("p",[e._v("At the end of the scrape_configs block, add a new entry called node_exporter.")]),r("pre",[r("code",{pre:!0},[e._v("...\n  - job_name: 'node_exporter'\n    scrape_interval: 5s\n    static_configs:\n      - targets: ['localhost:9100']\n")])]),r("p",[e._v("Because this exporter is also running on the same server as Prometheus itself, we can use localhost instead of an IP address again along with Node Exporter’s default port, 9100. Your whole configuration file should look like this:")]),r("pre",[r("code",{pre:!0},[e._v("global:\n  scrape_interval: 15s\n\nscrape_configs:\n  - job_name: 'prometheus'\n    scrape_interval: 5s\n    static_configs:\n      - targets: ['localhost:9090']\n  - job_name: 'node_exporter'\n    scrape_interval: 5s\n    static_configs:\n      - targets: ['localhost:9100']\n")])]),r("p",[e._v("Save the file and exit your text editor when you’re ready to continue. Finally, restart Prometheus to put the changes into effect.")]),r("pre",[r("code",{pre:!0},[e._v("sudo systemctl restart prometheus\n")])]),r("p",[e._v("Once again, verify that everything is running correctly with the status command.")]),r("pre",[r("code",{pre:!0},[e._v("sudo systemctl status prometheus\n")])]),r("p",[e._v("If the service’s status isn’t set to active, follow the on screen instructions and re-trace your previous steps before moving on.")]),r("pre",[r("code",{pre:!0},[e._v("Output\n* prometheus.service - Prometheus\n   Loaded: loaded (/etc/systemd/system/prometheus.service; enabled; vendor preset: enabled)\n   Active: active (running) since Tue 2020-09-15 19:06:56 CEST; 2s ago\n Main PID: 19725 (prometheus)\n    Tasks: 8 (limit: 4915)\n   CGroup: /system.slice/prometheus.service\n           `-19725 /usr/local/bin/prometheus --config.file /etc/prometheus/prometheus.yml --storage.tsdb.path /var/lib/prometheus/ --web.console.templates=/etc/prometheus/consoles --web.console.libraries=/etc/prometheus/console_libraries\n")])]),r("p",[e._v("We now have Prometheus and Node Exporter installed, configured, and running.")]),r("h2",{attrs:{id:"step-8---adding-robonomic-build-in-node_exporter"}},[r("a",{attrs:{href:"#step-8---adding-robonomic-build-in-node_exporter","aria-hidden":"true"}},[r("span",{staticClass:"icon icon-link"})]),e._v("Step 8 - Adding Robonomic build in node_exporter")]),r("p",[e._v("After successfully installed Prometheus and node"),r("em",[e._v("exporter we will have to use build in prometheus exporter in every substrate project. To make this happen we have to add additional entry to ")]),e._v("/etc/prometheus/prometheus.yml_. \nOpen the configuration file.")]),r("pre",[r("code",{pre:!0},[e._v("sudo nano /etc/prometheus/prometheus.yml\n")])]),r("p",[e._v("At the end of the scrape_configs block, add a new entry called robonomic_exporter.")]),r("pre",[r("code",{pre:!0},[e._v("  - job_name: 'robonomics_exporter'\n    scrape_interval: 5s\n    static_configs:\n      - targets: ['localhost:9615']\n")])]),r("p",[e._v("Save the file and exit your text editor. Your whole configuration file should look like this:")]),r("pre",[r("code",{pre:!0},[e._v("global:\n  scrape_interval: 15s\n\nscrape_configs:\n  - job_name: 'prometheus'\n    scrape_interval: 5s\n    static_configs:\n      - targets: ['localhost:9090']\n  - job_name: 'node_exporter'\n    scrape_interval: 5s\n    static_configs:\n      - targets: ['localhost:9100']\n  - job_name: 'robonomics_exporter'\n    scrape_interval: 5s\n    static_configs:\n      - targets: ['localhost:9615']\n")])]),r("p",[e._v("Finally, restart Prometheus to put the changes into effect.")]),r("pre",[r("code",{pre:!0},[e._v("sudo systemctl restart prometheus\n")])]),r("p",[e._v("Once again, verify that everything is running correctly with the status command.")]),r("pre",[r("code",{pre:!0},[e._v("sudo systemctl status prometheus\n")])]),r("p",[e._v("We now have "),r("em",[e._v("Prometheus")]),e._v(" and "),r("em",[e._v("Node Exporter")]),e._v(" as well as "),r("em",[e._v("Robonomic Exporter")]),e._v(" installed, configured, and running. Now move on to Grafana")]),r("h2",{attrs:{id:"step-9---setting-up-grafana"}},[r("a",{attrs:{href:"#step-9---setting-up-grafana","aria-hidden":"true"}},[r("span",{staticClass:"icon icon-link"})]),e._v("Step 9 - Setting up Grafana")]),r("p",[e._v("The last step is to connect Prometheus as a Data Source in Grafana. For purpose of this tutorial we will use free cloud-based grafana which allow to have up to 5 dashboards as well as dedicated "),r("a",{attrs:{href:"https://grafana.com/grafana/dashboards/13015",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("Robonomics dashboard")]),e._v(". Simply go to "),r("a",{attrs:{href:"https://grafana.com/",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("grafana.com")]),e._v(" create new account and login to your newly created grafana instance.")]),r("p",[e._v("At the beginning we must add to Grafana new "),r("em",[r("strong",[e._v("Data Source")])]),e._v(" which in our case will be Prometheus server.\nGo to Data Source:")]),r("blockquote",[r("p",[r("g-image",{attrs:{src:t("TBhW"),alt:"DataSource"}})],1)]),r("p",[e._v("Then click "),r("strong",[r("em",[e._v("Add data source")])])]),r("blockquote",[r("p",[r("g-image",{attrs:{src:t("511M"),alt:"DataSource"}})],1)]),r("p",[e._v("Next select "),r("em",[r("strong",[e._v("Prometheus")])])]),r("blockquote",[r("p",[r("g-image",{attrs:{src:t("b7rh"),alt:"DataSource"}})],1)]),r("p",[e._v("In new screen put your "),r("strong",[r("em",[e._v("Prometheus server IP adress with 9090 port")])])]),r("blockquote",[r("p",[r("g-image",{attrs:{src:t("GNxi"),alt:"DataSource"}})],1)]),r("p",[e._v("After that "),r("em",[r("strong",[e._v("Save & Test")])]),e._v(" if you did all steps you should be green and ready to go for importing dashboard. On the main site click to "),r("strong",[e._v("+")]),e._v(" and then "),r("strong",[e._v("Import")]),e._v(" as shown on the pic below:")]),r("blockquote",[r("p",[r("g-image",{attrs:{src:t("aq1R"),alt:"Import dashboard"}})],1)]),r("p",[e._v("Then you should see Import page:")]),r("blockquote",[r("p",[r("g-image",{attrs:{src:t("N+cI"),alt:"Import page"}})],1)]),r("p",[e._v("In the "),r("em",[e._v("Grafana.com dashboard url or id")]),e._v(" write "),r("em",[r("strong",[e._v("13015")])]),e._v(" (as this is ID of the Robonomic dashboard)")]),r("blockquote",[r("p",[r("g-image",{attrs:{src:t("xZ7G"),alt:"Import Robonomic dashboard"}})],1)]),r("p",[e._v("After loading external dashboard you will get this screen:")]),r("blockquote",[r("p",[r("g-image",{attrs:{src:t("9Zfr"),alt:"XRT 13015 dashboard import"}})],1)]),r("p",[e._v("The last step is to choose previously created "),r("strong",[r("em",[e._v("Data Source")])]),e._v(" and click "),r("em",[r("strong",[e._v("Import")])])]),r("blockquote",[r("p",[r("g-image",{attrs:{src:t("JEZ7"),alt:"Prometheus as a DataSource"}})],1)]),r("p",[e._v("THAT'S IT ! At this point you should see imported dashboard. ")]),r("h2",{attrs:{id:"references"}},[r("a",{attrs:{href:"#references","aria-hidden":"true"}},[r("span",{staticClass:"icon icon-link"})]),e._v("References")]),r("ul",[r("li",[r("a",{attrs:{href:"https://www.digitalocean.com/community/tutorials/how-to-install-prometheus-on-ubuntu-16-04",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("How To Install Prometheus on Ubuntu 16.04")])]),r("li",[r("a",{attrs:{href:"https://medium.com/htc-research-engineering-blog/build-a-monitoring-dashboard-by-prometheus-grafana-741a7d949ec2",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("Build A Monitoring Dashboard by Prometheus + Grafana")])]),r("li",[r("a",{attrs:{href:"https://prometheus.io/docs/visualization/grafana/",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("Grafana support for Prometheus")])]),r("li",[r("a",{attrs:{href:"https://prometheus.io/docs/guides/node-exporter/",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("Monitoring Linux host metrics with the node exporter")])]),r("li",[r("a",{attrs:{href:"https://prometheus.io/docs/prometheus/latest/querying/basics/",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("Querying Prometheus")])]),r("li",[r("a",{attrs:{href:"https://substrate.dev/docs/en/tutorials/visualize-node-metrics/",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("Visualizing Node Metrics")])]),r("li",[r("a",{attrs:{href:"https://github.com/paritytech/substrate/tree/master/utils/prometheus",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("Substrate Prometheus Exporter")])]),r("li",[r("a",{attrs:{href:"https://github.com/w3f/polkadot-dashboard",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("polkadot-dashboard")])]),r("li",[r("a",{attrs:{href:"https://grafana.com/grafana/dashboards/12425",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("Polkadot node metric")])]),r("li",[r("a",{attrs:{href:"https://grafana.com/grafana/dashboards/11074",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("Node Exporter for Prometheus Dashboard")])]),r("li",[r("a",{attrs:{href:"https://grafana.com/grafana/dashboards/13015",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("Grafana ROBONOMICS (XRT) Metrics")])])])])}),[],!1,null,null,null);"function"==typeof l&&l(h),"function"==typeof d&&d(h);o.default=h.exports}}]);