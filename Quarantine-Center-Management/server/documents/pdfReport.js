module.exports = ({ fullName,nic,email,departmentName,message,status,reply }) => {
    const today = new Date();
return `
    <!doctype html>
    <html>
       <head>
          <meta charset="utf-8">
          <title>PDF Result Template</title>
          <style>
             .invoice-box {
             max-width: 800px;
             margin: auto;
             padding: 30px;
             border: 2px solid #eee;
             box-shadow: 0 0 10px rgba(0, 0, 0, .15);
             font-size: 16px;
             line-height: 24px;
             font-family: 'Tahoma', 'Verdana', 'sans-serif',
             color: #555;
             }
             .margin-top {
             margin-top: 50px;
             }
             .justify-center {
             text-align: center;
             }
             .invoice-box table {
             width: 100%;
             line-height: inherit;
             text-align: left;
             }
             .invoice-box table td {
             padding: 5px;
             vertical-align: top;
             }
             .invoice-box table tr td:nth-child(2) {
             text-align: left;
             }
             .invoice-box table tr.top table td {
             padding-bottom: 20px;
             }
             .invoice-box table tr.top table td.title {
             font-size: 45px;
             line-height: 45px;
             color: #333;
             }
             .invoice-box table tr.information table td {
             padding-bottom: 40px;
             }
             .invoice-box table tr.heading td {
             background: #eee;
             border-bottom: 1px solid #ddd;
             font-weight: bold;
             }
             .invoice-box table tr.details td {
             padding-bottom: 20px;
             }
             .invoice-box table tr.item td {
             border-bottom: 1px solid #eee;
             margin-bottom: 5px ;
             }
             .invoice-box table tr.item.last td {
             border-bottom: none;
             }
             .invoice-box table tr.total td:nth-child(2) {
             border-top: 2px solid #eee;
             font-weight: bold;
             }
             @media only screen and (max-width: 600px) {
             .invoice-box table tr.top table td {
             width: 100%;
             display: block;
             text-align: center;
             }
             .invoice-box table tr.information table td {
             width: 100%;
             display: block;
             text-align: center;
             }
             }
          </style>
       </head>
       <body>
          <div class="invoice-box">
             <table cellpadding="0" cellspacing="0"  style="font-family:verdana; font-size:12px">
                <tr class="top">
                   <td colspan="2">
                      <table style="font-family:verdana">
                         <tr>
                            <td class="title">< img src="https://images-na.ssl-images-amazon.com/images/I/71HBOO7tY5L.__AC_SX300_SY300_QL70_FMwebp_.jpg"
                               style="width:100%; max-width:156px;"></td>
                            <td style="text-align:right">
                               Date: ${`${today.getDate()}. ${today.getMonth() + 1}. ${today.getFullYear()}.`}
                            </td>
                         </tr>
                      </table>
                   </td>
                </tr>
                <tr class="information">
                   <td colspan="2">
                      <table style="font-family:verdana">
                         <tr>
                            <td style="font-size:18px">
                               Patient Name: ${fullName}
                            </td>
                         </tr>
                      </table>
                   </td>
                </tr>
                <tr class="item">
                   <td width="30%">NIC:</td>
                   <td>${nic}</td>
                </tr>
                <tr class="item">
                   <td>Email :</td>
                   <td>${email}</td>
                </tr>
                <tr class="item">
                   <td>Department Name     :</td>
                   <td>${departmentName}</td>
                </tr>
                <tr class="item">
                   <td>Message     :</td>
                   <td>${message}</td>
                </tr>
                <tr class="item">
                   <td>Ticket Status:</td>
                   <td>${status}</td>
                </tr>
                <tr class="item">
                   <td>Reply:</td>
                   <td>${reply}</td>
                </tr>
             </table>
             <br />
          </div>
       </body>
    </html>
    `;
};