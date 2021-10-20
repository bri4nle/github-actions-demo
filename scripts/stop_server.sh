export NVM_DIR="/home/ec2-user/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
echo "starting script"

cd /home/ec2-user/github-actions-demo/src/serverSide
pm2 stop server.js