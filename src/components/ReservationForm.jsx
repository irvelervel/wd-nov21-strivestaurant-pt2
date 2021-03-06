// I will create here my custom form
import { Form, Button } from 'react-bootstrap'
import { Component } from 'react'

// https://striveschool-api.herokuapp.com/api/reservation
// POST
// a valid reservation is made by the following properties:
// name <-- string
// phone <-- string | number
// numberOfPeople <-- string | number
// smoking <-- boolean
// dateTime <-- string
// specialRequests <-- string

class ReservationForm extends Component {
  state = {
    reservation: {
      name: '',
      phone: '',
      numberOfPeople: 1,
      smoking: false,
      dateTime: '',
      specialRequests: '',
    },
  }

  // the chained then() method
  //   submitReservation = (e) => {
  //     e.preventDefault() // this is preventing your browser from refreshing
  //     console.log('sending the reservation now!')
  // fetch('https://striveschool-api.herokuapp.com/api/reservation', {
  //   method: 'POST',
  //   body: JSON.stringify(this.state.reservation),
  //   headers: {
  //     'Content-Type': 'application/json',
  //     // this is specifying to the endpoint that we're sending
  //     // an object, even if the body is a string
  //     // if the endpoint is protected, here you'd also insert
  //     // your Bearer token
  //   },
  // })
  //       .then((response) => {
  //         console.log(response)
  //         // let's check the ok property
  //         if (response.ok) {
  //           // everything went ok!
  // alert('Reservation saved!')
  // // we'd like here to reset the form to its initial values
  // this.setState({
  //   reservation: {
  //     name: '',
  //     phone: '',
  //     numberOfPeople: 1,
  //     smoking: false,
  //     dateTime: '',
  //     specialRequests: '',
  //   },
  // })
  //         } else {
  //           // we encountered an error with the operation
  //           alert('error!')
  //         }
  //       })
  //       .catch((error) => console.log(error))
  //   }

  // the async/await method
  submitReservation = async (e) => {
    e.preventDefault()
    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/api/reservation',
        {
          method: 'POST',
          body: JSON.stringify(this.state.reservation),
          headers: {
            'Content-Type': 'application/json',
            // this is specifying to the endpoint that we're sending
            // an object, even if the body is a string
            // if the endpoint is protected, here you'd also insert
            // your Bearer token
          },
        }
      )
      if (response.ok) {
        // good job!
        alert('Reservation saved!')
        // we'd like here to reset the form to its initial values
        this.setState({
          reservation: {
            name: '',
            phone: '',
            numberOfPeople: 1,
            smoking: false,
            dateTime: '',
            specialRequests: '',
          },
        })
      } else {
        // aww snap!
        alert('error!')
        // I'll not reset the form in this case
      }
    } catch (error) {
      console.log(error)
      // this is conceptually equivalent to the last .catch() block
    }
  }

  render() {
    return (
      <Form onSubmit={this.submitReservation}>
        <Form.Group>
          <Form.Label>Your name</Form.Label>
          <Form.Control
            type="text"
            required
            placeholder="Put here your name"
            value={this.state.reservation.name}
            // initially is going to be ''
            onChange={(e) => {
              console.log(e.target.value)
              // how can I from here set a new state with my characters
              // as the new value of reservation.name?
              this.setState({
                reservation: {
                  ...this.state.reservation,
                  name: e.target.value,
                },
              })
            }}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Your phone</Form.Label>
          <Form.Control
            type="tel"
            required
            placeholder="Put here your phone number"
            value={this.state.reservation.phone}
            onChange={(e) => {
              this.setState({
                reservation: {
                  ...this.state.reservation,
                  phone: e.target.value,
                },
              })
            }}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>How many are you?</Form.Label>
          <Form.Control
            as="select"
            required
            value={this.state.reservation.numberOfPeople}
            onChange={(e) => {
              this.setState({
                reservation: {
                  ...this.state.reservation,
                  numberOfPeople: e.target.value,
                },
              })
            }}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Check
            type="checkbox"
            label="Do you smoke?"
            checked={this.state.reservation.smoking}
            onChange={(e) => {
              this.setState({
                reservation: {
                  ...this.state.reservation,
                  smoking: e.target.checked,
                },
              })
            }}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Date of the reservation</Form.Label>
          <Form.Control
            type="datetime-local"
            required
            value={this.state.reservation.dateTime}
            onChange={(e) => {
              this.setState({
                reservation: {
                  ...this.state.reservation,
                  dateTime: e.target.value,
                },
              })
            }}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Do you have any special request?</Form.Label>
          <Form.Control
            as="textarea"
            required
            rows={4}
            value={this.state.reservation.specialRequests}
            onChange={(e) => {
              this.setState({
                reservation: {
                  ...this.state.reservation,
                  specialRequests: e.target.value,
                },
              })
            }}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    )
  }
}

export default ReservationForm
