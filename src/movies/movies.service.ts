import { Injectable } from '@nestjs/common';
import { Movies, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MoviesService {
    constructor(private prisma: PrismaService) {}
    
    async createMovie(data: Prisma.MoviesCreateInput): Promise<Movies> {
        const MovieData = {
            ...data,
            releaseDate: new Date()
        };

        return this.prisma.movies.create({ data: MovieData });
        };
}
