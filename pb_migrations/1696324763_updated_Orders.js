/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gx1gsbclqckrva8")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lq1u4tww",
    "name": "quantity",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 1,
      "max": null,
      "noDecimal": true
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gx1gsbclqckrva8")

  // remove
  collection.schema.removeField("lq1u4tww")

  return dao.saveCollection(collection)
})
