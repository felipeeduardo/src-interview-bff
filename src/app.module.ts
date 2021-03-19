import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { NeogqlModule } from './neo4j/neo4j.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    }),
    NeogqlModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
