import moment from 'moment'

export function calculatePayment(startDate: string, endDate: string){
    var start = moment(startDate); // another date
    var end = moment(endDate); // another date

    var duration = moment.duration(end.diff(start));
    var asMinutes = duration.asMinutes()
    var asHours = duration.asHours()

    console.log("duration", duration);
    console.log("asMinutes", asMinutes);

    var baseAmt : number = 20;
    var paymentAmt = 0;
    if(asMinutes <= 60) {
        paymentAmt = baseAmt;
    } else {
        var hour = Math.floor(asHours);
        hour = hour - 2
        if(hour >= 1) {
            paymentAmt = baseAmt + (hour * 10);
        } else {
            paymentAmt = baseAmt;
        }
    }
    return paymentAmt;
}

// module.exports = calculatePayment;