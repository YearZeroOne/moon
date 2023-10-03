/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ggg6c9f625zk7g3")

  collection.name = "Categories"

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "f6pdryn5",
    "name": "category",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ggg6c9f625zk7g3")

  collection.name = "TypeOfProduct"

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "f6pdryn5",
    "name": "type",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
