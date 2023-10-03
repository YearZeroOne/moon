/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "ggg6c9f625zk7g3",
    "created": "2023-10-03 08:45:31.805Z",
    "updated": "2023-10-03 08:45:31.805Z",
    "name": "typeOfProduct",
    "type": "base",
    "system": false,
    "schema": [
      {
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
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("ggg6c9f625zk7g3");

  return dao.deleteCollection(collection);
})
