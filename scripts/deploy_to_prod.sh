#!/bin/bash
# Modify start_server.sh for production
echo "Modifying start_script.sh"
cd /home/ec2-user/github-actions-demo/scripts
echo "gunzip deployment.tar.gz
tar -xf deployment.tar
export NVM_DIR=\"/home/ec2-user/.nvm\"
[ -s \"$NVM_DIR/nvm.sh\" ] && \. \"$NVM_DIR/nvm.sh\"
cd /home/ec2-user/github-actions-demo
pm2 start src/serverSide/server.js" > start_server.sh

cd /home/ec2-user/github-actions-demo
# Zip app and put it to S3
echo "Zipping the app"
cd /home/ec2-user
tar -cvf deployment.tar github-actions-demo
gzip deployment.tar
# Copy app to S3 bucket
aws configure set default.region us-east-1
echo "Copying zipped app to S3"
aws s3 cp deployment.tar.gz "s3://quote-server-bucket/deployment.tar.gz"
# Start CodeDeploy
echo "Deploying"
# aws deploy create-deployment \
#   --application-name QuoteServer \
#   --deployment-group-name QuoteServerGroupProd \
#   --deployment-config-name CodeDeployDefault.OneAtATime \
#   --file-exists-behavior OVERWRITE \
#   --s3-location bucket=quote-server-bucket,key=deployment.tar.gz,bundleType=tgz

# aws code-deploy ... Run this after integration test finish
