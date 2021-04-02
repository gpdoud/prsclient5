import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../user/user.class';

@Pipe({
  name: 'searchUsers'
})
export class SearchUserPipe implements PipeTransform {

  transform(users: User[], searchCriteria: string = ''): User[] {
    if(searchCriteria.length == 0) return users;
    searchCriteria = searchCriteria.toLowerCase();
    let selectedUsers: User[] = [];
    for(let user of users) {
      if(
          user.id.toString().toLowerCase().includes(searchCriteria)
          || user.username.toLowerCase().includes(searchCriteria)
          || user.firstname.toLowerCase().includes(searchCriteria)
          || user.lastname.toLowerCase().includes(searchCriteria)
          || (user.phoneNumber != null && user.phoneNumber.toLowerCase().includes(searchCriteria))
          || (user.email != null && user.email.toLowerCase().includes(searchCriteria))
      ) {
        selectedUsers.push(user);
      }
    }
    return selectedUsers;
  }

}
