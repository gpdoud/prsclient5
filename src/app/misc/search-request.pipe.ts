import { Pipe, PipeTransform } from '@angular/core';
import { Request } from '../req/request.class';

@Pipe({
  name: 'searchRequests'
})
export class SearchRequestPipe implements PipeTransform {

  transform(requests: Request[], searchCriteria: string = ''): Request[] {
    if(searchCriteria.length == 0) return requests;
    searchCriteria = searchCriteria.toLowerCase();
    let selectedRequests: Request[] = [];
    for(let request of requests) {
      if(
          request.id.toString().toLowerCase().includes(searchCriteria)
          || request.description.toLowerCase().includes(searchCriteria)
          || request.justification.toLowerCase().includes(searchCriteria)
          || (request.rejectionReason != null && request.rejectionReason.toLowerCase().includes(searchCriteria))
          || request.status.toLowerCase().includes(searchCriteria)
          || request.total.toString().toLowerCase().includes(searchCriteria)
      ) {
        selectedRequests.push(request);
      }
    }
    return selectedRequests;
  }

}
