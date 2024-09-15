import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleStaff } from '../../../api/staffData';
import StaffForm from '../../../components/forms/StaffForm';

export default function EditBook() {
  const [editItem, setEditItem] = useState({});
  const router = useRouter();
  // TODO: grab the firebasekey
  const { firebaseKey } = router.query;

  // TODO: make a call to the API to get the book data
  useEffect(() => {
    getSingleStaff(firebaseKey).then(setEditItem);
  }, [firebaseKey]);

  // TODO: pass object to form
  return (<StaffForm obj={editItem} />);
}
