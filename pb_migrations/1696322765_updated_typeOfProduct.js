/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ggg6c9f625zk7g3")

  collection.name = "TypeOfProduct"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ggg6c9f625zk7g3")

  collection.name = "typeOfProduct"

  return dao.saveCollection(collection)
})
