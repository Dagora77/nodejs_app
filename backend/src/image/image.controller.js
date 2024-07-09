"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.ImageController = void 0;
var common_1 = require("@nestjs/common");
var image_interceptor_1 = require("../interceptors/image.interceptor");
var ImageController = /** @class */ (function () {
    function ImageController(imageService) {
        this.imageService = imageService;
    }
    ImageController.prototype.create = function (createImageDto, file) {
        return this.imageService.create(createImageDto, file);
    };
    ImageController.prototype.findAll = function (_a) {
        var id = _a.id;
        if (id) {
            return this.imageService.findOne(Number(id));
        }
        return this.imageService.findAll();
    };
    __decorate([
        (0, common_1.UseInterceptors)(image_interceptor_1.ImageInterceptor),
        (0, common_1.Post)(),
        __param(0, (0, common_1.Body)()),
        __param(1, (0, common_1.UploadedFile)())
    ], ImageController.prototype, "create");
    __decorate([
        (0, common_1.Get)(),
        __param(0, (0, common_1.Query)())
    ], ImageController.prototype, "findAll");
    ImageController = __decorate([
        (0, common_1.Controller)('image')
    ], ImageController);
    return ImageController;
}());
exports.ImageController = ImageController;
