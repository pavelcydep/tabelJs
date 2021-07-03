
class Filter {
	constructor(data) {
		this.data=data;
	}

    filterDate (start,end) {
        this.data=[];
        let s=new Date(start);
        let e=new Date(end);
        let resDates=[];
        data.forEach((dateStr=>{
        let date=new Date(dateStr.date)
        if(date>=s && date<=e){
        resDates.push(dateStr)
        }
        }))
        return resDates;
        }}



