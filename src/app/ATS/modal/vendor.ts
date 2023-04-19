export class Vendor {
    id!: number;
    company_name!:string;
    recruiter_name!:string;
    cp_mobile!:string;
    cpemail!:string;
    headQuarters!:string;
    vendortype!:string;
    details!:string;
    status:number=1;
    createddate!:string;
    remarks!:string;
    addedbyname!:string;
    addedby = localStorage.getItem('userid');
	updatedby = localStorage.getItem('userid');
}