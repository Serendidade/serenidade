"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var users_routes_1 = __importDefault(require("./users.routes"));
var sessions_routes_1 = __importDefault(require("./sessions.routes"));
var meditations_routes_1 = __importDefault(require("./meditations.routes"));
var reflections_routes_1 = __importDefault(require("./reflections.routes"));
var path_1 = __importDefault(require("path"));
var routes = express_1.Router();
routes.use('/users', users_routes_1.default);
routes.use('/sessions', sessions_routes_1.default);
routes.use('/meditations', meditations_routes_1.default);
routes.use('/reflections', reflections_routes_1.default);
routes.use('/audio', function (request, response) {
    // res.sendFile(path.join(__dirname
    response.sendFile(path_1.default.join(__dirname, '..', 'audio', 'meditacao.mp3'));
});
exports.default = routes;
