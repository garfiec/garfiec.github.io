#!/bin/bash
export JEKYLL_VERSION=3.8
docker run --rm \
	-v="$PWD:/srv/jekyll" \
	-it jekyll/jekyll:$JEKYLL_VERSION \
	jekyll build

# jekyll new . | Creates new Jekyll project at this directory
# jekyll build | Generate offline html files from Jekyll project
# jekyll serve | Serve live copy of Jekyll project