echo 'Update Normalize.css for SpaceFramework'
#todo add npm update normalize code
FILE=./node_modules/normalize.css/normalize.css
CONTENT=`< $FILE tr '\n' '$'`
sed "s~__NORMALIZE__~${CONTENT}~g" ./scripts/normalize.scss.template | tr '$' '\n'  > test.scss

