#!/bin/bash
# Modify start_server.sh for production
cd /home/ec2-user/github-actions-demo/scripts
echo "gunzip deployment.tar.gz
tar -xf deployment.tar
export NVM_DIR=\"/home/ec2-user/.nvm\"
[ -s \"$NVM_DIR/nvm.sh\" ] && \. \"$NVM_DIR/nvm.sh\"
cd /home/ec2-user/github-actions-demo
pm2 start src/serverSide/server.js" > start_server.sh

cd /home/ec2-user/github-actions-demo
# Zip app and put it to S3
cd /home/ec2-user
tar -cvf deployment.tar github-actions-demo
gzip
# Copy app to S3 bucket
aws s3 cp deployment.tar.gz "s3://quote-server-bucket/deployment.tar.gz"
# Start CodeDeploy
aws deploy create-deployment \
  --application-name QuoteServer \
  --deployment-group-name QuoteServerGroup \
  --deployment-config-name CodeDeployDefault.OneAtATime \
  --file-exists-behavior OVERWRITE
  --s3-location

# aws code-deploy ... Run this after integration test finish
