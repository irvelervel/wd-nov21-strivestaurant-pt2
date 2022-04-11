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

  render() {
    return (
      <Form>
        <Form.Group>
          <Form.Label>Your name</Form.Label>
          <Form.Control type="text" placeholder="Put here your name" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Your phone</Form.Label>
          <Form.Control type="tel" placeholder="Put here your phone number" />
        </Form.Group>
        <Form.Group>
          <Form.Label>How many are you?</Form.Label>
          <Form.Control as="select">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Check type="checkbox" label="Do you smoke?" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Date of the reservation</Form.Label>
          <Form.Control type="datetime-local" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Do you have any special request?</Form.Label>
          <Form.Control as="textarea" rows={4} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    )
  }
}

export default ReservationForm
