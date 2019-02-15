#!groovy

properties(
    [
        [$class: 'BuildDiscarderProperty', strategy:
          [$class: 'LogRotator', artifactDaysToKeepStr: '14', artifactNumToKeepStr: '5', daysToKeepStr: '30', numToKeepStr: '60']],
        pipelineTriggers(
          [
              pollSCM('H/15 * * * *'),
              cron('@daily'),
          ]
        )
    ]
)
node {
    stage('Checkout') {
        //disable to recycle workspace data to save time/bandwidth
        deleteDir()
        checkout scm

        //enable for commit id in build number
        //env.git_commit_id = sh returnStdout: true, script: 'git rev-parse HEAD'
        //env.git_commit_id_short = env.git_commit_id.take(7)
        //currentBuild.displayName = "#${currentBuild.number}-${env.git_commit_id_short}"
    }

    //stage('NPM Install') {
    //    sh 'npm install'
    //}

    //stage('Build') {
    //    milestone()
    //    sh 'ng build'
    //}
  
      stage('Into to folder') {
          milestone()
          cd 'C:\jadd\jenkins-2.60.3\jobs\Prueba_Hackaton\workspace'
      }
  
      stage('Zip') {
          for i in $(/bin/ls -ad *); 
          do
            #Files name
            echo $(basename $i)
            #compressing 
            echo "\n compressing $(basename $i)"
            /bin/tar -cvf $(basename $i).tar.gz $(basename $i)
            #Delete Files
            rm -r $(basename $i)
            rm -r $(basename $i).tar.gz
          done 
      }
     
}
