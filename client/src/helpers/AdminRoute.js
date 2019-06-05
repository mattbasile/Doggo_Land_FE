import React from 'react'
import {Redirect, Route} from 'react-router-dom'

export const AdminRoute =({component: Component, ...rest}) =>(
    <Route
    {...rest}
    render={(props)=>
    localStorage.getItem("authToken")?( 
    <Component {...props} />
   ) : (
       <Redirect
       to={{
           pathname: "/login",
           state: {from:props.location}
       }}
       />
   )

}
    />
)