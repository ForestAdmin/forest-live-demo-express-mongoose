colls=( customers companies patients transactions appointments products addresses deliveries )
 
for c in ${colls[@]}
do
  mongoimport --type csv --headerline -d $MONGO_INITDB_DATABASE -u $MONGO_INITDB_ROOT_USERNAME -p $MONGO_INITDB_ROOT_PASSWORD --file sample-csv/$c.csv
done
