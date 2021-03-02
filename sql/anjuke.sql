/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 50553
 Source Host           : localhost:3306
 Source Schema         : anjuke

 Target Server Type    : MySQL
 Target Server Version : 50553
 File Encoding         : 65001

 Date: 02/03/2021 17:52:48
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for ad_table
-- ----------------------------
DROP TABLE IF EXISTS `ad_table`;
CREATE TABLE `ad_table`  (
  `ID` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `admin_ID` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `type` int(11) NULL DEFAULT NULL,
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `link` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `img_path` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `img_real_path` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `expires` int(11) NULL DEFAULT NULL,
  `n_order` int(11) NULL DEFAULT NULL,
  `n_show` int(11) NULL DEFAULT NULL,
  `n_click` int(11) UNSIGNED NULL DEFAULT NULL,
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE = MyISAM CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of ad_table
-- ----------------------------

-- ----------------------------
-- Table structure for admin_table
-- ----------------------------
DROP TABLE IF EXISTS `admin_table`;
CREATE TABLE `admin_table`  (
  `ID` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `username` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `password` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `b_house` bit(1) NULL DEFAULT NULL,
  `b_ad` bit(1) NULL DEFAULT NULL,
  `b_link` bit(1) NULL DEFAULT NULL,
  `b_broker` bit(1) NULL DEFAULT NULL,
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE = MyISAM CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of admin_table
-- ----------------------------
INSERT INTO `admin_table` VALUES ('11ef66f4bcdf4446837a2eb8c6ced7bd', 'zhangsan', 'e10adc3949ba59abbe56e057f20f883e', b'1', b'0', b'0', b'1');

-- ----------------------------
-- Table structure for admin_token_table
-- ----------------------------
DROP TABLE IF EXISTS `admin_token_table`;
CREATE TABLE `admin_token_table`  (
  `ID` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `admin_ID` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `expires` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE = MyISAM CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of admin_token_table
-- ----------------------------
INSERT INTO `admin_token_table` VALUES ('bf5ef38b26844b36bfae4fd07ebc7c9b', '1', 1614584682);
INSERT INTO `admin_token_table` VALUES ('252ed931247c418d8a8dd91c97e43776', '1', 1614585585);
INSERT INTO `admin_token_table` VALUES ('dcdf301fb0d74fd1ac826ab0eb7ee18b', '11ef66f4bcdf4446837a2eb8c6ced7bd', 1614656884);

-- ----------------------------
-- Table structure for broker_table
-- ----------------------------
DROP TABLE IF EXISTS `broker_table`;
CREATE TABLE `broker_table`  (
  `ID` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `title` varchar(16) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `img_path` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `img_reaal_path` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE = MyISAM CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of broker_table
-- ----------------------------

-- ----------------------------
-- Table structure for house_table
-- ----------------------------
DROP TABLE IF EXISTS `house_table`;
CREATE TABLE `house_table`  (
  `ID` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `admin_ID` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `sub_title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `position_main` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `position_second` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `ave_pice` int(11) NULL DEFAULT NULL,
  `area_min` smallint(6) NULL DEFAULT NULL,
  `area_max` smallint(6) NULL DEFAULT NULL,
  `tel` varchar(16) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `sale_time` int(11) NULL DEFAULT NULL,
  `submit_time` int(11) NULL DEFAULT NULL,
  `building_type` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `main_img_path` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `main_img_real_path` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `img_paths` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `img_real_paths` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `property_img_paths` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `property_img_real_paths` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE = MyISAM CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of house_table
-- ----------------------------
INSERT INTO `house_table` VALUES ('f4ade5e73edf44cc87fe7c29f3fd0d14', '11ef66f4bcdf4446837a2eb8c6ced7bd', 'aaa', '', '', '', 0, 0, 0, '', 0, 0, '', 'ae4f6baf472ee9eaac39723932b392d7.png', 'upload\\ae4f6baf472ee9eaac39723932b392d7.png', '879fc8d9e46c63a1f3e07854a12fac11.png', 'upload\\879fc8d9e46c63a1f3e07854a12fac11.png', '', '');
INSERT INTO `house_table` VALUES ('4704c48634674435a4d5a35f02cf40b4', '11ef66f4bcdf4446837a2eb8c6ced7bd', 'gfhjfghjhgj', '', '', '', 0, 0, 0, '', 0, 0, '', 'b96e3901506107d8ca46f2d4c01f0429.png', 'upload\\b96e3901506107d8ca46f2d4c01f0429.png', '8fa9a1ea85a8864b8b81a990a2bc2ae3.png', 'upload\\8fa9a1ea85a8864b8b81a990a2bc2ae3.png', '2bf285e5ca8b93c31fd1a024d5e5e70b.png', 'upload\\2bf285e5ca8b93c31fd1a024d5e5e70b.png');
INSERT INTO `house_table` VALUES ('ae0930328e36428482fc6be00567ca79', '11ef66f4bcdf4446837a2eb8c6ced7bd', 'sdfsdfsdgdfghgdZ', '', '', '', 0, 0, 0, '', 0, 0, '', '6cd33b0b6a6d3c891db78bc60a9c8cec.png', 'upload\\6cd33b0b6a6d3c891db78bc60a9c8cec.png', '', '', '', '');
INSERT INTO `house_table` VALUES ('2d2b290e83d64f339215ac5f06ae1279', '11ef66f4bcdf4446837a2eb8c6ced7bd', 'dasdasdxzxczc', '', '', '', 0, 0, 0, '', 0, 0, '', '45a26014aeced442ac7ea87484503fcf.png', 'upload\\45a26014aeced442ac7ea87484503fcf.png', '', '', '', '');
INSERT INTO `house_table` VALUES ('c65dea92b82b4970a1691176d9f563bf', '11ef66f4bcdf4446837a2eb8c6ced7bd', 'ssssdsfsdfsdfs', '', '', '', 0, 0, 0, '', 0, 0, '', 'ec72141c274e1d1775d65eb57d7ba894.svg', 'upload\\ec72141c274e1d1775d65eb57d7ba894.svg', '', '', '', '');
INSERT INTO `house_table` VALUES ('0ac0c440eb124cbab52b1b0fbc4158a8', '11ef66f4bcdf4446837a2eb8c6ced7bd', 'cc', 'ccc', 'ccc', 'ccccc', 11, 111, 11111, '111111', 2021, 2021, '高层', 'f315d550adea12aa7d47a90b360bf777.svg', 'upload\\f315d550adea12aa7d47a90b360bf777.svg', 'f0e82ee4bb178899ed9065f1d0cd9f18.png,00dc935da76a302a92fa80e96e9838dc.png', 'upload\\f0e82ee4bb178899ed9065f1d0cd9f18.png,upload\\00dc935da76a302a92fa80e96e9838dc.png', '33c5308402c7f377e22f8d68caefcfd6.png,9041f7019d990e3e1bc1c3343d381a0f.png', 'upload\\33c5308402c7f377e22f8d68caefcfd6.png,upload\\9041f7019d990e3e1bc1c3343d381a0f.png');
INSERT INTO `house_table` VALUES ('376266525c1f40e3be890aa685e2d69b', '11ef66f4bcdf4446837a2eb8c6ced7bd', '自行车的爽肤水', '', '', '', 0, 0, 0, '', 0, 0, '', '7ae65b0ce00ba8b0c765adc2ae5fada2.jpg', 'upload\\7ae65b0ce00ba8b0c765adc2ae5fada2.jpg', '', '', '', '');
INSERT INTO `house_table` VALUES ('6020ab71d26a4452a30166f7f2d9b67f', '11ef66f4bcdf4446837a2eb8c6ced7bd', '防守打法人二套', '', '', '', 0, 0, 0, '', 0, 0, '', 'f71a5ff33f8f8c0226c76ec72feb3c5b.png', 'upload\\f71a5ff33f8f8c0226c76ec72feb3c5b.png', '', '', '', '');
INSERT INTO `house_table` VALUES ('7bbb44ff22ae43ceb0d6b5e1e03803bf', '11ef66f4bcdf4446837a2eb8c6ced7bd', '哈还看过个结个婚个', '', '', '', 0, 0, 0, '', 0, 0, '', 'dd8bd273ec2f91a28f1c19f26ad362cc.png', 'upload\\dd8bd273ec2f91a28f1c19f26ad362cc.png', '', '', '', '');
INSERT INTO `house_table` VALUES ('ec2b1fc51bfb4dc6877235262ce94cac', '11ef66f4bcdf4446837a2eb8c6ced7bd', '干活结个婚就个', '', '', '', 0, 0, 0, '', 0, 0, '', '5b69fd8296b43280d6d590b87723ed07.png', 'upload\\5b69fd8296b43280d6d590b87723ed07.png', '', '', '', '');
INSERT INTO `house_table` VALUES ('a0e9a912fefe4a8996dd8cec2cc0e9eb', '11ef66f4bcdf4446837a2eb8c6ced7bd', '感受到分公司', '', '', '', 0, 0, 0, '', 0, 0, '', 'a79a74110b2b036426de6591ce5313ad.png', 'upload\\a79a74110b2b036426de6591ce5313ad.png', '', '', '', '');

-- ----------------------------
-- Table structure for link_table
-- ----------------------------
DROP TABLE IF EXISTS `link_table`;
CREATE TABLE `link_table`  (
  `ID` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `admin_ID` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `type` int(11) NULL DEFAULT NULL,
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `link` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `n_order` int(11) NULL DEFAULT NULL,
  `expires` int(11) UNSIGNED NULL DEFAULT NULL,
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE = MyISAM CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of link_table
-- ----------------------------

SET FOREIGN_KEY_CHECKS = 1;
