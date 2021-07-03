class Table{
	constructor() {
		this.sumMonth = sumMonth;
       
	}


    renderTable(timeMonth){
        for (const user of users) {
        const timeHour = this.sumMonth[user.id].real_time;
        const timeDay = this.sumMonth[user.id].real_time /=8;
         
       
         
        const tr = tbody.insertRow();
        tr.insertCell().textContent = user.id;
        tr.insertCell().textContent = user.name;
        tr.insertCell().textContent = `${timeHour}ч. (${timeDay}дн.)` ;
        tr.insertCell().textContent = `${timeMonth} (${timeHour})`;
        }
        }
    }