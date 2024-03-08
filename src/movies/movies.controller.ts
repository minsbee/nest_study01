import { Body, Controller, Get, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('movies')
export class MoviesController {

    @Get()
    getAllMovies(): string {
        return 'This will return all movies';
    }

    @Get('search')
    search(@Query("year") searchingYear: string) {
        // return 'we are searching for a movie with a title: ';
        return `we are searching for a movie made after: ${searchingYear}`;
    }

    // 경로에 동적인 값을 넣게 되는 경우 그 이후 다른 Get 메서드가 있을 경우 해당 경로 역시 동적인 값으로 인식되어 오류가 발생한다.
    // 따라서 동적인 값이 들어가는 경로는 가장 아래에 위치해야 한다.
    @Get('/:id')
    getOne(@Param('id') movieId: string): string {
        return `This will return ${movieId} movie`;
    }


    @Post('/create')
    createMovie(@Body() movieData)  {
        console.log(movieData);
        return ;
    }

    @Post('/register-movie')
    create(@Body() movieData)  {
        console.log(movieData);
        return `This will create a movie with the name: ${movieData.name}`;
    }

    @Patch('/register-movie-new/:id')
    patchMovie(@Param('id') id: string, @Body() movieData)  {
        return {
            movieId: id,
            ...movieData
        };
    }
}