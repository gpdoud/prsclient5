import { Pipe, PipeTransform } from '@angular/core';
import { Menu } from './menu.class';

@Pipe({
  name: 'reviewerFilter'
})
export class ReviewerFilterPipe implements PipeTransform {

  transform(menus: Menu[], reviewer: boolean = false): Menu[] {
    if(menus == null || reviewer) return menus;
    let selMenus: Menu[] = [];
    for(let menu of menus) {
      if(menu.display.toLowerCase().includes("Review".toLowerCase())) {
        continue;
      }
      selMenus.push(menu);
    }
    return selMenus;
  }

}
