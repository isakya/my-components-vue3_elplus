import { defineComponent, useSlots, openBlock, createElementBlock, createElementVNode, unref, renderSlot, toDisplayString, createBlock, resolveDynamicComponent, normalizeStyle } from "vue";
var index_vue_vue_type_style_index_0_scoped_true_lang = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _hoisted_1 = { class: "trend" };
const _hoisted_2 = { class: "text" };
const _hoisted_3 = { key: 1 };
const _hoisted_4 = { class: "icon" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: {
    type: {
      type: String,
      default: "up"
    },
    text: {
      type: String,
      default: "title"
    },
    icon: {
      type: String
    },
    reverseColor: {
      type: Boolean,
      default: false
    },
    upIconColor: {
      type: String,
      default: "#f5222d"
    },
    downIconColor: {
      type: String,
      default: "#52c41a"
    }
  },
  setup(__props) {
    let slots = useSlots();
    return (_ctx, _cache) => {
      var _a, _b;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createElementVNode("div", _hoisted_2, [
          unref(slots).default ? renderSlot(_ctx.$slots, "default", { key: 0 }, void 0, true) : (openBlock(), createElementBlock("div", _hoisted_3, toDisplayString(__props.text), 1))
        ]),
        createElementVNode("div", _hoisted_4, [
          __props.type === "up" ? (openBlock(), createBlock(resolveDynamicComponent(`el-icon-${((_a = __props.icon) == null ? void 0 : _a.toLocaleLowerCase()) || "arrowup"}`), {
            key: 0,
            style: normalizeStyle({ color: !__props.reverseColor ? __props.upIconColor : "#52c41a" })
          }, null, 8, ["style"])) : (openBlock(), createBlock(resolveDynamicComponent(`el-icon-${((_b = __props.icon) == null ? void 0 : _b.toLocaleLowerCase()) || "arrowdown"}`), {
            key: 1,
            style: normalizeStyle({ color: !__props.reverseColor ? __props.downIconColor : "#f5222d" })
          }, null, 8, ["style"]))
        ])
      ]);
    };
  }
});
var trend = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-46d84620"]]);
var index = {
  install(app) {
    app.component("trend", trend);
  }
};
export { index as default };
