import { Injectable } from '@nestjs/common'
import { ContactRepository } from './contact.repository'
import type { CreateContactDto } from './contact.dto'

@Injectable()
export class ContactService {
  constructor(private readonly repo: ContactRepository) {}

  async send(dto: CreateContactDto): Promise<void> {
    await this.repo.save(dto)
  }
}
