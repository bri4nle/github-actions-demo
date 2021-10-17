#!/bin/bash
source /home/ec2-user/.bash_profile
cd /home/ec2-user/github-actions-demo/
pm2 start server.js
