import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MoviesService {
    constructor(private prisma: PrismaService) {}
    
    async createMovie(data: Prisma.MoviesCreateInput) {
        const createdAt = new Date();
        const createdData = {
            ...data,
            createdAt: createdAt,
        };

        const movieData = await this.prisma.movies.create({
            data: createdData,
        });

        return movieData;
    };
}