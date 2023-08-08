//sk_test_51NaNwxLxYWMyETBmTAU2EHARYgU5dQx1va9vL277dHNbvGrleDit6qnksxDQmWLDsOvoKXM59qcGxVfcgcwhPl8D00tRy0B4zA
//CoffeID: price_1NctyuLxYWMyETBmHWWpcdEi
//SunglassesID: price_1NctzoLxYWMyETBmtmhJWJ5l
//CameraID: price_1Ncu0cLxYWMyETBm2rzcXvh9

const express = require("express");
var cors = required("cors");
const stripe = require("stripe")(
  "sk_test_51NaNwxLxYWMyETBmTAU2EHARYgU5dQx1va9vL277dHNbvGrleDit6qnksxDQmWLDsOvoKXM59qcGxVfcgcwhPl8D00tRy0B4zA"
);

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.post("/checkout", async (req, res) => {
  /*
        req.body.items
        [
            {
                id: 1,
                quantity: 3
            }
        ]
        *Stripe Syntax*
    */
console.log("req.body");
  const items = req.body.items;
  let lineItems = [];
  items.forEach((Item) => {
    lineItems.push({
      price: item.id,
      quantity: item.quantity,
    });
  });

  const session = await stripe.checkout.sessions.create({
    line_items: lineItems,
    mode: "payment",
    success_url: "https://wdqjl2-3000.csb.app/Success",
    cancel_url: "https://wdqjl2-3000.csb.app/Cancel",
  });
  
  res.send(JSON.stringify({
        url: session.url
  }));
});

app.listen(4000, () => console.log("Listening on port 4000!"));
