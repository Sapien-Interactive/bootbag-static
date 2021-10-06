<template>
  <div>
    <section class="main-content columns article">
      <section class="section returns">
        <div>
          <h1>Returns & Refunds</h1>
          <p>
            Erreà wants you to be totally satisfied with your purchase. However,
            if you are not satisfied you can return your purchase for a refund
            or exchange within 10 (ten) days of delivery. All returns are
            subject to verification of original sale. We reserve the right to
            limit returns regardless of receipt and may refuse or delay returns
            if fraud or abuse is suspected.
          </p>

          <p>
            To start a return claim, you must contact our Customer service at:
            customerservice@erreausa.com
          </p>

          <p>
            Only products purchased directly from erreausa.com website may be
            returned or exchanged through our website.
          </p>

          <p>
            <strong>EASY RETURNS</strong><br />

            The Products must be returned unwashed, unworn, with original sales
            receipt, in their original package, sales tag attached, with all the
            related accessories and instruction manuals, where
            available.Products must be returned in their original condition.
            Returned products must arrive unwashed, unworn, in its original
            packaging, and with all related accessories and instruction manuals
            included.
          </p>

          <p>
            Contact our customer service team at customerservice@erreausa.com;
          </p>

          <p>
            Wait for the return acceptance notice that you will receive from us;
          </p>

          <p>Ship the package back to us within 10 days of delivery.</p>

          <p>Shipping and handling costs will not be refunded.</p>

          <p>Product exchanges will be subject to availability.</p>

          <p>
            You will receive a confirmation email once your returned item is
            received. After the item has been inspected, you will receive a
            follow up email to confirm your refund has been processed.
          </p>

          <p>
            For all enquiries and request, please contact our customer service
            team. For further details on our return policy, please see our Sales
            Terms and Conditions.
          </p>

          <p>
            <strong>WRONG, DEFECTIVE OR DAMAGED ITEMS</strong><br />

            If you received a wrong (differing from the one you ordered, or from
            what is shown on our Online Store), damaged or defective item, you
            may return it within 30 days of delivery date.
          </p>

          <p>
            Normal tear and wear, modifications, alterations, negligence, damage
            and use for a purpose different for which it was designed, are not
            covered by Erreà Sport USA warranty.
          </p>

          <p>
            <strong>RETURN SHIPPING COSTS</strong><br />

            Unfortunately, we cannot refund original or return shipping fees. We
            will pay the return shipping costs only if the return is a result of
            our error. If you return an item using the return label provided by
            us, and the reason for return isn't a result of an Erreà Sport USA
            error, the cost of return shipping will be deducted from your
            refund/replacement.
          </p>
        </div>
      </section>
    </section>
    <Footer />
  </div>
</template>

<script>
import Footer from '~/components/Footer'
export default {
  name: 'ReturnsRefunds',
  components: {
    Footer
  }
}
</script>

<style lang="scss">
.returns {
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
