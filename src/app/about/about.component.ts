import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';
import { LoggingService } from '../services/logging.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() {
    const logger = new LoggingService();
    const Logger = logger.getLogger();
    
    Logger.Error('Information');
  }

  ngOnInit() {
  }

}
