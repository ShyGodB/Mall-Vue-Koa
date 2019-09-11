const indexControl = require('../../control/admin/index');
const KoaRouter = require('koa-router');
const router = new KoaRouter();


router.post("/admin/List-ValuableData-All", indexControl.listAllValuableData);


module.exports = router;
