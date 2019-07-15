import React, { Component } from 'react'

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
    render() {
        return (
        <section>
            <div className="triangle">

            </div>
            <div className="w-1/2 overflow-y-auto h-64">
                        <div className="flex mx-auto w-4/5 justify-center items-baseline">
                            <label className="block text-blue-900 text-sm font-semibold mb-2">Search:</label>
                            <input className="bg-blue-100 rounded p-1 border-blue-100 mx-auto" onChange={(e)=>this.handleSearch(e)} type="text" placeholder=""/>
                        </div>
                       
                        {
                            this.state.filtered.map((value, i)=>{
                                return(
                                    this.state.values.includes(value)?(
                                        <div key={value.id} className={i%2 === 0?"flex my-1 items-baseline py-1 bg-blue-200 font-semibold" :"flex my-1 items-baseline py-1  font-semibold" }>
                                            <input onChange={(e)=>this.assignValue(e, value)} 
                                            className=" ml-10 mr-6" 
                                            type="checkbox" 
                                            name="size" 
                                            value={value.name}
                                            checked
                                            />
                                            <label className="text-left block text-blue-900 text-md mb-2">{value.name}</label> 
                                        </div>
                                    ):(
                                        <div key={value.id} className={i%2 === 0?"flex my-1 items-baseline py-1 bg-blue-200 font-semibold" :"flex my-1 items-baseline py-1  font-semibold" }>
                                            <input onChange={(e)=>this.assignValue(e, value)} className=" ml-10 mr-6" type="checkbox" name="size" value={value.name}/><label className="text-left block text-blue-900 text-md mb-2">{value}</label> 
                                        </div>
                                    )
                            )})
                        }
            </div>
        </section>
    )
}
}
