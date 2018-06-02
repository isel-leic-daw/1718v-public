gcloud compute scp spring.service $1:~
gcloud compute scp build/libs/gcp-0.0.1-SNAPSHOT.jar $1:~
gcloud compute scp scripts/node-local-setup.sh $1:~
gcloud compute ssh $1 --command "sudo sh node-local-setup.sh"
