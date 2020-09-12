<template>
  <base-section
    id="login"
    space="56"
  >
        <v-container
          class="fill-height"
          fluid
        >
          <v-row
            align="center"
            justify="center"
          >
            <v-col
              cols="12"
              sm="8"
              md="4"
            >
              <v-card class="elevation-12">
                <v-toolbar
                  color="primary"
                  dark
                  flat
                >
                  <v-toolbar-title>Login 관리자</v-toolbar-title>
                  <v-spacer></v-spacer>
                </v-toolbar>
                <v-card-text>
                  <v-form>
                    <v-text-field
                      label="Login"
                      name="user_id"
                      prepend-icon="mdi-account"
                      type="text"
                    ></v-text-field>
  
                    <v-text-field
                      id="password"
                      label="Password"
                      name="user_pw"
                      prepend-icon="mdi-lock"
                      type="password"
                    ></v-text-field>
                  </v-form>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="primary">Login</v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
  </base-section>
</template>

<script>
import {mapState, mapActions} from "vuex"

export default {
  name: 'SectionLogin',
  computed: {
    ...mapActions(["isLogin", "isLoginError"])
  },
  method:{
    ...mapActions(["login"]),
    test(){
      axios.post("https://reqres.in/api/login",{
          "email": "eve.holt@reqres.in",
          "password": "cityslicka"
      })
      .then(res => {
        console.log(res)
      })
    }
  }
}
</script>