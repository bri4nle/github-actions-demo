#!/bin/bash
source /home/ec2-user/.bashrc
cd /home/ec2-user/github-actions-demo
pm2 start src/serverSide/server.js