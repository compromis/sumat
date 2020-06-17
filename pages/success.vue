<template>
  <div class="success">
    <div class="success-text-welcome">
      🎉 Benvingut/da! 🎉
    </div>
    <div class="success-text-main">
      Gràcies pel teu compromís
    </div>
    <div class="success-text-more">
      Ací tens alguns llocs on continuar amb el teu compromís:
    </div>
    <ul class="action-link-list">
      <li><a class="apple-link" href="https://compromis.net/"><span>Compromis.net</span></a></li>
      <li><a class="apple-link" href="https://compromis.net/info/local/"><span>Busca el teu col·lectiu</span></a></li>
    </ul>
    <ul class="social-list">
      <li><a href="https://www.facebook.com/coaliciocompromis"><fa :icon="['fab', 'facebook']" /></a></li>
      <li><a href="https://twitter.com/compromis"><fa :icon="['fab', 'twitter']" /></a></li>
      <li><a href="https://www.instagram.com/compromis_net/"><fa :icon="['fab', 'instagram']" /></a></li>
      <li><a href="https://www.youtube.com/user/coaliciocompromis"><fa :icon="['fab', 'youtube']" /></a></li>
      <li><a href="https://t.me/compromis"><fa :icon="['fab', 'telegram']" /></a></li>
    </ul>
  </div>
</template>

<script>
export default {
  middleware ({ store, redirect }) {
    if (![3, 5].includes(store.state.step)) {
      // return redirect('/')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../sass/variables';

.success {
  height: 100vh;
  letter-spacing: -.03em;
  text-align: center;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &-text {
    &-welcome {
      font-size: 1.75rem;
      color: $text-supermuted;
    }

    &-main {
      font-size: clamp(2rem, 5vw, 7rem);
      text-align: center;
      letter-spacing: -.04em;
      background: $gradient;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-weight: bold;
      line-height: 1.3;
      margin: 1rem 0;
    }

    &-more {
      font-size: 1.25rem;
      color: $text-supermuted;
      text-align: center;
    }
  }
}

a.apple-link {
  display: block;
  position: relative;
  margin: .5rem 0 1rem 0;
  font-size: 1.2rem;
  font-weight: 700;
  background: $primary;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  opacity: 0.75;

  span {
    transition: 0.25s ease-in-out;
    border-bottom: 2px solid transparent;
  }

  &:hover {
    text-decoration: none;

    span {
      border-color: $gradient;
    }
  }

  &::after {
    content: " >";
  }
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
}

li {
  margin-right: 1rem;
}

.social-list {
  a {
    font-size: 2rem;
    color: $gray-400;
  }

  li {
    margin-right: 1.25rem;
  }
}

</style>
