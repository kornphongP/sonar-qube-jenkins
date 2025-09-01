pipeline {
    agent any

    tools {
        nodejs 'NodeJS_24'  // ต้องตรงกับ Global Tool Configuration ใน Jenkins
    }

    stages {
        stage('Build') {
            steps {
                git 'https://github.com/kornphongP/sonar-qube-jenkins.git'
                bat "npm install"
            }
        }

        stage('SonarQube Scan') {
            steps {
                withSonarQubeEnv('sonar-scanner') { // ชื่อ SonarQube server ใน Jenkins
                    bat '''
                        npx sonar-scanner \
                            -Dsonar.projectKey=simple-express-app \
                            -Dsonar.sources=. \
                            -Dsonar.host.url=http://localhost:9001 \
                            -Dsonar.login=sqp_13c196468557b0beb568f13ce8d7c501147ebfdc
                    '''
                }
            }
        }
    }
}
