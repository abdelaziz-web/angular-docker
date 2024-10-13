pipeline {
    agent any
    
    environment {
        DOCKERHUB_CREDENTIALS = credentials('docker-hub-op')
    }
    
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('Build Docker Image') {
            steps {
                script {
                    docker.build("awwin/new-angular:${env.BUILD_NUMBER}")
                }
            }
        }

        stage('Login to DockerHub') {
            steps {
                script {
                    docker.withRegistry('https://registry.hub.docker.com', "${DOCKERHUB_CREDENTIALS}") {
                        echo "Logged into DockerHub successfully!"
                    }
                }
            }
        }
        
        
        stage('Push to DockerHub') {
            steps {
                script {
                    docker.withRegistry('https://registry.hub.docker.com', 'dockerhub-credentials') {
                        docker.image("awwin/new-angular:${env.BUILD_NUMBER}").push()
                        docker.image("awwin/new-angular:${env.BUILD_NUMBER}").push("latest")
                    }
                }
            }
        }
        
        stage('Deploy') {
            steps {
                script {
                    
                    bat "docker run -d -p 4201:80 awwin/new-angular:${env.BUILD_NUMBER}"
                }
            }
        }
    }
    
  
}



