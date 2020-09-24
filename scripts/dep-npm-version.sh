#!/bin/bash
# Colors
HIGHLIGHT='\033[38;2;0;255;255m'
RED='\033[38;2;255;20;20m'
BLUE='\033[38;2;0;160;255m'
GREEN='\033[38;2;0;255;160m'
WHITE='\033[38;2;255;255;255m'
NC='\033[0m' # No Color
BOLD='\033[1m'

# Welcome
echo -e "------------------------------------------------------------------"
echo -e "                ${BOLD}SpaceFramework NPM version management${NC}"
echo -e "------------------------------------------------------------------ \n"
# Show current version
PACKAGE_VERSION=$(cat package.json \
  | grep version \
  | head -1 \
  | awk -F: '{ print $2 }' \
  | sed 's/[",]//g' \
  | tr -d '[[:space:]]')

echo -e "The current version is:"
echo -e "${BOLD}$PACKAGE_VERSION${NC} \n"

# Ask for the version
echo -e "${HIGHLIGHT}Warning! You are about to deprecate a version in NPM.${NC}"
echo -e "${HIGHLIGHT}Which version you want to deprecate? ${NC}"
read version

npm deprecate spaceframework@$version "$version no longer supported"
echo -e "npm deprecate spaceframework@$version '$version no longer supported'"

echo -e "${GREEN}Done"



