const storeControl = require('../../../control/admin/store/index');
const KoaRouter = require('koa-router');
const router = new KoaRouter();


router.post("/admin/List-ValuableStore-All", storeControl.listAllValuableStore);

router.post("/admin/deleteStore", storeControl.deleteStore);

router.post("/admin/List-DeletedStore-All", storeControl.listAllDeletedStore);

router.post("/admin/restoreStore", storeControl.restoreStore);


module.exports = router;
