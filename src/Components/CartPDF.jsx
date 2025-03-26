import React, { useRef } from 'react';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

const CartCheckout = ({ cartItems }) => {
  const nameRef = useRef(null);
  const receiverAddressRef = useRef(null);

  const handleCheckout = () => {
    // Get values from input fields
    const senderName = nameRef.current.value;
    const receiverAddress = receiverAddressRef.current.value;

    // Create a new PDF document
    const doc = new jsPDF();

    // Add sender name and receiver address to the PDF
    doc.text(`Sender: ${senderName}`, 10, 10);
    doc.text(`Receiver Address: ${receiverAddress}`, 10, 20);

    // Add cart items details
    let y = 30; // Initial y-coordinate for item details
    cartItems.forEach(item => {
      doc.text(`Item: ${item.name}, Price: ${item.price}`, 10, y);
      y += 10;
    });

    // Save the PDF
    doc.save('cart_details.pdf');
  }};
  export default CartCheckout;