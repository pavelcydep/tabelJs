class Reduce {
	constructor(month) {
		this.month=month;
	}


reduceArr(){
 this.month.reduce((acc, { id_user, real_time,}) => {
    let user = acc[id_user];
    if (!user)
    user = acc[id_user] = { real_time: 0,};
     
    user.real_time += real_time;
     
    return acc;
    }, {});}
}