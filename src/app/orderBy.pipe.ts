import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { sortBy, pipe, prop, reverse } from 'ramda';

@Pipe ({name: 'orderBy', pure: false})

@Injectable()
export class OrderBy implements PipeTransform {
    
    transform(records: Array<any>, args:any = '+'): any {
        records = sortBy(
            pipe(
                prop("main"),
                prop("temp")
            )
        )(records)
        
        if(args == '-') {
            records = reverse(records)
        }
        
        return records;
    }
}