import { Component } from "react";

import DestinationItem from "../DestinationItem";

import Items from "./ItemsList";

class HomePage extends Component{
    state={searchInput:'' , destinationList:Items}

    changeInput =async (e)=>{
        console.log(e.target.value)
        await this.setState({searchInput:e.target.value})
       this.changeDestinationsList()
    }

    changeDestinationsList = ()=>{
        let {searchInput} = this.state 
        searchInput = searchInput.toLowerCase()
       
        function findInclusion(item){
            let name = item.name
            name  = name.toLowerCase()
           
            return name.includes(searchInput)
        }   

        const newList = Items.filter(findInclusion)
        this.setState({destinationList:newList})
    }
    
    render(){
        const {searchInput , destinationList} = this.state
        return <div>
            <h1>Destination Search</h1>
            <input type='search' onChange={this.changeInput} value={searchInput} />
            <ul>
                {
                    destinationList.map((destination)=><DestinationItem key={destination.id} destinationDetails = {destination} />)
                }
            </ul>
        </div>
    }
}

export default HomePage