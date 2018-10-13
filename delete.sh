#!/bin/bash

for m in $(ps -ef|grep node | awk '{print $2}'); do

kill -9 $m

done
