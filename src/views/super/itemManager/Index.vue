<script>
  // Extensions
  import View from '@/views/View'

  // Mixins
  import LoadSections from '@/mixins/super/load-sections'

  export default {
    name: 'ItemManager',

    metaInfo: { title: '품목관리' },

    extends: View,

    mixins: [
      LoadSections([
        'itemManager',
      ]),
    ],

    props: {
      id: {
        type: String,
        default: 'itemManager',
      },
    },
  }
</script>
