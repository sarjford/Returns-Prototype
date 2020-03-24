const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = express()

  server.get('/p/:id', (req, res) => {
    const actualPage = '/post'
    const queryParams = { title: req.params.id }
    app.render(req, res, actualPage, queryParams)
  })

  server.get('/get-label', (req, res) => {
    console.log('get label')
    const fedexAPI = require('fedex-nodejs');
    const fedex = new fedexAPI({
        account_number: '510087640',
        meter_number: '100339659',
        key: 'WJqDEen2dLnqJ6GM',
        password: 'o6uxR7yre5ha1NoOf7kMwn9Dz',
        env: 'test'
    });

    fedex.ship({
      RequestedShipment: {
          ShipTimestamp: new Date().toISOString(),
          DropoffType: 'REGULAR_PICKUP',
          ServiceType: 'FEDEX_GROUND',
          PackagingType: 'YOUR_PACKAGING',
          Shipper: {
            Contact: {
              PersonName: 'Sender Name',
              CompanyName: 'Company Name',
              PhoneNumber: '5555555555'
            },
            Address: {
              StreetLines: [
                'Address Line 1'
              ],
              City: 'Collierville',
              StateOrProvinceCode: 'TN',
              PostalCode: '38017',
              CountryCode: 'US'
            }
          },
          Recipient: {
            Contact: {
              PersonName: 'Recipient Name',
              CompanyName: 'Company Receipt Name',
              PhoneNumber: '5555555555'
            },
            Address: {
              StreetLines: [
                'Address Line 1'
              ],
              City: 'Charlotte',
              StateOrProvinceCode: 'NC',
              PostalCode: '28202',
              CountryCode: 'US',
              Residential: false
            }
          },
          ShippingChargesPayment: {
            PaymentType: 'SENDER',
            Payor: {
              ResponsibleParty: {
                AccountNumber: fedex.options.account_number
              }
            }
          },
          LabelSpecification: {
            LabelFormatType: 'COMMON2D',
            ImageType: 'PDF',
            LabelStockType: 'PAPER_4X6'
          },
          PackageCount: '1',
          RequestedPackageLineItems: [{
            SequenceNumber: 1,
            GroupPackageCount: 1,
            Weight: {
              Units: 'LB',
              Value: '50.0'
            },
            Dimensions: {
              Length: 108,
              Width: 5,
              Height: 5,
              Units: 'IN'
            }
          }]
        }
      }, function(err, response) {
        if (err) {
          console.log(err);
        }

        console.log(JSON.stringify(response));
        const base64 = response.CompletedShipmentDetail.CompletedPackageDetails[0].Label.Parts[0].Image;
        res.send(`<iframe width="100%" height="300%" id="pdf" type="application/pdf" src="data:application/pdf;base64,${base64}"></iframe>`)

    });
  });

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})
