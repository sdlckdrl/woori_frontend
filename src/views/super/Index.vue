
<script>
  // Extensions
  import View from '@/views/View'

  // Mixins
  import LoadSections from '@/mixins/load-sections'

  export default {
    name: 'Super',

    metaInfo: { title: '슈퍼관리자' },

    extends: View,

    mixins: [
      LoadSections([
      ]),
    ],

    props: {
      id: {
        type: String,
        default: 'super',
      },
    },
  }
</script>
