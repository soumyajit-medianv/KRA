import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { Account, AccountsService } from 'src/accounts/accounts.service';
import { GenerateSnapshotsEvent } from './generate_snapshot_event';

export interface Snapshot {
    account: Account;
    date: Date,
    userId: string
}

@Injectable()
export class SnapshotsService {
    constructor(
        private readonly accountsService: AccountsService
    ) { }

    private readonly snapshots: Snapshot[] = [];

    @OnEvent('snapshots.generate')
    generateSnapshots(event: GenerateSnapshotsEvent) {
        const accounts = this.accountsService.getAccounts();
        for (const account of accounts) {
            this.snapshots.push({
                account,
                date: new Date(),
                userId: event.userId,
            })
        }
    }

    getSnapshots(): Snapshot[] {
        return this.snapshots;
    }

}
