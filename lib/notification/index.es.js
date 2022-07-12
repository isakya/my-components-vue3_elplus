import { defineComponent, resolveComponent, openBlock, createBlock, withCtx, createVNode, resolveDynamicComponent, unref, renderSlot } from "vue";
const toLine = (value) => {
  return value.replace(/(A-Z)g/, "-$1").toLocaleLowerCase();
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: {
    icon: {
      type: String,
      default: "Bell"
    },
    value: {
      type: [String, Number],
      default: ""
    },
    max: {
      type: Number
    },
    isDot: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_el_badge = resolveComponent("el-badge");
      const _component_el_popover = resolveComponent("el-popover");
      return openBlock(), createBlock(_component_el_popover, {
        "popper-class": "notification-popper-class",
        width: 300
      }, {
        reference: withCtx(() => [
          createVNode(_component_el_badge, {
            style: { "cursor": "pointer" },
            value: __props.value,
            max: __props.max,
            "is-dot": __props.isDot
          }, {
            default: withCtx(() => [
              (openBlock(), createBlock(resolveDynamicComponent(`el-icon-${unref(toLine)(__props.icon)}`)))
            ]),
            _: 1
          }, 8, ["value", "max", "is-dot"])
        ]),
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      });
    };
  }
});
var index = {
  install(app) {
    app.component("notification", _sfc_main);
  }
};
export { index as default };
