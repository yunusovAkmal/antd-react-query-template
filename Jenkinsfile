pipeline {
    agent any
    
    stages {
        stage('qabul-tiu-front update') {
            steps {
                sh 'ansible-playbook /var/lib/jenkins/ansible/qabul_tiu-front.yml -l prod_9_46'
            }
        }
    }
}
