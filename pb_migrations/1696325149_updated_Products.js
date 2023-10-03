/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7tctcv1yno9r7vn")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9tcxy58i",
    "name": "category",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "ggg6c9f625zk7g3",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7tctcv1yno9r7vn")

  // remove
  collection.schema.removeField("9tcxy58i")

  return dao.saveCollection(collection)
})
