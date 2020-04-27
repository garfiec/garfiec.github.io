#!/bin/bash
export JEKYLL_VERSION=3.8
docker run --rm \
	--name jekyll \
	-v="$PWD:/srv/jekyll" \
	-p 4000:4000 \
	-it jekyll/jekyll:$JEKYLL_VERSION \
	jekyll serve -- watch --drafts

# jekyll new . | Creates new Jekyll project at this directory
# jekyll build | Generate offline html files from Jekyll project
# jekyll serve | Serve live copy of Jekyll project