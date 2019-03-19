/docker-entrypoint-initdb.d/scripts/create-user.sh
/docker-entrypoint-initdb.d/scripts/create-collections.sh
#mongoimport --type csv -d forest_demo -u forest -p secret --file /docker-entrypoint-initdb.d/sample-csv/customers.csv
/bin/bash
