#!/bin/bash
export NVM_DIR="/home/ec2-user/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm

# cd /home/ec2-user/github-actions-demo/scripts
# source deploy_to_prod.sh

cd /home/ec2-user/github-actions-demo
pm2 start src/serverSide/server.js
