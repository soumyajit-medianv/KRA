import { Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { GenerateSnapshotsEvent } from 'src/snapshots/generate_snapshot_event';

export interface Account {
    name: string;
    balance: number;
}

@Injectable()
export class AccountsService {
    constructor(
        private readonly evenEmitter: EventEmitter2
    ) { }

    private readonly accounts: Account[] = [];

    create(account: Account) {
        this.accounts.push(account);
        this.evenEmitter.emit('snapshots.generate', new GenerateSnapshotsEvent('123'))
    }

    getAccounts() {
        return this.accounts;
    }

}
