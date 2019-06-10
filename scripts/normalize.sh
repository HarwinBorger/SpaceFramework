# Update script to update Normalize.css to the latest version
FILE=./node_modules/normalize.css/normalize.css
TEMPLATE=./scripts/normalize.scss.template
NEW_FILE=./scss/2.tools/vendor/_normalize.scss

CURRENTVERSION=`npm view normalize.css version`

echo "Start Normalize.css update for the SpaceFramework"
echo "current version: $CURRENTVERSION"

npm update normalize.css

VERSION=`npm view normalize.css version`

echo "new version: $VERSION"

# Replace new line character with temporary $ sign to avoid errors
CONTENT=`< $FILE tr '\n' '$'`
# Replace variable with content of normalize.css and put back the new line characters
sed "s~__NORMALIZE__~${CONTENT}~g" $TEMPLATE | tr '$' '\n'  > $NEW_FILE

echo "Normalize.css updated from $CURRENTVERSION to $VERSION"
