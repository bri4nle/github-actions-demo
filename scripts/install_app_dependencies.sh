#!/bin/bash
pwd
ls
cd /home/ec2-user
sudo chown -R `whoami` github-actions-demo
cd /home/ec2-user/github-actions-demo
npm i
