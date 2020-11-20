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
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var class_validator_1 = require("class-validator");
var Error_1 = __importDefault(require("../../errors/Error"));
var Meditation_1 = __importDefault(require("../../models/Meditation"));
var UpdateMeditationService = /** @class */ (function () {
    function UpdateMeditationService() {
    }
    UpdateMeditationService.prototype.execute = function (_a, id) {
        var description = _a.description, guide = _a.guide, type = _a.type, path = _a.path, title = _a.title, duration = _a.duration;
        return __awaiter(this, void 0, void 0, function () {
            var meditationsRepository, meditation, request, errors;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        meditationsRepository = typeorm_1.getRepository(Meditation_1.default);
                        return [4 /*yield*/, meditationsRepository.findOne({
                                where: { id: id },
                            })];
                    case 1:
                        meditation = _b.sent();
                        if (!meditation) {
                            throw new Error_1.default('Meditation not found');
                        }
                        request = {
                            description: description,
                            path: path,
                            guide: guide,
                            type: type,
                            title: title,
                            duration: duration,
                        };
                        Object.keys(request).forEach(function (key) { return request[key] === undefined && delete request[key]; });
                        return [4 /*yield*/, class_validator_1.validate(request)];
                    case 2:
                        errors = _b.sent();
                        if (errors.length > 0) {
                            throw new Error_1.default("" + errors);
                        }
                        return [4 /*yield*/, typeorm_1.createQueryBuilder()
                                .update(Meditation_1.default)
                                .set(request)
                                .where('id = :id', { id: id })
                                .execute()];
                    case 3:
                        _b.sent();
                        return [2 /*return*/, meditation];
                }
            });
        });
    };
    return UpdateMeditationService;
}());
exports.default = UpdateMeditationService;
