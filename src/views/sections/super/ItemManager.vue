<template>
  <v-card
  class="ma-2"
  >
    <v-card-title>
      품목 리스트
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="검색"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      dense
      :headers="headers"
      :items="desserts"
      :search="search"
    >
    <template v-slot:top>
      <v-toolbar dense>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="800px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
              text
              v-bind="attrs"
              v-on="on"
            >추가</v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.code" label="코드"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.name" label="품명"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.standard" label="규격"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.unit" label="단위"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.receiving_price" label="입고가"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.price" label="소비자가"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.inventory_quantity" label="재고"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.etc1" label="비고1"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.etc2" label="비고2"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.etc3" label="비고3"></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close">취소</v-btn>
              <v-btn color="blue darken-1" text @click="save">저장</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions='{ item }'>
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      > 
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize">Reset</v-btn>
    </template>
  </v-data-table>
  </v-card>



  
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'SectionItemManager',
    data () {
      return {
        search: '',
        dialog: false,
        headers: [
          {
            text: '코드',
            align: 'start',
            sortable: false,
            value: 'code',
          },
          { text: '품명', value: 'name' },
          { text: '관리코드', value: 'm_code' },
          { text: '분류', value: 'category' },
          { text: '단위', value: 'unit' },
          { text: '규격', value: 'standard' },
          { text: '입고가', value: 'receiving_price' },
          { text: '소비가', value: 'price' },
          { text: '재고', value: 'inventory_quantity' },
          { text: '수정/삭제', value: 'actions', sortable: false },
        ],
        desserts: [
        ],
        editedIndex: -1,
        editedItem: {
          name: '',
          code: '',
        },
        defaultItem: {
          name: '',
          code: '',
        },
      }
    },
    methods: {
      initialize: function () {
        axios
          .get('/api/super/itemManager/items')
          .then(res => {
            if (res.data.result_code === 'success') {
              this.desserts = res.data.items
            } else {
            }
          }).catch(() => {
            alert('에러')
          })
      },

      editItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        const index = this.desserts.indexOf(item)
        confirm('Are you sure you want to delete this item?') && this.desserts.splice(index, 1)
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save () {
        if (this.editedIndex > -1) {
          var obj = this.editedItem;      
          axios
          .post('/api/super/itemManager/modify', obj)
          .then(res => {
            if (res.data.result_code === 'success') {
              Object.assign(this.desserts[this.editedIndex], this.editedItem)
            } 
          }).catch(() => {
            alert('에러')
          })
        } else {
          this.desserts.push(this.editedItem)
        }
        this.close()
      },
    },
    created () {
      this.initialize()
    },
    watch: {
      dialog (val) {
        val || this.close()
      },
    },
    computed: {
      formTitle () {
        return this.editedIndex === -1 ? '품목 등록' : '품목 수정'
      },
    },
  }
</script>
