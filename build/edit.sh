#!/bin/bash

node ../../../../tiddlywiki.js \
	./nodejs \
	--verbose \
	--server 8080 $:/core/save/all \
	|| exit 


