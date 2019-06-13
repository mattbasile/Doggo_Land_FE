import React, { Component } from 'react'

export default class DogRequestForm extends Component {
    constructor(props){
        super(props);
        this.state={
            name:"",
            age:"",
            bio:"",
            gender: "",
            size: "",
            breeds: [],
            addingBreed: false,
            newBreed: "",
            err: false,
            filtered: []
        }
    }
    handleSearch(e) {
    let currentList = [];
    let newList = [];
    if (e.target.value !== "") {
      // Assign the original list to currentList
      currentList = this.props.breeds;
        // Use .filter() to determine which items should be displayed
        // based on the search terms
      newList = currentList.filter(item => {
                // change current item to lowercase
                const lc = item.name.toLowerCase();
                    // change search term to lowercase
                const filter = e.target.value.toLowerCase();
                    // check to see if the current list item includes the search term
                    // If it does, it will be added to newList. Using lowercase eliminates
                    // issues with capitalization in search terms and search content
                return lc.includes(filter);
      });
    } else {
            // If the search bar is empty, set newList to original task list
      newList = this.props.breeds;
    }
        // Set the filtered state based on what our rules added to newList
    this.setState({
      filtered: newList
    });
  }
    handleInput = e => {
         this.setState({ [e.target.name]: e.target.value});
    }
    handleAddDog = e =>{
        e.preventDefault();
        const boolGender = this.state.gender === "male" ? 1 : 0;
        const dog ={
            name: this.state.name,
            age: Number(this.state.age),
            bio: this.state.bio,
            size: this.state.size,
            male: boolGender,
            kennel_id: Number(this.props.kennel_id)
        }
        this.props.addDog(dog);
    }
    breedEditor = e =>{
        e.preventDefault();
        this.setState({addingBreed: true})
    }
    assignBreed = (e,breed )=>{
        let storedBreeds = this.state.breeds
        if(storedBreeds.includes(breed)){
            const index = storedBreeds.indexOf(breed);
            storedBreeds.splice(index, 1);
        }else{
            storedBreeds.push(breed)
        }
        this.setState({breeds:storedBreeds})
    }
    createNewBreed = ()=>{
      this.state.newBreed ? this.props.addBreed(this.state.newBreed) : this.setState({err: true})
      this.props.getBreeds()
    }
    componentDidMount() {
        this.setState({
          filtered: this.props.breeds
        });
      }
      
      componentWillReceiveProps(nextProps) {
        this.setState({
          filtered: nextProps.breeds
        });
      }
    render() {
        return (
            <>
            {this.state.addingBreed
            ?
            ( 
            <>
                <h2 className="modal-header my-4 text-center">Add Breeds</h2>
                <div className="flex">
                    <div className="w-1/2 overflow-y-auto h-64">
                        <input onChange={(e)=>this.handleSearch(e)} type="text" placeholder="Search Breeds..."/>
                        {
                            this.state.filtered.map(breed=>{
                                return (<div key={breed.id} className={breed.id%2 === 0?"flex my-1 items-baseline py-1 bg-blue-200 font-semibold" :"flex my-1 items-baseline py-1  font-semibold" }>
                                <input onChange={(e)=>this.assignBreed(e, breed)} className=" ml-10 mr-6" type="checkbox" name="size" value={breed.name}/><label className="text-left block text-blue-900 text-md mb-2">{breed.name}</label> 
                            </div>)
                            })
                        }
                    </div>
                    <div className="w-1/2">
                        <span className="inline-block modal-header mt-6 mb-3">Breed not there?</span>
                        <div className="flex items-center justify-center">
                            <input className="bg-blue-100 rounded p-1 border-blue-100" type="text" onChange={(e)=>this.handleInput(e)} placeholder="Add a new breed" name="newBreed" />
                            <i onClick={()=>this.createNewBreed()}className="fas fa-plus-circle text-2xl ml-1 text-green-600 hover:text-green-800"></i>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
               
            </>
            )
            :
            (
            <>
            <h2 className="modal-header my-4 text-center">Add a Dog</h2>
            <form id="sub_form" className="w-full mx-auto flex">
                <div className="w-1/2">
                    <label className=" text-left px-10  block text-blue-900 text-sm font-semibold mb-2">Name:</label>
                    <input onChange={(e)=>this.handleInput(e)}className=" mx-10 w-3/4 rounded p-2 mb-6 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline" type="text" name="name"/>
                    <label className=" text-left px-10  block text-blue-900 text-sm font-semibold mb-2">Age:</label>
                    <input onChange={(e)=>this.handleInput(e)} className=" mx-10 w-3/4 rounded p-2 mb-6 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline" type="text" name="age"/>
                    <label className=" text-left px-10  block text-blue-900 text-sm font-semibold mb-2">Bio:</label>
                    <textarea onChange={(e)=>this.handleInput(e)} className=" mx-10 w-3/4 h-16 rounded p-2 mb-6 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline" form="sub_form" name="bio"/>
                </div>
                <div className="w-1/2">
                    <div>
                        <label className=" text-left px-10  block text-blue-900 text-sm font-semibold mb-2">Gender:</label>
                        <div className="flex my-1 items-baseline">
                            <input onChange={(e)=>this.handleInput(e)} className="ml-10 mr-6" type="radio" name="gender" value="male"/><label className="text-left block text-blue-900 text-md mb-2">Male</label> 
                        </div>
                        <div className="flex my-1 items-baseline">
                        <input onChange={(e)=>this.handleInput(e)} className=" ml-10 mr-6" type="radio" name="gender" value="female"/><label className="text-left block text-blue-900 text-md mb-2">Female</label> 
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col my-1">
                            <label className=" text-left px-10  block text-blue-900 text-sm font-semibold mb-2">Size:</label>
                            <div className="flex my-1 items-baseline">
                                <input onChange={(e)=>this.handleInput(e)} className=" ml-10 mr-6" type="radio" name="size" value="large"/><label className="text-left block text-blue-900 text-md mb-2">Large</label> 
                            </div>
                            <div className="flex my-1 items-baseline">
                                <input onChange={(e)=>this.handleInput(e)} className=" ml-10 mr-6" type="radio" name="size" value="medium"/><label className="text-left block text-blue-900 text-md mb-2">Medium</label>  
                            </div>
                            <div className="flex my-1 items-baseline">
                                <input onChange={(e)=>this.handleInput(e)} className=" ml-10 mr-6" type="radio" name="size" value="small"/><label className="text-left block text-blue-900 text-md mb-2">Small</label> 
                            </div>
                        </div>
                    </div>
                    <div className="px-10 flex flex-col">
                        <label className=" text-left block text-blue-900 text-sm font-semibold mb-2">Breeds:</label>
                        <button onClick={(e)=>this.breedEditor(e)} className="blue-background py-1 px-3 rounded text-white">Add Breeds</button>
                    </div>
                </div>
            </form>
            <button className="modal-button mt-4" onClick={(e)=>this.handleAddDog(e)}>
                    Submit
            </button>
            </>
            )}
            </>
        )
    }
}
