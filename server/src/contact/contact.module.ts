import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { ContactController } from './contact.controller'
import { ContactService } from './contact.service'
import { Contact, ContactSchema } from './contact.schema'
import { ContactRepository, MongoContactRepository } from './contact.repository'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Contact.name, schema: ContactSchema }]),
  ],
  controllers: [ContactController],
  providers: [
    ContactService,
    { provide: ContactRepository, useClass: MongoContactRepository },
  ],
})
export class ContactModule {}
