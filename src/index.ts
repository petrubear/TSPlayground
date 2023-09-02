import 'reflect-metadata'
import { Container, Inject, Service } from 'typedi'
import { InstrumentService } from './service/InstrumentService'

@Service('index')
class Index {
  instrumentService: InstrumentService

  constructor(
    @Inject('instrument.service') instrumentService: InstrumentService
  ) {
    this.instrumentService = instrumentService
  }

  randomPractice() {
    const instrument = this.instrumentService.randomPractice()
    instrument.then((i) => console.log(i))
  }
}

function main() {
  const index = Container.get<Index>('index')
  index.randomPractice()
}

main()
