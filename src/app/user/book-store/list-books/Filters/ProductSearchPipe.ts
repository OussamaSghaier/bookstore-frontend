import {Pipe, PipeTransform } from '@angular/core';
import { IBook } from '../model/IBook';
@Pipe({
    name: 'productFilter'
})
export class ProductSearchPipe implements PipeTransform {
    transform(items: Array<IBook>, titleSearch: string) {
        if (items && items.length) {
            return items.filter(item => {
                if (titleSearch && item.title.toLowerCase().indexOf(titleSearch.toLowerCase()) === -1) {
                    return false;
                }

                return true;
           });
        } else {
            return items;
        }
    }
}
