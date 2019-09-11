const bossControl = require('../../control/admin/good/index');
const KoaRouter = require('koa-router');
const router = new KoaRouter();
const md5 = require('md5');

router.post("/admin/List-ValuableGood-All", bossControl.listAllValuableGood);

router.post("/admin/deleteGood", bossControl.deleteGood);

router.post("/admin/List-DeletedGood-All", bossControl.listAllDeletedGood);

router.post("/admin/restoreGood", bossControl.restoreGood);

module.exports = router;
