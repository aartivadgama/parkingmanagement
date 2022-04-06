import { PureComponent } from 'react'

interface props {

}

interface state {
}

export default class HomeController extends PureComponent<props, state> {
    constructor(props: any) {
        super(props);
        this.state = {
        }
    }

    validateInput = (str : string) => {
        if(str === '') {
            return false;
        } else {
            return true;
        }
    }
}