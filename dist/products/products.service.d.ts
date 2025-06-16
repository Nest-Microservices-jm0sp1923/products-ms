import { OnModuleInit } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaClient } from 'generated/prisma';
import { PaginationDto } from 'src/common';
export declare class ProductsService extends PrismaClient implements OnModuleInit {
    private readonly logger;
    onModuleInit(): void;
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
    update(id: number, updateProductDto: UpdateProductDto): Promise<{
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
    validateProducts(ids: number[]): Promise<{
        name: string;
        price: number;
        id: number;
        available: boolean;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
}
