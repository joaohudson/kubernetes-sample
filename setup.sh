minikube start --driver=docker --ports=8080:80,30082:30082
eval $(minikube docker-env)
docker build -t sample-app ./app/
