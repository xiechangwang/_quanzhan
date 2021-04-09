const fetchHtml = require('./libs/fetch-html-blue');
const zlib = require('zlib');
const assert = require('assert');
const fs = require('./libs/fs');
const pathlib = require('path');
const db = require('./libs/database');

function fetch(options) {
  return new Promise((resolve, reject) => {
    fetchHtml(options).then(result => {
      let { buffer, headers } = result;
      //判断是否抓取完成数据。。。
      if (headers['content-length'] && headers['content-length'] != buffer.length) {
        reject();
      } else {
        if (headers['content-encoding'] && headers['content-encoding'].split('; ').includes('gzip')) {
          //判断以下数据是不是压缩过的--使用nodejs|zilb模块解压
          zlib.gunzip(buffer, (err, data) => {
            if (err) {
              reject(err);
            } else {
              resolve(data);
            }
          });
        } else {
          resolve(buffer);
        }
      }
    }, err => {
      reject(err);
    });
  });
}

//获取饭店数据列表
async function getRestaurant(page=0) {
  const limit=8;
  const offest=page*limit;
  let url = `https://h5.ele.me/restapi/shopping/v3/restaurants?latitude=31.314295&longitude=121.505976&offset=${offest}&limit=${limit}&extras[]=activities&extras[]=tags&extra_filters=home&rank_id=&terminal=h5`;
  let headers = {
    Referer: 'https://h5.ele.me/msite/',
    'X-Shard': 'loc=121.505976,31.314295',
    cookie: 'perf_ssid=gy0pwn2lqel3pszgeb2u198m3zv2fuju_2021-03-29; _bl_uid=d9kFIm1vuOg788xFInmd41vf2ht0; cna=x6NcFzgeNncCAXJYoQouicGF; xlly_s=1; ubt_ssid=1feyd539hairx6vse6w8ltruk67sn7vi_2021-03-29; track_id=1616999915|0516bb57f90425ec5b895f7a64761885fc24aa9c056806a7c0|6a0f0bd858b07243b833a09b753359fd; USERID=92848710; UTUSER=92848710; SID=LgAAAAAFiMJG-QAEAACEOgbxu4YS0meCgArnsgPXMF0SAKMFI7NtrCHC; ZDS=1.0|1616999915|MIYi9ECkQ9pbQmsLQf0NFRmfGUtc9iNVDPk7ssXHWVR2oe+i/4D/EI77OUG9X3Jm; x5check_ele=bu7QkTIDohDjjHL0HRZ9PA%3D%3D; tzyy=2b07211918f5fee9db687249c85bc959; x5sec=7b227466653b32223a226338336331393439393532306233336235613531343435363035356238373034434f4f4d686f4d47454d6a73694d7534676f4f4c616a43656e7437622f762f2f2f2f3842227d; tfstk=ce0lBQxZO0r5dM-4WUaSNjSviVJAZcWQU5Niu2DGxgYifc0VinjVbn0cyRRDoM1..; l=eBEvqvCqjzcqcYS6BOfwourza77OSIRAguPzaNbMiOCPO0Ce5LoGB6ZXqvTwC3GRhsMMR3yjSqVUBeYBqIcFaiPRpiV3pJHmn; isg=BBISytZDpsz-B9qweaZihobsY9j0Ixa9ZE0qzNxrPkWw77LpxLNmzRgJW01Tn45V',
  }
  let param = {
    url,
    headers
  }
  let buffer = await fetch(param);
  let josn = JSON.parse(buffer.toString());

  //遍历-返回数据库需要的字段
  let datas = josn.items.map((item) => {
    let restaurant = item.restaurant;
    return {
      restaurant_id: restaurant.id,
      name: restaurant.name != null ? restaurant.name : "",
      address: restaurant.address != null ? restaurant.address : "",
      distance: restaurant.distance != null ? restaurant.distance : "",
      float_delivery_fee: restaurant.float_delivery_fee != null ? restaurant.float_delivery_fee : "",
      image_path: restaurant.image_path != null ? restaurant.image_path : "",
      latitude: restaurant.latitude != null ? restaurant.latitude : "",
      longitude: restaurant.longitude != null ? restaurant.longitude : "",
      opening_hours: restaurant.opening_hours != null ? restaurant.opening_hours.join(',') : "",
      phone: restaurant.phone != null ? restaurant.phone : "",
      rating: restaurant.rating != null ? restaurant.rating : "",
      rating_count: restaurant.rating_count != null ? restaurant.rating_count : "",
      recent_order_num: restaurant.recent_order_num != null ? restaurant.recent_order_num : "",
    }
  })

  //这里不要用foreach
  for (let i = 0; i < datas.length; i++) {
    let data = datas[i]
    let img_url = data.image_path[0] + '/' + data.image_path.substring(1, 3) + '/' + data.image_path.substring(3);
    if (img_url.endsWith('jpeg')) {
      img_url += '.jpeg';
    } else if (img_url.endsWith('JPEG')) {
      img_url += '.JPEG';
    } else if (img_url.endsWith('png')) {
      img_url += '.png'
    } else if (img_url.endsWith('PNG')) {
      img_url += '.PNG'
    } else {
      assert(0);  //node--断言；错误
    }
    img_url = 'https://cube.elemecdn.com/' + img_url;

    //读取img-buffer
    let img_buffer = await fetch(img_url);
    //写入
    await fs.writeFile(pathlib.resolve(__dirname, './images', data.image_path), img_buffer);

  }

  for (let i = 0; i < datas.length; i++) {
    let data = datas[i]
    await db.insert('restaurant_table', data);
  }
}


//获取详情数据
async function getMeun(id){
  let url=`https://h5.ele.me/pizza/shopping/restaurants/${id}/batch_shop?user_id=92848710&code=0.648142965783048&extras=%5B%22activities%22%2C%22albums%22%2C%22license%22%2C%22identification%22%2C%22qualification%22%5D&terminal=h5&latitude=31.314295&longitude=121.505976`;
  let headers={
     referer: 'https://h5.ele.me/shop/',
     'x-shard': 'shopid=2356152;loc=120.755501,30.74501',
     cookie: 'perf_ssid=gy0pwn2lqel3pszgeb2u198m3zv2fuju_2021-03-29; _bl_uid=d9kFIm1vuOg788xFInmd41vf2ht0; cna=x6NcFzgeNncCAXJYoQouicGF; xlly_s=1; ubt_ssid=1feyd539hairx6vse6w8ltruk67sn7vi_2021-03-29; track_id=1616999915|0516bb57f90425ec5b895f7a64761885fc24aa9c056806a7c0|6a0f0bd858b07243b833a09b753359fd; USERID=92848710; UTUSER=92848710; SID=LgAAAAAFiMJG-QAEAACEOgbxu4YS0meCgArnsgPXMF0SAKMFI7NtrCHC; ZDS=1.0|1616999915|MIYi9ECkQ9pbQmsLQf0NFRmfGUtc9iNVDPk7ssXHWVR2oe+i/4D/EI77OUG9X3Jm; x5check_ele=bu7QkTIDohDjjHL0HRZ9PA%3D%3D; tzyy=2b07211918f5fee9db687249c85bc959; tfstk=cQ91ByZ-uP4_tDw4DhiU3rosZ3XcZYVPvy7yfQipZYvQeat1ipyPPGpa671OKM1..; l=eBEvqvCqjzcqc303BOfwourza77OSIRAguPzaNbMiOCPOyCe5-ZGB6ZXV_8wC3GRhsCXR3yjSqVUBeYBqIqo3xNdhm8WYHkmn; isg=BKSkECb-mHa-Wuw6G8jsbITqdaKWPcinpgt8xr7FMG8yaUQz5k2YN9rPLcfxsQD_',
    }
  let param = {
    url,
    headers
  }
  let buffer=await fetch(param);
  let datas=JSON.parse(buffer.toString());
  let foods=[];
  datas.menu.forEach(item => {
    item.foods.forEach((f_item)=>{
      foods.push({
          restaurant_id:id, //这个id用于查询
          item_id:f_item.item_id,
          name:f_item.name,
          description:f_item.description,
          tips:f_item.tips,
          image_path:f_item.image_path,
      })
    })
  });
  // console.log(foods);
  // db.insert('meun_table',{});
  for(let i=0;i<foods.length;i++){
    await db.insert('meun_table',foods[i]);
  }
  console.log(foods.length);
}

(async function () {
  // let i=0;
  // let timer=null;
  // timer=setInterval(() => {
  //   getRestaurant(i);
  //   console.log(`${i}`);
  //   if(i==20){
  //     clearInterval(timer);
  //   }
  //   i++;
  // }, 2000);

  getMeun('E4174171733800359151');
})();


/*数据-cookie是必须要的
  首页：
  url：'https://h5.ele.me/restapi/shopping/v3/restaurants?latitude=31.314295&longitude=121.505976&offset=0&limit=8&extras[]=activities&extras[]=tags&extra_filters=home&rank_id=&terminal=h5'
  hedaers:{
     Referer:'https://h5.ele.me/msite/',
    'X-Shard': 'loc=121.505976,31.314295',
    cookie:'perf_ssid=gy0pwn2lqel3pszgeb2u198m3zv2fuju_2021-03-29; _bl_uid=d9kFIm1vuOg788xFInmd41vf2ht0; cna=x6NcFzgeNncCAXJYoQouicGF; xlly_s=1; ubt_ssid=1feyd539hairx6vse6w8ltruk67sn7vi_2021-03-29; track_id=1616999915|0516bb57f90425ec5b895f7a64761885fc24aa9c056806a7c0|6a0f0bd858b07243b833a09b753359fd; USERID=92848710; UTUSER=92848710; SID=LgAAAAAFiMJG-QAEAACEOgbxu4YS0meCgArnsgPXMF0SAKMFI7NtrCHC; ZDS=1.0|1616999915|MIYi9ECkQ9pbQmsLQf0NFRmfGUtc9iNVDPk7ssXHWVR2oe+i/4D/EI77OUG9X3Jm; x5check_ele=bu7QkTIDohDjjHL0HRZ9PA%3D%3D; tzyy=2b07211918f5fee9db687249c85bc959; x5sec=7b227466653b32223a226338336331393439393532306233336235613531343435363035356238373034434f4f4d686f4d47454d6a73694d7534676f4f4c616a43656e7437622f762f2f2f2f3842227d; tfstk=ce0lBQxZO0r5dM-4WUaSNjSviVJAZcWQU5Niu2DGxgYifc0VinjVbn0cyRRDoM1..; l=eBEvqvCqjzcqcYS6BOfwourza77OSIRAguPzaNbMiOCPO0Ce5LoGB6ZXqvTwC3GRhsMMR3yjSqVUBeYBqIcFaiPRpiV3pJHmn; isg=BBISytZDpsz-B9qweaZihobsY9j0Ixa9ZE0qzNxrPkWw77LpxLNmzRgJW01Tn45V',
  }

  详情
  url: 'https://h5.ele.me/pizza/shopping/restaurants/E5365053614213566474/batch_shop?user_id=92848710&code=0.648142965783048&extras=%5B%22activities%22%2C%22albums%22%2C%22license%22%2C%22identification%22%2C%22qualification%22%5D&terminal=h5&latitude=31.314295&longitude=121.505976'
  headers: {
     referer: 'https://h5.ele.me/shop/',
     'x-shard': 'shopid=2356152;loc=120.755501,30.74501',
     cookie: 'perf_ssid=gy0pwn2lqel3pszgeb2u198m3zv2fuju_2021-03-29; _bl_uid=d9kFIm1vuOg788xFInmd41vf2ht0; cna=x6NcFzgeNncCAXJYoQouicGF; xlly_s=1; ubt_ssid=1feyd539hairx6vse6w8ltruk67sn7vi_2021-03-29; track_id=1616999915|0516bb57f90425ec5b895f7a64761885fc24aa9c056806a7c0|6a0f0bd858b07243b833a09b753359fd; USERID=92848710; UTUSER=92848710; SID=LgAAAAAFiMJG-QAEAACEOgbxu4YS0meCgArnsgPXMF0SAKMFI7NtrCHC; ZDS=1.0|1616999915|MIYi9ECkQ9pbQmsLQf0NFRmfGUtc9iNVDPk7ssXHWVR2oe+i/4D/EI77OUG9X3Jm; x5check_ele=bu7QkTIDohDjjHL0HRZ9PA%3D%3D; tzyy=2b07211918f5fee9db687249c85bc959; tfstk=cQ91ByZ-uP4_tDw4DhiU3rosZ3XcZYVPvy7yfQipZYvQeat1ipyPPGpa671OKM1..; l=eBEvqvCqjzcqc303BOfwourza77OSIRAguPzaNbMiOCPOyCe5-ZGB6ZXV_8wC3GRhsCXR3yjSqVUBeYBqIqo3xNdhm8WYHkmn; isg=BKSkECb-mHa-Wuw6G8jsbITqdaKWPcinpgt8xr7FMG8yaUQz5k2YN9rPLcfxsQD_',
  }
*/



/* fetch({
  url: 'https://h5.ele.me/pizza/shopping/restaurants/E5365053614213566474/batch_shop?user_id=92848710&code=0.648142965783048&extras=%5B%22activities%22%2C%22albums%22%2C%22license%22%2C%22identification%22%2C%22qualification%22%5D&terminal=h5&latitude=31.314295&longitude=121.505976',
  headers: {
    referer: 'https://h5.ele.me/shop/',
    'x-shard': 'shopid=2356152;loc=120.755501,30.74501',
    cookie: 'perf_ssid=gy0pwn2lqel3pszgeb2u198m3zv2fuju_2021-03-29; _bl_uid=d9kFIm1vuOg788xFInmd41vf2ht0; cna=x6NcFzgeNncCAXJYoQouicGF; xlly_s=1; ubt_ssid=1feyd539hairx6vse6w8ltruk67sn7vi_2021-03-29; track_id=1616999915|0516bb57f90425ec5b895f7a64761885fc24aa9c056806a7c0|6a0f0bd858b07243b833a09b753359fd; USERID=92848710; UTUSER=92848710; SID=LgAAAAAFiMJG-QAEAACEOgbxu4YS0meCgArnsgPXMF0SAKMFI7NtrCHC; ZDS=1.0|1616999915|MIYi9ECkQ9pbQmsLQf0NFRmfGUtc9iNVDPk7ssXHWVR2oe+i/4D/EI77OUG9X3Jm; x5check_ele=bu7QkTIDohDjjHL0HRZ9PA%3D%3D; tzyy=2b07211918f5fee9db687249c85bc959; tfstk=cQ91ByZ-uP4_tDw4DhiU3rosZ3XcZYVPvy7yfQipZYvQeat1ipyPPGpa671OKM1..; l=eBEvqvCqjzcqc303BOfwourza77OSIRAguPzaNbMiOCPOyCe5-ZGB6ZXV_8wC3GRhsCXR3yjSqVUBeYBqIqo3xNdhm8WYHkmn; isg=BKSkECb-mHa-Wuw6G8jsbITqdaKWPcinpgt8xr7FMG8yaUQz5k2YN9rPLcfxsQD_',
  }
}).then(buffer=>{
  console.log(buffer.toString());
}, err=>{
  console.log('错了');
})*/