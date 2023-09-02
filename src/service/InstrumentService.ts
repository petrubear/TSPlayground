import 'reflect-metadata'
import { Inject, Service } from 'typedi'
import { Instrument } from '../model/Instrument'
import { InstrumentRepository } from '../repository/InstrumentRepository'

@Service('instrument.service')
export class InstrumentService {
  instrumentRepository: InstrumentRepository

  constructor(
    @Inject('instrument.repository')
    instrumentRepository: InstrumentRepository
  ) {
    this.instrumentRepository = instrumentRepository
  }

  async randomPractice(): Promise<Instrument> {
    const instruments = await this.instrumentRepository.findAll()
    const randomIndex = Math.floor(Math.random() * instruments.length)
    return Promise.resolve(instruments[randomIndex])
  }
}
