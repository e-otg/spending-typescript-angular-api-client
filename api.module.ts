import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';


import { BudgetService } from './api/budget.service';
import { DictionariesService } from './api/dictionaries.service';
import { DisposersService } from './api/disposers.service';
import { GoogleAnalyticStatisticService } from './api/googleAnalyticStatistic.service';
import { MapService } from './api/map.service';
import { PageableDisposersService } from './api/pageableDisposers.service';
import { RegionsService } from './api/regions.service';
import { ReportsService } from './api/reports.service';
import { StatisticService } from './api/statistic.service';
import { TransactionsService } from './api/transactions.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: [
    BudgetService,
    DictionariesService,
    DisposersService,
    GoogleAnalyticStatisticService,
    MapService,
    PageableDisposersService,
    RegionsService,
    ReportsService,
    StatisticService,
    TransactionsService ]
})
export class ApiModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders {
        return {
            ngModule: ApiModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: ApiModule,
                 @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }
    }
}
