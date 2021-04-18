<template>
  <section id="profiles">
    <h2>{{ $t('profiles.title') }}</h2>
    <v-row>
      <v-col
        v-for="(profile, i) in profiles"
        :key="i"
        md="4"
        sm="12"
      >
        <v-card flat class="profile-card">
          <div class="d-sm-none d-md-flex profile-image">
            <v-img :src="profile.src" />
          </div>
          <v-card-title>
            <h3>{{ $t(`profiles.titles[${i}]`) }}</h3>
          </v-card-title>
          <v-card-text>
            <p>{{ $t('profiles.optional') }}</p>
            <p><span>{{ profile.exams.optional.join(', ') }}</span></p>
          </v-card-text>
          <v-card-actions>
            <span>
              <v-btn @click="expand(i)">
                {{ $t('profiles.expand') }}
              </v-btn>
            </span>
          </v-card-actions>

          <div class="profile-image-sm d-none d-sm-flex d-md-none">
            <v-img :src="profile.src" />
          </div>
        </v-card>
      </v-col>
    </v-row>

    <v-dialog
      v-model="isExpanded"
      max-width="1030"
    >
      <div class="profiles-modal">
        <v-card>
          <div class="title">
            <v-row>
              <v-col cols="11" xs="5">
                <h2>{{ $t(`profiles.titles[${selected}]`) }}</h2>
              </v-col>
              <v-col cols="1">
                <v-btn @click="isExpanded = false" plain>
                  <v-icon>mdi-close</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </div>

          <div class="types">
            <h3>{{ $t('profiles.types.title') }}</h3>
            <div class="options">
              <v-btn
                v-for="(type, i) in profiles[selected].types"
                :key="i"
                @click="option = i"
                plain
              >
                <span :class="i === option ? 'active' : ''">{{ type.title }}</span>
              </v-btn>
            </div>
          </div>

          <div class="budget" v-if="profiles[selected].types[option].slots">
            <v-divider></v-divider>
            <p>{{ $t('profiles.budget') }} - <span>{{ profiles[selected].types[option].slots }}</span></p>
            <v-divider></v-divider>
          </div>

          <div class="cards">
            <v-row>
              <v-col sm="4" cols="6">
                <v-card flat>
                  <v-card-title>
                    {{ $t('profiles.cards.length') }}
                    <span v-if="profiles[selected].types[option].options">
                      {{ $t('profiles.cards.options') }}
                    </span>
                  </v-card-title>
                  <v-card-text>
                    {{ profiles[selected].types[option].length }}
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col sm="4" cols="6">
                <v-card flat class="vr vr-xs">
                  <v-card-title>
                    {{ $t('profiles.cards.payd') }}
                  </v-card-title>
                  <v-card-text>
                    {{ profiles[selected].types[option].payd }}
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col sm="4" cols="6">
                <v-card flat class="vr">
                  <v-card-title>
                    {{ $t('profiles.cards.cost') }}
                  </v-card-title>
                  <v-card-text>
                    {{ profiles[selected].types[option].cost }}
                    <span v-if="profiles[selected].types[option].options">
                      {{ $t('profiles.cards.options') }}
                    </span>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col sm="4" cols="6">
                <v-card flat class="vr-xs">
                  <v-card-title>
                    {{ $t('profiles.cards.gov.title') }}
                  </v-card-title>
                  <v-card-text>
                    {{
                      profiles[selected].types[option].gov
                        ? $t('profiles.cards.gov.yes')
                        : $t('profiles.cards.gov.no')
                    }}
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col sm="4" cols="12">
                <v-card flat class="vr">
                  <v-card-title>
                    {{ $t('profiles.cards.ege.title') }}
                  </v-card-title>
                  <v-card-text>
                    {{
                      profiles[selected].types[option].ege
                        ? $t('profiles.cards.ege.yes')
                        : $t('profiles.cards.ege.no')
                    }}
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </div>

          <div class="exams">
            <h3>{{ $t('profiles.exams.title') }}</h3>
            <v-row>
              <v-col sm="4" cols="12">
                <v-card flat>
                  <v-card-title>
                    {{ $t('profiles.exams.required') }}
                  </v-card-title>
                  <v-card-text>
                    {{ profiles[selected].exams.required.join(', ') }}
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col sm="4" cols="12">
                <v-card flat>
                  <v-card-title>
                    {{ $t('profiles.exams.optional') }}
                  </v-card-title>
                  <v-card-text>
                    {{ profiles[selected].exams.optional.join(', ') }}
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col sm="4" cols="12">
                <v-card flat>
                  <v-card-title>
                    {{ $t('profiles.exams.educated') }}
                  </v-card-title>
                  <v-card-text>
                    {{ profiles[selected].exams.educated.join(', ') }}
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </div>

          <div class="actions">
            <v-btn dark target="_blank" href="https://admission.isuct.ru/">
              <span>{{ $t('profiles.actions.apply') }}</span>
            </v-btn>
            <v-btn color="#1B84FF" outlined target="_blank" href="https://vk.com/digit37">
              <span>{{ $t('profiles.actions.contact') }}</span>
            </v-btn>
          </div>
        </v-card>
      </div>
    </v-dialog>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Profiles',
  data() {
    return {
      isExpanded: false,
      selected: 0,
      option: 0,
    };
  },
  computed: {
    profiles() {
      return [
        {
          src: 'images/profiles/1.png',
          exams: {
            required: [
              this.$t('profiles.exams.list.math'),
              this.$t('profiles.exams.list.russian'),
            ],
            optional: [
              this.$t('profiles.exams.list.informatics'),
              this.$t('profiles.exams.list.english'),
              this.$t('profiles.exams.list.physics'),
            ],
            educated: [
              this.$t('profiles.exams.list.economics'),
            ],
          },
          types: [
            {
              title: this.$t('profiles.types.fulltime'),
              slots: 44,
              length: '4 года',
              payd: 52,
              cost: '109 720 руб.',
              gov: true,
              ege: true,
            },
          ],
        },
        {
          src: 'images/profiles/2.png',
          exams: {
            required: [
              this.$t('profiles.exams.list.math'),
              this.$t('profiles.exams.list.russian'),
            ],
            optional: [
              this.$t('profiles.exams.list.informatics'),
              this.$t('profiles.exams.list.english'),
              this.$t('profiles.exams.list.physics'),
            ],
            educated: [
              this.$t('profiles.exams.list.economics'),
            ],
          },
          types: [
            {
              title: this.$t('profiles.types.fulltime'),
              slots: 44,
              length: '4 года',
              payd: 52,
              cost: '109 720 ₽',
              gov: true,
              ege: true,
            },
            {
              title: this.$t('profiles.types.extramural'),
              slots: 10,
              length: '5 лет / 3 года и 10 месяцев',
              payd: 150,
              cost: '36 060 ₽ / 39 100 ₽',
              gov: true,
              ege: true,
              options: true,
            },
          ],
        },
        {
          src: 'images/profiles/3.png',
          exams: {
            required: [
              this.$t('profiles.exams.list.math'),
              this.$t('profiles.exams.list.russian'),
            ],
            optional: [
              this.$t('profiles.exams.list.social'),
              this.$t('profiles.exams.list.history'),
              this.$t('profiles.exams.list.informatics'),
              this.$t('profiles.exams.list.english'),
              this.$t('profiles.exams.list.physics'),
              this.$t('profiles.exams.list.geography'),
            ],
            educated: [
              this.$t('profiles.exams.list.economics'),
            ],
          },
          types: [
            {
              title: this.$t('profiles.types.fulltime'),
              slots: 0,
              length: '4 года',
              payd: 50,
              cost: '93 492 ₽',
              gov: true,
              ege: true,
            },
            {
              title: this.$t('profiles.types.parttime'),
              slots: 0,
              length: '5 лет / 3 года и 10 месяцев',
              payd: 100,
              cost: '36 060 ₽ / 39 100 ₽',
              gov: true,
              ege: true,
              options: true,
            },
            {
              title: this.$t('profiles.types.extramural'),
              slots: 0,
              length: '5 лет / 3 года и 10 месяцев',
              payd: 100,
              cost: '36 060 руб. / 39 100 руб.',
              gov: true,
              ege: true,
              options: true,
            },
          ],
        },
      ];
    },
  },
  methods: {
    expand(i: number) {
      this.selected = i;
      this.option = 0;
      this.isExpanded = true;
    },
  },
  watch: {
    // eslint-disable-next-line func-names
    '$i18n.locale': function () {
      this.$nextTick(() => {
        this.$forceUpdate();
      });
    },
  },
});
</script>

<style lang="scss" scoped>
.profile-card {
  background: #E7EFFA !important;
  border-radius: 20px !important;
  padding: 100px 11px 22px 14px;
  margin-top: 100px;
  @media screen and (min-width: 600px) and (max-width: 960px) {
    padding: 20px;
    margin-top: 5px;
  }
  .profile-image {
    position: absolute;
    left: calc(50% - 110px);
    top: -110px;
    width: 220px;
  }
  .profile-image-sm {
    position: absolute;
    right: 16px;
    bottom: 30px;
    width: 200px;
  }
  .v-card {
    &__title {
      min-height: 110px;
      padding-bottom: 0;
      align-items: baseline;
      @media screen and (max-width: 960px) {
        min-height: 40px;
      }
      @media screen and (max-width: 600px) {
        min-height: 60px;
      }
      h3 {
        word-break: keep-all;
        font-size: 23px;
        margin-bottom: 0;
        @media screen and (max-width: 960px) {
          font-size: 21px;
        }
        @media screen and (max-width: 600px) {
          font-size: 18px;
        }
      }
    }
    &__text {
      margin-top: 20px;
      p {
        min-height: 95px;
        font-weight: 500;
        font-size: 20px;
        line-height: 30px;
        @media screen and (max-width: 960px) {
          font-size: 18px;
          line-height: 20px;
          min-height: 45px;
          max-width: 430px;
        }
        @media screen and (max-width: 600px) {
          font-size: 18px;
          line-height: 20px;
          min-height: 80px;
        }
        span {
          font-weight: normal;
          font-size: 18px;
          color: #777F9C;
        }
      }
      :first-child {
        min-height: 50px;
        @media screen and (max-width: 960px) {
          min-height: 25px;
        }
        @media screen and (max-width: 600px) {
          min-height: 45px;
        }
      }
    }
  }
}
.profiles-modal > .v-card {
  background: #E7EFFA;
  padding: 27px 0;

  > * {
    padding: 0 42px;
    @media screen and (max-width: 600px) {
      padding: 0 15px;
    }
  }
  .title {
    h2 {
      font-weight: 600;
      font-size: 35px;
      line-height: 40px;
      @media screen and (max-width: 960px) {
        font-size: 30px;
        line-height: 40px;
      }
      @media screen and (max-width: 600px) {
        font-size: 19px;
        line-height: 25px;
      }
    }
    .v-btn {
      margin-top: 20px;
      i {
        font-size: 32px;
      }
      @media screen and (max-width: 600px) {
        position: absolute;
        top: 0;
        right: 5px;
      }
    }
    @media screen and (max-width: 600px) {
      margin-bottom: 25px;
    }
  }
  .types {
    margin-bottom: 30px;
    @media screen and (max-width: 600px) {
      margin-bottom: 20px;
    }
    h3 {
      @media screen and (max-width: 960px) {
        font-size: 20px;
        line-height: 25px;
      }
    }
    .options {
      .v-btn {
        border-left: 1px solid rgba(119, 127, 156, 0.4);
        border-radius: 0;
        height: 100%;
        @media screen and (max-width: 600px) {
          padding: 0 5px;
          letter-spacing: 0;
        }
        span {
          font-weight: 600;
          font-size: 20px;
          line-height: 25px;
          @media screen and (max-width: 960px) {
            font-size: 16px;
            line-height: 25px;
          }
          @media screen and (max-width: 600px) {
            font-size: 14px;
            line-height: 15px;
          }
          .active {
            color: #1B84FF;
          }
        }
      }
      >:first-child {
        border: none;
        padding-left: 0;
      }
    }
  }
  .budget {
    padding: 0;
    p {
      margin: 20px 42px;
      font-weight: 520;
      font-size: 18px;
      line-height: 22px;
      color: #777F9C;
      @media screen and (max-width: 960px) {
        font-size: 16px;
        line-height: 22px;
      }
      @media screen and (max-width: 600px) {
        margin: 9px 15px;
        font-size: 14px;
        line-height: 10px;
      }
      span {
        color: #000;
      }
    }
  }
  .cards {
    margin: 25px 0;
    position: relative;
    .vr {
      @media screen and (min-width: 600px) {
        border-left: 1.82838px solid rgba(119, 127, 156, 0.4);
        border-radius: 0;
        padding-left: 20px;
      }
    }
    .vr-xs {
      @media screen and (max-width: 600px) {
        border-left: 1.82838px solid rgba(119, 127, 156, 0.4);
        border-radius: 0;
        padding-left: 20px;
      }
    }
    .v-card {
      background: #E7EFFA;
      &__title {
        min-height: 50px;
        font-weight: 600;
        font-size: 18px;
        line-height: 22px;
        margin-bottom: 6px;
        word-break: keep-all;
        color: #777F9C;
        padding: 0;
        margin-top: 16px;
        align-items: start;
        @media screen and (max-width: 960px) {
          font-size: 14px;
          line-height: 22px;
        }
        @media screen and (max-width: 600px) {
          min-height: 30px;
          margin-top: 0;
          font-size: 12px;
          line-height: 10px;
        }
      }
      &__text {
        font-weight: 500;
        font-size: 20px;
        line-height: 32px;
        color: #0E0B0B;
        padding: 0;
        margin-bottom: 16px;
        @media screen and (max-width: 960px) {
          font-size: 18px;
          line-height: 32px;
        }
        @media screen and (max-width: 600px) {
          margin-bottom: 0;
          font-size: 14px;
          line-height: 10px;
        }
        span {
          display: block;
          position: absolute;
          font-size: 12px;
          line-height: 12px;
        }
      }
    }
    .row > :last-child {
      @media screen and (max-width: 600px) {
        text-align: center;
        .v-card__title {
          min-height: 14px;
        }
      }
    }
  }
  .exams {
    @media screen and (max-width: 600px) {
      padding-top: 20px;
    }
    .v-card {
      border-radius: 15px;
      margin-bottom: 0;
      font-weight: 500;
      &__title {
        padding: 11px 13px;
        height: 60px;
        color: #fff;
        background: #1B84FF;
        word-break: normal;
        font-size: 18px;
        line-height: 20px;
        @media screen and (max-width: 960px) {
          height: 43px;
          font-size: 15px;
          line-height: 15px;
        }
        @media screen and (max-width: 600px) {
          height: 45px;
          font-size: 16px;
          line-height: 15px;
        }
      }
      &__text {
        margin-top: 0;
        padding: 11px 13px;
        font-size: 16px;
        line-height: 25px;
        max-width: 100%;
        color: #0E0B0B;
        background: #FFFFFF;
        height: 100px;
        @media screen and (max-width: 960px) {
          min-height: 80px;
          font-size: 14px;
          line-height: 20px;
        }
        @media screen and (max-width: 600px) {
          padding: 8px 13px;
          min-height: 56px;
          font-size: 14px;
          line-height: 20px;
        }
      }
    }
  }
  .actions {
    margin-top: 46px;
    @media screen and (max-width: 960px) {
      margin-top: 25px;
    }
    @media screen and (max-width: 600px) {
      margin-top: 40px;
    }
    .v-btn {
      padding: 22px 26px;
      max-width: 300px;
      height: 62px;
      margin-right: 35px;
      font-style: normal;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      border-radius: 26px;
      @media screen and (max-width: 600px) {
        margin-bottom: 20px;
      }
      span {
        font-weight: 500;
        font-size: 14px !important;
        line-height: 17px !important;
        @media screen and (max-width: 960px) {
        font-size: 12px;
        line-height: 15px;
        }
        @media screen and (max-width: 600px) {
          font-size: 10px;
          line-height: 12px;
        }
      }
    }
  }
}
</style>
<style lang="scss">
.profile-card > .v-card {
    &__actions {
      .v-btn {
        span {
          font-weight: 500;
          @media screen and (max-width: 600px) {
            font-size: 16px;
          }
        }
      }
    }
}
.profiles-modal > .v-card {
  .types {
    .v-btn {
      &__content {
        opacity: 1 !important;
      }
    }
  }
}
.v-dialog {
  @media screen and (max-width: 600px) {
    margin: 0 !important;
  }
}
</style>
