import { createConnection, Connection } from 'typeorm';
import dbConfig from '../configs/db'

export class DatabaseConnection {
  private connection: Connection;

  public async connect(): Promise<void> {
    this.connection = await createConnection(dbConfig);
    console.log('Connected to database');
    await this.connection.synchronize();
  }

  public async close(): Promise<void> {
    await this.connection.close();
    console.log('Connection to database closed');
  }
}