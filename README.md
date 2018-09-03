# shoppingCart
Learning how to use node, and other tools, to build a functional online shop.
Following academind series.

node app notes:
  * Launch app: $ npm start

  * Install npm package, and save to package.json: $ npm install --save <packageName>
    - Example: $ npm install --save mongoose

mongodb notes:
  * MongoDB configuration file: /etc/mongod.conf
    - network interfaces definition (port, ip bind)
    - where and how to store data
    - where to store logs

  * Launch MongoDB server: /usr/bin$ ./mongod

  * Launch a MongoDB client: /user/bin$ ./mongo

  * Test server (from mongo client):
    - db.[collection].insert({"jsonAttribute": "value"}) (where db.data, "data" is collection name)
    - use [databaseName] // access a specific database
    - db.[collection].find() // within a specific database, query the selected collection
      >> Expect: { "_id" : ObjectId("..."), "miscDocumentOject" : "value" }
    - db.dropDatabase() // clear contents of a database. Useful for testing.
