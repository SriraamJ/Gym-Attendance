import React from 'react';

const ReceiptGenerator = () => {
  const generateReceiptPage = () => {
    const newWindow = window.open('', '_blank');

    if (!newWindow) {
      alert('Please allow pop-ups for this site to generate the receipt.');
      return;
    }

    const receiptContent = `
      <html>
        <head>
          <title>Receipt</title>
          <style>
            body {
              font-family: 'Arial', sans-serif;
              padding: 20px;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
              background-color: #f8f8f8;
              border: 1px solid #ddd;
              border-radius: 5px;
              box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            }
            .header {
              text-align: center;
              margin-bottom: 20px;
            }
            .header h1 {
              font-size: 24px;
              color: #333;
            }
            .header img {
              max-width: 100px;
              margin-bottom: 10px;
            }
            .address {
              text-align: center;
              margin-bottom: 20px;
              color: #666;
            }
            table {
              width: 100%;
              border-collapse: collapse;
              margin-bottom: 20px;
            }
            th, td {
              border: 1px solid #ddd;
              padding: 10px;
              text-align: left;
            }
            .total {
              text-align: right;
              font-weight: bold;
            }
            button {
              display: block;
              width: 100%;
              padding: 10px;
              margin-top: 20px;
              background-color: #007bff;
              color: #fff;
              border: none;
              border-radius: 5px;
              cursor: pointer;
            }
            button:hover {
              background-color: #0056b3;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Matrix Fitness</h1>
            </div>
            <div class="address">
              <p>Jaycees School Opp.</p>
            </div>
            <hr />
            <div>
              <h2>Billing Details</h2>
              <table>
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Product 1</td>
                    <td>2</td>
                    <td>$10</td>
                    <td>$20</td>
                  </tr>
                  <tr>
                    <td>Product 2</td>
                    <td>1</td>
                    <td>$15</td>
                    <td>$15</td>
                  </tr>
                </tbody>
              </table>
              <div class="total">
                <p>Total: $35</p>
              </div>
              <button onclick="generatePDF()">Download Receipt</button>
            </div>
          </div>

          <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.9.3/html2pdf.bundle.min.js"></script>
          <script>
            function generatePDF() {
              const receiptContent = document.documentElement.outerHTML;
              const fileName = 'receipt.pdf';
              html2pdf().from(receiptContent).save();
            }
          </script>
        </body>
      </html>
    `;

    newWindow.document.open();
    newWindow.document.write(receiptContent);
    newWindow.document.close();
  };

  return (
    <div>
      <button onClick={generateReceiptPage}>Generate Receipt</button>
    </div>
  );
};

export default ReceiptGenerator;
