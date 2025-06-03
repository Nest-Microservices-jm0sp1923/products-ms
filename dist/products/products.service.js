"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_1 = require("../../generated/prisma/index.js");
const microservices_1 = require("@nestjs/microservices");
let ProductsService = class ProductsService extends prisma_1.PrismaClient {
    logger = new common_1.Logger('ProductsService');
    onModuleInit() {
        this.$connect();
        this.logger.log('Prisma Client connected');
    }
    create(createProductDto) {
        return this.product.create({
            data: createProductDto,
        });
    }
    async findAll(paginationDto) {
        const { page, limit } = paginationDto;
        const totalPage = await this.product.count();
        const lastPage = Math.ceil(totalPage / limit);
        return {
            data: await this.product.findMany({
                where: { available: true },
                skip: (page - 1) * limit,
                take: limit,
            }),
            meta: {
                total: totalPage,
                page: page,
                lastPage: lastPage,
            },
        };
    }
    async findOne(id) {
        const product = await this.product.findFirst({
            where: { id: id, available: true },
        });
        if (!product) {
            throw new microservices_1.RpcException({
                message: `Product Whit Id ${id} no found`,
                status: common_1.HttpStatus.BAD_REQUEST,
            });
        }
        return product;
    }
    async update(id, updateProductDto) {
        const { id: _, ...data } = updateProductDto;
        await this.findOne(id);
        return this.product.update({
            where: { id },
            data: data,
        });
    }
    async remove(id) {
        await this.findOne(id);
        return this.product.update({
            where: { id },
            data: {
                available: false,
            },
        });
    }
};
exports.ProductsService = ProductsService;
exports.ProductsService = ProductsService = __decorate([
    (0, common_1.Injectable)()
], ProductsService);
//# sourceMappingURL=products.service.js.map