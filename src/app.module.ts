import { Module } from '@nestjs/common';
import {MongoClient} from 'mongodb';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './controllers/products.controller';
import { CategoriesController } from './controllers/categories.controller';
import { ProductsService } from './services/products.service';

const uri = 'mongodb://root:root@localhost:27017/?authMechanism=DEFAULT'

const client = new MongoClient(uri);

async function run(){
  await client.connect();
  const database = client.db('platzi-store');
  const taskCollection = database.collection('tasks');
  const tasks = await taskCollection.find().toArray();
  console.log('aca van las tasks',tasks);
}

run();
@Module({
  imports: [],
  controllers: [AppController, ProductsController, CategoriesController],
  providers: [AppService, ProductsService],
})
export class AppModule {}
