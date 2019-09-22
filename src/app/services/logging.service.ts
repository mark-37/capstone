import { Injectable } from '@angular/core';

import { LoggerBuilder, LogLevel, ConsoleMessageHandler, LoggerConfigurationBuilder } from "simplr-logger";
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})

export class LoggingService {

     private logger = new LoggerConfigurationBuilder()
     .SetDefaultLogLevel( environment.production ? LogLevel.Warning : LogLevel.Trace )
     .AddWriteMessageHandlers([
        { Handler: new ConsoleMessageHandler() }])
     .Build();

    constructor() {  }

    setLoggerConfiguration() {
        return this.logger.Prefix = 'Hello';
    }

    getLogger() {
      return new LoggerBuilder(this.logger);
    }

}
