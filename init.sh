#!/bin/bash

export LC_ALL=C.UTF-8
export LANG=C.UTF-8

npm install && npm run migrate && npm start