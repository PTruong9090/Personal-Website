# Anomaly Detection System

## Motivation
It was originally a project for Striim's application process but I ended up learning and enjoying the machine learning process so I fully
adapted the repo to my homelab server for anomaly detection. I wanted something that can actually give me real data on when my server is in a critical state or nearing a critical state since the server was placed at home in San Jose and I was in LA. Since the server hosts
a lot of services and has streaming on top of it, I wanted to be able to tell the different between someone doing normal everyday activities on the server vs an actual critical issue that can bring my hardware or services down.

## Ownership Framing
When I forked the repo, it had the full process beginning at data preprocessing on test data where it split the data into 2 parts for training and test and had the full pipeline process all the way from getting the threshold value to a live scoring api that scored incoming data based on the threshold from the training. It also included a way to test how accurate the data was based on a precalculated anomaly value. I don't remember if the original pipeline had anomaly injection but I had to include it in my data. I normalized the data from my server and injected anomalies into it and tested and scored the data. Then I added the full prometheus export pipeline so that data can be queried and checked for anomalies.

## Pipeline walk Through
### Prometheus query_range export
Exports data from prometheus for a specified range (2 weeks)

### Preprocessing
I don't remember the exact way but I believe their was normalization but unsure what kind and depth of normalization. The data was split into 2 parts for training and testing and anomalies were injected into the data for testing and saved so that there is a count of anomalies to test for to see if they get detected properly.

### Training
Used given TranAD model to train on training data

### FastAPI /score
Adapted to score recent prometheus data

### Exporter
Exported data to Prometheus and Grafana scraped to build dashboard and alert

## Preprocessing Decision
I don't know why min/max normalization. I believe its because all the data are given in different metrics and values so its better to turn them into something more readable like a 0-100%. I also don't know why sliding window is used I believe its to make it more accurate so that all data are training multiple times and the "windows" the time frame are fair so we can see if one window we see a spike but if we look at the previous window it was slowly climbing already (I believe correct me if I am wrong). Window size was the recommended window size.

## Synthetic Anomalies
I injected them as spikes because I never had a real incident where my server went crazy and had to shut down on me or anything like that

## Results
I think the metrics learned how normal behavior works when absolutely nothing happens so alerts have been happening often for normal operations so I will need to retrain on longer span of data and NAS disk read and writes which I have now

## Alerting
The alert happens when transAD score is above the threshold for a certain amount of time and the alert has critical or warning depending on how much it is above the threshold for and the percentage of the spike

Firing

Value: A=101.04063710176666, C=1
Labels:
 
alertname = TranAD Critical Anomaly
grafana_folder = Homelab
instance = anomaly-exporter:9108
job = homelab-tranad-exporter
machine = media-server
service = tranad-api
severity = critical
Annotations:
 
summary = The model score is 50% above threshold for 5 minutes
Source: http://localhost:3000/alerting/grafana/dfq9szaje45q8e/view?orgId=1
Silence: http://localhost:3000/alerting/silence/new?alertmanager=grafana&matcher=__alert_rule_uid__%3Ddfq9szaje45q8e&matcher=instance%3Danomaly-exporter%3A9108&matcher=job%3Dhomelab-tranad-exporter&matcher=machine%3Dmedia-server&matcher=service%3Dtranad-api&matcher=severity%3Dcritical&orgId=1
[FIRING:1] TranAD Critical Anomaly Homelab (anomaly-exporter:9108 homelab-tranad-exporter media-server tranad-api critical)

Grafana v13.0.2
Grafana
APP
 — 2:05 AM
Firing

Value: A=104.5065468251592, C=1
Labels:
 
alertname = TranAD Anomaly Detected
grafana_folder = Homelab
instance = anomaly-exporter:9108
job = homelab-tranad-exporter
machine = media-server
service = tranad-api
severity = warning
Annotations:
 
description = Check Grafana dashboard for raw CPU, memory, network receive, and network transmit.
summary = TranAD score is above the learned threshold for media-server.
Source: http://localhost:3000/alerting/grafana/cfq9sscziazggd/view?orgId=1
Silence: http://localhost:3000/alerting/silence/new?alertmanager=grafana&matcher=__alert_rule_uid__%3Dcfq9sscziazggd&matcher=instance%3Danomaly-exporter%3A9108&matcher=job%3Dhomelab-tranad-exporter&matcher=machine%3Dmedia-server&matcher=service%3Dtranad-api&matcher=severity%3Dwarning&orgId=1
[FIRING:1] TranAD Anomaly Detected Homelab (anomaly-exporter:9108 homelab-tranad-exporter media-server tranad-api warning)

Grafana v13.0.2
Grafana
APP
 — 2:25 AM
Firing

Value: A=104.46169781143917, C=1
Labels:
 
alertname = TranAD Critical Anomaly
grafana_folder = Homelab
instance = anomaly-exporter:9108
job = homelab-tranad-exporter
machine = media-server
service = tranad-api
severity = critical
Annotations:
 
summary = The model score is 50% above threshold for 5 minutes
Source: http://localhost:3000/alerting/grafana/dfq9szaje45q8e/view?orgId=1
Silence: http://localhost:3000/alerting/silence/new?alertmanager=grafana&matcher=__alert_rule_uid__%3Ddfq9szaje45q8e&matcher=instance%3Danomaly-exporter%3A9108&matcher=job%3Dhomelab-tranad-exporter&matcher=machine%3Dmedia-server&matcher=service%3Dtranad-api&matcher=severity%3Dcritical&orgId=1
[FIRING:1] TranAD Critical Anomaly Homelab (anomaly-exporter:9108 homelab-tranad-exporter media-server tranad-api critical)

Grafana v13.0.2
Grafana
APP
 — 6:10 AM
Firing

Value: A=93.00479668773555, C=1
Labels:
 
alertname = TranAD Anomaly Detected
grafana_folder = Homelab
instance = anomaly-exporter:9108
job = homelab-tranad-exporter
machine = media-server
service = tranad-api
severity = warning
Annotations:
 
description = Check Grafana dashboard for raw CPU, memory, network receive, and network transmit.
summary = TranAD score is above the learned threshold for media-server.
Source: http://localhost:3000/alerting/grafana/cfq9sscziazggd/view?orgId=1
Silence: http://localhost:3000/alerting/silence/new?alertmanager=grafana&matcher=__alert_rule_uid__%3Dcfq9sscziazggd&matcher=instance%3Danomaly-exporter%3A9108&matcher=job%3Dhomelab-tranad-exporter&matcher=machine%3Dmedia-server&matcher=service%3Dtranad-api&matcher=severity%3Dwarning&orgId=1
[FIRING:1] TranAD Anomaly Detected Homelab (anomaly-exporter:9108 homelab-tranad-exporter media-server tranad-api warning)

Grafana v13.0.2
Grafana
APP
 — 6:30 AM
Firing

Value: A=93.10508937562982, C=1
Labels:
 
alertname = TranAD Critical Anomaly
grafana_folder = Homelab
instance = anomaly-exporter:9108
job = homelab-tranad-exporter
machine = media-server
service = tranad-api
severity = critical
Annotations:
 
summary = The model score is 50% above threshold for 5 minutes
Source: http://localhost:3000/alerting/grafana/dfq9szaje45q8e/view?orgId=1
Silence: http://localhost:3000/alerting/silence/new?alertmanager=grafana&matcher=__alert_rule_uid__%3Ddfq9szaje45q8e&matcher=instance%3Danomaly-exporter%3A9108&matcher=job%3Dhomelab-tranad-exporter&matcher=machine%3Dmedia-server&matcher=service%3Dtranad-api&matcher=severity%3Dcritical&orgId=1
[FIRING:1] TranAD Critical Anomaly Homelab (anomaly-exporter:9108 homelab-tranad-exporter media-server tranad-api critical)

Grafana v13.0.2
Grafana
APP
 — 10:15 AM
Firing

Value: A=101.98246638988746, C=1
Labels:
 
alertname = TranAD Anomaly Detected
grafana_folder = Homelab
instance = anomaly-exporter:9108
job = homelab-tranad-exporter
machine = media-server
service = tranad-api
severity = warning
Annotations:
 
description = Check Grafana dashboard for raw CPU, memory, network receive, and network transmit.
summary = TranAD score is above the learned threshold for media-server.
Source: http://localhost:3000/alerting/grafana/cfq9sscziazggd/view?orgId=1
Silence: http://localhost:3000/alerting/silence/new?alertmanager=grafana&matcher=__alert_rule_uid__%3Dcfq9sscziazggd&matcher=instance%3Danomaly-exporter%3A9108&matcher=job%3Dhomelab-tranad-exporter&matcher=machine%3Dmedia-server&matcher=service%3Dtranad-api&matcher=severity%3Dwarning&orgId=1
[FIRING:1] TranAD Anomaly Detected Homelab (anomaly-exporter:9108 homelab-tranad-exporter media-server tranad-api warning)

Grafana v13.0.2
Grafana
APP
 — 10:35 AM
Firing

Value: A=97.42189517375144, C=1
Labels:
 
alertname = TranAD Critical Anomaly
grafana_folder = Homelab
instance = anomaly-exporter:9108
job = homelab-tranad-exporter
machine = media-server
service = tranad-api
severity = critical
Annotations:
 
summary = The model score is 50% above threshold for 5 minutes
Source: http://localhost:3000/alerting/grafana/dfq9szaje45q8e/view?orgId=1
Silence: http://localhost:3000/alerting/silence/new?alertmanager=grafana&matcher=__alert_rule_uid__%3Ddfq9szaje45q8e&matcher=instance%3Danomaly-exporter%3A9108&matcher=job%3Dhomelab-tranad-exporter&matcher=machine%3Dmedia-server&matcher=service%3Dtranad-api&matcher=severity%3Dcritical&orgId=1
[FIRING:1] TranAD Critical Anomaly Homelab (anomaly-exporter:9108 homelab-tranad-exporter media-server tranad-api critical)

Grafana v13.0.2
Grafana
APP
 — 2:20 PM
Firing

Value: A=100.32553060644666, C=1
Labels:
 
alertname = TranAD Anomaly Detected
grafana_folder = Homelab
instance = anomaly-exporter:9108
job = homelab-tranad-exporter
machine = media-server
service = tranad-api
severity = warning
Annotations:
 
description = Check Grafana dashboard for raw CPU, memory, network receive, and network transmit.
summary = TranAD score is above the learned threshold for media-server.
Source: http://localhost:3000/alerting/grafana/cfq9sscziazggd/view?orgId=1
Silence: http://localhost:3000/alerting/silence/new?alertmanager=grafana&matcher=__alert_rule_uid__%3Dcfq9sscziazggd&matcher=instance%3Danomaly-exporter%3A9108&matcher=job%3Dhomelab-tranad-exporter&matcher=machine%3Dmedia-server&matcher=service%3Dtranad-api&matcher=severity%3Dwarning&orgId=1
[FIRING:1] TranAD Anomaly Detected Homelab (anomaly-exporter:9108 homelab-tranad-exporter media-server tranad-api warning)

Grafana v13.0.2
Grafana
APP
 — 2:40 PM
Firing

Value: A=100.70430626035304, C=1
Labels:
 
alertname = TranAD Critical Anomaly
grafana_folder = Homelab
instance = anomaly-exporter:9108
job = homelab-tranad-exporter
machine = media-server
service = tranad-api
severity = critical
Annotations:
 
summary = The model score is 50% above threshold for 5 minutes
Source: http://localhost:3000/alerting/grafana/dfq9szaje45q8e/view?orgId=1
Silence: http://localhost:3000/alerting/silence/new?alertmanager=grafana&matcher=__alert_rule_uid__%3Ddfq9szaje45q8e&matcher=instance%3Danomaly-exporter%3A9108&matcher=job%3Dhomelab-tranad-exporter&matcher=machine%3Dmedia-server&matcher=service%3Dtranad-api&matcher=severity%3Dcritical&orgId=1
[FIRING:1] TranAD Critical Anomaly Homelab (anomaly-exporter:9108 homelab-tranad-exporter media-server tranad-api critical)

Grafana v13.0.2
Grafana
APP
 — 6:25 PM
Firing

Value: A=92.76850855610694, C=1
Labels:
 
alertname = TranAD Anomaly Detected
grafana_folder = Homelab
instance = anomaly-exporter:9108
job = homelab-tranad-exporter
machine = media-server
service = tranad-api
severity = warning
Annotations:
 
description = Check Grafana dashboard for raw CPU, memory, network receive, and network transmit.
summary = TranAD score is above the learned threshold for media-server.
Source: http://localhost:3000/alerting/grafana/cfq9sscziazggd/view?orgId=1
Silence: http://localhost:3000/alerting/silence/new?alertmanager=grafana&matcher=__alert_rule_uid__%3Dcfq9sscziazggd&matcher=instance%3Danomaly-exporter%3A9108&matcher=job%3Dhomelab-tranad-exporter&matcher=machine%3Dmedia-server&matcher=service%3Dtranad-api&matcher=severity%3Dwarning&orgId=1
[FIRING:1] TranAD Anomaly Detected Homelab (anomaly-exporter:9108 homelab-tranad-exporter media-server tranad-api warning)

Grafana v13.0.2
Grafana
APP
 — 6:45 PM
Firing

Value: A=89.36566683922102, C=1
Labels:
 
alertname = TranAD Critical Anomaly
grafana_folder = Homelab
instance = anomaly-exporter:9108
job = homelab-tranad-exporter
machine = media-server
service = tranad-api
severity = critical
Annotations:
 
summary = The model score is 50% above threshold for 5 minutes
Source: http://localhost:3000/alerting/grafana/dfq9szaje45q8e/view?orgId=1
Silence: http://localhost:3000/alerting/silence/new?alertmanager=grafana&matcher=__alert_rule_uid__%3Ddfq9szaje45q8e&matcher=instance%3Danomaly-exporter%3A9108&matcher=job%3Dhomelab-tranad-exporter&matcher=machine%3Dmedia-server&matcher=service%3Dtranad-api&matcher=severity%3Dcritical&orgId=1
[FIRING:1] TranAD Critical Anomaly Homelab (anomaly-exporter:9108 homelab-tranad-exporter media-server tranad-api critical)

Grafana v13.0.2
Grafana
APP
 — 10:30 PM
Firing

Value: A=76.54784077492617, C=1
Labels:
 
alertname = TranAD Anomaly Detected
grafana_folder = Homelab
instance = anomaly-exporter:9108
job = homelab-tranad-exporter
machine = media-server
service = tranad-api
severity = warning
Annotations:
 
description = Check Grafana dashboard for raw CPU, memory, network receive, and network transmit.
summary = TranAD score is above the learned threshold for media-server.
Source: http://localhost:3000/alerting/grafana/cfq9sscziazggd/view?orgId=1
Silence: http://localhost:3000/alerting/silence/new?alertmanager=grafana&matcher=__alert_rule_uid__%3Dcfq9sscziazggd&matcher=instance%3Danomaly-exporter%3A9108&matcher=job%3Dhomelab-tranad-exporter&matcher=machine%3Dmedia-server&matcher=service%3Dtranad-api&matcher=severity%3Dwarning&orgId=1
[FIRING:1] TranAD Anomaly Detected Homelab (anomaly-exporter:9108 homelab-tranad-exporter media-server tranad-api warning)

Grafana v13.0.2
Grafana
APP
 — 10:50 PM
Firing

Value: A=77.50569071893156, C=1
Labels:
 
alertname = TranAD Critical Anomaly
grafana_folder = Homelab
instance = anomaly-exporter:9108
job = homelab-tranad-exporter
machine = media-server
service = tranad-api
severity = critical
Annotations:
 
summary = The model score is 50% above threshold for 5 minutes
Source: http://localhost:3000/alerting/grafana/dfq9szaje45q8e/view?orgId=1
Silence: http://localhost:3000/alerting/silence/new?alertmanager=grafana&matcher=__alert_rule_uid__%3Ddfq9szaje45q8e&matcher=instance%3Danomaly-exporter%3A9108&matcher=job%3Dhomelab-tranad-exporter&matcher=machine%3Dmedia-server&matcher=service%3Dtranad-api&matcher=severity%3Dcritical&orgId=1


## Why paused
I paused to see how accurate the threshold was and to see if I had to retrain. I also wanted more data to train on that is why its paused

## Changelog
Try to see if you can get it from my repo


# VisionX
## Motivation
I have always been curious about computer vision and wanted to work on a project related to computer vision and hardware because I was also interested in embedded systems and drones. I am moving home soon and wanted a way to monitor the surrounding of our house because in the past there has been issues in my neighborhood and I wanted a more secure way of scaring intruders even though my dad built a fence by the garage area of our mobile home where there is a walkway that has a lot of foot traffic. I original had wyze cameras but each one was expensive and they had a subscriptions and I considered getting a camera system with a dvr but I have my own NAS and extra computing servers so why not just build my own and make it fully customizable and is somewhat free and I get to learn a lot and have fun building it. I also recently watched a video on creating a radar tracking system like in Call of Duty and wanted to also use this to as a way to work on that also

I also came up with the voice AI idea to ask questions and get answers based on context and event of cameras because my parents are old and they work around the house a lot so I wanted a quick way of knowing where they are or when they left the house in case of emergencies. 

## Implemented Today
camera crud, user crud, auth crud, go2rtc RTSP->webrtc, FastAPI/SQLAlchemy/Alembic, React dashboard, simple health checks

- I think the hardest part was thinking in the future in terms of what I want for the future since its always changing and trying to build the MVP around that which was not the right idea. I constantly changed the use for stream_keys and originally had stream_key has something that users implemented and realized that didn't make sense since the key will be used for everything from the go2rtc server and default camera stuff

## The designed recording architecture
I will have an main stream for recording and substream for worker processing and will completely use workers to trigger events using YOLO with a RAM preroll/postroll buffer and continuous recording if event trigger is still happening and recordings are saved for 1 year on NAS. The only issue I would consider is that my hardware isn't up for YOLO inference on multiple cameras at once so I would have to use a pre-filter like ONVIF events but that means I the system would not be universal and require reolink cameras but I want it to be universal. I don't want to buffer in disk because of disk wear and HDD prices are currently very expensive and my system has 2 18tb ssd meant for servers and one is a parity disk.

## Done
Done will have recording and events properly built with events being readable by AI to give verbal responses to questions. I feel like it won't be fully done until multiple testing phases becauses I have to make sure it doesn't over detect events or miss events

## Tradeoffs already faced
I had to redesign the way stream_key was used because it was originally editable and created by users which made it more difficult to keep camera information constant for things like go2rtc to use

## Changelog
Look through my github or project file

# Homelab Infrastructure System
## Origin Story
I originally had a Pi 5 with an 1TB ssd as a system for files because I hated have to send my files through email if I wanted to share it through my phone or laptop and desktop so I used a raspberry pi but realized that reads and writes like that especially if i am sending lots of files multiple times a day it can wear down the ssd very fast and adding a hard drive to a raspberry pi and using RAID is difficult since it wasn't meant for that. The first thing I selfhosted was nextcloud for this exact issue

## Hardware
I used a pi originally because it was cheap at that time and I wanted to learn more embedded systems and networking with switches and stuff. I realized how constraint it was so I bought a micropc and originally planned on getting something like DAS or buying a prebuilt one but I thought that was pretty boring and I was stuck to using their software and had to wait for them on any issues so I decided to build my own after scrolling reddit for hours and chose unraid because it was simple to set up and the parity setup protects my files against corruption or disk failures

## Networking
Planbear uses cloudflare tunnels so all traffics goes through cloudflare and it acts as a postal service that knows your address but won't tell anyone what it is. I chose cloudflare tunnels over portforwarding because its much safer and won't expose my server to the internet in case there are any bots scanning for security issues. I used tailscale as a safer way to ssh and access my server especially the main components like the admin dashboard because it requires authentication and to be logged into or invited to my tailscale vpn

## Monitoring
It told me that when watching something the cpu spikes because it is using encoding to make the format watchable on the device so it uses cpu encoding and i realized it only supported 1 or 2 simultaneous streams

## Debugging war stories
REMIND ME TO ADD THIS LATER I WILL THINK MORE ON THIS

## costs/teaches
doesn't draw much power but it was $1500 and expensive because of the HDD but I learned a lot of networking concepts and grown to love using linux cli and since I am a hands-on learner this has solidified lots of networking concepts like HTTP requests and how ARP works with switches and using VLANs to protect your network and split them up and how to connect many components and pcs together to create one system that is all interconnected.

## Changelog
I will provide later

