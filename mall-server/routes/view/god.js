const godControl = require('../../control/view/god/index');
const KoaRouter = require('koa-router');
const router = new KoaRouter();


router.post("/view/update-god-avatar", godControl.updateGodAvatar);

router.post("/view/addGod", godControl.addGod);

router.post("/view/add-good-to-car", godControl.addGoodToCar);

router.post("/view/update-good-info-in-car", godControl.updateGoodInfoInCar);

router.post("/view/delete-good-from-car", godControl.deleteGoodFromCar);

router.post("/view/update-god-info", godControl.updateGodInfo);

router.post("/view/update-god-password", godControl.updateGodPassword);

router.post("/view/add-address", godControl.addAddress);

router.post("/view/upload-image-test", godControl.uploadImageTest);


module.exports = router;
