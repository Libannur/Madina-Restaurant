// This Lines import neccessary dependencies.
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import { createStaff, updateStaff } from '../../api/staffData';
import getPosition from '../../api/positionData';

// TODO: Defines the initail State for the from in
const initialState = {
  first_name: '',
  last_name: '',
  position_id: '',
};

// Form component that takes an (obj) prop
function StaffForm({ obj }) {
  const [formInput, setFormInput] = useState(initialState);
  const [positions, setPosition] = useState([]);
  const router = useRouter();
  const { user } = useAuth();

  // Fetches staff data and set form input if editing
  useEffect(() => {
    getPosition().then(setPosition);

    if (obj.firebaseKey) setFormInput(obj);
  }, [obj, user]);

  // Updates form state when inputs change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Hnadles form submission, either updating or creating a staff member
  const handleSubmit = (e) => {
    e.preventDefault();
    if (obj.firebaseKey) {
      updateStaff(formInput).then(() => router.push('/staff'));
    } else {
      const payload = { ...formInput, uid: user.uid };
      createStaff(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateStaff(patchPayload).then(() => {
          router.push('/');
        });
      });
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2 className="text-white mt-5">{obj.firebaseKey ? 'Update' : 'Create'} Staff</h2>

      {/* FIRST NAME INPUT  */}
      <FloatingLabel controlId="floatingInput1" label="First Name" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter staff's first name"
          name="first_name"
          value={formInput.first_name}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* LAST NAME INPUT  */}
      <FloatingLabel controlId="floatingInput1" label="Last Name" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter the staff's last name"
          name="last_name"
          value={formInput.last_name}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      <FloatingLabel controlId="floatingSelect" label="Position">
        <Form.Select
          aria-label="Position"
          name="position_id"
          onChange={handleChange}
          className="mb-3"
          value={formInput.position_id}
          required
        >
          <option value="">Select Position</option>
          {
            positions.map((staff) => (
              <option
                key={staff.position_id}
                value={staff.position_id}
              >
                {staff.position_id}
              </option>
            ))
          }
        </Form.Select>
      </FloatingLabel>

      {/* SUBMIT BUTTON  */}
      <Button type="submit">{obj.firebaseKey ? 'Update' : 'Create'} Staff</Button>
    </Form>
  );
}

// Defines the expected prop types for type checking
StaffForm.propTypes = {
  obj: PropTypes.shape({
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    position_id: PropTypes.string,
    firebaseKey: PropTypes.string,
  }),
};

// sets default props if none are provided.
StaffForm.defaultProps = {
  obj: initialState,
};

export default StaffForm;
