#!/bin/bash
exec 3>&1 4>&2
trap 'exec 2>&4 1>&3' 0 1 2 3
exec 1>/home/ec2-user/out.log 2>&1
# source /home/ec2-user/.bashrc

cd /home/ec2-user/github-actions-demo
npm install
