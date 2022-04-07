import { Component } from 'react'
import { lot } from '../model/lot';
import moment from 'moment'

interface props {
    navigation: any;
}

interface state {
    numLots: number;
    arrLot: Array<lot>;
    showDialog: boolean;
    showPaymentDialog: boolean;
    carNumber: string;
    error: string;
    dialogTitle: string;
    dialogMsg: string;
}

export default class HomeController extends Component<props, state> {
    constructor(props: any) {
        super(props);

        this.state = {
            numLots: props.route.params.item,
            arrLot: [],
            showDialog: false,
            carNumber: '',
            showPaymentDialog:false,
            error: '',
            dialogTitle: '',
            dialogMsg: '',
        }
    }

    componentDidMount() {
        this.setupAnArray();
    }

    setupAnArray = () => {
        const { numLots, arrLot } = this.state;

        for (let i = 0; i < numLots; i++) {
            let dic: lot = {
                id: `${i}`,
                carNum: "",
                isAlloted: false,
                inTime: new Date(),
            }
            arrLot.push(dic);
        }

        this.setState({});
        console.log("this", this.state.arrLot);
    }

    onChangeTextNumLot = (val: string) => {
        this.setState({ carNumber: val });
    }

    validateInput = (strLot: string) => {
        if (strLot === '') {
            this.setState({ error: "Please enter car number" })
            return false;
        } else {
            this.setState({ error: "" })
            return true;
        }
    }

    onPressAddCar = () => {
        let name: string = this.state.carNumber;

        let validate = this.validateInput(name);
        if (validate) {

            let filter = this.state.arrLot.filter(function (item) {
                return item.isAlloted == false;
            });

            if (filter.length > 0) {

                let min: number = 0;
                let max: number = (filter.length - 1);

                let random: number = min + (Math.random() * (max - min))
                console.log("random", random);
                var index = Math.floor(random);; //10

                var tmp: lot = filter[index];
                let arrIndex = Number(tmp.id);

                tmp.isAlloted = true;
                tmp.carNum = name;
                tmp.inTime = new Date();
                console.log(" new Date()",  new Date())

                this.state.arrLot[arrIndex] = tmp
                this.setState({ carNumber: "" });

            } else {
                this.setState({ showDialog: true, carNumber: "" });
            }
        }
    }

    onPressExitCar = (index: number) => {

        let obj = this.state.arrLot[index];
        let endDate = new Date();
        let strStart : string = `${obj.inTime}`
        let strEnd : string = `${endDate}`
        console.log("Hiii PayableAmount123", strStart, strEnd);

        let paymentAmt = this.calcPayment(strStart, strEnd);
        console.log("Hiii PayableAmount", paymentAmt);

        obj.isAlloted = false;
        obj.carNum = '';
        obj.inTime = new Date();

        let msg = `Your payable amount is ${paymentAmt}`

        this.state.arrLot[index] = obj;
        this.setState({dialogMsg: msg, showPaymentDialog: true});
    }

    onPressPay = () => {
        this.setState({ showPaymentDialog: false });
    }

    calcPayment = (startDate: string, endDate: string) => {
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
}