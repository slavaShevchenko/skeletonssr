<template>
  <div class="header__fixed">
    <header class="header">
      <div class="wrapper">
        <div class="header__left">
          <NuxtLink to="/">
            <svgLogo />
          </NuxtLink>
        </div>
        <div class="header__right">
          <nav class="header__nav">
            <NuxtLink to="/positions/" class="header__nav-link"
              >Careers</NuxtLink
            >
            <NuxtLink to="/services/" class="header__nav-link"
              >Services</NuxtLink
            >
            <NuxtLink to="/recruter-profile/" class="header__nav-link"
              >skeleton recruiter</NuxtLink
            >
            <NuxtLink to="/blog/" class="header__nav-link">Blog</NuxtLink>
          </nav>
          <div class="header__contact">
            <elementsButton
              class="button__trans-white"
              router-link="/contact-us/">
              <template #text>Contact us</template>
            </elementsButton>
          </div>
        </div>
        <div class="header__right-mobile">
          <div class="header__burger" v-click-out-side="burgerClose">
            <div class="header__burger-ico" @click="burgerOpen">
              <svgBurger />
            </div>
            <Transition name="burger">
              <div class="header__burger-menu" v-if="store.getBurgerState">
                <div class="header__burger-menu-item">
                  <NuxtLink
                    to="/positions/"
                    class="header__burger-menu-item-link"
                    >Careers</NuxtLink
                  >
                </div>
                <div class="header__burger-menu-item">
                  <NuxtLink
                    to="/services/"
                    class="header__burger-menu-item-link"
                    >Services</NuxtLink
                  >
                </div>
                <div class="header__burger-menu-item">
                  <NuxtLink
                    to="/recruter-profile/"
                    class="header__burger-menu-item-link"
                    >Skeleton recruiter</NuxtLink
                  >
                </div>
                <div class="header__burger-menu-item">
                  <NuxtLink to="/blog/" class="header__burger-menu-item-link"
                    >Blog</NuxtLink
                  >
                </div>
                <div class="header__burger-menu-item">
                  <NuxtLink
                    to="/contact-us/"
                    class="header__burger-menu-item-link"
                    >Contact us</NuxtLink
                  >
                </div>
                <div class="header__burger-close" @click="burgerClose">
                  <svgClose />
                </div>
              </div>
            </Transition>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script setup>
import { useMainStore } from '~/stores/index'
import { clickOutSide as vClickOutSide } from '@mahdikhashan/vue3-click-outside'

const store = useMainStore()

function burgerOpen() {
  store.setBurgerState(true)
}
function burgerClose() {
  store.setBurgerState(false)
}
</script>

<style scoped lang="scss">
.header__fixed {
  height: 100px;
}
.header {
  width: 100%;
  height: 100px;
  background-color: var(--black);
  position: fixed;
  z-index: 1000;

  &::after {
    content: '';
    width: 100%;
    max-width: min(100% - 32px, 1440px);
    height: 1px;
    background-color: var(--unactive);
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0);
  }
  .wrapper {
    display: flex;
    align-items: center;
    height: 100%;
  }

  &__left {
    flex: 1 0 auto;
    display: flex;
  }

  &__right {
    display: flex;
    align-items: center;
    column-gap: 76px;

    &-mobile {
      display: none;
    }
  }

  &__nav {
    display: flex;
    align-items: center;
    column-gap: 36px;
    font-size: var(--text16);
    text-transform: uppercase;
    color: var(--main);
    transition: color 0.4s ease;

    &-link {
      font-family: 'Transducer-bold';
      color: inherit;
      transition: color 0.4s ease;

      &:hover {
        color: var(--red);
      }
    }
  }

  &__burger {
    position: relative;
    z-index: 1000;
    user-select: none;

    &-ico {
      padding: 4px;
      cursor: pointer;
    }

    &-close {
      position: absolute;
      right: 12px;
      top: 12px;
      fill: var(--red);
    }

    &-menu {
      padding: 10px 52px 20px 16px;
      background-color: rgba(44, 44, 44, 0.78);
      backdrop-filter: blur(6px);
      border-radius: 12px;
      position: absolute;
      right: -8px;
      top: -8px;
      transition: opacity 0.3s ease;

      &-item {
        padding-top: 10px;
        padding-bottom: 10px;
        padding-right: 40px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.12);
        font-size: var(--text16);
        color: var(--text);
        text-transform: uppercase;
        white-space: nowrap;

        &-link {
          color: var(--text);
        }
      }
    }
  }
}

@media (min-width: 2000px) {
  .header {
    &::after {
      max-width: calc(90% - 32px);
    }

    .wrapper {
      max-width: 90%;
    }
  }
}

@media (max-width: 1023px) {
  .header {
    &::after {
      display: none;
    }
    &__right {
      display: none;
    }

    &__right-mobile {
      display: block;
      fill: var(--main);
    }
  }
}

.burger-enter-from {
  opacity: 0;
}
.burger-enter-to {
  opacity: 1;
}
.burger-leave-from {
  opacity: 1;
}
.burger-leave-to {
  opacity: 0;
}

.router-link-active,
.active {
  color: var(--red);
}
</style>
