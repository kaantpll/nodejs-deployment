### Nodejs Deployment And Scaling

The project describes the deployment stages of a Node.js application from scratch to production. It covers CI/CD processes, and the application can be scaled using Kubernetes. Also I tested many functions (There are not a lot functions 😊).
#### NOTE: I use configmap on Kubernetes for .env property. If you want to use kubernetes you have to create configmap and define to deployment.yaml. 
--------
Tech I Use : 
  - Nodejs (Express)
  - MongoDB
  - Jest (Testing)
  - Docker
  - Kubernetes (Minikube for locally)
  - CI/CD (Github Actions)

Prerequisites :
 - Nodejs
 - Kubernetes Cluster ( I used minikube on local. You can use Google Cloud or AWS )

Running
Downloading libraries
```
yarn 
```
Starting project on development
 ```
yarn dev
```
Starting tests
```
yarn test
```
Starting test coverage
```
yarn test --coverage
```

Docker 
Creating image and running containers
```
docker build -t <image_name> .
or
./build.sh
```

Kubernetes
Creating kubernetes deployments and services.
```
kubectly apply -f deployment.yaml
```

```
kubectly apply -f services.yaml
```

