
### Build Docker

* sudo docker build -t nodeimage:v1 .

### Run Docker

* sudo docker run nodeimage:v1

### Run Docker with command

* sudo docker run nodeimage:v1 "Command"

### List All Docker Images

* sudo docker ps
* sudo docker ps --all

###  Start A container

* sudo docker start "container id"

### Start A Container with previous command

*  sudo docker start -a "container id"

### Enter inside a container

* sudo docker exec -it "container id"  "Commands/Arguments"



###### Docker Compose

* sudo docker-compose up --build