<script>
  // Extensions
  import View from '@/views/View'

  // Mixins
  import LoadSections from '@/mixins/load-sections'

  export default {
    name: 'Shop',

    metaInfo: { title: 'Shop' },

    extends: View,

    mixins: [
      LoadSections([
        'hero-alt',
        'shop-list',
      ]),
    ],

    props: {
      id: {
        type: String,
        default: 'shop',
      },
    },
  }
</script>
