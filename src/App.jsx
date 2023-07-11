import React, { useState } from "react";
import axios from "axios";



function App(){

    const [localColour, setLocalColour] = useState("white");

     function handleSubmit(event){
        event.preventDefault();
        console.log("colour before post: " + localColour)
        console.log("button clicked: " + event.nativeEvent.submitter.name)

        axios.post("https://button-colours.onrender.com/", {
                colour: event.nativeEvent.submitter.name
            })
            .then(function (response) {
                console.log("colour sent to server: " + event.nativeEvent.submitter.name);
                getData();
            })
            .catch(function (error) {
                console.log(error);
            });
    }
            

        
            
        

        async function getData() {
            axios.get("https://button-colours.onrender.com/")
                .then(function (response) {
                    // handle success
                    console.log("colour recieved from server: " + response.data.colour);
                    setLocalColour(response.data.colour)

                    
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
                .finally(function () {
                    // always executed
                });
          }

    


    return(
        <div className={"body " + localColour}>
            <p>
                The purpose of this app is to practicse integrating a react frontend with an express
                backend. When the buttons are clicked a POST request is sent to the server updating a 
                colour variable. The frontend then uses a GET request to read the updated value, change 
                state and change the colour of the background. All without refreshing the page.
            </p>
            <div className="main" >
                <form onSubmit={handleSubmit} className="container">
                    <button name = "red"></button>
                    <label>Red</label>
                    <button name = "yellow"></button>
                    <label>Yellow</label>
                    <button name = "green"></button>
                    <label>Green</label>
                </form>
                
            </div>
        </div>
    )
    
}

export default App;