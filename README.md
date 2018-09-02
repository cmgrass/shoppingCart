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
    - db.data.insert({"jsonAttribute": "value"}) (where db.data, "data" is collection name)
    - db.data.find()
      >> Expect: { "_id" : ObjectId("..."), "jsonAttribute" : "value" }
