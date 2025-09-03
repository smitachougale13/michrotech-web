pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build React App') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t michrotech-web .'
            }
        }

        stage('Run Docker Container') {
            steps {
                sh 'docker run -d -p 3000:80 --name michrotech-web-container michrotech-web || true'
            }
        }
    }
}
