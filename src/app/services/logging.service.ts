import { Injectable } from '@angular/core';

import {createLogger, format, transports} from 'winston';

@Injectable({
    providedIn: 'root'
})

export class LoggingService {
    logger = createLogger({
        transports: [
            new transports.Console(),
            new transports.File({ filename: 'combined.log' })
        ]
    });

    // https://www.npmjs.com/package/simplr-logger

    constructor() {  }

    getWinston() {
     return this.logger;
    }

}
