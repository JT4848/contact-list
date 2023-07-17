import React, { useState, useEffect } from "react";

const SelectedContact = ({ selectedContactId, setSelectedContactId }) => {
  const [contact, setContact] = useState(null)

  useEffect(() => {
    const singleContact = async () => {
      try{
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${selectedContactId}`)
        const data = await response.json()
        setContact(data)
        console.log(contact)
      }catch(error){
        console.log(`error in singlecontact`, error)
      }
    }
    singleContact();
  }, [selectedContactId])

  useEffect(() => {
    console.log(contact)
  }, [contact])

  return (
    <>
      {contact && (
        <>
          <h2>Contact Details</h2>
          <p>{contact.name}</p>
          <p>{contact.email}</p>
          <p>{contact.phone}</p>
        </>
      )}
    </>
  )
}

export default SelectedContact;