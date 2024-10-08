/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { viewStaffDetails } from '../../api/staffData';

function veiwStaff() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [staffDetails, setStaffDetails] = useState({});
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();

  // TODO: grab firebaseKey from url
  const { firebaseKey } = router.query;

  // TODO: make call to API layer to get the data
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    viewStaffDetails(firebaseKey).then(setStaffDetails);
  }, [firebaseKey]);

  return (
    <div className="mt-5 d-flex flex-wrap text-center view-staff">
      <div className="text-white ms-5 details" style={{ textAlign: 'match-parent' }}>
        <h2>
          {staffDetails.first_name} {staffDetails.last_name}
        </h2>
        <h4>{staffDetails.position_name || ''}</h4>
        <hr />
      </div>
    </div>
  );
}
export default veiwStaff;
