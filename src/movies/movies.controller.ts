import { Controller, Get, Param } from '@nestjs/common';



@Controller('movies')
export class MoviesController {

    @Get()
    getAllMovies(): string {
        return 'This will return all movies';
    }

    @Get('/:id')
    getOne(@Param('id') movieId: string): string {
        return `This will return ${movieId} movie`;
    }
}
