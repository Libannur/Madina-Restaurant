import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { deletStaff } from '../api/staffData';

function StaffCard({ staffObj, onUpdate }) {
  // FOR DELETE, WE NEED TO REMOVE THE Staff AND HAVE THE VIEW RERENDER,
  // SO WE PASS THE FUNCTION FROM THE PARENT THAT GETS THE AUTHORS
  const deleteThisStaff = () => {
    if (window.confirm(`Delete ${staffObj.first_name} ${staffObj.last_name}?`)) {
      deletStaff(staffObj.firebaseKey).then(() => onUpdate());
    }
  };

  return (
    <Card style={{ width: '24rem', margin: '10px' }}>
      <Card.Body style={{ backgroundColor: 'cadetblue' }}>
        <Card.Title>{staffObj.first_name} {staffObj.last_name}</Card.Title>
        <Card.Title>{staffObj.position_name}</Card.Title>
        {/* DYNAMIC LINK TO VIEW THE Staff DETAILS  */}
        <Link href={`/staff/${staffObj.firebaseKey}`} passHref>
          <Button variant="primary" className="m-2">VIEW</Button>
        </Link>
        {/* DYNAMIC LINK TO EDIT THE Staff DETAILS  */}
        <Link href={`/staff/edit/${staffObj.firebaseKey}`} passHref>
          <Button variant="info">EDIT</Button>
        </Link>
        <Button variant="danger" onClick={deleteThisStaff} className="m-2">
          DELETE
        </Button>
      </Card.Body>
    </Card>
  );
}

StaffCard.propTypes = {
  staffObj: PropTypes.shape({
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    position_name: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default StaffCard;
