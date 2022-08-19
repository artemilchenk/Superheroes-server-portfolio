import {forwardRef, Module} from '@nestjs/common';
import {HeroModule} from './hero/hero.module';
import {MongooseModule} from "@nestjs/mongoose";
import {AppController} from "./app.controller";
import {AppService} from "./app.service";


@Module({
    imports: [
        forwardRef(() => HeroModule),
        MongooseModule.forRoot('mongodb+srv://artem:03mern09@cluster0.adan7ml.mongodb.net/?retryWrites=true&w=majority')
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
