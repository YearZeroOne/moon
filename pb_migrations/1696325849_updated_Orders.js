/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gx1gsbclqckrva8")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vsr3mi8q",
    "name": "field",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "7tctcv1yno9r7vn",
      "cascadeDelete": false,
      "minSelect": 1,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gx1gsbclqckrva8")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vsr3mi8q",
    "name": "field",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "7tctcv1yno9r7vn",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
})
