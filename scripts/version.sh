#!/bin/bash
# Colors
HIGHLIGHT='\033[38;2;0;255;255m'
RED='\033[38;2;255;20;20m'
BLUE='\033[38;2;0;160;255m'
GREEN='\033[38;2;0;255;160m'
WHITE='\033[38;2;255;255;255m'
NC='\033[0m' # No Color
BOLD='\033[1m'

CHANGED=$(git diff-index --name-only HEAD)
if [ -n "$CHANGED" ]; then
	git status
	echo -e "${RED}First commit your files please...${NC}"
	exit
fi

# Welcome
echo -e "------------------------------------------------------------------"
echo -e "                ${BOLD}SpaceFramework version management${NC}"
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
echo -e "${HIGHLIGHT}Enter the new version:${NC}"
read version

# Set version npm (package.json)
packageFiles=("composer.json" "package.json" "bower.json");

# Loop through each setting manager file
for packageFile in "${packageFiles[@]}"
do
	# Variables
	temporaryFile=${packageFile}.tmp
	backupFile=${packageFile}.backup

	echo "---------------------------------"
	echo "Updating $packageFile..."
	# Create temporary file
	node > $temporaryFile <<EOF
	var data = require('./${packageFile}');
	//Read data

	//Manipulate data
	data.version = '$version';

	//Output data
	console.log(JSON.stringify(data, null, 2));
EOF

	# Backup old file
	mv -v $packageFile $backupFile
	# Rename temporary file
	mv -v $temporaryFile $packageFile
	# Remove backup file
	rm -v $backupFile

	# Print update message
	echo -e "Changed version in ${BLUE}$packageFile${NC} to: ${BLUE}$version${NC}"

	# Add file to git stage
	echo -e "git add ${BLUE}./$packageFile${NC}"
	git add ./$packageFile
done
echo "---------------------------------"
echo -e "git tag ${BLUE}$version${NC}"
git tag $version
git push --tags

echo -e "${GREEN}Done"



