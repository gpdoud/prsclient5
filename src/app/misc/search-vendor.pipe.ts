import { Pipe, PipeTransform } from '@angular/core';
import { Vendor } from '../vend/vendor.class';

@Pipe({
  name: 'searchVendors'
})
export class SearchVendorPipe implements PipeTransform {

  transform(vendors: Vendor[], searchCriteria: string = ''): Vendor[] {
    if(searchCriteria.length == 0) return vendors;
    searchCriteria = searchCriteria.toLowerCase();
    let selectedVendors: Vendor[] = [];
    for(let vendor of vendors) {
      if(
          vendor.id.toString().toLowerCase().includes(searchCriteria)
          || vendor.code.toLowerCase().includes(searchCriteria)
          || vendor.name.toLowerCase().includes(searchCriteria)
          || vendor.address.toLowerCase().includes(searchCriteria)
          || vendor.city.toLowerCase().includes(searchCriteria)
          || vendor.state.toLowerCase().includes(searchCriteria)
          || vendor.zip.toLowerCase().includes(searchCriteria)
          || (vendor.phoneNumber != null && vendor.phoneNumber.toLowerCase().includes(searchCriteria))
          || (vendor.email != null && vendor.email.toLowerCase().includes(searchCriteria))
      ) {
        selectedVendors.push(vendor);
      }
    }
    return selectedVendors;
  }

}
