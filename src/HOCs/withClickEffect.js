import React, {Component} from "react"

class Clicker extends Component {
    state = {
        transform: "translateY(2px)",
        boxShadow: "none"
    }

    handleClickDown = (e) => {
        this.setState({
            transform: "translateY(-2px)",
            boxShadow: "0px 3px #322c2d"
        })
        e.target.style.transform = this.state.transform
        e.target.style.boxShadow = this.state.boxShadow
    }

    handleClickUp = (e) => {
        this.setState({
            transform: "translateY(2px)",
            boxShadow: "none"
        })
        e.target.style.transform = this.state.transform
        e.target.style.boxShadow = this.state.boxShadow
    }
    
    render(){
        const {component: C, ...props} = this.props
        return <C handleClickDown={this.handleClickDown} handleClickUp={this.handleClickUp} {...props} />
    }
}
export function withClickEffect(component) {
    return function(props) {
        return (
            <Clicker component={component} {...props}/>
        )
    }
}