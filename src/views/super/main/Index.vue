<script>
  // Extensions
  import View from '@/views/View'

  // Mixins
  import LoadSections from '@/mixins/super/load-sections'

  export default {
    name: 'Login',

    metaInfo: { title: 'Login' },

    extends: View,

    mixins: [
      LoadSections([
        'main',
      ]),
    ],

    props: {
      id: {
        type: String,
        default: 'login',
      },
    },
  }
</script>
