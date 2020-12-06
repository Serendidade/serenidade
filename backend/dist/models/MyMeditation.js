"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var Meditation_1 = __importDefault(require("./Meditation"));
var User_1 = __importDefault(require("./User"));
var MyMeditation = /** @class */ (function () {
    function MyMeditation() {
    }
    __decorate([
        typeorm_1.PrimaryColumn(),
        __metadata("design:type", String)
    ], MyMeditation.prototype, "id", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return User_1.default; }, function (user) { return user.id; }),
        typeorm_1.JoinColumn({ name: 'id_user' }),
        __metadata("design:type", String)
    ], MyMeditation.prototype, "user", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Meditation_1.default; }, function (meditation) { return meditation.id; }),
        typeorm_1.JoinColumn({ name: 'id_meditation' }),
        __metadata("design:type", Number)
    ], MyMeditation.prototype, "meditation", void 0);
    MyMeditation = __decorate([
        typeorm_1.Entity('my_meditations')
    ], MyMeditation);
    return MyMeditation;
}());
exports.default = MyMeditation;
