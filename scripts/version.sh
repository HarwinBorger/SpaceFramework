    #!/bin/bash
    # Ask for the version
    echo What is the new version?
    read version

    composer config version $version
    echo "Changed 'composer.json' version to: $version"
#    npm version $version
#    echo "Changed 'package.json' version to: $version"


