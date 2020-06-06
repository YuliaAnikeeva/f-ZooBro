<script>
import { Hooper, Slide } from 'hooper';
import 'hooper/dist/hooper.css';

export default {
  name: "Slider",
  data () {
    return {
        options:{
          itemsToShow: 1.5,
          centerMode: true,
          initialSlide: 1,
          shortDrag: false,
          breakpoints: {
            900: {
              itemsToShow: 3,
              trimWhiteSpace: true,
              initialSlide: 0,
            },
            768: {
              itemsToShow: 2.5,
            },
            600: {
              itemsToShow: 2,
            },
            415: {
              itemsToShow: 1.5,
            },
            375: {
              itemsToShow: 1.8,
            }
          }
        }
    }
  },
  render (h) {
    return h(Hooper, {
      class: {
      },
      props: {
        settings: this.options
      },
    }, this.$slots.default.map( vnode => h(Slide, null, [vnode]) ))
  }
}
</script>
