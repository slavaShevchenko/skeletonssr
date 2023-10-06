<template>
  <footer class="footer">
    <div class="wrapper">
      <div class="footer__col-logo">
        <NuxtLink to="/">
          <svgLogo />
        </NuxtLink>
      </div>
      <div class="footer__col-block1">
        <div class="footer__block">
          <div class="footer__block-header">Learn More</div>
          <div class="footer__block-item">
            <NuxtLink to="/positions/">Careers</NuxtLink>
          </div>
          <div class="footer__block-item">
            <NuxtLink to="/recruter-profile/">Skeleton recruiter</NuxtLink>
          </div>
          <div class="footer__block-item">
            <NuxtLink to="/blog/">Blog</NuxtLink>
          </div>
          <div class="footer__block-item">
            <NuxtLink to="/contact-us/">Contact Us</NuxtLink>
          </div>
          <div class="footer__block-item">
            <NuxtLink to="/terms-and-conditions/"
              >Terms and conditions</NuxtLink
            >
          </div>
        </div>
      </div>
      <div class="footer__col-block3">
        <div class="footer__block">
          <div class="footer__block-header">Contact Us</div>
          <div class="footer__block-item">
            <span>Email: </span>
            <a href="mailto:jobs@skeletoncrew.dev">jobs@skeletoncrew.dev</a>
          </div>
          <div class="footer__block-item">
            <span>Phone number: </span>
            <a href="tel:+48888455565">+48 888 455 565</a>
          </div>
        </div>
      </div>
      <div class="footer__col-social">
        <div class="footer__block">
          <div class="footer__block-header">Social</div>
          <elementsSocial />
        </div>
      </div>
      <div class="footer__col-full">
        <svgLogo />
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  position: relative;

  &::after {
    content: '';
    width: 100%;
    max-width: min(100% - 32px, 1440px);
    height: 1px;
    background-color: var(--unactive);
    position: absolute;
    left: 50%;
    top: 0;
    transform: translate(-50%, 0);
  }
  .wrapper {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-top: 24px;
  }

  &__col {
    &-logo {
      order: 1;
    }
    &-block1 {
      order: 2;
    }
    &-block2 {
      order: 3;
    }
    &-block3 {
      order: 4;
    }
    &-social {
      order: 5;
    }
    &-full {
      flex: 1 0 100%;
      order: 6;
      margin-top: 24px;
      padding-top: 24px;
      padding-bottom: 24px;
      border-top: 2px solid var(--unactive);

      svg {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }

  &__block {
    color: var(--main);

    &-header {
      margin-bottom: 16px;
      font-size: var(--text18);
    }

    &-item {
      font-size: 14px;

      a {
        opacity: 0.8;
        line-height: 2;
        color: var(--main);
        transition: color 0.4s ease;

        &:hover {
          color: var(--red);
        }
      }
      span {
        opacity: 0.8;

        & + a {
          opacity: 1;
        }
      }
    }
  }
}

@media (max-width: 1279px) {
  .footer {
    text-align: center;
    &__col {
      &-logo {
        order: 1;
        flex: 1 0 100%;
        display: flex;
        justify-content: center;
      }
      &-block1 {
        order: 3;
        flex: 1 0 100%;
        margin-top: 24px;
      }
      &-block2 {
        order: 4;
        flex: 1 0 100%;
        margin-top: 40px;
      }
      &-block3 {
        order: 2;
        flex: 1 0 100%;
        margin-top: 40px;
      }
      &-social {
        flex: 1 0 100%;
        order: 5;
        margin-top: 40px;
      }
    }

    &__block {
      &-item {
        font-size: 12px;
      }
    }

    &:deep .social {
      justify-content: center;
    }
  }
}
</style>
