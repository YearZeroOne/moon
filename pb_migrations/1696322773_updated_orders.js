/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gx1gsbclqckrva8")

  collection.name = "Orders"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gx1gsbclqckrva8")

  collection.name = "orders"

  return dao.saveCollection(collection)
})
