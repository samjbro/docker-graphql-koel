<template>
  <div class="app-header">
    <h1 class="app-header__brand" v-once>
      {{ appName }}
    </h1>
    <span class="app-header__hamburger">
      <fa-icon :icon="['fas', 'bars']" />
    </span>
    <span class="app-header__magnifier">
      <fa-icon :icon="['fas', 'search']" />
    </span>
    <search-form />
    <user-badge />
  </div>
</template>

<script>
import { app as appConfig } from '@/config'
import SearchForm from '../ui/search-form.vue'
import UserBadge from '../user/badge.vue'
export default {
  components: {
    SearchForm,
    UserBadge
  },
  data: () => ({ appName: appConfig.name })
}
</script>

<style lang="scss">
@import "~#/abstracts/variables";
.app-header {
  flex: 0 0 $headerHeight;
  background: $color2ndBgr;
  display: flex;
  border-bottom: 1px solid $colorMainBgr;

  &__brand {
    flex: 1;
    font-size: 2rem;
    font-weight: $fontWeight_UltraThin;
    line-height: $headerHeight;
    text-align: center;
    opacity: 0;
  }

  &__hamburger,
  &__magnifier {
    font-size: 1.8rem;
    flex: 0 0 4.8rem;
    order: -1;
    line-height: $headerHeight;
    text-align: center;
    display: none;
  }

  @media only screen and (max-width: 667px) {
    &__brand {
      opacity: 1;
    }
    &__hamburger,
    &__magnifier {
      display: inline-block;
    }
  }
}
</style>
