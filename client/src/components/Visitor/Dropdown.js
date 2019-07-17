import React, { Component } from 'react'
import './visitors_utils.css'

export default class Dropdown extends Component {
    constructor(props){
        super(props);
        this.state= {
            values: [],
            filtered: [],
        }
    }
    handleSearch(e) {
        let currentList = [];
        let newList = [];
        if (e.target.value !== "") {
          // Assign the original list to currentList
          currentList = this.props.values;
            // Use .filter() to determine which items should be displayed
            // based on the search terms
          newList = currentList.filter(item => {
                    // change current item to lowercase
                    const lc = item.toLowerCase();
                        // change search term to lowercase
                    const filter = e.target.value.toLowerCase();
                        // check to see if the current list item includes the search term
                        // If it does, it will be added to newList. Using lowercase eliminates
                        // issues with capitalization in search terms and search content
                    return lc.includes(filter);
          });
        } else {
                // If the search bar is empty, set newList to original task list
          newList = this.props.values;
        }
            // Set the filtered state based on what our rules added to newList
        this.setState({
          filtered: newList
        });
    }
    assignValue = (e, value )=>{
        console.log(value)
        let storedValues = this.state.values
        if(storedValues.includes(value)){
            const index = storedValues.indexOf(value);
            storedValues.splice(index, 1);
        }else{
            storedValues.push(value)
        }
        this.setState({values:storedValues})
    }
    componentDidMount() {
        this.setState({
          filtered: this.props.values.sort((a, b) => (a.name > b.name) ? 1 : -1)
        });
      }  
    componentWillReceiveProps(nextProps) {
    this.setState({
        filtered: nextProps.values.sort((a, b) => (a.name > b.name) ? 1 : -1)
    });
    }
    submitFilterHandle(){
        this.props.handleFilteringCards(this.props.selected, this.state.values[0])
    }


    render() {
        return (
        <section className="flex flex-col items-center w-3/5 rounded-lg">
            <div className="triangle">

            </div>
            <div className="w-1/2 overflow-y-auto dropdown-bg h-48 py-4">
                <div className="flex text-center w-full justify-center mb-3">
                    <span onClick={()=>this.submitFilterHandle()}className={this.state.values.length <1 ? "text-white blue-background h-full p-2 px-4 rounded-l-full text-xl hover:bg-red-600 cursor-not-allowed" :"text-white blue-background h-full p-2 px-4 rounded-l-full text-xl hover:bg-blue-600 cursor-pointer"}><i className="fa fa-search"></i></span>
                    <input className="bg-white rounded-r-full p-1 border-black w-3/5" onChange={(e)=>this.handleSearch(e)} type="text" placeholder=""/>
                </div>
                
                        {
                            this.state.filtered.map((value, i)=>{
                                return(
                                    this.state.values.includes(value)?(
                                        <div key={value.id} className="flex my-1 items-baseline py-1  font-semibold">
                                            <input onChange={(e)=>this.assignValue(e, value)} 
                                            className=" ml-10 mr-6" 
                                            type="checkbox" 
                                            // name={value} 
                                            value={value}
                                            checked
                                            />
                                            <label className="text-left block text-blue-900 text-md mb-2">{value}</label> 
                                        </div>
                                    ):(
                                        <div key={value.id} className="flex my-1 items-baseline py-1  font-semibold">
                                            <input onChange={(e)=>this.assignValue(e, value)} className=" ml-10 mr-6" type="checkbox" name="size" value={value.name}/><label className="text-left block text-blue-900 text-md mb-2">{value}</label> 
                                        </div>
                                    )
                            )})
                        }
                        {/* <button className="w-3/5 mx-auto bg-white blue-font py-2 block rounded hover:bg-blue-900 hover:text-white">Submit</button> */}
            </div>
        </section>
    )
}
}
