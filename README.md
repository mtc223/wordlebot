# Wordlebot

This wordlebot solves wordles through frequency analysis. It assigns weights to each word based on the letters inside. The following is the weight policy

Green
Sets incorrect placements to weight=0
Adds each correct placement weight 3

Yellow
Sets correct placements to weight=0
Adds incorrect placements weight 1

The remaining words add weight to each letter of the alphabet, the letters with the most weight are combined into optimal words

Command to use
`npm run dev`