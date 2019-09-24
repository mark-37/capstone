import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';
import { LoggingService } from '../services/logging.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  private logger;

  constructor(private Logger: LoggingService) {
    this.logger = this.Logger.getLogger();
    this.logger = this.Logger.setLoggerConfiguration(this.logger, 'About Component: ');
  }

  ngOnInit() {
    
  }

}
