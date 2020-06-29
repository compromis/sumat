<template>
  <main class="success">
    <div class="hero">
      <span class="hero-welcome">{{ welcome }}</span>
      <span>{{ $t('success.thankyou') }}</span>
    </div>
    <div v-if="isSimpa" class="container">
      <div class="c-card success-text">
        <div class="c-card num-afiliat">
          <span>Núm.</span>
          <span class="num-afiliat-num">{{ affNumber }}</span>
        </div>
        <div class="success-text-bold">
          {{ $t('success.activate') }}
        </div>
        <div class="success-step">
          <div class="success-step-number">
            1
          </div>
          <div class="success-step-text">
            {{ $t('success.step1') }}
          </div>
        </div>
        <a
          class="btn btn-primary btn-lg"
          :href="'https://' + emailDomain"
          target="_blank"
          rel="noopener"
        >
          {{ $t('success.goto', { emailDomain }) }}
        </a>
      </div>
    </div>
    <div v-else class="container">
      <div class="c-card success-text">
        <div class="c-card num-afiliat">
          <span>Núm.</span>
          <span class="num-afiliat-num">{{ affNumber }}</span>
        </div>
        <b-icon-hand-thumbs-up class="icon" />
        {{ $t('success.processing') }}
      </div>
      <div class="c-card">
        <div class="success-text">
          {{ $t('success.meanwhile') }}
        </div>
        <ul class="social-list">
          <li>
            <a href="https://www.facebook.com/coaliciocompromis" aria-label="Facebook" style="background: #3b5998">
              <fa :icon="['fab', 'facebook']" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/compromis" aria-label="Twitter" style="background: #00acee">
              <fa :icon="['fab', 'twitter']" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/compromis_net/" aria-label="Instagram" style="background: #e1306c">
              <fa :icon="['fab', 'instagram']" />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/user/coaliciocompromis" aria-label="YouTube" style="background: #c4302b">
              <fa :icon="['fab', 'youtube']" />
            </a>
          </li>
          <li>
            <a href="https://t.me/compromis" aria-label="Telegram" style="background: #0088cc">
              <fa :icon="['fab', 'telegram']" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>

<script>
import { BIconHandThumbsUp } from 'bootstrap-vue'

export default {
  components: {
    BIconHandThumbsUp
  },

  middleware ({ store, redirect, route }) {
    if (store.state.step !== 'success' && !('override' in route.query)) {
      return redirect('/')
    }
  },

  computed: {
    isSimpa () {
      return this.$store.state.form.u_type === '2'
    },
    emailDomain () {
      return this.$store.state.form.uacc_email.split('@')[1]
    },
    welcome () {
      const { form } = this.$store.state
      return `${this.$t('success.greetings.' + form.u_gender)}, ${form.u_name}!`
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
  justify-content: flex-start;

  .hero {
    display: flex;
    flex-direction: column;
    background: $gradient;
    font-size: clamp(2rem, 4vw, 6rem);
    height: 40vh;
    width: 100%;
    min-height: 300px;
    color: $white;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 1rem;
    font-weight: bold;
    letter-spacing: -.03em;
    line-height: 1.2;

    &-welcome {
      display: block;
      font-size: clamp(1.5rem, 4vw, 1.75rem);
      font-weight: 400;
      letter-spacing: -.02em;
      margin-top: -5rem;
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
    margin-top: -6rem;
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
    background: var(--gray-900);
    color: $text-inverted;
    position: absolute;
    display: flex;
    flex-direction: column;
    font-size: 0.8rem;
    padding: .75rem;
    top: -1.5rem;
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
      font-weight: bold;
      border-radius: 100%;
      margin-right: 1rem;
      flex-shrink: 0;
    }
  }

  .btn.btn-lg {
    font-size: 1.2rem;
    color: $white;
    margin-right: auto;
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
  flex-wrap: wrap;
  width: 100%;
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
    height: 4rem;
    width: 4rem;
    opacity: 0.8;
    border-radius: 100%;
    color: $white;
    transition: .15s ease-in-out;

    &:hover {
      opacity: 0.9;
    }
  }

  li {
    margin: .5rem;
  }
}

@keyframes icon {
  40% {
    transform: scale(1.5) rotate(-20deg);
  }
  70% {
    transform: scale(1) rotate(0);
  }
}

@include media-breakpoint-down(md) {
  .success {
    .c-card {
      padding: 1rem;
    }

    .icon {
      font-size: 5rem;
    }

    .num-afiliat {
      padding: .75rem;
    }
  }

  .social-list {
    font-size: 1rem;
  }
}
</style>
