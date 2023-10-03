/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "ywzq4ni7wmdsvvs",
    "created": "2023-10-03 09:20:08.259Z",
    "updated": "2023-10-03 09:20:08.259Z",
    "name": "Invoices",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "jeiddes4",
        "name": "OrderedItems",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "gx1gsbclqckrva8",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": null,
          "displayFields": null
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
  const collection = dao.findCollectionByNameOrId("ywzq4ni7wmdsvvs");

  return dao.deleteCollection(collection);
})
