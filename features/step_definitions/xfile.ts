var normalize = (date: number) => {
    if (date < 9) {
        var norm = '0'+date  
    } else {
        norm = date.toString()
    }
    return norm
} 

var analysisName = () => {
    var today = new Date();
    var date = normalize(today.getFullYear()) + normalize(today.getMonth()+1) + normalize(today.getDate());
    var time = normalize(today.getHours()) + normalize(today.getMinutes()) + normalize(today.getSeconds())
    var dateTime = date+time;
    var final = 'Aforo'+'_'+dateTime
    console.log(final)
    return final
    
}

analysisName()

