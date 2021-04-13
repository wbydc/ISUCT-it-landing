<template>
  <section id="contacts">
    <h2>{{ $t('contacts.title') }}</h2>
    <v-row>
      <v-col md="7" sm="6" cols="12">
        <div class="contacts">
          <v-row
            v-for="(contact, i) in contacts"
            :key="i"
          >
            <v-col sm="1" cols="2">
              <v-icon>mdi-{{ contact.icon }}</v-icon>
            </v-col>
            <v-col sm="11" cols="10">
              <p>
                <a
                  :href="(contact.urlPrefix || '') + (contact.url || contact.content)"
                  target="_blank"
                >{{ contact.content }}</a>
              </p>
            </v-col>
          </v-row>
        </div>

        <h3>{{ $t('contacts.subtitle') }}</h3>

        <div class="contacts2">
          <v-row
            v-for="(contact, i) in contacts2"
            :key="i"
          >
            <v-col sm="1" cols="2">
              <v-icon>mdi-{{ contact.icon }}</v-icon>
            </v-col>
            <v-col sm="11" cols="10">
              <p>
                <a
                  :href="(contact.urlPrefix || '') + (contact.url || contact.content)"
                  target="_blank"
                >{{ contact.content }}</a>
              </p>
            </v-col>
          </v-row>
        </div>

        <div class="d-none d-md-flex socials">
          <v-btn
            v-for="(social, i) in socials"
            :key="i"
            plain
            :href="social.url"
            target="_blank"
          >
            <div :class="`icon ${social.icon}`"></div>
          </v-btn>
        </div>
      </v-col>
      <v-col md="5" sm="6" cols="12">
        <v-card flat>
          <h3>
            {{ $t('contacts.form.title') }}
          </h3>
          <p>
            {{ $t('contacts.form.text') }}
          </p>
          <div class="form">
            <form @submit="sendMail()">
              <v-text-field
                v-model="form.name"
                :label="$t('contacts.form.fields.name')"
                required
                outlined
              ></v-text-field>
              <v-text-field
                v-model="form.phone"
                :label="$t('contacts.form.fields.phone')"
                required
                outlined
                v-mask="'+#(###) ###-##-##'"
              ></v-text-field>
              <v-text-field
                v-model="form.email"
                :label="$t('contacts.form.fields.email')"
                required
                outlined
              ></v-text-field>

              <v-btn type="submit" @click="() => false">
                {{ $t('contacts.form.submit') }}
              </v-btn>
            </form>
          </div>
          <span>
            {{ $t('contacts.form.agreement') }}
          </span>
        </v-card>
      </v-col>
    </v-row>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Contacts',
  data() {
    return {
      contacts: [
        {
          content: 'г. Иваново, Шереметевский пр., д. 14, каб. 36',
          url: 'https://yandex.ru/maps/5/ivanovo/house/sheremetevskiy_prospekt_14/YEkYfw9mSEcHQFtsfXV4eHpgZg==/'
            + '?ll=40.986061%2C56.999804&z=17',
          icon: 'map-marker',
        },
        {
          content: '+7(4932) 308-238',
          urlPrefix: 'tel:',
          icon: 'phone',
        },
        {
          content: '+7(920) 678-33-90',
          urlPrefix: 'tel:',
          icon: 'phone',
        },
        {
          content: 'it@isuct.ru',
          urlPrefix: 'mailto:',
          icon: 'email',
        },
      ],
      contacts2: [
        {
          content: 'г. Иваново, Шереметевский пр., д. 7, к. 223',
          url: 'https://yandex.ru/maps/5/ivanovo/house/sheremetevskiy_prospekt_14/YEkYfw9mSEcHQFtsfXV4eHpgZg==/'
            + '?ll=40.986061%2C56.999804&z=17',
          icon: 'map-marker',
        },
        {
          content: '+7 (4932) 93-98-19',
          urlPrefix: 'tel:',
          icon: 'phone',
        },
        {
          content: 'pricom@isuct.ru',
          urlPrefix: 'mailto:',
          icon: 'email',
        },
      ],
      socials: [
        {
          icon: 'vk',
          url: 'https://vk.me/digit37?message=test',
        },
        {
          icon: 'viber',
          url: 'viber://chat?number=79206783390',
        },
        {
          icon: 'fb',
          url: 'https://facebook.com/digit37',
        },
      ],
      form: {
        name: '',
        phone: '',
        email: '',
      },
    };
  },
  methods: {
    sendMail() {
      const subject: string = encodeURIComponent(this.$t('contacts.email.subject').toString());
      const body: string = encodeURIComponent(this.$t('contacts.email.body', {
        name: this.form.name,
        phone: this.form.phone,
        email: this.form.email,
      }).toString());
      window.open(`mailto:it@isuct.ru?subject=${subject}&body=${body}`, '_blank');

      this.form.name = '';
      this.form.phone = '';
      this.form.email = '';
      return false;
    },
  },
});
</script>

<style lang="scss" scoped>
h3 {
  font-weight: 500;
  font-size: 35px;
  line-height: 60px;
  margin-top: 60px;
  margin-bottom: 40px;
  @media screen and (max-width: 960px) {
    font-weight: 600;
    font-size: 22px;
    line-height: 30px;
  }
  @media screen and (max-width: 600px) {
    font-size: 20px;
    line-height: 25px;
    margin-top: 35px;
    margin-bottom: 20px;
  }
}
.socials {
  margin-top: 80px;
  .v-btn {
    padding: 0;
  }
  > :first-child {
    margin-left: -16px;
  }
  .icon {
    background-color: #1B84FF;
  }
}
.v-card {
  background: #E7EFFA !important;
  border-radius: 20px !important;
  text-align: center;
  padding: 45px 30px 35px 30px;
  @media screen and (max-width: 960px) {
  }
  @media screen and (max-width: 600px) {
    padding: 30px 23px;
  }
  h3 {
    margin: 0;
    padding: 0;
    font-weight: 600;
    font-size: 40px;
    line-height: 150%;
    color: #052033;
    @media screen and (max-width: 960px) {
      font-size: 22px;
      line-height: 100%;
      margin-bottom: 10px;
    }
  }
  p {
    font-size: 16px;
    line-height: 25px;
    text-align: center;
    color: #0E0B0B;
    margin-bottom: 30px;
    @media screen and (max-width: 960px) {
      font-size: 16px;
      line-height: 20px;
    }
  }
  .v-btn {
    margin-bottom: 15px;
    width: 100%;
  }
  span {
    font-size: 14px;
    line-height: 20px;
    color: #777F9C;
    @media screen and (max-width: 960px) {
      font-size: 11px;
    }
  }
  .form {
    padding: 0 70px;
    @media screen and (max-width: 960px) {
      padding: 0 6px;
    }
    .v-input__slot {
      background: #FFFFFF;
      border: 1px solid #C8D7EC;
      box-sizing: border-box;
      border-radius: 9px;
    }
  }
}
</style>
<style lang="scss">
#contacts {
  .contacts, .contacts2 {
    p {
      margin-bottom: 0 !important;
    }
    .v-icon {
      margin-right: 23px;
    }
  }
  .v-icon {
    color: #1B84FF;
    font-size: 30px;
  }
  .v-btn {
    &__content {
      opacity: 1 !important;
    }
  }
  .form {
    .v-input__slot {
      background: #FFFFFF;
      border: 1px solid #C8D7EC;
      box-sizing: border-box;
      border-radius: 9px;
      label {
        color: #777F9C;
      }
    }
  }
}
</style>
