import { Injectable } from '@angular/core';

import { LoggerBuilder, LogLevel, ConsoleMessageHandler, LoggerConfigurationBuilder } from "simplr-logger";
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})

export class LoggingService {

    private logger;

    constructor() { }

    setLoggerConfiguration(_logger : LoggerBuilder, str ) {
        // return this.logger.Prefix = 'Hello';
        // return this.logger.SetPrefix('Hello');

        return _logger.UpdateConfiguration(builder => builder.SetPrefix(str).Build());
    }

    getLogger() {

        this.logger = new LoggerConfigurationBuilder()
        .SetDefaultLogLevel(environment.production ? LogLevel.Warning : LogLevel.Trace)
        .AddWriteMessageHandlers([
            { Handler: new ConsoleMessageHandler() }])
        .Build();

        
      return new LoggerBuilder(this.logger);
    }

}
