export class Vendor2 {
    vmsid!:number;
	company!:string;
    location1!:string;
    location2!:string;
    city!:string;
    state!:string;
    zipcode!:string;
    fed_id!:string;
    tyretype!:string;
    vendortype!:string;
    client!:string;
    status!:string;
    createddate!:string;
    updateddate!:string;
    addedby = localStorage.getItem('userid');
	updatedby = localStorage.getItem('userid');
    role!:number;//localStorage.getItem('roleId');
    remarks!:string;
    details!:string;
    vms_stat!:string;
    addedbyname!:string;
    staff!:string;
	revenue!:string;
	website!:string;
	facebook!:string;
	industrytype!:string;
	linkedinid!:string;
	twitterid!:string;
}
