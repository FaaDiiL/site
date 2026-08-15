import { Injectable, InternalServerErrorException, Logger } from '@nestjs/common'
import { ContactRepository } from './contact.repository'
import type { CreateContactDto } from './contact.dto'

@Injectable()
export class ContactService {
  private readonly logger = new Logger(ContactService.name)

  constructor(private readonly repo: ContactRepository) {}

  async send(dto: CreateContactDto): Promise<void> {
    try {
      await this.repo.save(dto)
    } catch (error) {
      this.logger.error(
        'Failed to save contact message',
        error instanceof Error ? error.stack : undefined,
      )
      throw new InternalServerErrorException('Could not send message')
    }
  }
}
