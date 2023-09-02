import 'reflect-metadata';
import {Service} from "typedi";
import {Instrument} from "../model/Instrument";

@Service('instrument.repository')
export class InstrumentRepository {
    instruments: Instrument[] = [new Instrument(1, 'Guitar', 'String'),
        new Instrument(2, 'Piano', 'Keyboard'),
        new Instrument(3, 'Ukulele', 'String')
    ];

    findAll(): Promise<Instrument[]> {
        return Promise.resolve(this.instruments);
    }
}
