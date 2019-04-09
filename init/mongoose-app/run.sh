#!/bin/bash

npm install
node init/mongoose-app/seed/1_products.js
node init/mongoose-app/seed/2_customers.js
node init/mongoose-app/seed/3_companies.js
node init/mongoose-app/seed/4_transactions.js
npm start
