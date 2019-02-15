pipeline {
  agent any
  stages{
    stage ('checkout'){
      steps{
        checkout scm
      }
    }
    stage ('install modules'){
      steps{
        sh '''
          npm install
        '''
      }
    }
    stage ('test'){
      steps{
        milestone()
		    sh 'ng test'
      }
    }
    stage ('code quality'){
      steps{
        sh '$(npm bin)/ng lint'
      }
    }
    stage ('build') {
      steps{
        milestone()
		sh 'ng build'
      }
    }
  }
}
