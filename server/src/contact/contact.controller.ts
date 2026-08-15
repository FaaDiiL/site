import { Body, Controller, HttpCode, Post } from '@nestjs/common'
import { ContactService } from './contact.service'
import { CreateContactDto } from './contact.dto'

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post()
  @HttpCode(200)
  async send(@Body() dto: CreateContactDto): Promise<{ success: boolean }> {
    await this.contactService.send(dto)
    return { success: true }
  }
}
