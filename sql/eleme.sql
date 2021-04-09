/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 50553
 Source Host           : localhost:3306
 Source Schema         : eleme

 Target Server Type    : MySQL
 Target Server Version : 50553
 File Encoding         : 65001

 Date: 02/04/2021 11:20:52
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for meun_table
-- ----------------------------
DROP TABLE IF EXISTS `meun_table`;
CREATE TABLE `meun_table`  (
  `ID` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `restaurant_id` varchar(11) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `item_id` varchar(18) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `name` varchar(16) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `description` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `tips` varchar(16) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `image_path` varchar(48) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 94 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of meun_table
-- ----------------------------
INSERT INTO `meun_table` VALUES (1, 'E4174171733', '140998072851', '鲜汁肉包', '\n主要原料：面粉,猪肉', '', 'cd312a99b2aa8b8b7fcd8773987dc03ajpeg');
INSERT INTO `meun_table` VALUES (2, 'E4174171733', '140998814227', '香菇菜包', '精选无公害素菜，精制而成\n主要原料：油菜,面粉', '', '37e0191fd6cb4c31971f432f15a158f3jpeg');
INSERT INTO `meun_table` VALUES (3, 'E4174171733', '141011497491', '豆沙包', '\n主要原料：红豆,面粉', '', '20c5db0fb26858f5f9ff3438b37f0e54jpeg');
INSERT INTO `meun_table` VALUES (4, 'E4174171733', '141025619475', '酸豆角肉包', '\n主要原料：豆角,面粉', '', '020a1f8429eb031fd329d4e21ef2234djpeg');
INSERT INTO `meun_table` VALUES (5, 'E4174171733', '141025833491', '黑芝麻包', '\n主要原料：面粉', '', '9defcde14fd783a508080046736d6631jpeg');
INSERT INTO `meun_table` VALUES (6, 'E4174171733', '141026401811', '爆汁流沙包', '\n主要原料：咸蛋,面粉', '', 'bdbbff810f0388575dd846db30c881dcjpeg');
INSERT INTO `meun_table` VALUES (7, 'E4174171733', '141030014483', '梅干菜肉包', '\n主要原料：面粉', '', '94f02aefab54d23a0632fc5aff604d80jpeg');
INSERT INTO `meun_table` VALUES (8, 'E4174171733', '141041330707', '小猪奶黄包', '\n主要原料：面粉,奶粉', '', '9dff437d6ced7be2fb91136df55fbc22jpeg');
INSERT INTO `meun_table` VALUES (9, 'E4174171733', '141042990611', '招牌牛肉饼', '\n主要原料：牛肉,面粉', '', '75ee5cc218de594a910ff2d002425d7djpeg');
INSERT INTO `meun_table` VALUES (10, 'E4174171733', '141043043859', '黑米粥', '\n主要原料：黑米', '', 'bedd7cffd83afe6b0a1efcb99ab485f4jpeg');
INSERT INTO `meun_table` VALUES (11, 'E4174171733', '300000090671663635', '饿了么精选特惠套餐', '鲜汁肉包*2+经 典豆浆+茶叶蛋\n主要原料：豆浆,猪肉,鸡蛋', '', '29a8e3af4c83c4e19f97646718fe80dfjpeg');
INSERT INTO `meun_table` VALUES (12, 'E4174171733', '300000090601715219', '饿了么甜蜜情侣套餐', '梅干菜肉包*2+爆汁流沙包*2+经 典豆浆*2\n主要原料：豆浆,猪肉', '', '70d1d24b32c31e1f13d238cb84591dd1jpeg');
INSERT INTO `meun_table` VALUES (13, 'E4174171733', '300000090597818899', '饿了么精选素食营养双人套餐', '香菇菜包*2+小猪奶黄包+糯米烧麦+燕麦小米粥*2\n主要原料：糯米,小米,香菇', '', '53f9f50b6ad9004523778df757b50705jpeg');
INSERT INTO `meun_table` VALUES (14, 'E4174171733', '141025619475', '酸豆角肉包', '\n主要原料：豆角,面粉', '', '020a1f8429eb031fd329d4e21ef2234djpeg');
INSERT INTO `meun_table` VALUES (15, 'E4174171733', '300000040454230547', '毛豆酸菜包', '新品上市啦……\n主要原料：面粉,毛豆,辣椒,酸菜,猪肉末', '', '21c2e071cea5096f7d56987d568280d5jpeg');
INSERT INTO `meun_table` VALUES (16, 'E4174171733', '300000029517251091', '炫彩燕麦包', '香脆燕麦，面皮松软如蛋糕；层次分明，香浓馥郁\n主要原料：面粉,燕麦', '', 'd2b79332dc606a8b59aa83e84f79d88cjpeg');
INSERT INTO `meun_table` VALUES (17, 'E4174171733', '300000025267316243', '秘制叉烧包', '秘制叉烧包，面皮松软，叉烧味浓厚，酱香味十足，淡淡回甜\n主要原料：面粉,叉烧肉', '', 'eca9f650a533c771a1d4fabfefdb262ejpeg');
INSERT INTO `meun_table` VALUES (18, 'E4174171733', '300000088267534867', '海带菌菇包', '鲜滑爽口,鲜，营养满分', '', 'f712553a8a031b1dfe4ea323cd414e9cjpeg');
INSERT INTO `meun_table` VALUES (19, 'E4174171733', '140998072851', '鲜汁肉包', '\n主要原料：面粉,猪肉', '', 'cd312a99b2aa8b8b7fcd8773987dc03ajpeg');
INSERT INTO `meun_table` VALUES (20, 'E4174171733', '300000055799832083', '黑椒牛肉包', '精选优质牛排肉，搭配新鲜菌菇，配以黑椒酱汁，肉嫩汁醇\n主要原料：牛肉,黑胡椒,菌菇', '', 'bdea1962dfe66e4472dd832a5e6cb3b9jpeg');
INSERT INTO `meun_table` VALUES (21, 'E4174171733', '140998814227', '香菇菜包', '精选无公害素菜，精制而成\n主要原料：油菜,面粉', '', '37e0191fd6cb4c31971f432f15a158f3jpeg');
INSERT INTO `meun_table` VALUES (22, 'E4174171733', '141011497491', '豆沙包', '\n主要原料：红豆,面粉', '', '20c5db0fb26858f5f9ff3438b37f0e54jpeg');
INSERT INTO `meun_table` VALUES (23, 'E4174171733', '141030014483', '梅干菜肉包', '\n主要原料：面粉', '', '94f02aefab54d23a0632fc5aff604d80jpeg');
INSERT INTO `meun_table` VALUES (24, 'E4174171733', '141015348755', '香辣粉丝包', '\n主要原料：面粉', '', '2fce53b770afcdb57063c3b19ffd4ab5jpeg');
INSERT INTO `meun_table` VALUES (25, 'E4174171733', '141041330707', '小猪奶黄包', '\n主要原料：面粉,奶粉', '', '9dff437d6ced7be2fb91136df55fbc22jpeg');
INSERT INTO `meun_table` VALUES (26, 'E4174171733', '200000291671971347', '萝卜丝肉包', '精选萝卜丝、优质猪肉，更配以新鲜辣椒，精心打造上等萝卜丝肉包，集清鲜与微辣于一身\n主要原料：白萝卜,猪肉', '', 'aa61241b01973bcb6303f78d2e2c3384jpeg');
INSERT INTO `meun_table` VALUES (27, 'E4174171733', '197028053523', '荠菜肉包', '精选无公害蔬菜，上等猪肉精制而成！\n主要原料：荠菜,面粉', '', '462c6d25e0a0091c2b6f68fc5755ec38jpeg');
INSERT INTO `meun_table` VALUES (28, 'E4174171733', '141026401811', '爆汁流沙包', '\n主要原料：咸蛋,面粉', '', 'bdbbff810f0388575dd846db30c881dcjpeg');
INSERT INTO `meun_table` VALUES (29, 'E4174171733', '200000230574010899', '麻辣小龙虾肉包', '精选优质鲜肉，配以超大颗虾仁，口感鲜嫩弹牙，汤汁丰富！\n主要原料：面粉,辣椒,猪肉,虾仁', '', '2f80cfbfcc71e73a9e6b595ecec2e3e4jpeg');
INSERT INTO `meun_table` VALUES (30, 'E4174171733', '141025619475', '酸豆角肉包', '\n主要原料：豆角,面粉', '', '020a1f8429eb031fd329d4e21ef2234djpeg');
INSERT INTO `meun_table` VALUES (31, 'E4174171733', '200000379618044435', '奥尔良鸡肉包', '精选优质鸡肉，融合奥尔良风味，味道鲜美，美味可口\n主要原料：面粉,辣椒,鸡肉', '', 'da80e93df547365c33e5bd22aaa4c313jpeg');
INSERT INTO `meun_table` VALUES (32, 'E4174171733', '141025833491', '黑芝麻包', '\n主要原料：面粉', '', '9defcde14fd783a508080046736d6631jpeg');
INSERT INTO `meun_table` VALUES (33, 'E4174171733', '200000297583595027', '酸辣土豆丝包', '酸辣可口的土豆丝，加上菌菇的特殊滋味，每一口都能唤醒沉睡的味蕾\n主要原料：土豆,辣椒,面粉,其他菌菇类', '', '61a1b92dde5642bfccabe39157aaa669jpeg');
INSERT INTO `meun_table` VALUES (34, 'E4174171733', '200000156325846547', '鲜汁肉包30个', '\n主要原料：五花肉,面粉', '', 'cd312a99b2aa8b8b7fcd8773987dc03ajpeg');
INSERT INTO `meun_table` VALUES (35, 'E4174171733', '300000085476986387', '黑胡椒道地肠', '精选上等猪肉，口感脆韧有嚼劲，色泽金黄，味道香浓\n主要原料：猪肉', '', 'f2d91a05194a93968daee7d92fe13d0ajpeg');
INSERT INTO `meun_table` VALUES (36, 'E4174171733', '300000085491729939', '火山石烤肠', '精选上等猪肉，口感脆韧有嚼劲，色泽金黄，味道香浓\n主要原料：猪肉,香肠', '', '855e2c5621e31ff3160bd9765280175cjpeg');
INSERT INTO `meun_table` VALUES (37, 'E4174171733', '300000085486650899', '台式香肠', '\n主要原料：香肠', '', '308180d9bcafa5fb9b2c879f6ced608fjpeg');
INSERT INTO `meun_table` VALUES (38, 'E4174171733', '300000068552458771', '蛋黄烧卖', '新品上市\n主要原料：面粉,糯米,肉松,咸蛋黄', '', '194826aa380f997b4a4812678d75cdbcjpeg');
INSERT INTO `meun_table` VALUES (39, 'E4174171733', '300000041081600531', '鲜肉大烧卖', '\n主要原料：面粉,糯米,香菇,猪肉末', '', 'bdc2833c7a4fe5796bdb0aa97f4a9516jpeg');
INSERT INTO `meun_table` VALUES (40, 'E4174171733', '300000034037416467', '港式马拉糕', '经典传统糕点，精选优质食材，尽享海绵般柔软口感\n主要原料：面粉,红糖', '', '537b9502ba9fb9e876b99b7f3b98774ajpeg');
INSERT INTO `meun_table` VALUES (41, 'E4174171733', '141046027795', '黑米糕', '\n主要原料：黑米', '', '08d5eb9b2fab415b32339b9d7c4d792bjpeg');
INSERT INTO `meun_table` VALUES (42, 'E4174171733', '215255449107', '玉米', '东北黑土地糯玉米，更甜，更糯\n主要原料：玉米', '', 'b6c6d85a502da9359299da1555942ec8jpeg');
INSERT INTO `meun_table` VALUES (43, 'E4174171733', '200000073019334163', '五香茶叶蛋', '\n主要原料：鸡蛋', '', 'aa31144bc3a8bd19317f69b896006ec0jpeg');
INSERT INTO `meun_table` VALUES (44, 'E4174171733', '200000073833929235', '白煮蛋', '\n主要原料：鸡蛋', '', '37abbbd5c2cccce7ff8641ca8fecf9e8jpeg');
INSERT INTO `meun_table` VALUES (45, 'E4174171733', '200000201618027027', '火腿肉松饭团', '优质火腿，美味肉松！\n主要原料：糯米,火腿肠,肉松', '', '24de228f69084285b120f3a3e4f87a3bjpeg');
INSERT INTO `meun_table` VALUES (46, 'E4174171733', '200000401702419987', '韭菜猪肉馅饼', '外皮酥松，馅料韭香浓郁，入口鲜嫩\n主要原料：面粉,韭菜,姜,猪肉', '', 'dcce44598fea21cc0c7f3189a93253f9jpeg');
INSERT INTO `meun_table` VALUES (47, 'E4174171733', '300000021878566419', '新品-香辣粉丝饼', '香辣味美\n主要原料：粉丝,韭菜,猪肉末,虾皮', '', '0e36ff3b220b4ee7a2e7fa3cb5fbd84fjpeg');
INSERT INTO `meun_table` VALUES (48, 'E4174171733', '300000040513372691', '毛豆酸菜饼', '新品上市啦……\n主要原料：面粉,毛豆,辣椒,酸菜,猪肉末', '', '5fd8d1a5cbe080e1a12e44baf3f3f6b4jpeg');
INSERT INTO `meun_table` VALUES (49, 'E4174171733', '200000348807201299', '奥尔良鸡肉饼', '\n主要原料：面粉,辣椒,蘑菇,鸡肉', '', '7a8b3ccbc0770765315139fcf8b1fb94jpeg');
INSERT INTO `meun_table` VALUES (50, 'E4174171733', '200000298605020691', '萝卜丝肉饼', '精选萝卜丝，优质猪肉，更配以新鲜辣椒，精心打造上等萝卜丝肉饼，集清鲜与微辣于一身！\n主要原料：白萝卜,辣椒,面粉', '', 'da1a7a2cda63d7085743dc3b9f6c35a5jpeg');
INSERT INTO `meun_table` VALUES (51, 'E4174171733', '141043426835', '猪肉大葱饼', '哈尔滨特色风味\n主要原料：五花肉,大葱,面粉', '', 'adbe9d17b36e3ca04248e5f85628fdc1jpeg');
INSERT INTO `meun_table` VALUES (52, 'E4174171733', '141042990611', '招牌牛肉饼', '\n主要原料：牛肉,面粉', '', '75ee5cc218de594a910ff2d002425d7djpeg');
INSERT INTO `meun_table` VALUES (53, 'E4174171733', '146791142931', '梅干菜肉馅饼', '精选品牌肉，特制梅干菜混合而成，美味佳肴！\n主要原料：面粉', '', 'adbe9d17b36e3ca04248e5f85628fdc1jpeg');
INSERT INTO `meun_table` VALUES (54, 'E4174171733', '200000327237441043', '玉米馒头', '\n主要原料：玉米面', '', '901f04c9f0c592812e387851ac6b1f85jpeg');
INSERT INTO `meun_table` VALUES (55, 'E4174171733', '141044839955', '手工刀切馒头', '纯天然，无公害\n主要原料：面粉', '', '0263e90c20663df988a96c15aeb01133jpeg');
INSERT INTO `meun_table` VALUES (56, 'E4174171733', '141047763475', '纯手工葱油花卷', '\n主要原料：面粉', '', '4db41d86b3fe72c64a4cd70ff70dd5eejpeg');
INSERT INTO `meun_table` VALUES (57, 'E4174171733', '141046827539', '手撕红糖馒头', '好吃还不贵\n主要原料：面粉', '', 'fafd866a0fa5572606cd0817f52ae63bjpeg');
INSERT INTO `meun_table` VALUES (58, 'E4174171733', '141046860307', '坚果馒头', '五谷杂粮，\n主要原料：荞麦面,面粉', '', '31087f83e6e506e801297cf469d873c3jpeg');
INSERT INTO `meun_table` VALUES (59, 'E4174171733', '141043043859', '黑米粥', '\n主要原料：黑米', '', 'bedd7cffd83afe6b0a1efcb99ab485f4jpeg');
INSERT INTO `meun_table` VALUES (60, 'E4174171733', '141043098131', '南瓜粥', '更香，更糯，更营养\n主要原料：南瓜,大米', '', '29e8bab052c8a9f764116dbf05c3c220jpeg');
INSERT INTO `meun_table` VALUES (61, 'E4174171733', '141043154451', '燕麦小米粥', '更香，更糯，更营养\n主要原料：燕麦,黄米', '', 'df81ad939c0d8db5f96f19629635bd99jpeg');
INSERT INTO `meun_table` VALUES (62, 'E4174171733', '147313364499', '蛋黄鲜肉粽', '精选优质咸蛋黄和猪肉入粽，肉嫩味香，咸甜适中。\n主要原料：咸蛋,五花肉,糯米', '', '4ef2853306623d035a44cd716681cf93jpeg');
INSERT INTO `meun_table` VALUES (63, 'E4174171733', '147314341395', '鲜肉粽', '酥嫩鲜美、肥而不腻，鲜香可口\n主要原料：五花肉,糯米', '', '6771cdb8af59d4cd5e84a11bec02d736jpeg');
INSERT INTO `meun_table` VALUES (64, 'E4174171733', '147317362195', '蜜枣粽', '精选优质蜜枣，融入酥软糯米精制而成，入口香甜，一吃难忘。\n主要原料：糯米', '', '94ad0fad54eb87865f167a0d05ccd095jpeg');
INSERT INTO `meun_table` VALUES (65, 'E4174171733', '300000008912437779', '光明-草莓味酸牛奶饮品', '活性乳酸菌发酵\n主要原料：酸奶,水', '', 'bc20c9fa9d06a5394087db4df1b6ee19jpeg');
INSERT INTO `meun_table` VALUES (66, 'E4174171733', '300000083463503379', '李子园 朱古力风味乳饮料', '滴滴纯净，本真营养。丝滑浓香，甜而不腻\n主要原料：巧克力', '', 'e8ba4cb595676491665044fe2fc310eejpeg');
INSERT INTO `meun_table` VALUES (67, 'E4174171733', '200000358709184019', '现磨红枣豆浆(含糖)', '优质红枣搭配营养大豆，顺滑香醇有营养\n主要原料：水,白砂糖,红枣,大豆', '', '4994435e81763c1ab3fa7b74db4ac900jpeg');
INSERT INTO `meun_table` VALUES (68, 'E4174171733', '300000083463489043', '李子园甜牛奶', '滴滴纯净，本真营养。丝滑浓香，甜而不腻\n主要原料：牛奶', '', '3b9ef98261cc0326fa33d730b5a46c84jpeg');
INSERT INTO `meun_table` VALUES (69, 'E4174171733', '200000355723009555', '农夫山泉矿泉水', '\n主要原料：水', '', 'd10a9b9cdf06a16cf6bc51dc80453da5jpeg');
INSERT INTO `meun_table` VALUES (70, 'E4174171733', '200000298522755603', '光明-原味酸牛奶饮品', '活性乳酸菌发酵，190ml\n主要原料：酸奶', '', '309642f42eec034faa68f888c63d35afjpeg');
INSERT INTO `meun_table` VALUES (71, 'E4174171733', '200000298527023635', '光明-纯牛奶', '开启年轻新动力，200ml灭菌乳\n主要原料：牛奶,其他', '', 'f0727b776cfbdbabdde0126f3451f852jpeg');
INSERT INTO `meun_table` VALUES (72, 'E4174171733', '141047092755', '现磨传统豆浆(有糖)', '源自东北大豆原浆，浓稠醇香，加工原料大豆为非转基因大豆\n主要原料：黄豆', '', '947ace6caf5bedd986a2986c03dfc67cjpeg');
INSERT INTO `meun_table` VALUES (73, 'E4174171733', '141051627027', '现磨米乳豆浆', '源自东北大豆原浆，浓稠醇香，加工原料大豆为非转基因大豆\n主要原料：黄豆', '', '82cdadead98a65bd187b9b3751614ecejpeg');
INSERT INTO `meun_table` VALUES (74, 'E4174171733', '141052533267', '巴比甜豆浆', '加工原料大豆为非转基因大豆\n主要原料：黄豆', '', '2a2606c5cfc2a8cbff3a4aafdc6ae895jpeg');
INSERT INTO `meun_table` VALUES (75, 'E4174171733', '141051734547', '巴比原味豆浆', '加工原料大豆为非转基因大豆\n主要原料：黄豆', '', 'ae534300e63734ee743f6ded07bbdd6ejpeg');
INSERT INTO `meun_table` VALUES (76, 'E4174171733', '225492483603', '核桃花生奶', '\n主要原料：豆奶', '', '0f1ce3dafd94817dffa5fda03ad1b68djpeg');
INSERT INTO `meun_table` VALUES (77, 'E4174171733', '200000036360030739', '光明 风味酸牛奶', '\n主要原料：酸奶', '', '28d68e5e19073acc2021076681d448b3jpeg');
INSERT INTO `meun_table` VALUES (78, 'E4174171733', '200000036364693011', '光明 红枣味酸牛奶', '\n主要原料：酸奶,红枣', '', '46b4c70eae6cd8dd434eabe23449e57cjpeg');
INSERT INTO `meun_table` VALUES (79, 'E4174171733', '200000327237581331', '玉米馒头(冷藏)', '\n主要原料：玉米面', '', '3f1cc93f950749751694df6f2a2ebfdajpeg');
INSERT INTO `meun_table` VALUES (80, 'E4174171733', '200000185352369683', '红糖馒头（冷藏）', '\n主要原料：面粉', '', 'a77561246e72a6518e6917807390a8d4jpeg');
INSERT INTO `meun_table` VALUES (81, 'E4174171733', '200000185352389139', '坚果馒头（冷藏）', '五谷杂粮，多吃有益身体健康\n主要原料：面粉', '', '78c745374fd8371f9fb5e2837b1bf006jpeg');
INSERT INTO `meun_table` VALUES (82, 'E4174171733', '200000185356434963', '刀切馒头（冷藏）', '纯手工制作，当天现制现售\n主要原料：面粉', '', '60512fa73c9d17bc6cb97f7d38d9b3b2jpeg');
INSERT INTO `meun_table` VALUES (83, 'E4174171733', '200000185356958227', '葱油花卷（冷藏）', '当天现制现售，好吃又健康\n主要原料：面粉', '', '98c41f89becdee37e2c34b5406c8b03djpeg');
INSERT INTO `meun_table` VALUES (84, 'E4174171733', '200000185369612819', '糯米烧麦（冷冻）', '\n主要原料：糯米', '', 'e0a1813821eb5183cb3d028129589631jpeg');
INSERT INTO `meun_table` VALUES (85, 'E4174171733', '200000185365325331', '鲜肉粽（冷藏）', '五芳斋140g的大肉粽\n主要原料：糯米', '', 'ba213180bd1177a4356b99fdc9bb3249jpeg');
INSERT INTO `meun_table` VALUES (86, 'E4174171733', '200000185365395987', '蛋黄肉粽（冷藏）', '五芳斋140g的粽子\n主要原料：糯米', '', '92d5448fe0f57677823466fc7816b850jpeg');
INSERT INTO `meun_table` VALUES (87, 'E4174171733', '200000185358321171', '蜜枣粽（冷藏）', '五芳斋140g的大粽子\n主要原料：糯米', '', '3d9546442256f34e281b99b3266a5bb6jpeg');
INSERT INTO `meun_table` VALUES (88, 'E4174171733', '200000184910926355', '浪漫套餐', '肉包2个，菜包2个，茶叶蛋2个，甜豆浆两包\n主要原料：面粉', '', '50366afefc9549066d98339924e6590fjpeg');
INSERT INTO `meun_table` VALUES (89, 'E4174171733', '200000184924605971', '单身主义者', '牛肉饼1个，肉包1个，鸡蛋1个，现磨传统豆浆1份\n主要原料：面粉', '', 'f0ff44f9836f2ab19c6861da19128ae4jpeg');
INSERT INTO `meun_table` VALUES (90, 'E4174171733', '300000090597818899', '饿了么精选素食营养双人套餐', '香菇菜包*2+小猪奶黄包+糯米烧麦+燕麦小米粥*2\n主要原料：糯米,小米,香菇', '', '53f9f50b6ad9004523778df757b50705jpeg');
INSERT INTO `meun_table` VALUES (91, 'E4174171733', '300000090610943507', '饿了么精选单人营养套餐', '鲜汁肉包*2+经 典豆浆+茶叶蛋\n主要原料：豆浆,猪肉,鸡蛋', '', '29a8e3af4c83c4e19f97646718fe80dfjpeg');
INSERT INTO `meun_table` VALUES (92, 'E4174171733', '300000090601715219', '饿了么甜蜜情侣套餐', '梅干菜肉包*2+爆汁流沙包*2+经 典豆浆*2\n主要原料：豆浆,猪肉', '', '70d1d24b32c31e1f13d238cb84591dd1jpeg');
INSERT INTO `meun_table` VALUES (93, 'E4174171733', '300000090671663635', '饿了么精选特惠套餐', '鲜汁肉包*2+经 典豆浆+茶叶蛋\n主要原料：豆浆,猪肉,鸡蛋', '', '29a8e3af4c83c4e19f97646718fe80dfjpeg');

-- ----------------------------
-- Table structure for restaurant_table
-- ----------------------------
DROP TABLE IF EXISTS `restaurant_table`;
CREATE TABLE `restaurant_table`  (
  `ID` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `restaurant_id` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `name` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `address` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `distance` mediumint(12) NULL DEFAULT NULL,
  `float_delivery_fee` tinyint(12) NULL DEFAULT NULL,
  `image_path` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `latitude` float NULL DEFAULT NULL,
  `longitude` float NULL DEFAULT NULL,
  `opening_hours` varchar(16) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `phone` varchar(11) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `rating` float NULL DEFAULT NULL,
  `rating_count` mediumint(9) NULL DEFAULT NULL,
  `recent_order_num` mediumint(9) NULL DEFAULT NULL,
  PRIMARY KEY (`ID`) USING BTREE,
  UNIQUE INDEX `restaurant_id is unique`(`restaurant_id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 173 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of restaurant_table
-- ----------------------------
INSERT INTO `restaurant_table` VALUES (90, 'E9950385438117330169', '咖啡喝伐HefaCoffee(太平洋森活天地店)', '', 1797, 2, 'a00e9d67abed35c78edd9cc81a55ab68JPEG', 31.3048, 121.514, '8:00/20:30', '', 4.9, 539, 999);
INSERT INTO `restaurant_table` VALUES (89, 'E13182151307643914597', '7分甜(上海杨浦国华广场店)', '', 736, 0, 'E2EF3E047C61411FA0AD17E61FE24E66jpeg', 31.3124, 121.511, '10:00/21:00', '', 4.8, 1459, 1049);
INSERT INTO `restaurant_table` VALUES (88, 'E13356948154568110383', '安馨轻食低碳减脂餐厅(杨浦店)', '', 521, 1, 'C1C0143BCE35480B98DBAEDBE231BC31png', 31.3176, 121.505, '9:30/20:00', '', 4.9, 47, 199);
INSERT INTO `restaurant_table` VALUES (87, 'E16413128699486949442', '小自满烧肉饭(大学路店)', '', 1701, 3, '7EFF034669EE43D8AB05B5F53F47E1D7png', 31.3048, 121.512, '9:30/20:40', '', 4.7, 120, 206);
INSERT INTO `restaurant_table` VALUES (86, 'E442160106164109254', '华莱士·全鸡汉堡(国权店)', '', 1506, 0, '6b510bf4d2dae1f2883c12cb18f9430cpng', 31.3094, 121.496, '0:00/2:00,9:30/2', '', 4.7, 10908, 3263);
INSERT INTO `restaurant_table` VALUES (85, 'E12359557476087271360', '饭老师(国通路店)', '', 926, 4, '552e5d7c0a8fe4daa5488e178d1130deJPEG', 31.3089, 121.509, '10:50/19:50', '', 4.6, 165, 368);
INSERT INTO `restaurant_table` VALUES (83, 'E4415619354886719804', '大有上九·超级牛腩煲(新江湾城店)', '', 500, 0, '21A64039CA33432DAA9251A9ADB5EAEFpng', 31.3175, 121.506, '9:50/2:00', '', 4.8, 2064, 3267);
INSERT INTO `restaurant_table` VALUES (84, 'E16257253190019986110', '麦当劳麦乐送（上海保辉国际店）', '', 261, 9, 'D2AC9A9DB9D94069B415188877CB234Fpng', 31.316, 121.506, '7:00/10:15,10:30', '', 4.8, 5754, 2915);
INSERT INTO `restaurant_table` VALUES (82, 'E9868177152407557121', '功夫煲仔(五角场店)', '', 1464, 0, 'bdf3346190cc8e13d5c5dab71370ddcapng', 31.3097, 121.496, '9:45/22:00', '', 4.6, 5188, 2850);
INSERT INTO `restaurant_table` VALUES (81, 'E3479763318777038770', '沙拉疯Saladfun轻食简餐(五角场店)', '', 850, 0, 'E37DE7CB702246909508ABBEE00DDFB1png', 31.3121, 121.512, '8:30/20:10', '', 4.7, 1346, 650);
INSERT INTO `restaurant_table` VALUES (80, 'E7488874357853826932', '弄丼创意融合定食', '', 476, 2, 'EAE83396F8F6491C87E064C93AFB1FD0png', 31.3173, 121.505, '10:30/20:00', '', 4.9, 86, 221);
INSERT INTO `restaurant_table` VALUES (79, 'E15583548731355611573', '辛鱼季·水煮鱼·酸菜鱼(吉刻联盟美食广场店)', '', 996, 2, 'cd41953d1ed9e1e6f3a7083efc4b0c47png', 31.3083, 121.509, '10:00/20:00', '', 4.8, 5249, 1098);
INSERT INTO `restaurant_table` VALUES (78, 'E7246637579169503096', '山东饺子王(国和路店)', '', 2739, 0, '2abf352814adb1b9a6b30fd49c29ab9bJPEG', 31.318, 121.528, '7:30/2:00', '', 4.8, 1421, 1129);
INSERT INTO `restaurant_table` VALUES (77, 'E3684953626430838810', '1点点(国华广场店)', '', 814, 2, 'D8F94F1346514582BB04508FDFA0B9BAjpeg', 31.3116, 121.511, '10:00/21:50', '', 4.9, 967, 1100);
INSERT INTO `restaurant_table` VALUES (76, 'E14381395384871552884', '50岚（太平洋森活天地店）', '', 1830, 0, 'ddcb89ced20a891adfc220b6d61bada2png', 31.3047, 121.514, '9:30/21:30', '', 4.9, 9527, 1679);
INSERT INTO `restaurant_table` VALUES (75, 'E16900849012060041945', '食咩嘢·港式茶点(五角场创智店)', '', 812, 0, '8761200644D44F76A6D8896FEB758639png', 31.3095, 121.508, '8:45/20:00', '', 4.8, 388, 1849);
INSERT INTO `restaurant_table` VALUES (74, 'E17956103892136928919', 'M Stand咖啡(五角场店)', '', 1656, 0, '6633165ce0a75b0d89555bbb538cd1a8JPEG', 31.3055, 121.513, '7:45/20:35', '', 4.9, 2701, 1361);
INSERT INTO `restaurant_table` VALUES (73, 'E6151912772518781184', 'J·tea魔杰的茶(五角场店)', '', 2217, 3, 'C30956E3A25F4540B198D5337ED455DBjpeg', 31.3017, 121.514, '10:00/22:00', '', 4.7, 335, 1032);
INSERT INTO `restaurant_table` VALUES (72, 'E11734684719771731502', 'Peet\'s Coffee皮爷咖啡(大学路店)', '', 1678, 2, 'F5340CF2C5E74F9999CA189C22338DAAjpeg', 31.3046, 121.512, '8:30/21:00', '', 4.8, 2117, 2651);
INSERT INTO `restaurant_table` VALUES (71, 'E3006581651757006383', '胡子大厨超级小炒肉（国正中心店）', '', 848, 0, '7880C5C7357D4F95ABEA34321EFF8F6Epng', 31.3088, 121.506, '10:00/21:00', '', 4.5, 3153, 2834);
INSERT INTO `restaurant_table` VALUES (70, 'E9543836846466356405', 'CornerBakery(大学路店)', '', 1426, 5, 'b09307dc736e340c171c966223048a1bJPEG', 31.3061, 121.511, '7:45/21:00', '', 4.9, 527, 829);
INSERT INTO `restaurant_table` VALUES (69, 'E3393506858234352792', 'CORE COFFEE', '', 896, 0, '4d5fe4a14f20ed5161e79b5177eae807png', 31.32, 121.506, '8:30/17:10', '', 4.9, 189, 681);
INSERT INTO `restaurant_table` VALUES (68, 'E7045768036528395188', '冒菜遇见香锅(五角场店)', '', 938, 0, '880B419F52B04E238CEB842E10314227png', 31.3086, 121.508, '9:00/23:55', '', 4.3, 66, 833);
INSERT INTO `restaurant_table` VALUES (67, 'E9159640520940975946', '麻尚香(五角场店)', '', 926, 3, '8622d23ba223cb1bdc2601cc4d7998e2JPEG', 31.3089, 121.509, '10:00/21:30', '', 4.7, 1138, 966);
INSERT INTO `restaurant_table` VALUES (66, 'E10565739613114509328', '烘蛋森林(五角场店)', '', 1731, 1, '2291C0EBC0F8488B9399B7330EFD917Bpng', 31.3091, 121.518, '7:00/19:00', '', 4.8, 365, 962);
INSERT INTO `restaurant_table` VALUES (65, 'E3529207386948398883', 'BOWLshakalaka鲨卡轻食(国安路店）', '', 116, 0, '1a166d8d92b6b3588f1a811117de2aa5JPEG', 31.3146, 121.505, '9:45/20:00', '', 4.8, 2032, 2625);
INSERT INTO `restaurant_table` VALUES (64, 'E13753384402814630270', '上南香酥鸡柳(五角场店)', '', 2456, 1, 'b4ccec8003e9199fb6974249c17cdfd2JPEG', 31.3013, 121.517, '10:50/23:15', '', 4.6, 215, 674);
INSERT INTO `restaurant_table` VALUES (63, 'E12453064450967942145', '长沙臭豆腐(五角场店)', '', 2095, 1, 'eb9f2d5ee647b78380e02255e2531594jpeg', 31.3034, 121.515, '12:00/0:30', '', 4.6, 647, 1559);
INSERT INTO `restaurant_table` VALUES (62, 'E6058635907463362883', '辛湘汇川湘菜(五角场店)', '', 1786, 0, 'bd00ed3f11f580c10c7fab124cecb7ceJPEG', 31.3092, 121.518, '9:00/2:00', '', 4.3, 2813, 2721);
INSERT INTO `restaurant_table` VALUES (91, 'E2022759758569635981', '罗港园茶餐厅(五角场店)', '', 848, 1, '3DD5379E040747E98145F14FC025E417png', 31.3088, 121.506, '10:00/20:45', '', 4.6, 1732, 376);
INSERT INTO `restaurant_table` VALUES (92, 'E11582251902844437298', '砂锅米线(五角场店)', '', 1531, 3, '9300df0da153bb7b04b84910e0e993b3jpeg', 31.3082, 121.515, '8:40/22:00', '', 4.6, 2518, 411);
INSERT INTO `restaurant_table` VALUES (93, 'E17176396100509896163', 'Tims(创智天地广场店)', '', 1585, 1, '47fc3cd11652bfaf4d57ecfe4a600ee3png', 31.306, 121.513, '8:00/21:30', '', 4.9, 125, 785);
INSERT INTO `restaurant_table` VALUES (94, 'E1292745149591669588', '丰和日丽(创智天地店）', '', 1425, 2, '1f2f079a1312e3fe801e7d0080c12ff1jpeg', 31.3064, 121.511, '10:30/21:00', '', 4.6, 5784, 2225);
INSERT INTO `restaurant_table` VALUES (95, 'E1270711766660764906', '蒋记麻辣烫(三门路店)', '', 1866, 0, '20465d6bd2659da06bb19f66e1a2c19ajpeg', 31.3113, 121.492, '10:00/1:00', '', 4.8, 2678, 885);
INSERT INTO `restaurant_table` VALUES (96, 'E2040553333963677199', '蜀里成都名小吃(太平洋森活天地店)', '', 1703, 2, '2b25594c2ba7ba695412b16ba9ae0495png', 31.3051, 121.513, '10:40/21:30', '', 4.6, 1599, 934);
INSERT INTO `restaurant_table` VALUES (97, 'E10763239840256137584', '嘴火爆·巴西烤肉饭脆皮鸡饭(五角场店)', '', 1946, 0, '321fcbf7b863ccfe81cf0a3fc739a265JPEG', 31.3034, 121.513, '8:30/0:00', '', 4.7, 6169, 4847);
INSERT INTO `restaurant_table` VALUES (98, 'E7189558634623763594', '鸿瑞兴（武东店）', '', 1939, 5, 'd1d7f4ea04e878292fa4b81d109f6326png', 31.3028, 121.5, '8:00/18:50', '', 4.8, 2616, 547);
INSERT INTO `restaurant_table` VALUES (99, 'E14146845748728073520', 'Charlie\'s粉红汉堡(五角场店)', '', 932, 0, '4806FF9EA30145C6A1EE268597C53AC3png', 31.3087, 121.508, '10:15/21:20', '', 4.9, 429, 760);
INSERT INTO `restaurant_table` VALUES (100, 'E17479143233940106248', '无二孃不成都(大学路店)', '', 1786, 5, '6f233881ab24f7f5d4bb054ba3edbb1apng', 31.3029, 121.507, '11:00/21:30', '', 4.8, 492, 484);
INSERT INTO `restaurant_table` VALUES (101, 'E956653485745008543', '淮南牛肉汤(三门路店)', '', 1886, 2, '4f257f563fc6ffd01afd519667d1353djpeg', 31.3114, 121.492, '10:00/1:00', '', 4.7, 7715, 1464);
INSERT INTO `restaurant_table` VALUES (102, 'E5213903849612225217', '港嘢茶檔CHADON(太平洋森活天地店)', '', 1694, 0, '07df9e99c00e08dac7f645612fc045fcjpeg', 31.3051, 121.513, '10:30/21:30', '', 4.8, 4080, 586);
INSERT INTO `restaurant_table` VALUES (103, 'E3123276649456800952', '花亦汀韩国料理(吉刻五角场店)', '', 1011, 0, 'd1c437284530511a1c4a8b8304e327ebjpeg', 31.3082, 121.509, '10:00/20:30', '', 4.7, 12932, 2414);
INSERT INTO `restaurant_table` VALUES (104, 'E9913658674681100917', '苏小柳点心专门店(五角场店)', '', 1724, 1, 'A56B60638733499C92C3596396056065png', 31.3045, 121.512, '10:00/21:30', '', 4.7, 15360, 2027);
INSERT INTO `restaurant_table` VALUES (105, 'E7745745166154868108', '猪脚哥哥.猪脚饭(五角场店)', '', 1963, 0, 'FA36CA5949844BCFB4DBAE533F25520Cpng', 31.3033, 121.513, '10:00/22:00', '', 4.6, 353, 1043);
INSERT INTO `restaurant_table` VALUES (106, 'E8753595350373959724', 'facepork脸猪猪排(大学路店)', '', 1768, 0, 'AA7E71384AEB49CFBC3418160876523Bpng', 31.303, 121.507, '10:00/22:00', '', 4.8, 1209, 2028);
INSERT INTO `restaurant_table` VALUES (107, 'E13730853155825928913', '屿见面(大学路沙茶面专营店)', '', 1753, 0, '985ecd4820422c7992cecba265cb9381jpeg', 31.3031, 121.508, '10:45/14:30,16:3', '', 4.7, 4170, 2530);
INSERT INTO `restaurant_table` VALUES (108, 'E5999128058555827715', '读酥世家(三门路店)', '', 1774, 5, '6ccaab7edae20e8abe89d3b0def7eb02png', 31.3116, 121.493, '9:30/21:30', '', 4.9, 150, 239);
INSERT INTO `restaurant_table` VALUES (109, 'E7109402443394183616', '桃屋', '', 1841, 4, '08e820d2aea058b0fef4cb47f1e529bbJPEG', 31.3025, 121.508, '10:25/22:00', '', 4.8, 4840, 192);
INSERT INTO `restaurant_table` VALUES (110, 'E341529889110075435', 'DREI德嗨西餐(杨浦店)', '', 1983, 5, '269321616822c216327c84c9f0a6270aJPEG', 31.3033, 121.513, '11:00/22:00', '', 5, 109, 373);
INSERT INTO `restaurant_table` VALUES (111, 'E2867334375806841025', '耶里夏丽（五角场店）', '', 1997, 2, '5413b2aca823e8abdc1e9b8ebdf99c9bpng', 31.3031, 121.513, '10:00/22:00', '', 4.7, 8850, 4595);
INSERT INTO `restaurant_table` VALUES (112, 'E2540542872517775848', '山林大红(三门路二店)', '', 1691, 0, '541EEF6B611C4DAEA60BBA0105220DC6jpeg', 31.3116, 121.518, '6:50/18:55', '', 4.8, 52, 62);
INSERT INTO `restaurant_table` VALUES (113, 'E16552180085351390509', '江湖蚝杰', '', 1778, 0, 'FD8EBA2C859F43ABAF0101FD9FEF32F9jpeg', 31.3116, 121.493, '11:00/2:00', '', 4.9, 47, 151);
INSERT INTO `restaurant_table` VALUES (114, 'E11499983746689814329', 'ROUROU煣煣 · 世界很虾(五角场店)', '', 1797, 0, '71a71bc976df1a00878b424e5f5cc004JPEG', 31.3048, 121.514, '10:00/20:50', '', 4.7, 975, 1183);
INSERT INTO `restaurant_table` VALUES (115, 'E4964750394037573357', '沪上阿姨(上海五角场店)', '', 1924, 0, 'C657DC1E0899473DAE6D051C573850A1jpeg', 31.3036, 121.513, '10:00/22:00', '', 4.8, 389, 1267);
INSERT INTO `restaurant_table` VALUES (116, 'E8416646426241541700', '778健康餐(长江软件园店)', '', 2784, 0, '94c4c0b80689325f853b5e58ec4429b6JPEG', 31.3211, 121.487, '8:00/20:00', '', 4.7, 961, 806);
INSERT INTO `restaurant_table` VALUES (117, 'E5222805307647588952', '亨利手作和牛汉堡(五角场店)', '', 1852, 2, '95F46E2A8CF447A08A816305535C7004png', 31.309, 121.518, '10:00/3:00', '', 4.8, 728, 532);
INSERT INTO `restaurant_table` VALUES (118, 'E8734557750089353165', '忆锅鸡煲(五角场店)', '', 1851, 0, '759efd17da6d781c8623bed975b8f06fpng', 31.309, 121.518, '9:30/23:55', '', 4.7, 21887, 2009);
INSERT INTO `restaurant_table` VALUES (119, 'E9947871634165657220', '甜问(太平洋森活天地店)', '', 1797, 1, 'AD3076F2FF864F91AEDF59F02989C1BEpng', 31.3048, 121.514, '10:30/21:30', '', 4.8, 123, 108);
INSERT INTO `restaurant_table` VALUES (120, 'E2329990191996371909', '阿婆苏式绿豆汤专门店(杨浦店)', '', 1762, 0, '9778C5A8D37C4603B18857EF43051EF8png', 31.3091, 121.518, '10:00/23:55', '', 4.4, 521, 1007);
INSERT INTO `restaurant_table` VALUES (121, 'E13829230202486829683', '南塘畔奶茶(五角场店)', '', 1102, 0, '084018232f2754bca229ed6dbb4a31f2jpeg', 31.3082, 121.502, '0:00/23:59', '', 4.8, 491, 822);
INSERT INTO `restaurant_table` VALUES (122, 'E8585844226553567494', '南昌特色小吃(国和路店)', '', 2761, 6, 'fff0265ca1e900db38edd33e1504b93ejpeg', 31.318, 121.528, '9:30/22:00', '', 4.8, 6820, 1222);
INSERT INTO `restaurant_table` VALUES (123, 'E3288778908455653905', '四云奶盖贡茶（百联又一城店）', '', 2222, 6, '82C99A84A0374BE3B6597C254B1CA7EBpng', 31.3025, 121.515, '10:30/21:20', '', 4.9, 1377, 351);
INSERT INTO `restaurant_table` VALUES (124, 'E13051721797360147510', '广粤轩煲仔饭', '', 2052, 1, '578e2e10a9246418049fd9ca0119c0fbjpeg', 31.3078, 121.493, '9:00/23:00', '', 4.5, 1840, 694);
INSERT INTO `restaurant_table` VALUES (125, 'E6631372120086740910', '1990馄饨铺(杨浦区悠方店)', '', 2373, 3, '60b386bafa5e8f34b5a6c4b2fca40dfbjpeg', 31.3295, 121.508, '10:30/21:00', '', 4.6, 450, 474);
INSERT INTO `restaurant_table` VALUES (126, 'E12097297073934677642', '矮子老鸭粉丝汤（国济路店）', '', 2443, 0, '251f5f441b8cbca227a79ca192975d3ejpeg', 31.3013, 121.516, '7:05/21:00', '', 5, 1826, 538);
INSERT INTO `restaurant_table` VALUES (127, 'E5961117502299790897', '彼得家牧场(百联又一城店)', '', 2328, 3, 'E84AEB460D864281845545F9106F264Epng', 31.3018, 121.516, '10:30/21:00', '', 4.8, 154, 265);
INSERT INTO `restaurant_table` VALUES (128, 'E10157957737931130600', '谷田稻香(上海中原城市广场店)', '', 2061, 3, 'C100C57E2D214751ACF69901EA9CECCAjpeg', 31.3154, 121.521, '10:00/20:30', '', 4.8, 2050, 1730);
INSERT INTO `restaurant_table` VALUES (129, 'E6443255498403607186', '拼一碗！蛋炒饭(市光路店)', '', 2796, 1, '00042D014030499DAE1510DE05A0A4BBpng', 31.3217, 121.525, '9:30/23:55', '', 4.8, 1619, 3702);
INSERT INTO `restaurant_table` VALUES (130, 'E6291567307931954241', '牛约堡-手作牛肉汉堡(五角场店)', '', 2129, 0, 'BDA9FDB0B5C2481F83749F87C035B9E0jpeg', 31.3028, 121.515, '8:40/0:00', '', 4.8, 3756, 2850);
INSERT INTO `restaurant_table` VALUES (131, 'E10370801443385483697', '福荣祥烧腊（国和路店）', '', 2113, 1, '588f616f511bb66ace0f159815ba8f32png', 31.316, 121.522, '9:10/19:55', '', 4.7, 17109, 2970);
INSERT INTO `restaurant_table` VALUES (132, 'E10302162243107326906', '香港十三座（中原城市广场店）', '', 2048, 1, '2680e20ebc88475b11bd245b7bb64426png', 31.3154, 121.521, '9:30/0:50', '', 4.7, 6808, 1715);
INSERT INTO `restaurant_table` VALUES (133, 'E2716808339094659184', '又见面徽州小笼', '', 2040, 0, 'd2c4391d342294c0eb3f1367a89d64f3jpeg', 31.3022, 121.512, '3:00/23:55', '', 4.7, 114, 1583);
INSERT INTO `restaurant_table` VALUES (134, 'E1802473979800199002', '永昌烧味餐厅', '', 2786, 6, 'D137BF34BE80437B83BA35C289417849png', 31.2966, 121.509, '9:30/21:00', '', 4.8, 2090, 1006);
INSERT INTO `restaurant_table` VALUES (135, 'E14067348605126802910', '广东六六肠粉皇(万达店)', '', 2098, 0, '4E03A1F9F24A49C2A616BAAAAB6A7C9Cpng', 31.3021, 121.513, '7:00/21:30', '', 4.4, 1153, 1157);
INSERT INTO `restaurant_table` VALUES (136, 'E9874123192740364549', '紫燕百味鸡(政通店)', '', 2111, 3, 'e012c8fb0741c83a8c6eceb6f9f6eff8jpeg', 31.3039, 121.516, '8:30/19:10', '', 4.8, 729, 464);
INSERT INTO `restaurant_table` VALUES (137, 'E7985662252444580744', '六月深夜食堂(中原城市广场店)', '', 2194, 0, '58ACCCDC26C14A0CA42307B9E0CC4D23jpeg', 31.3153, 121.522, '10:00/0:00', '', 4.6, 167, 446);
INSERT INTO `restaurant_table` VALUES (138, 'E9717911611822804613', '东北烤冷面(五角场店)', '', 2134, 1, '40ad9c601e0de84176f196509bd5e4dbJPEG', 31.3017, 121.5, '9:30/23:30', '', 4.7, 2621, 3489);
INSERT INTO `restaurant_table` VALUES (139, 'E8442939346281459009', '快乐柠檬（上海世界广场店）', '', 2666, 2, 'd33cfe84bd959e347d3f12db65e60f61png', 31.3219, 121.526, '10:30/23:30', '', 4.8, 4640, 925);
INSERT INTO `restaurant_table` VALUES (140, 'E2723499559007727056', '剪花娘子·凉皮肉夹馍(上海五角场万达店)', '', 2219, 3, '6379F72D24CB4209871173288E48EB0Cpng', 31.3015, 121.513, '10:15/21:30', '', 4.6, 1211, 4072);
INSERT INTO `restaurant_table` VALUES (141, 'E12947097638793702471', 'DQ(中原城市广场店)', '', 2145, 1, '6D82B9FB854545BD99D33C315AC3149Ejpeg', 31.316, 121.522, '10:00/21:30', '', 4.9, 6385, 910);
INSERT INTO `restaurant_table` VALUES (142, 'E16587261272433273351', '再见小时候·老上海小吃(中原店)', '', 2777, 1, '91061a5bfad64456905514553da1eec8jpeg', 31.3181, 121.526, '12:00/0:00', '', 4.8, 5684, 2074);
INSERT INTO `restaurant_table` VALUES (143, 'E16709090187412956356', '鱼出没酸菜鱼', '', 2676, 1, '5335ac20c68e1b7148001aae9368291djpeg', 31.3009, 121.493, '9:30/21:00', '', 4.8, 1577, 1960);
INSERT INTO `restaurant_table` VALUES (144, 'E8597457158632072505', '成都你六姐·牛肉冒菜是一绝(太平洋森活天地店)', '', 2153, 1, '52e97a432c99e089c09c644452108080JPEG', 31.3024, 121.514, '10:30/21:00', '', 4.6, 1615, 1821);
INSERT INTO `restaurant_table` VALUES (145, 'E9584495450267713915', '鹅研社(太平洋森活店)', '', 1797, 1, 'e052cc6d7df89f5a65875d073724c9f3JPEG', 31.3048, 121.514, '11:00/21:00', '', 4.9, 147, 292);
INSERT INTO `restaurant_table` VALUES (146, 'E17755786913977979352', '面霸面馆(财经大学店)', '', 2122, 0, '76D010E5678C43E785AD4F5D69DD13FDpng', 31.3018, 121.5, '7:00/23:00', '', 4.9, 51, 586);
INSERT INTO `restaurant_table` VALUES (147, 'E7886422831529285964', '见味花甲(五角场店)', '', 2264, 4, 'CE4C4542297A423D87D17367A6FF5A1Epng', 31.3013, 121.514, '10:30/21:25', '', 4.3, 2115, 479);
INSERT INTO `restaurant_table` VALUES (148, 'E16944932475640477284', 'COMMUNE(五角场店)', '', 2611, 4, '79A22807511340199C05FDC751E7F402png', 31.2964, 121.509, '11:00/23:55', '', 4.8, 837, 707);
INSERT INTO `restaurant_table` VALUES (149, 'E4416329605059890160', '郑阿姨的家', '', 2668, 6, '8db3df62ce38a692e6899004d58e38edjpeg', 31.3006, 121.494, '11:00/21:30', '', 4.8, 7140, 919);
INSERT INTO `restaurant_table` VALUES (150, 'E9717733856424640432', '爱上猪肚鸡(殷高西路店)', '', 2691, 2, '759C698E5DB34C958691F240222EAF81jpeg', 31.3234, 121.487, '0:00/23:59', '', 4.5, 229, 386);
INSERT INTO `restaurant_table` VALUES (151, 'E1951165851934905467', '六福海南鸡饭(国庠路店)', '', 2224, 5, 'eab8d5823947e76753f13cd97b773957jpeg', 31.3036, 121.517, '10:30/20:30', '', 4.8, 5539, 1188);
INSERT INTO `restaurant_table` VALUES (152, 'E17548488029059437064', '缙云烧饼', '', 2495, 3, '45383CCBFC344AF589501264A8C2FC10jpeg', 31.3209, 121.489, '7:30/21:00', '', 4.4, 32, 137);
INSERT INTO `restaurant_table` VALUES (153, 'E17556705145342616749', '山东手工水饺(政旦东路店)', '', 2583, 0, '62535d6be97a57b3096e2b943f31576ajpeg', 31.3022, 121.519, '9:30/0:00', '', 4.3, 154, 172);
INSERT INTO `restaurant_table` VALUES (154, 'E12976643861144147073', '老北桥.过桥米线.大碗面(三号湾店)', '', 2623, 1, 'c4064dcecf32cc9d4d267eb8efeebca1png', 31.2964, 121.509, '10:00/20:15', '', 4.7, 1481, 736);
INSERT INTO `restaurant_table` VALUES (155, 'E18366388245143871301', '拌将·干拌麻辣烫(殷高路店)', '', 2786, 0, '847508c28f0841b0226ab267e6a40499png', 31.3211, 121.487, '9:40/3:00', '', 4.9, 5151, 5551);
INSERT INTO `restaurant_table` VALUES (156, 'E16210830437266851716', '巴黎贝甜(悠迈生活广场店)', '', 2728, 3, '00AED168363E4A58B334351242710ADEpng', 31.2978, 121.517, '7:30/21:40', '', 4.9, 6557, 2347);
INSERT INTO `restaurant_table` VALUES (157, 'E9454059974731241632', '黑丰抓饭', '', 2172, 3, 'af41e84a5fc94d5f89d9b7d4e69220cdjpeg', 31.3029, 121.515, '10:20/21:00', '', 4.8, 709, 482);
INSERT INTO `restaurant_table` VALUES (158, 'E11146411181651437689', '小笠原日本料理(世界路133店)', '', 2626, 0, '1bc6abb2b1ab638e1ccb057a75d707cdjpeg', 31.3218, 121.525, '10:30/22:00', '', 4.8, 2577, 2652);
INSERT INTO `restaurant_table` VALUES (159, 'E7715790671709600964', '愿者上钩·纸包鱼·烤鱼(五角场店)', '', 2099, 1, 'C062CAC019EB433B8F6195BD56EEEFBFpng', 31.3021, 121.513, '11:00/22:00', '', 4.7, 167, 190);
INSERT INTO `restaurant_table` VALUES (160, 'E3382619414422007634', '伏見桃山(五角场万达店)', '', 2078, 3, 'CDA21EBD386D4AAE978F637C1FEA9AF9png', 31.3026, 121.514, '10:00/21:30', '', 4.8, 2484, 5818);
INSERT INTO `restaurant_table` VALUES (161, 'E4221526240269484987', '嘻嘛香(太平洋森活天地店)', '', 2097, 3, 'e200f62a888d832335fffc4aea212bd0png', 31.3029, 121.514, '11:00/21:30', '', 4.6, 429, 534);
INSERT INTO `restaurant_table` VALUES (162, 'E10719484716340776370', '渔人歌(百联又一城店)', '', 2418, 3, 'DCE6F3E98A164723884212364944F405png', 31.3012, 121.516, '10:00/21:30', '', 4.7, 386, 439);
INSERT INTO `restaurant_table` VALUES (163, 'E57328692065743842', '鲜得来排骨年糕(万达广场店)', '', 2430, 3, 'f1384ad57554bd3c63ea1cb3c5542e33png', 31.3002, 121.514, '10:00/19:50', '', 4.7, 3005, 938);
INSERT INTO `restaurant_table` VALUES (164, 'E9370050768333593737', '我去·春饼文化主题餐厅·东北菜', '', 2214, 3, '7D8A98094FC74D2FBE619693DBAFB971png', 31.3002, 121.508, '10:00/21:15', '', 4.6, 213, 540);
INSERT INTO `restaurant_table` VALUES (165, 'E16513285717125601863', '饿熊便当(五角场推荐必吃店)', '', 2955, 1, 'a27c3bdd5e7049cf8a04bbab290df6dapng', 31.2986, 121.521, '8:00/19:20', '', 4.8, 2172, 2363);
INSERT INTO `restaurant_table` VALUES (166, 'E9922781278343016827', '西贝莜面村（五角场店）', '', 2147, 3, '4040dcea58cbe58fa49165343fb34b66jpeg', 31.3018, 121.513, '10:00/21:00', '', 4.8, 9460, 2091);
INSERT INTO `restaurant_table` VALUES (167, 'E6096219077065465634', '韩极客炸鸡啤酒屋(国和路店)', '', 2203, 3, 'ba4af0fb02c951dd1fc7b6099c66400bJPEG', 31.3168, 121.522, '10:30/3:00', '', 4.8, 8289, 1903);
INSERT INTO `restaurant_table` VALUES (168, 'E14906141216855193814', '代购喜茶（尚浦中心）', '', 664, 8, '17c63d6e276fe0522edee9421ca95641png', 31.3168, 121.51, '10:00/21:00', '', 4.7, 200, 252);
INSERT INTO `restaurant_table` VALUES (169, 'E13889818869888213043', '汤先生·炖汤粗粮饭(五角场店)', '', 2973, 4, '958BEFDE25EB40F984FD714E708787BDjpeg', 31.2947, 121.513, '9:00/21:00', '', 4.8, 1860, 2778);
INSERT INTO `restaurant_table` VALUES (170, 'E13676330435478308907', '有一家烤肉丼饭(五角场店)', '', 2975, 0, 'D22658DC583D4EE3939E28135AE6453Cpng', 31.2947, 121.513, '9:30/22:05', '', 4.8, 2066, 2152);
INSERT INTO `restaurant_table` VALUES (171, 'E6985009759418338442', '阿吉特', '', 2741, 4, '2e661707bc05397f9f0d0c69271c403cjpeg', 31.3013, 121.492, '10:25/21:30', '', 4.9, 5661, 1598);
INSERT INTO `restaurant_table` VALUES (172, 'E1468688696611511050', 'Lady M(上海合生汇国际广场店)', '', 2700, 1, '433094a98ecc8d282bd549a1f6a5e98apng', 31.2995, 121.517, '10:00/21:00', '', 4.9, 1138, 1442);

SET FOREIGN_KEY_CHECKS = 1;
