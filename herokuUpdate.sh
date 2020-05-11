#!/bin/sh
read commit_message
git add .
git commit -m $commit_message
git push heroku master
