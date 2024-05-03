docker build -t sample-app ./app/
docker run -d -p 8089:8089 -e PRIVATE_VALUE='*****' -e CONFIG_VALUE='8089' sample-app
#kubectl apply -f k8s.yaml