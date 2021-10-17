#!/bin/bash
source /root/.bash_profile
cd /home/ec2-user/github-actions-demo/
pm2 start server.js
