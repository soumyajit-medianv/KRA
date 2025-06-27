import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { SnapshotsService } from 'src/snapshots/snapshots.service';
import { CreateAccountRequest } from './create_account_req';

export interface Account {
    name: string;
    balance: number;
}

@Injectable()
export class AccountsService {

    constructor(
        @Inject(forwardRef(() => SnapshotsService))
        private snapshotsService: SnapshotsService
    ) { }

    private readonly accounts: Account[] = [];

    create(account: CreateAccountRequest) {
        this.accounts.push(account);
        this.snapshotsService.generateSnapshots();
    }

    getAccounts() {
        return this.accounts;
    }

}
