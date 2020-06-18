<template>
  <div class="success">
    <div class="hero">
      <span class="hero-welcome">{{ welcome }}</span>
      <span>Gràcies pel teu compromís</span>
    </div>
    <div v-if="isSimpa" class="container">
      <div class="c-card success-text">
        <span class="c-card num-afiliat"><span>Núm. Afiliat:</span> <span class="num-afiliat-num">{{ affNumber }}</span></span>
        <div class="success-text-bold">
          Activa’t a l’Espai Compromís
        </div>
        <div class="success-step">
          <div class="success-step-number">
            1
          </div>
          <div class="success-step-text">
            Revisa el teu correu i estableix una contrasenya
          </div>
        </div>
        <a class="btn btn-primary btn-lg" :href="'https://'+emailDomain">
          Ves a {{ emailDomain }}
        </a>
      </div>
    </div>
    <div v-else class="container">
      <div class="c-card success-text">
        <span class="c-card num-afiliat"><span>Núm. Afiliat:</span> <span class="num-afiliat-num">{{ affNumber }}</span></span>
        <b-icon-hand-thumbs-up class="icon" />
        Hem rebut les teues dades i estem processant la teua afiliació. Tan pronte com l’acceptem rebràs un e-mail de confirmació.
      </div>
      <div class="c-card">
        <div class="success-text">
          Mentre esperes...
        </div>
        <ul class="social-list">
          <li><a href="https://www.facebook.com/coaliciocompromis"><fa :icon="['fab', 'facebook']" /></a></li>
          <li><a href="https://twitter.com/compromis"><fa :icon="['fab', 'twitter']" /></a></li>
          <li><a href="https://www.instagram.com/compromis_net/"><fa :icon="['fab', 'instagram']" /></a></li>
          <li><a href="https://www.youtube.com/user/coaliciocompromis"><fa :icon="['fab', 'youtube']" /></a></li>
          <li><a href="https://t.me/compromis"><fa :icon="['fab', 'telegram']" /></a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { BIconHandThumbsUp } from 'bootstrap-vue'

export default {
  components: {
    BIconHandThumbsUp
  },
  middleware ({ store, redirect }) {
    if (![3, 5].includes(store.state.step)) {
      // return redirect('/')
    }
  },
  computed: {
    isSimpa () {
      return this.$store.state.form.u_type === '2'
    },
    emailDomain () {
      const s = this.$store.state.form.u_email
      return s.split('@')[1]
    },
    welcome () {
      if (this.$store.state.form.u_gender === 'M') {
        return `Benvingut, ${this.$store.state.form.u_name}`
      } else if (this.$store.state.form.u_gender === 'F') {
        return `Benvinguda, ${this.$store.state.form.u_name}`
      } else {
        return `Benvingudes, ${this.$store.state.form.u_name}`
      }
    },
    affNumber () {
      return this.$store.state.credentials.number
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../sass/variables';

.success {
  .hero {
    background: $gradient;
    font-size: clamp(2rem, 4vw, 6rem);
    height: 40vh;
    color: $white;
    text-align: center;
    padding: 4vw;
    font-weight: bold;
    letter-spacing: -.03em;
    line-height: 1.2;

    &-welcome {
      display: block;
      font-size: 1.5rem;
      font-weight: 400;
      letter-spacing: -.02em;
    }
  }

  .icon {
    font-size: 7rem;
    align-self: center;
    margin-bottom: 2rem;
    animation-name: icon;
    animation-duration: 1s;
    animation-timing-function: cubic-bezier(.52,.29,.3,1.43);
  }

  .c-card {
    padding: 2rem;
  }

  .container {
    position: relative;
    margin-top: -10vh;
    max-width: 700px;
  }

  &-text {
    display: flex;
    flex-direction: column;
    font-size: 1.2rem;

    &-bold {
      font-weight: bold;
    }
  }

  .num-afiliat {
    background: $body-color;
    color: $white;
    position: absolute;
    display: flex;
    flex-direction: column;
    font-size: 0.8rem;
    padding: .75rem;
    top: -2rem;
    right: 2rem;

    &-num {
      font-size: 1.75rem;
    }
  }

  &-step {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 1.5rem 0;

    &-number {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 4rem;
      width: 4rem;
      background: $gray-200;
      font-size: 1.5rem;
      border-radius: 100%;
      margin-right: 1rem;
    }
  }

  .btn.btn-lg {
    font-size: 1.2rem;
    color: $white;
    margin-right: auto;
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
  align-items: center;
  justify-content: center;
  margin-top: 1.5rem;
}

li {
  margin-right: 1rem;
}

.social-list {
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    background: $gray-400;
    height: 4rem;
    width: 4rem;
    border-radius: 100%;
    color: $white;
  }

  li {
    margin-right: 1.25rem;
  }
}

@keyframes icon {
  40%  {transform: scale(1.5) rotate(-20deg);}
  70% {transform: scale(1) rotate(0);}
}

</style>
