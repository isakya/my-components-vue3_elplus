import { defineComponent, ref, watch, resolveComponent, openBlock, createElementBlock, normalizeClass, createVNode, mergeProps, unref, isRef, withCtx, renderSlot } from "vue";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    options: {
      type: Array,
      required: true
    },
    isScroll: {
      type: Boolean,
      default: false
    },
    onChange: {
      type: Function
    },
    beforeUpload: {
      type: Function
    },
    onPreview: {
      type: Function
    },
    onRemove: {
      type: Function
    },
    beforeRemove: {
      type: Function
    },
    onExceed: {
      type: Function
    },
    onSuccess: {
      type: Function
    }
  },
  emits: ["update:visible"],
  setup(__props, { emit: emits }) {
    const props = __props;
    let form = ref();
    let dialogVisible = ref(props.visible);
    watch(() => props.visible, (val) => {
      dialogVisible.value = val;
    });
    watch(() => dialogVisible.value, (val) => {
      emits("update:visible", val);
    });
    return (_ctx, _cache) => {
      const _component_my_form = resolveComponent("my-form");
      const _component_el_dialog = resolveComponent("el-dialog");
      return openBlock(), createElementBlock("div", {
        class: normalizeClass({ "my-choose-icon-dialog-body-height": __props.isScroll })
      }, [
        createVNode(_component_el_dialog, mergeProps({
          modelValue: unref(dialogVisible),
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(dialogVisible) ? dialogVisible.value = $event : dialogVisible = $event)
        }, _ctx.$attrs), {
          default: withCtx(() => [
            createVNode(_component_my_form, {
              onOnChange: __props.onChange,
              onBeforeUpload: __props.beforeUpload,
              onOnPreview: __props.onPreview,
              onOnRemove: __props.onRemove,
              onBeforeRemove: __props.beforeRemove,
              onOnExceed: __props.onExceed,
              onOnSuccess: __props.onSuccess,
              "label-width": "100px",
              ref_key: "form",
              ref: form,
              options: __props.options
            }, {
              uploadArea: withCtx(() => [
                renderSlot(_ctx.$slots, "uploadArea")
              ]),
              uploadTip: withCtx(() => [
                renderSlot(_ctx.$slots, "uploadTip")
              ]),
              _: 3
            }, 8, ["onOnChange", "onBeforeUpload", "onOnPreview", "onOnRemove", "onBeforeRemove", "onOnExceed", "onOnSuccess", "options"])
          ]),
          footer: withCtx(() => [
            renderSlot(_ctx.$slots, "footer", { form: unref(form) })
          ]),
          _: 3
        }, 16, ["modelValue"])
      ], 2);
    };
  }
});
var index = {
  install(app) {
    app.component("modalForm", _sfc_main);
  }
};
export { index as default };
