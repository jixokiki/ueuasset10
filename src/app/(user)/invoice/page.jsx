import React from "react";
import InvoiceLayout from "@/components/InvoiceLayout"; // Sesuaikan dengan path Anda

const InvoicePage = ({ invoiceData }) => {
  return (
    <div>
      <InvoiceLayout invoiceData={invoiceData} />
    </div>
  );
};

export default InvoicePage;
