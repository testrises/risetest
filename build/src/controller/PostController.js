"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTopUserswithPost = exports.saveComment = exports.getUserPosts = exports.savePost = void 0;
var client_1 = require("@prisma/client");
var savePost = function (request, response, next) { return __awaiter(void 0, void 0, void 0, function () {
    var validator, _a, title, content, userId, prisma, post, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                validator = request.body;
                if (!validator.content || !validator.title) {
                    return [2 /*return*/, response.status(400).json({ message: 'title and body are required ' })];
                }
                _a = request.body, title = _a.title, content = _a.content;
                userId = request.params.id;
                prisma = new client_1.PrismaClient();
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, prisma.post.create({
                        data: {
                            title: title,
                            content: content,
                            userId: parseInt(userId)
                        }
                    })];
            case 2:
                post = _b.sent();
                response.status(201).json({ message: 'post saved successfully', data: post });
                return [3 /*break*/, 4];
            case 3:
                error_1 = _b.sent();
                response.status(400).json({ message: error_1.message });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.savePost = savePost;
var getUserPosts = function (request, response, next) { return __awaiter(void 0, void 0, void 0, function () {
    var id, prisma, posts;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = request.params.id;
                prisma = new client_1.PrismaClient();
                return [4 /*yield*/, prisma.post.findMany({
                        where: { userId: parseInt(id) },
                    })];
            case 1:
                posts = _a.sent();
                response.status(200).json({ message: 'post fetched successfully', data: posts });
                return [2 /*return*/];
        }
    });
}); };
exports.getUserPosts = getUserPosts;
var saveComment = function (request, response, next) { return __awaiter(void 0, void 0, void 0, function () {
    var validator, postId, _a, content, userId, prisma, comment, error_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                validator = request.body;
                if (!validator.content) {
                    return [2 /*return*/, response.status(400).json({ message: 'content required ' })];
                }
                postId = request.params.postId;
                _a = request.body, content = _a.content, userId = _a.userId;
                prisma = new client_1.PrismaClient();
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, prisma.comment.create({
                        data: {
                            content: content,
                            postId: parseInt(postId),
                            userId: userId
                        }
                    })];
            case 2:
                comment = _b.sent();
                response.status(201).json(comment);
                return [3 /*break*/, 4];
            case 3:
                error_2 = _b.sent();
                response.status(400).json({ error: error_2.message });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.saveComment = saveComment;
var getTopUserswithPost = function (request, response, next) { return __awaiter(void 0, void 0, void 0, function () {
    var prisma, topUsers, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                prisma = new client_1.PrismaClient();
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, prisma.user.findMany({
                        orderBy: {
                            posts: {
                                _count: 'desc'
                            }
                        },
                        take: 3,
                        include: {
                            comments: {
                                orderBy: {
                                    createdAt: 'desc'
                                },
                                take: 1
                            }
                        }
                    })];
            case 2:
                topUsers = _a.sent();
                topUsers.map(function (one) {
                    delete (one.password);
                });
                response.status(200).json(topUsers);
                return [3 /*break*/, 4];
            case 3:
                error_3 = _a.sent();
                response.status(400).json({ error: error_3.message });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.getTopUserswithPost = getTopUserswithPost;
//# sourceMappingURL=PostController.js.map