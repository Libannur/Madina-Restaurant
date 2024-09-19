import { Button } from 'react-bootstrap';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getStaff } from '../api/staffData';
import { useAuth } from '../utils/context/authContext';
import StaffCard from '../components/StaffCard';

function Staff() {
  // DONE: Set a state for staff
  const [staffs, setStaff] = useState([]);

  // DONE: Get user ID using useAuth Hook
  const { user } = useAuth();

  // DONE: create a function that makes the API call to get all the staff
  const getAllStaff = () => {
    getStaff(user.uid).then(setStaff);
  };

  // DONE: make the call to the API to get all the staff on component render
  useEffect(() => {
    getAllStaff();
  });

  return (
    <div
      className="text-center my-4"
      style={{
        marginBottom: '10px',
      }}
    >
      <Link href="/staff/new" passHref>
        <Button>Add an Staff</Button>
      </Link>
      <div className="d-flex flex-wrap">
        {/* DONE: map over staff here using AuthorCard component */}
        {staffs.map((staff) => (
          <StaffCard key={staff.position_id} staffObj={staff} onUpdate={getAllStaff} />
        ))}
      </div>

    </div>
  );
}

export default Staff;
