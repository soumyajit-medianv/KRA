import { Body, Controller, Post } from '@nestjs/common';
import { Account, AccountsService } from './accounts.service';

@Controller('accounts')
export class AccountsController {

    constructor(private readonly accountService: AccountsService) { }

    @Post()
    createAccount(@Body() account: Account) {
        return this.accountService.create(account);
    }
}
