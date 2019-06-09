const KoaRouter = require('koa-router');
const router = new KoaRouter();
const multer = require('koa-multer');
const editGod = require('../../lib/god');
const editBoss = require('../../lib/boss');
const editGood = require('../../lib/good');
const editCar = require('../../lib/car');


var storage = multer.diskStorage({
    destination (req, file, cb) {
        cb(null, '../mall-view/src/assets/img')
    },
    filename (req, file, cb) {
        const name = file.originalname;
        const extension = name.substring(name.length - 4);
        cb(null, 'img-' + Date.now() + extension);
    }
})

var upload = multer({ storage: storage })

router.post('/view/add-good', upload.array('avatar', 5), async (ctx) => {
    const files = ctx.req.files; //上传过来的文件
    const data = ctx.query;  // 上传的数据
    
    const img_1 = files[0].path;
    const img_2 = files[1].path;
    const img_3 = files[2].path;
    const img_4 = files[3].path;
    const img_5 = files[4].path;        
    const store_id = data.store_id;
    const store_name = data.store_name;
    const boss_id = data.boss_id;
    const boss_name = data.boss_name;
    const name = data.name;
    const new_price = data.new_price;
    const description = data.description;
    const brand = data.brand;
    const label = data.label;


    const data1 = [store_id, store_name, boss_id, boss_name, name, new_price, description, brand, img_1, img_2, img_3, img_4, img_5, label];
    await editGood.addGood(data1);
    
    ctx.body = {msg: '添加成功'};
})

router.post("/view/getbossinfo", async (ctx) => {
    const boss_id = ctx.request.body.boss_id;
    ctx.body = await editBoss.getBossByBossId(boss_id);
});

router.post("/view/listAllUser", async (ctx) => {
    const listAllGodPromise = editGod.listAllGod();
    const listAllBossPromise = editBoss.listAllBoss();
    const listAllGod = await listAllGodPromise;
    const listAllBoss = await listAllBossPromise;
    ctx.body = {
        god: listAllGod,
        boss: listAllBoss
    }
});

router.post("/view/login", async (ctx) => {
    const data = ctx.request.body;
    const username = data.username;
    const password = data.password;
    const data1 = [username, password];
    const godLoginMobilePromise = editGod.godLoginByMobile(data1);
    const godLoginUsernamePromise = editGod.godLoginByUsername(data1);
    const godLoginEmailPromise = editGod.godLoginByEmail(data1);
    const bossLoginMobilePromise = editBoss.bossLoginByMobile(data1);
    const bossLoginUsernamePromise = editBoss.bossLoginByUsername(data1);
    const bossLoginEmailPromise = editBoss.bossLoginByEmail(data1);
    const row1 = await godLoginMobilePromise;
    const row2 = await godLoginUsernamePromise;
    const row3 = await godLoginEmailPromise;
    const row4 = await bossLoginMobilePromise;
    const row5 = await bossLoginUsernamePromise;
    const row6 = await bossLoginEmailPromise;
    const array = [row1, row2, row3, row4, row5, row6];
    let onOff = false;
    let data2 = null;
    let token = '';
    for(let i = 0; i < array.length; i++) {
        if(array[i].length !== 0 ) {
            onOff = true;
            if(i > 2) {
                token = 'boss';
            } else {
                token = 'god';
            }
            data2 = array[i][0];
        }
    }
    if(onOff === false) {
        ctx.body = { msg: '登录失败'};
    } else {
        ctx.body = {
            msg: '登录成功',
            token: token,
            body: data2
        }
    }
});

router.post("/view/list-all-good-from-good", async (ctx) => {
    ctx.body = await editGood.listAllValuableGood();
});

router.post("/view/get-good", async (ctx) => {
    const id = ctx.request.body.id;
    ctx.body = await editGood.getGoodById(id);
});

router.post("/view/list-goods-from-car", async (ctx) => {
    const god_id = ctx.request.body.god_id;
    const rows = await editCar.listByGod_id(god_id);
    ctx.body = rows;
});

router.post("/view/List-ValuableGood-All", async (ctx) => {
    const boss_id = ctx.request.body.boss_id;
    ctx.body = await editGood.listGoodByBossid(boss_id);
});

router.post("/view/List-DeletedGood-All", async (ctx) => {
    ctx.body = await editGood.listAllDeletedGood();
});

router.post("/view/list-good-by-keyword", async (ctx) => {
    const keyword = ctx.request.body.keyword;
    ctx.body = await editGood.listValuableGoodByKeyword(keyword);
});


module.exports = router;
