/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ggg6c9f625zk7g3")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hq46brgh",
    "name": "taxRate",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 0,
      "max": 100,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ggg6c9f625zk7g3")

  // remove
  collection.schema.removeField("hq46brgh")

  return dao.saveCollection(collection)
})
