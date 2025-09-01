pipeline {
    agent any

    tools {
        nodejs 'NodeJS_24'  // ต้องตรงกับ Global Tool Configuration ใน Jenkins
        git 'Default'
    }

    stages {
        stage('Build') {
            steps {
               git branch: 'main',
                  url: 'https://github.com/kornphongP/sonar-qube-jenkins.git'
                  sh "npm install"
                  sh "npm install sonar-scanner"
            }
        }

        stage('SonarQube Scan') {
            steps {
                withSonarQubeEnv('sonar-scanner') { // ชื่อ SonarQube server ใน Jenkins
                    sh '''
                        npx sonar-scanner \
                            -Dsonar.projectKey=sonar-qube-jenkins \
                            -Dsonar.sources=. \
                            -Dsonar.host.url=http://localhost:9001 \
                            -Dsonar.login=sqp_13c196468557b0beb568f13ce8d7c501147ebfdc
                    '''
                }
            }
        }
    }
}
