import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PaginationDto } from 'src/common';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    create(createProductDto: CreateProductDto): import("generated/prisma").Prisma.Prisma__ProductClient<{
        name: string;
        price: number;
        id: number;
        available: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("generated/prisma/runtime/library").DefaultArgs, import("generated/prisma").Prisma.PrismaClientOptions>;
    findAll(paginationDto: PaginationDto): Promise<{
        data: {
            name: string;
            price: number;
            id: number;
            available: boolean;
            createdAt: Date;
            updatedAt: Date;
        }[];
        meta: {
            total: number;
            page: number;
            lastPage: number;
        };
    }>;
    findOne(id: number): Promise<{
        name: string;
        price: number;
        id: number;
        available: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(updateProductDto: UpdateProductDto): Promise<{
        name: string;
        price: number;
        id: number;
        available: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: number): Promise<{
        name: string;
        price: number;
        id: number;
        available: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    validateProduct(ids: number[]): Promise<{
        name: string;
        price: number;
        id: number;
        available: boolean;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
}
