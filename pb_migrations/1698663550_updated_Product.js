/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("s5j489xi71mosuz")

  collection.name = "Cart"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("s5j489xi71mosuz")

  collection.name = "Product"

  return dao.saveCollection(collection)
})
