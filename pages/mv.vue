<template>
  <div>
    <section class="section">
      <opta-widget
        v-pre
        widget="live_action"
        competition="23"
        season="2019"
        match="1074816"
        template="normal"
        data_type="optimal"
        dimension="3D"
        live="true"
        show_match_header="false"
        show_score="true"
        show_halftime_score="false"
        show_attendance="true"
        show_venue="true"
        show_team_formation="true"
        show_referee="true"
        show_date="true"
        date_format="dddd D MMMM YYYY"
        show_crests="false"
        show_competition_name="true"
        competition_naming="full"
        team_naming="full"
        show_direction_of_play="false"
        goal_replay="false"
        show_timeline="true"
        show_event_counters="false"
        show_weather="true"
        show_match_countdown="true"
        weather_animation="5"
        plot_events="2"
        animation_speed="normal"
        team_colours="true"
        branding="opta"
        flattened_background="true"
        zoom="true"
        show_dfp="true"
        dfp_controls="true"
        dfp_playstate="Autoplay, mute"
        dfp_mode="default"
        show_dfp_in_breaks="true"
        dfp_initial_delay="0"
        dfp_ad_spacing="10"
        external_link_target="_blank"
        flyaway="false"
        flyaway_closure="3"
        flyaway_width="500"
        flyaway_position="bottom_right"
        flyaway_return="true"
        show_live="false"
        show_logo="true"
        show_title="false"
        breakpoints="415, 600"
        sport="football"
      ></opta-widget>
    </section>
  </div>
</template>

<script>
export default {
  name: 'MatchVision',

  head() {
    return {
      script: [
        {
          src: 'https://secure.widget.cloud.opta.net/v3/v14.opta-widgets.js',
          body: true
        }
      ],
      title: "Bootbag - Football's Premier Scouting Game",
      link: [
        {
          rel: 'stylesheet',
          href:
            'https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&display=swap'
        }
      ]
    }
  },

  beforeMount() {
    window.opta_settings = {
      subscription_id: '5426c3cc26bb0abe73497947a2c44b05',
      language: 'en_GB',
      timezone: 'Europe/London'
    }
  }
}
</script>

<style lang="scss" scoped>
div {
  width: 75%;
  margin: 3rem auto;
}
</style>
