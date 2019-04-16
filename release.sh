#!/bin/bash
set -xeou pipefail

# get current commit hash
HASH=$(git rev-parse --short HEAD)

# generate
hugo

# push public contents folder to master branch
git branch -D master || true
git checkout --orphan master
git rm -rf .
mv public/* .
rm -rf public resources
echo "diptadas.com" > CNAME
git add -f --ignore-errors --all
git commit -m 'Auto generated from '${HASH}
git push -f origin master
git checkout hugo
git submodule update --init --recursive
