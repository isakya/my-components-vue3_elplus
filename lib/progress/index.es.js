import { defineComponent, ref, onMounted, resolveComponent, openBlock, createElementBlock, createVNode, mergeProps, unref } from "vue";
const _hoisted_1 = { class: "my-el-progress-circle-size" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: {
    percentage: {
      type: Number,
      default: 0
    },
    isAnimation: {
      type: Boolean,
      default: false
    },
    time: {
      type: Number,
      default: 3e3
    }
  },
  setup(__props) {
    const props = __props;
    let p = ref(0);
    onMounted(() => {
      if (props.isAnimation) {
        let t = Math.ceil(props.time / props.percentage);
        let timer = setInterval(() => {
          p.value += 1;
          if (p.value >= props.percentage) {
            p.value = props.percentage;
            clearInterval(timer);
          }
        }, t);
      } else {
        p.value = props.percentage;
      }
    });
    return (_ctx, _cache) => {
      const _component_el_progress = resolveComponent("el-progress");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_el_progress, mergeProps(_ctx.$attrs, { percentage: unref(p) }), null, 16, ["percentage"])
      ]);
    };
  }
});
var index = {
  install(app) {
    app.component("my-progress", _sfc_main);
  }
};
export { index as default };
