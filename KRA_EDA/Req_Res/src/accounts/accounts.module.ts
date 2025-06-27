import { forwardRef, Module } from '@nestjs/common';
import { AccountsController } from './accounts.controller';
import { AccountsService } from './accounts.service';
import { SnapshotsModule } from 'src/snapshots/snapshots.module';

@Module({
  imports: [
    forwardRef(() => SnapshotsModule)
  ],
  controllers: [AccountsController],
  providers: [AccountsService],
  exports: [AccountsService]
})
export class AccountsModule { }
