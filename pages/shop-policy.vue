<template>
  <div>
    <section class="main-content columns article">
      <section class="section returns">
        <div>
          <h1>Cancellation Policy</h1>

          <p>
            For all orders, we must receive a cancellation email within 12 hrs
            of the order to be able to cancel any pending orders.
          </p>

          <h3>Delivery</h3>

          <p>
            As the items are made to order. Please expect delivery to be up to
            3/4 weeks from date of ordering. This will vary depending on
            shipping location in proximity to our dispatch centre.
          </p>

          <h3>Returns Policy</h3>

          <p>
            Bootbag wants you to be totally satisfied with your purchase.
            However, if you are not satisfied you can return your purchase for a
            refund or exchange within 10 (ten) days of delivery. All returns are
            subject to verification of original sale. We reserve the right to
            limit returns regardless of receipt and may refuse or delay returns
            if fraud or abuse is suspected.
          </p>

          <p>
            To start a return claim, you must contact our Customer service at:
            <a href="mailto:customerservice@bootbag.co"
              >customerservice@bootbag.co</a
            >
          </p>

          <p>
            Only products purchased directly from bootbag.co website may be
            returned or exchanged through our website.
          </p>

          <h3>Easy Returns</h3>

          <p>
            The Product(s) must be returned unwashed, unworn, in their original
            package, sales tag attached, with all the related accessories and
            instruction manuals, where available. Product(s) must be returned in
            their original condition. Returned products must arrive unwashed,
            unworn, in its original packaging, and with all related accessories
            and instruction manuals included.
          </p>

          <p>
            Contact our customer service team at
            <a href="mailto:customerservice@bootbag.co"
              >customerservice@bootbag.co</a
            >;
          </p>

          <p>
            Wait for the return acceptance notice that you will receive from us;
          </p>

          <p>
            Ship the package back to us within 10 days of delivery ensuring you
            get proof of delivery from the post office.
          </p>

          <p>Shipping and handling costs will not be refunded.</p>

          <p>Product exchanges will be subject to availability.</p>

          <p>
            You will receive a confirmation email once your returned item is
            received. After the item has been inspected, you will receive a
            follow-up email to confirm your refund has been processed.
          </p>

          <p>
            For all enquiries and request, please contact our customer service
            team. For further details on our policies. Please visit our Terms
            and Conditions.
          </p>

          <h3>Wrong, Defective or Damaged Items</h3>

          <p>
            If you received a wrong (differing from the one you ordered, or from
            what is shown on our Online Store), damaged or defective item, you
            may return it within 30 days of delivery date.
          </p>

          <p>
            Normal tear and wear, modifications, alterations, negligence, damage
            and use for a purpose different for which it was designed.
          </p>

          <h3>Return Shipping Costs</h3>

          <p>
            Unfortunately, we cannot refund original or return shipping fees. We
            will pay the return shipping costs only if the return is a result of
            our error. If you intend to return an item, please address it to the
            address below provided by us, and the reason for return the item
            must be deemed damaged or faulty. Please include a copy of your
            original receipt with the returned item. All payments will be made
            to the debit/credit card used in the original purchase.
          </p>

          <h3>Contact Us</h3>

          <p>
            Bootbag (Sapien Interactive ltd), Mocatta House, Trafalgar Place,
            Brighton, BN1 4BG<br />
            Phone: 01273 006101 Email:
            <a href="mailto:customerservice@bootbag.co"
              >customerservice@bootbag.co</a
            ><br />
            Business Hours: Monday-Friday 9am-5pm GMT
          </p>
        </div>
      </section>
    </section>
    <Footer />
    <FixedFooter />
  </div>
</template>

<script>
import Footer from '~/components/Footer'
import FixedFooter from '~/components/FixedFooter'
export default {
  name: 'ShopPolicy',
  components: {
    Footer,
    FixedFooter
  }
}
</script>

<style lang="scss">
.returns {
  h3 {
    text-transform: uppercase;
    font-weight: bold;
  }

  strong {
    font-weight: bold;
    color: #ffffff;
  }

  p {
    margin-bottom: 20px;
  }

  table {
    width: 100%;

    td {
      padding: 5px;
      border-bottom: solid 1px #ffffff;
    }

    thead {
      background-color: #ffffff;
      color: #000000;
    }
  }
}
</style>
