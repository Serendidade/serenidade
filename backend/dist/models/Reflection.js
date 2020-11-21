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
var class_validator_1 = require("class-validator");
var User_1 = __importDefault(require("./User"));
var Reflection = /** @class */ (function () {
    function Reflection() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Reflection.prototype, "id", void 0);
    __decorate([
        class_validator_1.IsNotEmpty(),
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Reflection.prototype, "content", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return User_1.default; }, function (user) { return user.id; }),
        __metadata("design:type", String)
    ], Reflection.prototype, "user", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], Reflection.prototype, "created_at", void 0);
    __decorate([
        typeorm_1.UpdateDateColumn(),
        __metadata("design:type", Date)
    ], Reflection.prototype, "updated_at", void 0);
    Reflection = __decorate([
        typeorm_1.Entity('reflections')
    ], Reflection);
    return Reflection;
}());
exports.default = Reflection;
