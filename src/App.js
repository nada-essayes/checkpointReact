import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { component} from 'react';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import ReactDOM from 'react-dom';

class App extends React.Component {
  state={
    nom:"",
    prenom:"",
    cin:"",
    telephone:"",
    adresse:"",
    email:""
  }

 
  handleSubmit(event) {
    alert('Votre inscription est validée !');
    event.preventDefault();
  }
render() {
  return (
   
    <div className="Formulaire"  >
      <h1  class="text-primary"><center>Formulaire d'Inscription</center></h1>
      <Container >
      <form onSubmit={this.handleSubmit} class="p-3 mb-2 bg-light text-dark">
          <Form.Group controlId="form.nom" >
            <Form.Label class="text-primary"><b>Nom</b></Form.Label>
            <Form.Control type="text" placeholder="saisir votre nom"  required   maxlength="20" pattern="^[a-zA-Z ]*$"/>
          </Form.Group>
          
          <Form.Group controlId="form.prenom" >
            <Form.Label class="text-primary"><b>Prénom</b></Form.Label>
            <Form.Control type="text" placeholder="saisir votre prénom" required maxlength="20" pattern="^[a-zA-Z ]*$"/>
          </Form.Group>

          <Form.Group controlId="form.cin" >
            <Form.Label class="text-primary"><b>CIN</b></Form.Label>
            <Form.Control  type="int" placeholder="saisir CIN" required minlength="8" maxlength="8" pattern="[0-9]{8}" />
          </Form.Group>

          <Form.Group controlId="form.tel">
            <Form.Label class="text-primary"><b>Téléphone</b> </Form.Label>
            <Form.Control type="int" placeholder="saisir votre téléphone"  required minlength="8" maxlength="8"  pattern="[0-9]{8}" />
          </Form.Group>

          <Form.Group controlId="form.adress">
            <Form.Label class="text-primary"><b>Adresse</b> </Form.Label>
            <Form.Control type="texte" placeholder="saisir votre adresse" required />
          </Form.Group>
          
          <Form.Group controlId="form.email" >
            <Form.Label class="text-primary"><b>Email</b> </Form.Label>
            <Form.Control type="email" placeholder="saisir votre email" required />
          </Form.Group>
          
          <Form.Group controlId="form.sexe" required>
            <div class="form-row">
              <div class="col-6 col-sm-4 form-group">
                <Form.Label class="text-primary"><b>Sexe </b></Form.Label>
              </div>
              <div class="col-6 col-sm-8 form-group">
                <select name="sexe">
                  <option value="F" placeholder=".col-6 .col-sm-4">Féminin</option>
                  <option value="M" placeholder=".col-6 .col-sm-4">Masculin</option>
              </select>
              </div>
            </div> 
          </Form.Group>

         
          <div class="form-group">
            <div class="row">
              <div class="col-md-1 offset-md-11">
              
                 <button class="btn btn-primary" >submit</button>
              </div>
            </div>
          </div>
          
      </form>
      </Container>
         
      
    </div>
  )
}
}

ReactDOM.render(<App />, document.getElementById('root'));
export default App;



