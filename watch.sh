#!/bin/bash

while inotifywait -q -r -e close_write,moved_to,create src/ style/; do
  node index.js resume.yml
  sassc style/default.scss style/default.css
done
