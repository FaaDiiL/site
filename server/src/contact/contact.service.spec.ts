import { InternalServerErrorException } from '@nestjs/common'
import { Test } from '@nestjs/testing'
import { ContactRepository } from './contact.repository'
import { ContactService } from './contact.service'

describe('ContactService', () => {
  const dto = { name: 'Fadil', email: 'fadil@example.com', message: 'Hej' }
  const repo = { save: jest.fn() }

  let service: ContactService

  beforeEach(async () => {
    repo.save.mockReset()
    const module = await Test.createTestingModule({
      providers: [
        ContactService,
        { provide: ContactRepository, useValue: repo },
      ],
    }).compile()
    service = module.get(ContactService)
  })

  it('saves the contact message', async () => {
    repo.save.mockResolvedValue(undefined)
    await service.send(dto)
    expect(repo.save).toHaveBeenCalledWith(dto)
  })

  it('throws InternalServerErrorException when save fails', async () => {
    repo.save.mockRejectedValue(new Error('insert forbidden'))
    await expect(service.send(dto)).rejects.toBeInstanceOf(
      InternalServerErrorException,
    )
  })
})
