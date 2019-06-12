#!/bin/bash
# Colors
HIGHLIGHT='\033[38;2;255;0;255m'
NC='\033[0m' # No Color

# Welcome
echo "SpaceFramework version management"
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
	echo "Changed version in '$packageFile' to: $version"
done



