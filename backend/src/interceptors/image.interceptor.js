"use strict";
exports.__esModule = true;
exports.ImageInterceptor = void 0;
var common_1 = require("@nestjs/common");
var platform_express_1 = require("@nestjs/platform-express");
var multer_1 = require("multer");
exports.ImageInterceptor = (0, platform_express_1.FileInterceptor)('file', {
    fileFilter: function (_req, file, callback) {
        if (!file.mimetype.includes('image')) {
            return callback(new common_1.BadRequestException('Invalid file type'), false);
        }
        callback(null, true);
    },
    storage: (0, multer_1.diskStorage)({
        destination: './static/',
        filename: function (_req, file, callback) {
            callback(null, "".concat(Date.now(), ".").concat(file.originalname.split('.').slice(-1)));
        }
    })
});
