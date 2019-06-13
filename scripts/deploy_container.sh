# Kill any running container
docker kill marketapp

# Build a Docker Image
docker build -t marketapp .

# Stand up container
docker run -d -v ${PWD}:/app -v /app/node_modules -p 3001:3000 --name marketapp --rm marketapp
