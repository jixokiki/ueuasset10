import React from "react";
import { numberToRupiah } from "@/utils/rupiah";

// const InvoiceLayout = ({ invoiceData }) => {
//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-4">Invoice</h1>
//       <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
//         <div className="mb-4">
//           <p className="text-lg font-bold">Order ID: {invoiceData.orderId}</p>
//           <p className="text-lg font-bold">Date: {invoiceData.date}</p>
//         </div>
//         <div className="mb-8">
//           <p className="text-lg font-bold">User Information:</p>
//           <p>Username: {invoiceData.username}</p>
//           <p>Full Name: {invoiceData.fullname}</p>
//           <p>Email: {invoiceData.email}</p>
//         </div>
//         <div className="mb-8">
//           <p className="text-lg font-bold">Ordered Items:</p>
//           {invoiceData.items.map((item) => (
//             <div key={item.id} className="flex justify-between">
//               <p>{item.title}</p>
//               <p>{numberToRupiah(item.price)}</p>
//             </div>
//           ))}
//         </div>
//         <div>
//           <p className="text-lg font-bold">Total Price: {numberToRupiah(invoiceData.totalPrice)}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default InvoiceLayout;


const InvoiceLayout = ({ invoiceData }) => {
  if (!invoiceData) {
    return <div>Data tidak tersedia.</div>;
  }
  
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Invoice</h1>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <p className="text-lg font-bold">Order ID: {invoiceData.orderId || "N/A"}</p>
          <p className="text-lg font-bold">Date: {invoiceData.date || "N/A"}</p>
        </div>
        <div className="mb-8">
          <p className="text-lg font-bold">User Information:</p>
          <p>Username: {invoiceData.username || "N/A"}</p>
          <p>Full Name: {invoiceData.fullname || "N/A"}</p>
          <p>Email: {invoiceData.email || "N/A"}</p>
        </div>
        <div className="mb-8">
          <p className="text-lg font-bold">Ordered Items:</p>
          {invoiceData.items && invoiceData.items.length > 0 ? (
            invoiceData.items.map((item) => (
              <div key={item.id} className="flex justify-between">
                <p>{item.title}</p>
                <p>{numberToRupiah(item.price)}</p>
              </div>
            ))
          ) : (
            <p>No items ordered.</p>
          )}
        </div>
        <div>
          <p className="text-lg font-bold">
            Total Price: {numberToRupiah(invoiceData.totalPrice || 0)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default InvoiceLayout;