#!/bin/bash
# exec 3>&1 4>&2
# trap 'exec 2>&4 1>&3' 0 1 2 3
# exec 1>/home/ec2-user/out1.log 2>&1
# source /home/ec2-user/.bashrc
echo "In start server. Activating .bashrc"
export NVM_DIR="/home/ec2-user/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
echo "starting script"

cd /home/ec2-user/github-actions-demo/src/serverSide
pm2 start server.js
