## Docker Image Pull
`docker image pull misbahsabrani/webapp:latest`

## Run Container
`docker container run -d --name webapp -p 3000:3000 webapp:latest`

`localhost:3000`


# OR

## First clone code
git clone `https://github.com/Misbahaslamsabrani/First-Containerized-App`

## Build Image 
`docker image build -t webapp:latest .`

# Run Container
`docker container run -d --name webapp -p 3000:3000 webapp:latest`

`localhost:3000`
