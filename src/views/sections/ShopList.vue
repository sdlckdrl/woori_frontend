<template>
  <base-section
    id="affiliates"
    class="grey lighten-4"
    space="0"
  >
    <v-row
      no-gutters
      class="ma-2 pa-0"
      justify="center"
      align="start"
    >
      <v-col :cols="2">
        <v-navigation-drawer
          permanent
        >
          <template v-slot:prepend>
            <v-list-item>
              <v-app-bar-nav-icon />

              <v-list-item-content>
                <v-list-item-title>카테고리</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </template>

          <v-divider />

          <v-list dense>
            <v-list-item
              v-for="item in categori_items"
              :key="item.title"
              @click="tmp=!tmp"
            >
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
      </v-col>

      <v-col>
        <v-card
          class="d-flex flex-wrap"
          color="grey lighten-4"
          flat
          tile
        >
          <v-card
            v-for="item in list"
            :key="item.num"
            class="ma-3"
            max-width="300"
            @click="tmp=!tmp"
          >
            <v-img
              class="white--text align-end"
              height="150px"
              :src="item.src"
            >
              <v-card-title>Top 10 Australian beaches</v-card-title>
            </v-img>

            <v-card-subtitle class="pb-0">
              Number 10
            </v-card-subtitle>

            <v-card-text class="text--primary">
              <div>Whitehaven Beach</div>

              <div>Whitsunday Island, Whitsunday Islands</div>
            </v-card-text>
          </v-card>
        </v-card>
        <!-- <v-layout wrap justify-space-around>
          <v-flex v-for="item in list" :key="item.num">
            <v-card
              class="mx-auto ma-3"
              max-width="250"
            >
              <v-img
                class="white--text align-end"
                height="150px"
                :src="item.src"
              >
                <v-card-title>Top 10 Australian beaches</v-card-title>
              </v-img>

              <v-card-subtitle class="pb-0">Number 10</v-card-subtitle>

              <v-card-text class="text--primary">
                <div>Whitehaven Beach</div>

                <div>Whitsunday Island, Whitsunday Islands</div>
              </v-card-text>

              <v-card-actions>
                <v-btn
                  color="orange"
                  text
                >
                  장바구니
                </v-btn>

                <v-btn
                  color="orange"
                  text
                >
                  Explore
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
        -->
      </v-col>
    </v-row>
  </base-section>
</template>
<script>
  export default {
    name: 'SectionShopList',
    data: () => ({
      tmp: false,
      categori_items: [
        { title: '가정용', icon: 'mdi-home-city' },
      ],
      list: Array.from(new Array(60)).map((e, i) => ({
        num: i + 1,
        src: 'https://picsum.photos/300/400?image=2',
      })),
    }),
  }
</script>
