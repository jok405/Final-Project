import React from 'react';
import { Input, FormInline, Button, FaPage } from 'mdbreact';


class InputPage extends React.Component {

  render () {
    return (
      <div className="container-fluid" style={{textAlign: 'initial'}}>
        <div>

          <Input icon="user"/>

          <Input label="Type your email" icon="envelope" group type="email" validate error="wrong" success="right"/>
          <Input label="Type your password" icon="lock" group type="password" validate/>

          <FormInline>

            <Button>Login</Button>
          

            <Input icon="fab fa-facebook" group type="password" validate />
          </FormInline>


        </div>
      </div>
    );
  }
}

export default InputPage;
