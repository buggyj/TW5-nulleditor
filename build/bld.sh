#!/bin/bash

# Set up the build output directory

if [  -z "$TW5_BUILD_OUTPUT" ]; then
    TW5_BUILD_OUTPUT=.
fi

if [  ! -d "$TW5_BUILD_OUTPUT" ]; then
    TW5_BUILD_OUTPUT=.
fi

node ../../../../tiddlywiki.js \
	./browser \
	--verbose \
	--rendertiddler $:/core/save/all $TW5_BUILD_OUTPUT/nulleditor.html text/plain \
	|| exit 1


