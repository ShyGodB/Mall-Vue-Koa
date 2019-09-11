const bossControl = require('../../control/admin/boss/index');
const KoaRouter = require('koa-router');
const router = new KoaRouter();


router.post("/admin/List-ValuableBoss-All", bossControl.listAllValuableBoss);

router.post("/admin/deleteBoss", bossControl.deleteBoss);

router.post("/admin/List-DeletedBoss-All", bossControl.listAllDeletedBoss);

router.post("/admin/restoreBoss", bossControl.restoreBoss);


module.exports = router;
