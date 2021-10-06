<template>
  <div>
    <section class="main-content columns article">
      <section class="section delivery">
        <div>
          <h1>Delivery Costs</h1>
          <p>
            <strong>When should I receive my order?</strong><br />

            Orders will be shipped within 7 working days. Deliveries are made
            during normal working hours, from Monday to Friday, weekends and
            holidays excluded.
          </p>
          <p>
            <strong>What countries do we ship to?</strong><br />

            If you have a delivery address outside of the UK you’ll be glad to
            hear that we currently offer delivery worldwide from our Bootbag.co
            website. You can find all shipping times and costs below.
          </p>
          <p>
            If you’ve got a questions or comment on our international delivery
            options we’re happy to help – you can send us an email to
            <a href="mailto:hello@bootbag.co">hello@bootbag.co</a>.
          </p>
          <table>
            <thead>
              <tr>
                <td>Country</td>
                <td>Days to Deliver</td>
                <td>Shipping Charge</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>United Kingdom</td>
                <td>4-6 days</td>
                <td>£4.99</td>
              </tr>
              <tr>
                <td>Europe</td>
                <td>5-7 days</td>
                <td>£7.99</td>
              </tr>
              <tr>
                <td>United States</td>
                <td>5-7 days</td>
                <td>£9.99</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </section>
    <Footer />
  </div>
</template>

<script>
import Footer from '~/components/Footer'
export default {
  name: 'DeliveryCosts',
  components: {
    Footer
  }
}
</script>

<style lang="scss">
.delivery {
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
