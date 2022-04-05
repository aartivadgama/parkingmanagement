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

    validateEmail = (email : string) => {
        console.log("Hiiii");
        if(email === ''){
            console.log("Please enter email");
            return false;
        } else {
            console.log("Email is valid");
            return true;
        }
    }
}