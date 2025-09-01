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
                withSonarQubeEnv('SonarQubeServer') { // ชื่อ SonarQube server ใน Jenkins
                    sh '''
                        npx sonar-scanner \
                            -Dsonar.projectKey=sonar-qube-jenkins \
                            -Dsonar.sources=. \
                            -Dsonar.host.url=http://host.docker.internal:9001 \
                            -Dsonar.login=sqp_248247b95c75b21dadf711b53dc4c70c2e46ba61
                    '''
                }
            }
        }
        
        stage('Quality Gate') {
            steps {
                timeout(time: 5, unit: 'MINUTES') {
                    waitForQualityGate abortPipeline: true
                }
            }
        }
    }
}
