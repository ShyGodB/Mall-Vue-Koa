const indexControl = require('../../../control/view/index');
const KoaRouter = require('koa-router');
const router = new KoaRouter();

const multer = require('koa-multer');
const storage = multer.diskStorage({
    destination (req, file, cb) {
        cb(null, '../mall-view/src/assets/img')
    },
    filename (req, file, cb) {
        const name = file.originalname;
        const extension = name.substring(name.length - 4);
        cb(null, 'img-' + Date.now() + extension);
    }
});
const upload = multer({ storage: storage });


router.post('/view/add-good', upload.array('avatar', 5), indexControl.addGood);

router.post("/view/getbossinfo", indexControl.getBossInfo);

router.post("/view/listAllUser", indexControl.listAllUser);

router.post("/view/login", indexControl.login);

router.post("/view/list-all-good-from-good", indexControl.listAllGoodFromGood);

router.post("/view/get-good", indexControl.getGood);

router.post("/view/list-goods-from-car", indexControl.listGoodFromCar);

router.post("/view/List-ValuableGood-All", indexControl.listAllValuableGood);

router.post("/view/List-DeletedGood-All", indexControl.listAllDeletedGood);

router.post("/view/list-good-by-keyword", indexControl.listGoodByKeyword);

router.post("/view/list-address-by-godId", indexControl.listAddressByGodId);


module.exports = router;
