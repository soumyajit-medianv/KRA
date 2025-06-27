import { Body, Controller, Post } from '@nestjs/common';
import { CreateAccountRequest } from './create_account_req';
import { AccountsService } from './accounts.service';

@Controller('accounts')
export class AccountsController {

    constructor(private readonly accountService: AccountsService){}

    @Post()
    createAccount(@Body() account: CreateAccountRequest){
        return this.accountService.create(account);
    }
}
