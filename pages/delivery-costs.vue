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
            hear that we currently offer delivery to over 20 countries from the
            Bootbag.co website. You can find international shipping times and
            costs below.
          </p>
          <p>
            Unfortunately we don’t deliver to any other countries not listed on
            the table below. If you’ve got a questions or comment on our
            international delivery options we’re happy to help – you can send us
            an email to <a href="mailto:hello@bootbag.co">hello@bootbag.co</a>.
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
                <td>Austria</td>
                <td>6-8 days</td>
                <td>£4.99</td>
              </tr>
              <tr>
                <td>Belgium</td>
                <td>4-6 days</td>
                <td>£5.99</td>
              </tr>
              <tr>
                <td>Bulgaria</td>
                <td>5-7 days</td>
                <td>£14.99</td>
              </tr>
              <tr>
                <td>Czech Republic</td>
                <td>4-6 days</td>
                <td>£5.99</td>
              </tr>
              <tr>
                <td>Denmark</td>
                <td>4-6 days</td>
                <td>£6.99</td>
              </tr>
              <tr>
                <td>Estonia</td>
                <td>5-7 days</td>
                <td>£6.99</td>
              </tr>
              <tr>
                <td>Finland</td>
                <td>5-7 days</td>
                <td>£6.99</td>
              </tr>
              <tr>
                <td>France</td>
                <td>4-6 days</td>
                <td>£7.99</td>
              </tr>
              <tr>
                <td>Germany</td>
                <td>6-8 days</td>
                <td>£4.99</td>
              </tr>
              <tr>
                <td>Hungary</td>
                <td>5-7 days</td>
                <td>£6.99</td>
              </tr>
              <tr>
                <td>Ireland</td>
                <td>3-5 days</td>
                <td>£5.99</td>
              </tr>
              <tr>
                <td>Italy</td>
                <td>4-6 days</td>
                <td>£5.99</td>
              </tr>
              <tr>
                <td>Luxembourg</td>
                <td>4-5 days</td>
                <td>£5.99</td>
              </tr>
              <tr>
                <td>Netherlands</td>
                <td>4-5 days</td>
                <td>£5.99</td>
              </tr>
              <tr>
                <td>Poland</td>
                <td>5-7 days</td>
                <td>£9.99</td>
              </tr>
              <tr>
                <td>Portugal</td>
                <td>5-7 days</td>
                <td>£6.99</td>
              </tr>
              <tr>
                <td>Romania</td>
                <td>5-7 days</td>
                <td>£14.99</td>
              </tr>
              <tr>
                <td>Slovakia</td>
                <td>4-6 days</td>
                <td>£5.99</td>
              </tr>
              <tr>
                <td>Slovenia</td>
                <td>5-7 days</td>
                <td>£6.99</td>
              </tr>
              <tr>
                <td>Spain</td>
                <td>5-7 days</td>
                <td>£6.99</td>
              </tr>
              <tr>
                <td>Sweden</td>
                <td>5-7 days</td>
                <td>£6.99</td>
              </tr>
              <tr>
                <td>United Kingdom</td>
                <td>4-6 days</td>
                <td>£3.99</td>
              </tr>
              <tr>
                <td>United States</td>
                <td>5-7 days</td>
                <td>£7.99</td>
              </tr>
            </tbody>
          </table>
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
  name: 'DeliveryCosts',
  components: {
    Footer,
    FixedFooter
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
