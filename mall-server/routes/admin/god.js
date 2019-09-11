const godControl = require('../../control/admin/god/index');
const KoaRouter = require('koa-router');
const router = new KoaRouter();
const md5 = require('md5');


router.post("/admin/List-ValuableGod-All", godControl.listAllValuableGod);

router.post("/admin/deleteGod", godControl.deleteGod);

router.post("/admin/List-DeletedGod-All", godControl.listAllDeletedGod);

router.post("/admin/restoreGod", godControl.restoreGod);


module.exports = router;
