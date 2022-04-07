import { Component } from 'react'

interface props {
    navigation: any
}

interface state {
    strLot: string;
    error: string;
}

export default class EnterLotController extends Component<props, state> {
    constructor(props: any) {
        super(props);
        this.state = {
            strLot: '',
            error: '',
        }
    }

    validateInput = (strLot: string) => {
        if (strLot === '') {
            this.setState({ error: "Please enter lot" })
        } else {
            let isnum = /^\d+$/.test(strLot);

            if (isnum) {
                let num = Number(strLot);

                if (num < 10) {
                    this.setState({ error: "Lot number should be greater than 10" })
                    return false;
                } else if (num > 100) {
                    this.setState({ error: "Lot number should not be greater than 100" })
                    return false;
                }
                this.setState({ error: "" })
                return true;

            } else {
                this.setState({ error: "Lot number accepts numbers only." })
                return false;
            }
        }
    }


    onChangeTextNumLot = (val: string) => {
        this.setState({ strLot: val });
    }

    onPressSubmit = () => {
        let lot = this.state.strLot
        let success = this.validateInput(lot);
        if (success) {
            let numLot = Number(lot);
            this.setState({ error: "", strLot: '' })
            this.props.navigation.navigate('Home', { item: numLot })
        }
    }
}