import React,{Component} from 'react';
import {connect} from 'react-redux';
import store from '../../../store';
import { FormControl,Input,InputLabel,FormHelperText } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import {handleFormAction} from '../actions/form.actions';
import SUCCESS from '../../snackbars/components/success.component';
import ERROR from '../../snackbars/components/error.component';

class Form extends Component {
     constructor(props){
         super(props);
         this.state = {
            name:'',
            email:'',
            date:'',
            hour:'00:00',
            symptom:'',
            check:null
         }
     }

   handleName = (e) => {
     this.setState({
         name:e.target.value
     }) 
   }

   handleEmail = (e) => {
    this.setState({
        email:e.target.value
    })   
   }

   handleDate = (e) => {
    this.setState({
        date:e.target.value
    })  
   }

   handleTime = (e) => {
    this.setState({
        hour:e.target.value
    })     
   }
 

   handleSymptom = (e) => {
    this.setState({
        symptom:e.target.value
    }) 
   }

   handleSubmit = () => {
       const check = this.handleValidateEmail(this.state)
       if(!check){
           this.setState({
               check:false
           })
       }
       else{
        this.setState({
            check:true
        })
        const json = {
            "name":this.state.name,
            "email":this.state.email,
            "date":this.state.date,
            "hour":this.state.hour,
            "sympton":this.state.symptom 
         }
         store.dispatch(handleFormAction(json));  
       }      
   }  

   handleValidateEmail = (state) => {
       let validator =  require("email-validator");
       return validator.validate(state.email);
    }
     


   render(){
    return (
      <div className="item-form">
        <FormControl>
            <InputLabel htmlFor="input-name">Patient Name</InputLabel>
            <Input id="item-name" aria-describedby="my-helper-name" value={this.state.name} onChange={this.handleName} />
            <FormHelperText id="my-helper-name">Write your name.</FormHelperText>
        </FormControl>
        <FormControl>
            <InputLabel htmlFor="input-email">Patient Email</InputLabel>
            <Input id="item-email" aria-describedby="my-helper-email" value={this.state.email} onChange={this.handleEmail} />
            <FormHelperText id="my-helper-email">Write your email.</FormHelperText>
        </FormControl>
        <div className="item-date-form">
            <FormControl className="MuiFormControl-root">
                    <Input type='date'  id="item-date" aria-describedby="my-helper-date" value={this.state.date} onChange={this.handleDate} />
                    <FormHelperText id="my-helper-date">Write the date.</FormHelperText>   
            </FormControl>&nbsp;
            <FormControl>
                    <Input type='time'  id="item-time" aria-describedby="my-helper-time" value={this.state.hour} onChange={this.handleTime} />
                    <FormHelperText id="my-helper-time">Write the hour.</FormHelperText>   
            </FormControl>
        </div>
       
        <TextField
          id="outlined-multiline-static"
          label="Symptom"
          multiline
          rows="4"
          className="item-textarea"
          margin="normal"
          variant="outlined"
          onChange={this.handleSymptom}
          defaultValue={this.state.symptom}
        />

        <Button
            variant="contained"
            color="primary"
            endIcon={<Icon>send</Icon>}
            onClick={this.handleSubmit}
        >
        Send
      </Button>
      {this.state.check == false ? <ERROR></ERROR> :''}
      {this.state.check ? <SUCCESS></SUCCESS>:''}
      </div> 
       );
   }  
}

const mapStateToProps = (state) =>({
    form:state.data,
  }) 


export default connect(mapStateToProps,null) (Form);