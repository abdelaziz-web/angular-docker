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
                    bat "docker build -t awwin/new-angular:${env.BUILD_NUMBER} ."
                }
            }
        }
        
      
        
        stage('Push to DockerHub') {
            steps {
                script {
                    bat "docker push awwin/new-angular:${env.BUILD_NUMBER}"
                    bat "docker push awwin/new-angular:latest"
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
    
    post {
        always {
            bat "docker logout"
        }
    }
}