const table = document.querySelector('.table'),
tbody = table.tBodies[0];
const users = [
{ id: 1, name: 'Павел', login: 'Pavel', role: 'менеджер', action: '' },
{ id: 2, name: 'Егор', login: 'Pavel', role: 'менеджер', action: '' },
{ id: 3, name: 'Дмитрий', login: 'Pavel', role: 'менеджер', action: '' },
{ id: 4, name: 'Петр', login: 'Pavel', role: 'менеджер', action: '' },
];
 
const data = [
{ id: 1,
id_user: 1,
task: "корректировка",
execution_time: 2,
real_time: 170,
date:'2017-08-10'
},
 
 
{
id: 2,
id_user: 2,
task: "корректировка",
execution_time: 2,
real_time: 24,
date:'2017-08-15'} ,
{
id: 3,
id_user: 3,
task: "корректировка",
execution_time: 2,
real_time: 3,
date:'24-08-2021'
},
{
id: 4,
id_user: 2,
task: "корректировка",
execution_time: 2,
real_time: 3, 
date:'2017-08-10'
},
{
id: 5,
id_user: 3,
task: "корректировка",
execution_time: 2,
real_time: 3,
date:'2017-08-10'
}, 
 
{ id: 6,
id_user: 4,
task: "корректировка",
execution_time: 2,
real_time: 170,
date:'2017-08-10'
},


 
{ id: 7,
id_user: 4,
task: "корректировка",
execution_time: 2,
real_time: 170,
date:'2017-09-11'
},
{ id: 8,
    id_user: 4,
    task: "корректировка",
    execution_time: 2,
    real_time: 170,
    date:'2017-07-11'
    },
    { id: 9,
        id_user: 1,
        task: "корректировка",
        execution_time: 2,
        real_time: 170,
        date:'2017-07-11'
        },
        { id: 10,
            id_user: 2,
            task: "корректировка",
            execution_time: 2,
            real_time: 170,
            date:'2017-07-11'
            },
];
 
const Junestart="2017-08-01";
const Juneend ="2017-08-30";
const Julystart="2017-07-01";
const Julyend ="2017-07-30";

 
const juneFilter = new Filter(data);
const juneArr=juneFilter.filterDate(Junestart,Juneend);
console.log(juneArr);

const julyFilter = new Filter(data);
const julyArr=julyFilter.filterDate(Julystart,Julyend);
console.log(julyArr);
//здесь нахожу сумму отработанного времени у определенного пользователя


function reduceArr(arr){
const summed = arr.reduce((acc, { id_user, real_time,}) => {
    let user = acc[id_user];
    if (!user)
    user = acc[id_user] = { real_time: 0,};
     
    user.real_time += real_time;
     
    return acc;
    }, {});
return summed;
}
//массивы по месяцам
    const summedJune = reduceArr(juneArr);
 console.log(summedJune);
 const summedJuly = reduceArr(julyArr);
 console.log(summedJuly);

 const timeMonth=(hour,timeHour,)=>{
    let hours = hour;
    if(timeHour>hours) {const res=hours-timeHour;
    return res;
    }else{
    return 0;
    }
     
    }

 

//создаю таблицу со значениями
const renderTable = (arr) => {
for (const user of users) {


    const timeHour = arr[user.id].real_time;
    const timeDay = arr[user.id].real_time /=8;
  
 
const tr = tbody.insertRow();
tr.insertCell().textContent = user.id;
tr.insertCell().textContent = user.name;
tr.insertCell().textContent = `${timeHour}ч. (${timeDay}дн.)` ;
tr.insertCell().textContent = `${timeMonth(160,timeHour)} (${timeHour})`;
}
}
renderTable(summedJune);
renderTable(summedJuly);
    

   
