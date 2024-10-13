"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PostController_1 = require("../controller/PostController");
var router = require("express").Router();
router.post('/:postId/comments', PostController_1.saveComment);
router.get('/top-three', PostController_1.getTopUserswithPost);
exports.default = router;
//# sourceMappingURL=PostRoutes.js.map