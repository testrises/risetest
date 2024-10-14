"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserController_1 = require("../controller/UserController");
var PostController_1 = require("../controller/PostController");
var router = require("express").Router();
router.post('/', UserController_1.save);
router.get('/', UserController_1.getUsers);
router.post('/:id/posts', PostController_1.savePost);
router.get('/:id/posts', PostController_1.getUserPosts);
exports.default = router;
//# sourceMappingURL=UserRoutes.js.map