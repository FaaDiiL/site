import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import type { Model } from 'mongoose'
import { Contact, type ContactDocument } from './contact.schema'
import type { CreateContactDto } from './contact.dto'

// Repository pattern — swap the implementation for any DB without touching service/controller
export abstract class ContactRepository {
  abstract save(dto: CreateContactDto): Promise<void>
}

@Injectable()
export class MongoContactRepository implements ContactRepository {
  constructor(
    @InjectModel(Contact.name) private readonly model: Model<ContactDocument>,
  ) {}

  async save(dto: CreateContactDto): Promise<void> {
    await this.model.create(dto)
  }
}
