"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var common_1 = require("@nestjs/common");
var serve_static_1 = require("@nestjs/serve-static");
var typeorm_1 = require("@nestjs/typeorm");
var path_1 = require("path");
var image_module_1 = require("./image/image.module");
var image_entity_1 = require("./image/entities/image.entity");
require("dotenv/config");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        (0, common_1.Module)({
            imports: [
                typeorm_1.TypeOrmModule.forRoot({
                    type: 'mysql',
                    host: process.env.DB_HOST,
                    port: Number(process.env.DB_PORT),
                    username: process.env.DB_USER,
                    password: process.env.DB_PASS,
                    database: process.env.DB_NAME,
                    entities: [image_entity_1.Image],
                    synchronize: true
                }),
                serve_static_1.ServeStaticModule.forRoot({
                    rootPath: (0, path_1.join)(__dirname, '..', 'static'),
                    serveRoot: '/static'
                }),
                image_module_1.ImageModule,
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
