<template>
  <div>
    <section class="main-content columns">
      <section class="section returns">
        <div>
          <h1>Returns & Refunds</h1>
          <p>
            <strong>How do I return an item?</strong><br />

            Simply take your parcel to the Post Office, request the standard
            parcel delivery service. Sit back and wait for your refund.
          </p>
          <p>Returns Address: XXX, United Kingdom</p>
          <p>
            <strong>What is the Bootbag returns address?</strong><br />
            Returns Address: XXX, United Kingdom
          </p>
          <p>
            <strong>What if the item doesn't fit?</strong><br />
            Unfortunately we do not offer product exchanges. If you return an
            unwanted item, we will issue a refund. Please place another order if
            you require a different size.
          </p>

          <p>
            We know that you'll need to try the item on but please be careful
            not to leave any marks (e.g. make-up, deodorant) as we may not be
            able to accept it back if we believe it has been worn.
          </p>
          <p>
            <strong>What if my shirt is faulty?</strong><br />
            We're sorry that you've received a faulty shirt - if you return the
            faulty shirt back to us for inspection and the issue is a production
            fault for example, we'll send you a replacement. Plus, we'll cover
            the cost of any returns postage.
          </p>
          <p>
            Please contact our Customer Service team within 48 hours of receipt
            of your parcel if there is a fault so we can resolve the problem for
            you quickly. If the shirt gets returned without contacting us
            previously, a refund will be issued.
          </p>
          <p>
            <strong>How long will it take for a refund?</strong><br />
            Returns can take up to 7 working days to be received back. Once
            received, we aim to process all returns within 7 working days.
            You'll receive an email to let you know once this is done and the
            refund is issued. Please allow 7 working days for the refund to
            reach your original payment method.
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
