#!/bin/bash





echo "Enter Your commit message:"
read commitMessage
git commit -m "$commitMessage"


echo "Enter branch name to push to:"
read branch
git push origin $branch
