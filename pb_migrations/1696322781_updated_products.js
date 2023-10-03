/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7tctcv1yno9r7vn")

  collection.name = "Products"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7tctcv1yno9r7vn")

  collection.name = "products"

  return dao.saveCollection(collection)
})
