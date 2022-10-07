function getDateCurrent()
{
    var date = new Date();
    var current_date = date.getDate() + "/" + (date.getMonth()+1) + "/" +  
    date.getFullYear();

    return current_date;

}

function getTimeCurrent(){
    var time = new Time();
    var current_time = time.current_time;

    return current_time;
}

export {getDateCurrent, getTimeCurrent}