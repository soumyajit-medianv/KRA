import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountsModule } from './accounts/accounts.module';
import { SnapshotsModule } from './snapshots/snapshots.module';

@Module({
  imports: [AccountsModule, SnapshotsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
