import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { Account, AccountsService } from 'src/accounts/accounts.service';

export interface Snapshot {
    account: Account;
    date: Date
}

@Injectable()
export class SnapshotsService {

    constructor(
        @Inject(forwardRef(() => AccountsService)) // circular dependency
        private readonly accountsService: AccountsService
    ) { }

    private readonly snapshots: Snapshot[] = [];

    generateSnapshots() {
        const accounts = this.accountsService.getAccounts();
        for (const account of accounts) {
            this.snapshots.push({
                account,
                date: new Date()
            })
        }
    }

    getSnapshots(): Snapshot[] {
        return this.snapshots;
    }

}
