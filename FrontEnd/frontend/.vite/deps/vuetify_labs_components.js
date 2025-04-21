import {
  VAvatar,
  VBadge,
  VBtn,
  VCheckboxBtn,
  VChip,
  VConfirmEdit,
  VDatePicker,
  VDefaultsProvider,
  VDivider,
  VExpansionPanel,
  VExpansionPanels,
  VIcon,
  VList,
  VListGroup,
  VListItem,
  VListItemAction,
  VMenu,
  VPicker,
  VPickerTitle,
  VProgressCircular,
  VSheet,
  VStepperActions,
  VTextField,
  genOverlays,
  makeBorderProps,
  makeCalendarProps,
  makeDensityProps,
  makeElevationProps,
  makeFilterProps,
  makeFocusProps,
  makeRoundedProps,
  makeStepperItemProps,
  makeStepperProps,
  makeTagProps,
  makeVConfirmEditProps,
  makeVDatePickerProps,
  makeVDividerProps,
  makeVExpansionPanelProps,
  makeVExpansionPanelsProps,
  makeVListGroupProps,
  makeVListItemProps,
  makeVListProps,
  makeVPickerProps,
  makeVSheetProps,
  makeVStepperActionsProps,
  makeVTextFieldProps,
  makeVariantProps,
  useBorder,
  useCalendar,
  useDensity,
  useElevation,
  useFilter,
  useFocus,
  useListItems,
  useRounded,
  useVariant
} from "./chunk-CS3GE6CL.js";
import {
  IconValue,
  useDate
} from "./chunk-TONEWURU.js";
import {
  VOverlay,
  forwardRefs,
  makeDelayProps,
  useBackgroundColor,
  useTextColor
} from "./chunk-QEH2JPHA.js";
import {
  chunkArray,
  clamp,
  convertToUnit,
  createRange,
  filterInputAttrs,
  genericComponent,
  getPropertyFromItem,
  getScrollParents,
  humanReadableFileSize,
  makeComponentProps,
  makeDisplayProps,
  makeThemeProps,
  omit,
  pick,
  propsFactory,
  provideDefaults,
  provideTheme,
  useDisplay,
  useLocale,
  useProxiedModel,
  useRender,
  wrapInArray
} from "./chunk-QTO34R3N.js";
import {
  Fragment,
  computed,
  createTextVNode,
  createVNode,
  inject,
  mergeProps,
  onMounted,
  onUnmounted,
  provide,
  reactive,
  ref,
  shallowRef,
  toDisplayString,
  toRaw,
  toRef,
  toRefs,
  watch,
  watchEffect,
  withModifiers
} from "./chunk-IJV5NOMV.js";

// node_modules/vuetify/lib/labs/VCalendar/VCalendar.js
import "C:/UCM HW/UCM Senior Project/s25-class-org-platform/FrontEnd/frontend/node_modules/vuetify/lib/labs/VCalendar/VCalendar.css";

// node_modules/vuetify/lib/labs/VCalendar/VCalendarDay.js
import "C:/UCM HW/UCM Senior Project/s25-class-org-platform/FrontEnd/frontend/node_modules/vuetify/lib/labs/VCalendar/VCalendarDay.css";

// node_modules/vuetify/lib/labs/VCalendar/VCalendarInterval.js
import "C:/UCM HW/UCM Senior Project/s25-class-org-platform/FrontEnd/frontend/node_modules/vuetify/lib/labs/VCalendar/VCalendarInterval.css";

// node_modules/vuetify/lib/labs/VCalendar/VCalendarIntervalEvent.js
import "C:/UCM HW/UCM Senior Project/s25-class-org-platform/FrontEnd/frontend/node_modules/vuetify/lib/labs/VCalendar/VCalendarIntervalEvent.css";
var makeVCalendarIntervalEventProps = propsFactory({
  allDay: Boolean,
  interval: Object,
  intervalDivisions: {
    type: Number,
    required: true
  },
  intervalDuration: {
    type: Number,
    required: true
  },
  intervalHeight: {
    type: Number,
    required: true
  },
  event: Object
}, "VCalendarIntervalEvent");
var VCalendarIntervalEvent = genericComponent()({
  name: "VCalendarIntervalEvent",
  props: makeVCalendarIntervalEventProps(),
  setup(props) {
    const adapter = useDate();
    const calcHeight = () => {
      var _a, _b, _c, _d;
      if (!((_a = props.event) == null ? void 0 : _a.first) && !((_b = props.event) == null ? void 0 : _b.last) || adapter.isEqual((_c = props.event) == null ? void 0 : _c.start, (_d = props.interval) == null ? void 0 : _d.start)) {
        return {
          height: "100%",
          margin: convertToUnit(0)
        };
      } else {
        const {
          height,
          margin
        } = Array.from({
          length: props.intervalDivisions
        }, (x) => x * (props.intervalDuration / props.intervalDivisions)).reduce((total, div, index) => {
          var _a2, _b2;
          if (adapter.isBefore(adapter.addMinutes((_a2 = props.interval) == null ? void 0 : _a2.start, div), (_b2 = props.event) == null ? void 0 : _b2.start)) {
            return {
              height: convertToUnit(props.intervalHeight / props.intervalDivisions * index),
              margin: convertToUnit(props.intervalHeight / props.intervalDivisions * index)
            };
          }
          return {
            height: total.height,
            margin: total.margin
          };
        }, {
          height: "",
          margin: ""
        });
        return {
          height,
          margin
        };
      }
    };
    useRender(() => {
      var _a, _b, _c, _d, _e;
      return createVNode(VSheet, {
        "height": calcHeight().height,
        "density": "comfortable",
        "style": `margin-top: ${calcHeight().margin}`,
        "class": "v-calendar-internal-event",
        "color": ((_a = props.event) == null ? void 0 : _a.color) ?? void 0,
        "rounded": ((_b = props.event) == null ? void 0 : _b.first) && ((_c = props.event) == null ? void 0 : _c.last) ? true : ((_d = props.event) == null ? void 0 : _d.first) ? "t" : ((_e = props.event) == null ? void 0 : _e.last) ? "b" : false
      }, {
        default: () => {
          var _a2, _b2;
          return [((_a2 = props.event) == null ? void 0 : _a2.first) ? (_b2 = props.event) == null ? void 0 : _b2.title : ""];
        }
      });
    });
    return {};
  }
});

// node_modules/vuetify/lib/labs/VCalendar/VCalendarInterval.js
var makeVCalendarIntervalProps = propsFactory({
  day: {
    type: Object,
    default: () => ({})
  },
  dayIndex: Number,
  events: Array,
  intervalDivisions: {
    type: Number,
    default: 2
  },
  intervalDuration: {
    type: Number,
    default: 60
  },
  intervalHeight: {
    type: Number,
    default: 48
  },
  intervalFormat: {
    type: [String, Function],
    default: "fullTime12h"
  },
  intervalStart: {
    type: Number,
    default: 0
  }
}, "VCalendarInterval");
var VCalendarInterval = genericComponent()({
  name: "VCalendarInterval",
  props: {
    index: {
      type: Number,
      required: true
    },
    ...makeVCalendarIntervalProps()
  },
  setup(props, _ref) {
    let {
      emit,
      slots
    } = _ref;
    const adapter = useDate();
    const interval = computed(() => {
      const start = adapter.addMinutes(adapter.startOfDay(props.day.date), props.intervalDuration * (props.index + props.intervalStart));
      const end = adapter.addMinutes(adapter.startOfDay(props.day.date), props.intervalDuration * (props.index + props.intervalStart + 1) - 1);
      return {
        ...props.day,
        label: adapter.format(start, "fullTime24h"),
        start,
        end,
        events: props.events ? props.events.filter((e) => !e.allDay && (adapter.isEqual(start, e.start) || adapter.isWithinRange(e.start, [start, end]) || adapter.isWithinRange(start, [e.start, e.end]) || adapter.isEqual(end, e.end))).map((e) => {
          return {
            ...e,
            first: adapter.isEqual(start, e.start) || adapter.isWithinRange(e.start, [start, end]),
            last: adapter.isEqual(end, e.end) || adapter.isWithinRange(e.end, [start, end])
          };
        }) : []
      };
    });
    useRender(() => {
      var _a, _b;
      return props.dayIndex === 0 ? createVNode("div", {
        "class": "v-calendar-day__row-with-label",
        "style": `height: ${convertToUnit(props.intervalHeight)}`
      }, [createVNode("div", {
        "class": "v-calendar-day__row-label"
      }, [createVNode("slot", {
        "name": "intervalFormat",
        "interval": interval.value
      }, [props.index ? props.intervalFormat ? typeof props.intervalFormat === "string" ? adapter.format(interval.value.start, "hours12h") : props.intervalFormat(interval.value) : interval.value.label : ""])]), createVNode("div", {
        "class": "v-calendar-day__row-hairline"
      }, null), createVNode("div", {
        "class": ["v-calendar-day__row-content", interval.value.events.some((e) => !e.last) ? "v-calendar-day__row-content-through" : ""]
      }, [createVNode("slot", {
        "name": "intervalBody",
        "interval": interval.value
      }, [(_a = interval.value.events) == null ? void 0 : _a.map((event) => createVNode(VCalendarIntervalEvent, {
        "event": event,
        "interval": interval.value,
        "intervalDivisions": props.intervalDivisions,
        "intervalDuration": props.intervalDuration,
        "intervalHeight": props.intervalHeight
      }, null))])])]) : createVNode("div", {
        "class": "v-calendar-day__row-without-label",
        "style": `height: ${convertToUnit(props.intervalHeight)}`
      }, [createVNode("div", {
        "class": ["v-calendar-day__row-content", interval.value.events.some((e) => !e.last) ? "v-calendar-day__row-content-through" : ""]
      }, [createVNode("slot", {
        "name": "intervalBody",
        "interval": interval.value
      }, [(_b = interval.value.events) == null ? void 0 : _b.filter((event) => !event.allDay).map((event) => createVNode(VCalendarIntervalEvent, {
        "event": event,
        "interval": interval.value,
        "intervalDivisions": props.intervalDivisions,
        "intervalDuration": props.intervalDuration,
        "intervalHeight": props.intervalHeight
      }, null))])])]);
    });
    return {
      interval
    };
  }
});

// node_modules/vuetify/lib/labs/VCalendar/VCalendarDay.js
var makeVCalendarDayProps = propsFactory({
  hideDayHeader: Boolean,
  intervals: {
    type: Number,
    default: 24
  },
  ...makeVCalendarIntervalProps()
}, "VCalendarDay");
var VCalendarDay = genericComponent()({
  name: "VCalendarDay",
  props: makeVCalendarDayProps(),
  setup(props) {
    const adapter = useDate();
    const intervals = computed(() => [...Array.from({
      length: props.intervals
    }, (v, i) => i).filter((int, index) => props.intervalDuration * (index + props.intervalStart) < 1440)]);
    useRender(() => {
      const calendarIntervalProps = VCalendarInterval.filterProps(props);
      return createVNode("div", {
        "class": "v-calendar-day__container"
      }, [!props.hideDayHeader && createVNode("div", {
        "key": "calender-week-name",
        "class": "v-calendar-weekly__head-weekday"
      }, [adapter.format(props.day.date, "weekdayShort"), createVNode("div", null, [createVNode(VBtn, {
        "icon": true,
        "text": adapter.format(props.day.date, "dayOfMonth"),
        "variant": "text"
      }, null)])]), intervals.value.map((_, index) => createVNode(VCalendarInterval, mergeProps({
        "index": index
      }, calendarIntervalProps), null))]);
    });
    return {
      intervals
    };
  }
});

// node_modules/vuetify/lib/labs/VCalendar/VCalendarHeader.js
import "C:/UCM HW/UCM Senior Project/s25-class-org-platform/FrontEnd/frontend/node_modules/vuetify/lib/labs/VCalendar/VCalendarHeader.css";
var makeVCalendarHeaderProps = propsFactory({
  nextIcon: {
    type: String,
    default: "$next"
  },
  prevIcon: {
    type: String,
    default: "$prev"
  },
  title: String,
  text: {
    type: String,
    default: "$vuetify.calendar.today"
  },
  viewMode: {
    type: String,
    default: "month"
  }
}, "VCalendarHeader");
var VCalendarHeader = genericComponent()({
  name: "VCalendarHeader",
  props: makeVCalendarHeaderProps(),
  emits: {
    "click:next": () => true,
    "click:prev": () => true,
    "click:toToday": () => true
  },
  setup(props, _ref) {
    let {
      emit
    } = _ref;
    const {
      t
    } = useLocale();
    function prev() {
      emit("click:prev");
    }
    function next() {
      emit("click:next");
    }
    function toToday() {
      emit("click:toToday");
    }
    useRender(() => createVNode("div", {
      "class": "v-calendar-header"
    }, [props.text && createVNode(VBtn, {
      "key": "today",
      "class": "v-calendar-header__today",
      "text": t(props.text),
      "variant": "outlined",
      "onClick": toToday
    }, null), createVNode(VBtn, {
      "density": "comfortable",
      "icon": props.prevIcon,
      "variant": "text",
      "onClick": prev
    }, null), createVNode(VBtn, {
      "density": "comfortable",
      "icon": props.nextIcon,
      "variant": "text",
      "onClick": next
    }, null), createVNode("div", {
      "class": "v-calendar-header__title"
    }, [props.title])]));
    return {};
  }
});

// node_modules/vuetify/lib/labs/VCalendar/VCalendarMonthDay.js
import "C:/UCM HW/UCM Senior Project/s25-class-org-platform/FrontEnd/frontend/node_modules/vuetify/lib/labs/VCalendar/VCalendarMonthDay.css";

// node_modules/vuetify/lib/labs/VCalendar/VCalendarEvent.js
var makeVCalendarEventProps = propsFactory({
  allDay: Boolean,
  day: Object,
  event: Object
}, "VCalendarEvent");
var VCalendarEvent = genericComponent()({
  name: "VCalendarEvent",
  props: makeVCalendarEventProps(),
  setup(props) {
    useRender(() => createVNode(VChip, {
      "color": props.allDay ? "primary" : void 0,
      "density": "comfortable",
      "label": props.allDay,
      "width": "100%"
    }, {
      default: () => {
        var _a, _b;
        return [createVNode(VBadge, {
          "inline": true,
          "dot": true,
          "color": (_a = props.event) == null ? void 0 : _a.color
        }, null), (_b = props.event) == null ? void 0 : _b.title];
      }
    }));
    return {};
  }
});

// node_modules/vuetify/lib/labs/VCalendar/VCalendarMonthDay.js
var makeVCalendarMonthDayProps = propsFactory({
  active: Boolean,
  color: String,
  day: Object,
  disabled: Boolean,
  events: Array,
  title: [Number, String]
}, "VCalendarMonthDay");
var VCalendarMonthDay = genericComponent()({
  name: "VCalendarMonthDay",
  props: makeVCalendarMonthDayProps(),
  setup(props, _ref) {
    let {
      emit,
      slots
    } = _ref;
    useRender(() => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
      const hasTitle = !!(props.title || ((_a = slots.title) == null ? void 0 : _a.call(slots, {
        title: props.title
      })));
      return createVNode("div", {
        "class": ["v-calendar-month__day"]
      }, [!((_b = props.day) == null ? void 0 : _b.isHidden) && hasTitle && createVNode("div", {
        "key": "title",
        "class": "v-calendar-weekly__day-label"
      }, [((_c = slots.title) == null ? void 0 : _c.call(slots, {
        title: props.title
      })) ?? createVNode(VBtn, {
        "class": ((_d = props.day) == null ? void 0 : _d.isToday) ? "v-calendar-weekly__day-label__today" : void 0,
        "color": props.color,
        "disabled": props.disabled,
        "icon": true,
        "size": "x-small",
        "variant": ((_e = props.day) == null ? void 0 : _e.isToday) ? void 0 : "flat"
      }, {
        default: () => [props.title]
      })]), !((_f = props.day) == null ? void 0 : _f.isHidden) && createVNode("div", {
        "key": "content",
        "class": "v-calendar-weekly__day-content"
      }, [((_g = slots.content) == null ? void 0 : _g.call(slots)) ?? createVNode("div", null, [createVNode("div", {
        "class": "v-calendar-weekly__day-alldayevents-container"
      }, [(_h = props.events) == null ? void 0 : _h.filter((event) => event.allDay).map((event) => slots.event ? slots.event({
        day: props.day,
        allDay: true,
        event
      }) : createVNode(VCalendarEvent, {
        "day": props.day,
        "event": event,
        "allDay": true
      }, null))]), createVNode("div", {
        "class": "v-calendar-weekly__day-events-container"
      }, [(_i = props.events) == null ? void 0 : _i.filter((event) => !event.allDay).map((event) => slots.event ? slots.event({
        day: props.day,
        event,
        allDay: false
      }) : createVNode(VCalendarEvent, {
        "day": props.day,
        "event": event
      }, null))])])]), !((_j = props.day) == null ? void 0 : _j.isHidden) && ((_k = slots.default) == null ? void 0 : _k.call(slots))]);
    });
    return {};
  }
});

// node_modules/vuetify/lib/labs/VCalendar/VCalendar.js
var makeVCalendarProps = propsFactory({
  hideHeader: Boolean,
  hideWeekNumber: Boolean,
  ...makeCalendarProps(),
  ...makeVCalendarDayProps(),
  ...makeVCalendarHeaderProps()
}, "VCalender");
var VCalendar = genericComponent()({
  name: "VCalendar",
  props: makeVCalendarProps(),
  emits: {
    next: null,
    prev: null,
    "update:modelValue": null
  },
  setup(props, _ref) {
    let {
      emit,
      slots
    } = _ref;
    const adapter = useDate();
    const {
      daysInMonth,
      daysInWeek,
      genDays,
      model,
      displayValue,
      weekNumbers,
      weekDays
    } = useCalendar(props);
    const dayNames = adapter.getWeekdays();
    function onClickNext() {
      if (props.viewMode === "month") {
        model.value = [adapter.addMonths(displayValue.value, 1)];
      }
      if (props.viewMode === "week") {
        model.value = [adapter.addDays(displayValue.value, 7)];
      }
      if (props.viewMode === "day") {
        model.value = [adapter.addDays(displayValue.value, 1)];
      }
    }
    function onClickPrev() {
      if (props.viewMode === "month") {
        model.value = [adapter.addMonths(displayValue.value, -1)];
      }
      if (props.viewMode === "week") {
        model.value = [adapter.addDays(displayValue.value, -7)];
      }
      if (props.viewMode === "day") {
        model.value = [adapter.addDays(displayValue.value, -1)];
      }
    }
    function onClickToday() {
      model.value = [adapter.date()];
    }
    const title = computed(() => {
      return adapter.format(displayValue.value, "monthAndYear");
    });
    useRender(() => {
      var _a;
      const calendarDayProps = VCalendarDay.filterProps(props);
      const calendarHeaderProps = VCalendarHeader.filterProps(props);
      return createVNode("div", {
        "class": ["v-calendar", {
          "v-calendar-monthly": props.viewMode === "month",
          "v-calendar-weekly": props.viewMode === "week",
          "v-calendar-day": props.viewMode === "day"
        }]
      }, [createVNode("div", null, [!props.hideHeader && (!slots.header ? createVNode(VCalendarHeader, mergeProps({
        "key": "calendar-header"
      }, calendarHeaderProps, {
        "title": title.value,
        "onClick:next": onClickNext,
        "onClick:prev": onClickPrev,
        "onClick:toToday": onClickToday
      }), null) : slots.header({
        title: title.value
      }))]), createVNode("div", {
        "class": ["v-calendar__container", `days__${weekDays.value.length}`]
      }, [props.viewMode === "month" && !props.hideDayHeader && createVNode("div", {
        "class": ["v-calendar-weekly__head", `days__${weekDays.value.length}`, ...!props.hideWeekNumber ? ["v-calendar-weekly__head-weeknumbers"] : []],
        "key": "calenderWeeklyHead"
      }, [!props.hideWeekNumber ? createVNode("div", {
        "key": "weekNumber0",
        "class": "v-calendar-weekly__head-weeknumber"
      }, null) : "", weekDays.value.map((weekday) => createVNode("div", {
        "class": `v-calendar-weekly__head-weekday${!props.hideWeekNumber ? "-with-weeknumber" : ""}`
      }, [dayNames[weekday]]))]), props.viewMode === "month" && createVNode("div", {
        "key": "VCalendarMonth",
        "class": ["v-calendar-month__days", `days${!props.hideWeekNumber ? "-with-weeknumbers" : ""}__${weekDays.value.length}`, ...!props.hideWeekNumber ? ["v-calendar-month__weeknumbers"] : []]
      }, [chunkArray(daysInMonth.value, weekDays.value.length).map((week, wi) => [!props.hideWeekNumber ? createVNode("div", {
        "class": "v-calendar-month__weeknumber"
      }, [weekNumbers.value[wi]]) : "", week.map((day) => {
        var _a2;
        return createVNode(VCalendarMonthDay, {
          "color": adapter.isSameDay(adapter.date(), day.date) ? "primary" : void 0,
          "day": day,
          "title": day ? adapter.format(day.date, "dayOfMonth") : "NaN",
          "events": (_a2 = props.events) == null ? void 0 : _a2.filter((e) => adapter.isSameDay(day.date, e.start) || adapter.isSameDay(day.date, e.end))
        }, {
          event: slots.event
        });
      })])]), props.viewMode === "week" && daysInWeek.value.map((day, i) => {
        var _a2;
        return createVNode(VCalendarDay, mergeProps(calendarDayProps, {
          "day": day,
          "dayIndex": i,
          "events": (_a2 = props.events) == null ? void 0 : _a2.filter((e) => adapter.isSameDay(e.start, day.date) || adapter.isSameDay(e.end, day.date))
        }), null);
      }), props.viewMode === "day" && createVNode(VCalendarDay, mergeProps(calendarDayProps, {
        "day": genDays([displayValue.value], adapter.date())[0],
        "dayIndex": 0,
        "events": (_a = props.events) == null ? void 0 : _a.filter((e) => adapter.isSameDay(e.start, genDays([displayValue.value], adapter.date())[0].date) || adapter.isSameDay(e.end, genDays([displayValue.value], adapter.date())[0].date))
      }), null)])]);
    });
    return {
      daysInMonth,
      daysInWeek,
      genDays
    };
  }
});

// node_modules/vuetify/lib/labs/VDateInput/VDateInput.js
var makeVDateInputProps = propsFactory({
  displayFormat: [Function, String],
  location: {
    type: String,
    default: "bottom start"
  },
  ...makeDisplayProps(),
  ...makeFocusProps(),
  ...makeVConfirmEditProps({
    hideActions: true
  }),
  ...makeVTextFieldProps({
    placeholder: "mm/dd/yyyy",
    prependIcon: "$calendar"
  }),
  ...omit(makeVDatePickerProps({
    hideHeader: true,
    showAdjacentMonths: true
  }), ["active", "location", "rounded"])
}, "VDateInput");
var VDateInput = genericComponent()({
  name: "VDateInput",
  props: makeVDateInputProps(),
  emits: {
    save: (value) => true,
    cancel: () => true,
    "update:modelValue": (val) => true
  },
  setup(props, _ref) {
    let {
      emit,
      slots
    } = _ref;
    const {
      t
    } = useLocale();
    const adapter = useDate();
    const {
      mobile
    } = useDisplay(props);
    const {
      isFocused,
      focus,
      blur
    } = useFocus(props);
    const model = useProxiedModel(props, "modelValue", props.multiple ? [] : null, (val) => Array.isArray(val) ? val.map((item) => adapter.toJsDate(item)) : val ? adapter.toJsDate(val) : val, (val) => Array.isArray(val) ? val.map((item) => adapter.date(item)) : val ? adapter.date(val) : val);
    const menu = shallowRef(false);
    const isEditingInput = shallowRef(false);
    const vTextFieldRef = ref();
    const disabledActions = ref(["save"]);
    function format(date) {
      if (typeof props.displayFormat === "function") {
        return props.displayFormat(date);
      }
      return adapter.format(date, props.displayFormat ?? "keyboardDate");
    }
    const display = computed(() => {
      const value = wrapInArray(model.value);
      if (!value.length) return null;
      if (props.multiple === true) {
        return t("$vuetify.datePicker.itemsSelected", value.length);
      }
      if (props.multiple === "range") {
        const start = value[0];
        const end = value[value.length - 1];
        if (!adapter.isValid(start) || !adapter.isValid(end)) return "";
        return `${format(adapter.date(start))} - ${format(adapter.date(end))}`;
      }
      return adapter.isValid(model.value) ? format(adapter.date(model.value)) : "";
    });
    const inputmode = computed(() => {
      if (!mobile.value) return void 0;
      if (isEditingInput.value) return "text";
      return "none";
    });
    const isInteractive = computed(() => !props.disabled && !props.readonly);
    const isReadonly = computed(() => !(mobile.value && isEditingInput.value) && props.readonly);
    watch(menu, (val) => {
      if (val) return;
      isEditingInput.value = false;
      disabledActions.value = ["save"];
    });
    function onKeydown(e) {
      if (e.key !== "Enter") return;
      if (!menu.value || !isFocused.value) {
        menu.value = true;
        return;
      }
      const target = e.target;
      model.value = adapter.isValid(target.value) ? target.value : null;
    }
    function onClick(e) {
      e.preventDefault();
      e.stopPropagation();
      if (menu.value && mobile.value) {
        isEditingInput.value = true;
      } else {
        menu.value = true;
      }
    }
    function onCancel() {
      emit("cancel");
      menu.value = false;
      isEditingInput.value = false;
    }
    function onSave(value) {
      emit("save", value);
      menu.value = false;
    }
    function onUpdateDisplayModel(value) {
      if (value != null) return;
      model.value = null;
    }
    function onBlur() {
      blur();
      if (mobile.value && isEditingInput.value && !isFocused.value) {
        menu.value = false;
        isEditingInput.value = false;
      }
    }
    useRender(() => {
      const confirmEditProps = VConfirmEdit.filterProps(props);
      const datePickerProps = VDatePicker.filterProps(omit(props, ["active", "location", "rounded"]));
      const textFieldProps = VTextField.filterProps(props);
      return createVNode(VTextField, mergeProps({
        "ref": vTextFieldRef
      }, textFieldProps, {
        "class": props.class,
        "style": props.style,
        "modelValue": display.value,
        "inputmode": inputmode.value,
        "readonly": isReadonly.value,
        "onKeydown": isInteractive.value ? onKeydown : void 0,
        "focused": menu.value || isFocused.value,
        "onFocus": focus,
        "onBlur": onBlur,
        "onClick:control": isInteractive.value ? onClick : void 0,
        "onClick:prepend": isInteractive.value ? onClick : void 0,
        "onUpdate:modelValue": onUpdateDisplayModel
      }), {
        ...slots,
        default: () => {
          var _a;
          return createVNode(Fragment, null, [createVNode(VMenu, {
            "modelValue": menu.value,
            "onUpdate:modelValue": ($event) => menu.value = $event,
            "activator": "parent",
            "min-width": "0",
            "eager": isFocused.value,
            "location": props.location,
            "closeOnContentClick": false,
            "openOnClick": false
          }, {
            default: () => [createVNode(VConfirmEdit, mergeProps(confirmEditProps, {
              "modelValue": model.value,
              "onUpdate:modelValue": ($event) => model.value = $event,
              "disabled": disabledActions.value,
              "onSave": onSave,
              "onCancel": onCancel
            }), {
              default: (_ref2) => {
                let {
                  actions,
                  model: proxyModel,
                  save,
                  cancel,
                  isPristine
                } = _ref2;
                function onUpdateModel(value) {
                  if (!props.hideActions) {
                    proxyModel.value = value;
                  } else {
                    model.value = value;
                    if (!props.multiple) {
                      menu.value = false;
                    }
                  }
                  emit("save", value);
                  disabledActions.value = [];
                }
                return createVNode(VDatePicker, mergeProps(datePickerProps, {
                  "modelValue": props.hideActions ? model.value : proxyModel.value,
                  "onUpdate:modelValue": (value) => onUpdateModel(value),
                  "onMousedown": (e) => e.preventDefault()
                }), {
                  actions: !props.hideActions ? () => {
                    var _a2;
                    return ((_a2 = slots.actions) == null ? void 0 : _a2.call(slots, {
                      save,
                      cancel,
                      isPristine
                    })) ?? actions();
                  } : void 0
                });
              }
            })]
          }), (_a = slots.default) == null ? void 0 : _a.call(slots)]);
        }
      });
    });
    return forwardRefs({}, vTextFieldRef);
  }
});

// node_modules/vuetify/lib/labs/VFileUpload/VFileUpload.js
import "C:/UCM HW/UCM Senior Project/s25-class-org-platform/FrontEnd/frontend/node_modules/vuetify/lib/labs/VFileUpload/VFileUpload.css";

// node_modules/vuetify/lib/labs/VFileUpload/VFileUploadItem.js
var makeVFileUploadItemProps = propsFactory({
  clearable: Boolean,
  file: {
    type: Object,
    default: null
  },
  fileIcon: {
    type: String,
    // TODO: setup up a proper aliased icon
    default: "mdi-file-document"
  },
  showSize: Boolean,
  ...makeVListItemProps({
    border: true,
    rounded: true,
    lines: "two"
  })
}, "VFileUploadItem");
var VFileUploadItem = genericComponent()({
  name: "VFileUploadItem",
  props: makeVFileUploadItemProps(),
  emits: {
    "click:remove": () => true,
    click: (e) => true
  },
  setup(props, _ref) {
    let {
      emit,
      slots
    } = _ref;
    const preview = ref();
    const base = computed(() => typeof props.showSize !== "boolean" ? props.showSize : void 0);
    function onClickRemove() {
      emit("click:remove");
    }
    watchEffect(() => {
      var _a;
      preview.value = ((_a = props.file) == null ? void 0 : _a.type.startsWith("image")) ? URL.createObjectURL(props.file) : void 0;
    });
    useRender(() => {
      var _a, _b, _c;
      const listItemProps = VListItem.filterProps(props);
      return createVNode(VListItem, mergeProps(listItemProps, {
        "title": props.title ?? ((_a = props.file) == null ? void 0 : _a.name),
        "subtitle": props.showSize ? humanReadableFileSize((_b = props.file) == null ? void 0 : _b.size, base.value) : (_c = props.file) == null ? void 0 : _c.type,
        "class": "v-file-upload-item"
      }), {
        ...slots,
        prepend: (slotProps) => createVNode(Fragment, null, [!slots.prepend ? createVNode(VAvatar, {
          "icon": props.fileIcon,
          "image": preview.value,
          "rounded": true
        }, null) : createVNode(VDefaultsProvider, {
          "defaults": {
            VAvatar: {
              image: preview.value,
              icon: !preview.value ? props.fileIcon : void 0,
              rounded: true
            }
          }
        }, {
          default: () => {
            var _a2;
            return [((_a2 = slots.prepend) == null ? void 0 : _a2.call(slots, slotProps)) ?? createVNode(VAvatar, null, null)];
          }
        })]),
        append: (slotProps) => {
          var _a2;
          return createVNode(Fragment, null, [props.clearable && createVNode(Fragment, null, [!slots.clear ? createVNode(VBtn, {
            "icon": "$clear",
            "density": "comfortable",
            "variant": "text",
            "onClick": onClickRemove
          }, null) : createVNode(VDefaultsProvider, {
            "defaults": {
              VBtn: {
                icon: "$clear",
                density: "comfortable",
                variant: "text"
              }
            }
          }, {
            default: () => {
              var _a3;
              return [((_a3 = slots.clear) == null ? void 0 : _a3.call(slots, {
                ...slotProps,
                props: {
                  onClick: onClickRemove
                }
              })) ?? createVNode(VBtn, null, null)];
            }
          })]), (_a2 = slots.append) == null ? void 0 : _a2.call(slots, slotProps)]);
        }
      });
    });
  }
});

// node_modules/vuetify/lib/labs/VFileUpload/VFileUpload.js
var makeVFileUploadProps = propsFactory({
  browseText: {
    type: String,
    default: "$vuetify.fileUpload.browse"
  },
  dividerText: {
    type: String,
    default: "$vuetify.fileUpload.divider"
  },
  title: {
    type: String,
    default: "$vuetify.fileUpload.title"
  },
  subtitle: String,
  icon: {
    type: IconValue,
    default: "$upload"
  },
  modelValue: {
    type: [Array, Object],
    default: null,
    validator: (val) => {
      return wrapInArray(val).every((v) => v != null && typeof v === "object");
    }
  },
  clearable: Boolean,
  disabled: Boolean,
  hideBrowse: Boolean,
  multiple: Boolean,
  scrim: {
    type: [Boolean, String],
    default: true
  },
  showSize: Boolean,
  name: String,
  ...makeDelayProps(),
  ...makeDensityProps(),
  ...pick(makeVDividerProps({
    length: 150
  }), ["length", "thickness", "opacity"]),
  ...makeVSheetProps()
}, "VFileUpload");
var VFileUpload = genericComponent()({
  name: "VFileUpload",
  inheritAttrs: false,
  props: makeVFileUploadProps(),
  emits: {
    "update:modelValue": (files) => true
  },
  setup(props, _ref) {
    let {
      attrs,
      slots
    } = _ref;
    const {
      t
    } = useLocale();
    const {
      densityClasses
    } = useDensity(props);
    const model = useProxiedModel(props, "modelValue", props.modelValue, (val) => wrapInArray(val), (val) => props.multiple || Array.isArray(props.modelValue) ? val : val[0]);
    const dragOver = shallowRef(false);
    const vSheetRef = ref(null);
    const inputRef = ref(null);
    onMounted(() => {
      var _a, _b;
      (_a = vSheetRef.value) == null ? void 0 : _a.$el.addEventListener("dragover", onDragOver);
      (_b = vSheetRef.value) == null ? void 0 : _b.$el.addEventListener("drop", onDrop);
    });
    onUnmounted(() => {
      var _a, _b;
      (_a = vSheetRef.value) == null ? void 0 : _a.$el.removeEventListener("dragover", onDragOver);
      (_b = vSheetRef.value) == null ? void 0 : _b.$el.removeEventListener("drop", onDrop);
    });
    function onDragOver(e) {
      e.preventDefault();
      e.stopImmediatePropagation();
      dragOver.value = true;
    }
    function onDragLeave(e) {
      e.preventDefault();
      dragOver.value = false;
    }
    function onDrop(e) {
      var _a;
      e.preventDefault();
      e.stopImmediatePropagation();
      dragOver.value = false;
      const files = Array.from(((_a = e.dataTransfer) == null ? void 0 : _a.files) ?? []);
      if (!files.length) return;
      if (!props.multiple) {
        model.value = [files[0]];
        return;
      }
      const array = model.value.slice();
      for (const file of files) {
        if (!array.some((f) => f.name === file.name)) {
          array.push(file);
        }
      }
      model.value = array;
    }
    function onClick() {
      var _a;
      (_a = inputRef.value) == null ? void 0 : _a.click();
    }
    function onClickRemove(index) {
      const newValue = model.value.filter((_, i) => i !== index);
      model.value = newValue;
      if (newValue.length > 0 || !inputRef.value) return;
      inputRef.value.value = "";
    }
    useRender(() => {
      const hasTitle = !!(slots.title || props.title);
      const hasIcon = !!(slots.icon || props.icon);
      const hasBrowse = !!(!props.hideBrowse && (slots.browse || props.density === "default"));
      const cardProps = VSheet.filterProps(props);
      const dividerProps = VDivider.filterProps(props);
      const [rootAttrs, inputAttrs] = filterInputAttrs(attrs);
      const inputNode = createVNode("input", mergeProps({
        "ref": inputRef,
        "type": "file",
        "disabled": props.disabled,
        "multiple": props.multiple,
        "name": props.name,
        "onChange": (e) => {
          if (!e.target) return;
          const target = e.target;
          model.value = [...target.files ?? []];
        }
      }, inputAttrs), null);
      return createVNode(Fragment, null, [createVNode(VSheet, mergeProps({
        "ref": vSheetRef
      }, cardProps, {
        "class": ["v-file-upload", {
          "v-file-upload--clickable": !hasBrowse,
          "v-file-upload--disabled": props.disabled,
          "v-file-upload--dragging": dragOver.value
        }, densityClasses.value, props.class],
        "style": [props.style],
        "onDragleave": onDragLeave,
        "onDragover": onDragOver,
        "onDrop": onDrop,
        "onClick": !hasBrowse ? onClick : void 0
      }, rootAttrs), {
        default: () => {
          var _a, _b, _c;
          return [hasIcon && createVNode("div", {
            "key": "icon",
            "class": "v-file-upload-icon"
          }, [!slots.icon ? createVNode(VIcon, {
            "key": "icon-icon",
            "icon": props.icon
          }, null) : createVNode(VDefaultsProvider, {
            "key": "icon-defaults",
            "defaults": {
              VIcon: {
                icon: props.icon
              }
            }
          }, {
            default: () => [slots.icon()]
          })]), hasTitle && createVNode("div", {
            "key": "title",
            "class": "v-file-upload-title"
          }, [((_a = slots.title) == null ? void 0 : _a.call(slots)) ?? t(props.title)]), props.density === "default" && createVNode(Fragment, null, [createVNode("div", {
            "key": "upload-divider",
            "class": "v-file-upload-divider"
          }, [((_b = slots.divider) == null ? void 0 : _b.call(slots)) ?? createVNode(VDivider, dividerProps, {
            default: () => [t(props.dividerText)]
          })]), hasBrowse && createVNode(Fragment, null, [!slots.browse ? createVNode(VBtn, {
            "readonly": props.disabled,
            "size": "large",
            "text": t(props.browseText),
            "variant": "tonal",
            "onClick": onClick
          }, null) : createVNode(VDefaultsProvider, {
            "defaults": {
              VBtn: {
                readonly: props.disabled,
                size: "large",
                text: t(props.browseText),
                variant: "tonal"
              }
            }
          }, {
            default: () => [slots.browse({
              props: {
                onClick
              }
            })]
          })]), props.subtitle && createVNode("div", {
            "class": "v-file-upload-subtitle"
          }, [props.subtitle])]), createVNode(VOverlay, {
            "model-value": dragOver.value,
            "contained": true,
            "scrim": props.scrim
          }, null), ((_c = slots.input) == null ? void 0 : _c.call(slots, {
            inputNode
          })) ?? inputNode];
        }
      }), model.value.length > 0 && createVNode("div", {
        "class": "v-file-upload-items"
      }, [model.value.map((file, i) => {
        const slotProps = {
          file,
          props: {
            "onClick:remove": () => onClickRemove(i)
          }
        };
        return createVNode(VDefaultsProvider, {
          "key": i,
          "defaults": {
            VFileUploadItem: {
              file,
              clearable: props.clearable,
              disabled: props.disabled,
              showSize: props.showSize
            }
          }
        }, {
          default: () => {
            var _a;
            return [((_a = slots.item) == null ? void 0 : _a.call(slots, slotProps)) ?? createVNode(VFileUploadItem, {
              "key": i,
              "onClick:remove": () => onClickRemove(i)
            }, slots)];
          }
        });
      })])]);
    });
  }
});

// node_modules/vuetify/lib/labs/VIconBtn/VIconBtn.js
import "C:/UCM HW/UCM Senior Project/s25-class-org-platform/FrontEnd/frontend/node_modules/vuetify/lib/labs/VIconBtn/VIconBtn.css";
var makeVIconBtnProps = propsFactory({
  active: {
    type: Boolean,
    default: void 0
  },
  activeColor: String,
  activeIcon: [String, Function, Object],
  activeVariant: String,
  baseVariant: {
    type: String,
    default: "tonal"
  },
  disabled: Boolean,
  height: [Number, String],
  width: [Number, String],
  hideOverlay: Boolean,
  icon: [String, Function, Object],
  iconColor: String,
  iconSize: {
    type: [Number, String],
    default: "default"
  },
  iconSizes: {
    type: Array,
    default: () => [["x-small", 10], ["small", 16], ["default", 24], ["large", 28], ["x-large", 32]]
  },
  loading: Boolean,
  opacity: [Number, String],
  readonly: Boolean,
  rotate: [Number, String],
  size: {
    type: [Number, String],
    default: "default"
  },
  sizes: {
    type: Array,
    default: () => [["x-small", 16], ["small", 24], ["default", 40], ["large", 48], ["x-large", 56]]
  },
  text: {
    type: [String, Number, Boolean],
    default: void 0
  },
  ...makeBorderProps(),
  ...makeComponentProps(),
  ...makeElevationProps(),
  ...makeRoundedProps(),
  ...makeTagProps({
    tag: "button"
  }),
  ...makeThemeProps(),
  ...makeVariantProps({
    variant: "flat"
  })
}, "VIconBtn");
var VIconBtn = genericComponent()({
  name: "VIconBtn",
  props: makeVIconBtnProps(),
  emits: {
    "update:active": (value) => true
  },
  setup(props, _ref) {
    let {
      attrs,
      slots
    } = _ref;
    const isActive = useProxiedModel(props, "active");
    const {
      themeClasses
    } = provideTheme(props);
    const {
      borderClasses
    } = useBorder(props);
    const {
      elevationClasses
    } = useElevation(props);
    const {
      roundedClasses
    } = useRounded(props);
    const {
      colorClasses,
      colorStyles,
      variantClasses
    } = useVariant(toRef(() => ({
      color: (() => {
        if (props.disabled) return void 0;
        if (!isActive.value) return props.color;
        return props.activeColor ?? props.color ?? "surface-variant";
      })(),
      variant: (() => {
        if (isActive.value === void 0) return props.variant;
        if (isActive.value) return props.activeVariant ?? props.variant;
        return props.baseVariant ?? props.variant;
      })()
    })));
    const btnSizeMap = new Map(props.sizes);
    const iconSizeMap = new Map(props.iconSizes);
    function onClick() {
      if (props.disabled || props.readonly || isActive.value === void 0 || props.tag === "a" && attrs.href) return;
      isActive.value = !isActive.value;
    }
    useRender(() => {
      const icon = isActive.value ? props.activeIcon ?? props.icon : props.icon;
      const size = props.size;
      const hasNamedSize = btnSizeMap.has(size);
      const btnSize = hasNamedSize ? btnSizeMap.get(size) : size;
      const btnHeight = props.height ?? btnSize;
      const btnWidth = props.width ?? btnSize;
      const _iconSize = hasNamedSize ? size : props.iconSize ?? size;
      const iconSize = iconSizeMap.get(_iconSize) ?? _iconSize;
      const iconProps = {
        icon,
        size: iconSize,
        iconColor: props.iconColor,
        opacity: props.opacity
      };
      return createVNode(props.tag, {
        "class": [{
          "v-icon-btn": true,
          "v-icon-btn--active": isActive.value,
          "v-icon-btn--disabled": props.disabled,
          "v-icon-btn--loading": props.loading,
          "v-icon-btn--readonly": props.readonly,
          [`v-icon-btn--${props.size}`]: true
        }, themeClasses.value, colorClasses.value, borderClasses.value, elevationClasses.value, roundedClasses.value, variantClasses.value, props.class],
        "style": [{
          "--v-icon-btn-rotate": convertToUnit(props.rotate, "deg"),
          "--v-icon-btn-height": convertToUnit(btnHeight),
          "--v-icon-btn-width": convertToUnit(btnWidth)
        }, colorStyles.value, props.style],
        "tabindex": props.disabled || props.readonly ? -1 : 0,
        "onClick": onClick
      }, {
        default: () => {
          var _a;
          return [genOverlays(!props.hideOverlay, "v-icon-btn"), createVNode("div", {
            "class": "v-icon-btn__content",
            "data-no-activator": ""
          }, [!slots.default && icon ? createVNode(VIcon, mergeProps({
            "key": "content-icon"
          }, iconProps), null) : createVNode(VDefaultsProvider, {
            "key": "content-defaults",
            "disabled": !icon,
            "defaults": {
              VIcon: {
                ...iconProps
              }
            }
          }, {
            default: () => {
              var _a2;
              return ((_a2 = slots.default) == null ? void 0 : _a2.call(slots)) ?? toDisplayString(props.text);
            }
          })]), !!props.loading && createVNode("span", {
            "key": "loader",
            "class": "v-icon-btn__loader"
          }, [((_a = slots.loader) == null ? void 0 : _a.call(slots)) ?? createVNode(VProgressCircular, {
            "color": typeof props.loading === "boolean" ? void 0 : props.loading,
            "indeterminate": "disable-shrink",
            "width": "2",
            "size": iconSize
          }, null)])];
        }
      });
    });
    return {};
  }
});

// node_modules/vuetify/lib/labs/VStepperVertical/VStepperVerticalItem.js
import "C:/UCM HW/UCM Senior Project/s25-class-org-platform/FrontEnd/frontend/node_modules/vuetify/lib/labs/VStepperVertical/VStepperVerticalItem.css";

// node_modules/vuetify/lib/labs/VStepperVertical/VStepperVerticalActions.js
var makeVStepperVerticalActionsProps = propsFactory({
  ...makeVStepperActionsProps()
}, "VStepperActions");
var VStepperVerticalActions = genericComponent()({
  name: "VStepperVerticalActions",
  props: makeVStepperVerticalActionsProps(),
  emits: {
    "click:prev": () => true,
    "click:next": () => true
  },
  setup(props, _ref) {
    let {
      emit,
      slots
    } = _ref;
    function onClickPrev() {
      emit("click:prev");
    }
    function onClickNext() {
      emit("click:next");
    }
    useRender(() => {
      const stepperActionsProps = VStepperActions.filterProps(props);
      return createVNode(VStepperActions, mergeProps({
        "class": "v-stepper-vertical-actions"
      }, stepperActionsProps, {
        "onClick:prev": onClickPrev,
        "onClick:next": onClickNext
      }), slots);
    });
    return {};
  }
});

// node_modules/vuetify/lib/labs/VStepperVertical/VStepperVerticalItem.js
var makeVStepperVerticalItemProps = propsFactory({
  hideActions: Boolean,
  ...makeStepperItemProps(),
  ...omit(makeVExpansionPanelProps({
    expandIcon: "",
    collapseIcon: ""
  }), ["hideActions"])
}, "VStepperVerticalItem");
var VStepperVerticalItem = genericComponent()({
  name: "VStepperVerticalItem",
  props: makeVStepperVerticalItemProps(),
  emits: {
    "click:next": () => true,
    "click:prev": () => true,
    "click:finish": () => true
  },
  setup(props, _ref) {
    let {
      emit,
      slots
    } = _ref;
    const vExpansionPanelRef = ref();
    const step = computed(() => !isNaN(parseInt(props.value)) ? Number(props.value) : props.value);
    const groupItem = computed(() => {
      var _a;
      return (_a = vExpansionPanelRef.value) == null ? void 0 : _a.groupItem;
    });
    const isSelected = computed(() => {
      var _a;
      return ((_a = groupItem.value) == null ? void 0 : _a.isSelected.value) ?? false;
    });
    const isValid = computed(() => isSelected.value ? props.rules.every((handler) => handler() === true) : null);
    const canEdit = computed(() => !props.disabled && props.editable);
    const hasError = computed(() => props.error || isSelected.value && !isValid.value);
    const hasCompleted = computed(() => props.complete || props.rules.length > 0 && isValid.value === true);
    const disabled = computed(() => {
      var _a;
      if (props.disabled) return props.disabled;
      if ((_a = groupItem.value) == null ? void 0 : _a.isFirst.value) return "prev";
      return false;
    });
    const icon = computed(() => {
      var _a;
      if (hasError.value) return props.errorIcon;
      if (hasCompleted.value) return props.completeIcon;
      if (((_a = groupItem.value) == null ? void 0 : _a.isSelected.value) && props.editable) return props.editIcon;
      return props.icon;
    });
    const slotProps = computed(() => ({
      canEdit: canEdit.value,
      hasError: hasError.value,
      hasCompleted: hasCompleted.value,
      title: props.title,
      subtitle: props.subtitle,
      step: step.value
    }));
    const actionProps = computed(() => ({
      ...slotProps.value,
      prev: onClickPrev,
      next: onClickNext
    }));
    function onClickNext() {
      var _a;
      emit("click:next");
      if ((_a = groupItem.value) == null ? void 0 : _a.isLast.value) return;
      groupItem.value.group.next();
    }
    function onClickPrev() {
      emit("click:prev");
      groupItem.value.group.prev();
    }
    useRender(() => {
      var _a;
      const hasColor = (hasCompleted.value || ((_a = groupItem.value) == null ? void 0 : _a.isSelected.value)) && !hasError.value && !props.disabled;
      const hasActions = !props.hideActions || !!slots.actions;
      const expansionPanelProps = VExpansionPanel.filterProps(props);
      return createVNode(VExpansionPanel, mergeProps({
        "_as": "VStepperVerticalItem",
        "ref": vExpansionPanelRef
      }, expansionPanelProps, {
        "class": ["v-stepper-vertical-item", {
          "v-stepper-vertical-item--complete": hasCompleted.value,
          "v-stepper-vertical-item--disabled": props.disabled,
          "v-stepper-vertical-item--editable": canEdit.value,
          "v-stepper-vertical-item--error": hasError.value
        }, props.class],
        "readonly": !props.editable,
        "style": props.style,
        "color": "",
        "hide-actions": false,
        "value": step.value
      }), {
        title: () => {
          var _a2, _b;
          return createVNode(Fragment, null, [createVNode(VAvatar, {
            "key": "stepper-avatar",
            "class": "v-stepper-vertical-item__avatar",
            "color": hasColor ? props.color : void 0,
            "size": 24,
            "start": true
          }, {
            default: () => {
              var _a3;
              return [((_a3 = slots.icon) == null ? void 0 : _a3.call(slots, slotProps.value)) ?? (icon.value ? createVNode(VIcon, {
                "icon": icon.value
              }, null) : step.value)];
            }
          }), createVNode("div", null, [createVNode("div", {
            "class": "v-stepper-vertical-item__title"
          }, [((_a2 = slots.title) == null ? void 0 : _a2.call(slots, slotProps.value)) ?? props.title]), createVNode("div", {
            "class": "v-stepper-vertical-item__subtitle"
          }, [((_b = slots.subtitle) == null ? void 0 : _b.call(slots, slotProps.value)) ?? props.subtitle])])]);
        },
        text: () => {
          var _a2, _b;
          return createVNode(Fragment, null, [((_a2 = slots.default) == null ? void 0 : _a2.call(slots, slotProps.value)) ?? props.text, hasActions && createVNode(VDefaultsProvider, {
            "defaults": {
              VStepperVerticalActions: {
                disabled: disabled.value,
                finish: (_b = groupItem.value) == null ? void 0 : _b.isLast.value
              }
            }
          }, {
            default: () => {
              var _a3;
              return [((_a3 = slots.actions) == null ? void 0 : _a3.call(slots, actionProps.value)) ?? createVNode(VStepperVerticalActions, {
                "onClick:next": onClickNext,
                "onClick:prev": onClickPrev
              }, {
                prev: slots.prev ? () => {
                  var _a4;
                  return (_a4 = slots.prev) == null ? void 0 : _a4.call(slots, actionProps.value);
                } : void 0,
                next: slots.next ? () => {
                  var _a4;
                  return (_a4 = slots.next) == null ? void 0 : _a4.call(slots, actionProps.value);
                } : void 0
              })];
            }
          })]);
        }
      });
    });
    return {};
  }
});

// node_modules/vuetify/lib/labs/VStepperVertical/VStepperVertical.js
var makeVStepperVerticalProps = propsFactory({
  prevText: {
    type: String,
    default: "$vuetify.stepper.prev"
  },
  nextText: {
    type: String,
    default: "$vuetify.stepper.next"
  },
  ...makeStepperProps(),
  ...omit(makeVExpansionPanelsProps({
    mandatory: "force",
    variant: "accordion"
  }), ["static"])
}, "VStepperVertical");
var VStepperVertical = genericComponent()({
  name: "VStepperVertical",
  props: makeVStepperVerticalProps(),
  emits: {
    "update:modelValue": (val) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const vExpansionPanelsRef = ref();
    const {
      color,
      eager,
      editable,
      prevText,
      nextText,
      hideActions
    } = toRefs(props);
    const model = useProxiedModel(props, "modelValue");
    const items = computed(() => props.items.map((item, index) => {
      const title = getPropertyFromItem(item, props.itemTitle, item);
      const value = getPropertyFromItem(item, props.itemValue, index + 1);
      return {
        title,
        value,
        raw: item
      };
    }));
    provideDefaults({
      VStepperVerticalItem: {
        color,
        eager,
        editable,
        prevText,
        nextText,
        hideActions,
        static: true
      },
      VStepperActions: {
        color
      }
    });
    useRender(() => {
      const expansionPanelProps = VExpansionPanels.filterProps(props);
      return createVNode(VExpansionPanels, mergeProps(expansionPanelProps, {
        "modelValue": model.value,
        "onUpdate:modelValue": ($event) => model.value = $event,
        "ref": vExpansionPanelsRef,
        "class": ["v-stepper", {
          "v-stepper--alt-labels": props.altLabels,
          "v-stepper--flat": props.flat,
          "v-stepper--non-linear": props.nonLinear,
          "v-stepper--mobile": props.mobile
        }, props.class],
        "style": props.style
      }), {
        ...slots,
        default: (_ref2) => {
          var _a;
          let {
            prev,
            next
          } = _ref2;
          return createVNode(Fragment, null, [items.value.map((_ref3) => {
            let {
              raw,
              ...item
            } = _ref3;
            return createVNode(VStepperVerticalItem, item, {
              ...slots,
              default: slots[`item.${item.value}`]
            });
          }), (_a = slots.default) == null ? void 0 : _a.call(slots, {
            prev,
            next,
            step: model.value
          })]);
        }
      });
    });
    return {};
  }
});

// node_modules/vuetify/lib/labs/VPullToRefresh/VPullToRefresh.js
import "C:/UCM HW/UCM Senior Project/s25-class-org-platform/FrontEnd/frontend/node_modules/vuetify/lib/labs/VPullToRefresh/VPullToRefresh.css";
var VPullToRefresh = genericComponent()({
  name: "VPullToRefresh",
  props: {
    disabled: Boolean,
    pullDownThreshold: {
      type: Number,
      default: 64
    }
  },
  emits: {
    load: (options) => true
  },
  setup(props, _ref) {
    let {
      slots,
      emit
    } = _ref;
    let touchstartY = 0;
    let scrollParents = [];
    const touchDiff = shallowRef(0);
    const containerRef = ref();
    const refreshing = shallowRef(false);
    const goingUp = shallowRef(false);
    const touching = shallowRef(false);
    const canRefresh = computed(() => touchDiff.value >= props.pullDownThreshold && !refreshing.value);
    const topOffset = computed(() => clamp(touchDiff.value, 0, props.pullDownThreshold));
    function onTouchstart(e) {
      if (refreshing.value || props.disabled) return;
      touching.value = true;
      touchstartY = "clientY" in e ? e.clientY : e.touches[0].clientY;
    }
    function onTouchmove(e) {
      if (refreshing.value || !touching.value || props.disabled) return;
      const touchY = "clientY" in e ? e.clientY : e.touches[0].clientY;
      if (scrollParents.length && !scrollParents[0].scrollTop) {
        touchDiff.value = touchY - touchstartY;
      }
    }
    function onTouchend(e) {
      if (refreshing.value || props.disabled) return;
      touching.value = false;
      if (canRefresh.value) {
        let done = function() {
          if (!refreshing.value) return;
          touchDiff.value = 0;
          refreshing.value = false;
        };
        emit("load", {
          done
        });
        refreshing.value = true;
      } else {
        touchDiff.value = 0;
      }
    }
    onMounted(() => {
      scrollParents = getScrollParents(containerRef.value);
    });
    watch([topOffset, refreshing], () => {
      if (scrollParents.length) {
        const stopScrolling = topOffset.value && !refreshing.value;
        scrollParents.forEach((p) => p.style.overflow = stopScrolling ? "hidden" : "auto");
      }
    });
    watch(topOffset, (newVal, oldVal) => {
      goingUp.value = newVal < oldVal;
    });
    useRender(() => {
      var _a;
      return createVNode("div", {
        "class": ["v-pull-to-refresh"],
        "onTouchstart": onTouchstart,
        "onTouchmove": onTouchmove,
        "onTouchend": onTouchend,
        "onMousedown": onTouchstart,
        "onMouseup": onTouchend,
        "onMouseleave": onTouchend,
        "onMousemove": onTouchmove,
        "ref": containerRef
      }, [createVNode("div", {
        "class": ["v-pull-to-refresh__pull-down", {
          "v-pull-to-refresh__pull-down--touching": touching.value
        }],
        "style": {
          top: convertToUnit(-1 * props.pullDownThreshold + topOffset.value),
          height: convertToUnit(props.pullDownThreshold)
        }
      }, [slots.pullDownPanel ? slots.pullDownPanel({
        canRefresh: canRefresh.value,
        goingUp: goingUp.value,
        refreshing: refreshing.value
      }) : createVNode("div", {
        "class": ["v-pull-to-refresh__pull-down-default"]
      }, [refreshing.value ? createVNode(VProgressCircular, {
        "indeterminate": true,
        "active": false
      }, null) : createVNode(VIcon, {
        "icon": canRefresh.value || goingUp.value ? "$sortAsc" : "$sortDesc"
      }, null)])]), createVNode("div", {
        "class": ["v-pull-to-refresh__scroll-container", {
          "v-pull-to-refresh__scroll-container--touching": touching.value
        }],
        "style": {
          top: convertToUnit(topOffset.value)
        }
      }, [(_a = slots.default) == null ? void 0 : _a.call(slots)])]);
    });
  }
});

// node_modules/vuetify/lib/labs/VTimePicker/VTimePicker.js
import "C:/UCM HW/UCM Senior Project/s25-class-org-platform/FrontEnd/frontend/node_modules/vuetify/lib/labs/VTimePicker/VTimePicker.css";

// node_modules/vuetify/lib/labs/VTimePicker/util.js
function pad(n) {
  let length = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
  return String(n).padStart(length, "0");
}

// node_modules/vuetify/lib/labs/VTimePicker/VTimePickerClock.js
import "C:/UCM HW/UCM Senior Project/s25-class-org-platform/FrontEnd/frontend/node_modules/vuetify/lib/labs/VTimePicker/VTimePickerClock.css";
var makeVTimePickerClockProps = propsFactory({
  allowedValues: Function,
  ampm: Boolean,
  color: String,
  disabled: Boolean,
  displayedValue: null,
  double: Boolean,
  format: {
    type: Function,
    default: (val) => val
  },
  max: {
    type: Number,
    required: true
  },
  min: {
    type: Number,
    required: true
  },
  scrollable: Boolean,
  readonly: Boolean,
  rotate: {
    type: Number,
    default: 0
  },
  step: {
    type: Number,
    default: 1
  },
  modelValue: {
    type: Number
  }
}, "VTimePickerClock");
var VTimePickerClock = genericComponent()({
  name: "VTimePickerClock",
  props: makeVTimePickerClockProps(),
  emits: {
    change: (val) => true,
    input: (val) => true
  },
  setup(props, _ref) {
    let {
      emit
    } = _ref;
    const clockRef = ref(null);
    const innerClockRef = ref(null);
    const inputValue = ref(void 0);
    const isDragging = ref(false);
    const valueOnMouseDown = ref(null);
    const valueOnMouseUp = ref(null);
    const {
      textColorClasses,
      textColorStyles
    } = useTextColor(toRef(props, "color"));
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(toRef(props, "color"));
    const count = computed(() => props.max - props.min + 1);
    const roundCount = computed(() => props.double ? count.value / 2 : count.value);
    const degreesPerUnit = computed(() => 360 / roundCount.value);
    const degrees = computed(() => degreesPerUnit.value * Math.PI / 180);
    const displayedValue = computed(() => props.modelValue == null ? props.min : props.modelValue);
    const innerRadiusScale = computed(() => 0.62);
    const genChildren = computed(() => {
      const children = [];
      for (let value = props.min; value <= props.max; value = value + props.step) {
        children.push(value);
      }
      return children;
    });
    watch(() => props.modelValue, (val) => {
      inputValue.value = val;
    });
    function update(value) {
      if (inputValue.value !== value) {
        inputValue.value = value;
      }
      emit("input", value);
    }
    function isAllowed(value) {
      return !props.allowedValues || props.allowedValues(value);
    }
    function wheel(e) {
      if (!props.scrollable || props.disabled) return;
      e.preventDefault();
      const delta = Math.sign(-e.deltaY || 1);
      let value = displayedValue.value;
      do {
        value = value + delta;
        value = (value - props.min + count.value) % count.value + props.min;
      } while (!isAllowed(value) && value !== displayedValue.value);
      if (value !== props.displayedValue) {
        update(value);
      }
    }
    function isInner(value) {
      return props.double && value - props.min >= roundCount.value;
    }
    function handScale(value) {
      return isInner(value) ? innerRadiusScale.value : 1;
    }
    function getPosition(value) {
      const rotateRadians = props.rotate * Math.PI / 180;
      return {
        x: Math.sin((value - props.min) * degrees.value + rotateRadians) * handScale(value),
        y: -Math.cos((value - props.min) * degrees.value + rotateRadians) * handScale(value)
      };
    }
    function angleToValue(angle2, insideClick) {
      const value = (Math.round(angle2 / degreesPerUnit.value) + (insideClick ? roundCount.value : 0)) % count.value + props.min;
      if (angle2 < 360 - degreesPerUnit.value / 2) return value;
      return insideClick ? props.max - roundCount.value + 1 : props.min;
    }
    function getTransform(i) {
      const {
        x,
        y
      } = getPosition(i);
      return {
        left: `${50 + x * 50}%`,
        top: `${50 + y * 50}%`
      };
    }
    function euclidean(p0, p1) {
      const dx = p1.x - p0.x;
      const dy = p1.y - p0.y;
      return Math.sqrt(dx * dx + dy * dy);
    }
    function angle(center, p1) {
      const value = 2 * Math.atan2(p1.y - center.y - euclidean(center, p1), p1.x - center.x);
      return Math.abs(value * 180 / Math.PI);
    }
    function setMouseDownValue(value) {
      if (valueOnMouseDown.value === null) {
        valueOnMouseDown.value = value;
      }
      valueOnMouseUp.value = value;
      update(value);
    }
    function onDragMove(e) {
      var _a, _b;
      e.preventDefault();
      if (!isDragging.value && e.type !== "click" || !clockRef.value) return;
      const {
        width,
        top,
        left
      } = (_a = clockRef.value) == null ? void 0 : _a.getBoundingClientRect();
      const {
        width: innerWidth
      } = ((_b = innerClockRef.value) == null ? void 0 : _b.getBoundingClientRect()) ?? {
        width: 0
      };
      const {
        clientX,
        clientY
      } = "touches" in e ? e.touches[0] : e;
      const center = {
        x: width / 2,
        y: -width / 2
      };
      const coords = {
        x: clientX - left,
        y: top - clientY
      };
      const handAngle = Math.round(angle(center, coords) - props.rotate + 360) % 360;
      const insideClick = props.double && euclidean(center, coords) < (innerWidth + innerWidth * innerRadiusScale.value) / 4;
      const checksCount = Math.ceil(15 / degreesPerUnit.value);
      let value;
      for (let i = 0; i < checksCount; i++) {
        value = angleToValue(handAngle + i * degreesPerUnit.value, insideClick);
        if (isAllowed(value)) return setMouseDownValue(value);
        value = angleToValue(handAngle - i * degreesPerUnit.value, insideClick);
        if (isAllowed(value)) return setMouseDownValue(value);
      }
    }
    function onMouseDown(e) {
      if (props.disabled) return;
      e.preventDefault();
      window.addEventListener("mousemove", onDragMove);
      window.addEventListener("touchmove", onDragMove);
      window.addEventListener("mouseup", onMouseUp);
      window.addEventListener("touchend", onMouseUp);
      valueOnMouseDown.value = null;
      valueOnMouseUp.value = null;
      isDragging.value = true;
      onDragMove(e);
    }
    function onMouseUp(e) {
      e.stopPropagation();
      window.removeEventListener("mousemove", onDragMove);
      window.removeEventListener("touchmove", onDragMove);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("touchend", onMouseUp);
      isDragging.value = false;
      if (valueOnMouseUp.value !== null && isAllowed(valueOnMouseUp.value)) {
        emit("change", valueOnMouseUp.value);
      }
    }
    useRender(() => {
      return createVNode("div", {
        "class": [{
          "v-time-picker-clock": true,
          "v-time-picker-clock--indeterminate": props.modelValue == null,
          "v-time-picker-clock--readonly": props.readonly
        }],
        "onMousedown": onMouseDown,
        "onTouchstart": onMouseDown,
        "onWheel": wheel,
        "ref": clockRef
      }, [createVNode("div", {
        "class": "v-time-picker-clock__inner",
        "ref": innerClockRef
      }, [createVNode("div", {
        "class": [{
          "v-time-picker-clock__hand": true,
          "v-time-picker-clock__hand--inner": isInner(props.modelValue)
        }, textColorClasses.value],
        "style": [{
          transform: `rotate(${props.rotate + degreesPerUnit.value * (displayedValue.value - props.min)}deg) scaleY(${handScale(displayedValue.value)})`
        }, textColorStyles.value]
      }, null), genChildren.value.map((value) => {
        const isActive = value === displayedValue.value;
        return createVNode("div", {
          "class": [{
            "v-time-picker-clock__item": true,
            "v-time-picker-clock__item--active": isActive,
            "v-time-picker-clock__item--disabled": props.disabled || !isAllowed(value)
          }, isActive && backgroundColorClasses.value],
          "style": [getTransform(value), isActive && backgroundColorStyles.value]
        }, [createVNode("span", null, [props.format(value)])]);
      })])]);
    });
  }
});

// node_modules/vuetify/lib/labs/VTimePicker/VTimePickerControls.js
import "C:/UCM HW/UCM Senior Project/s25-class-org-platform/FrontEnd/frontend/node_modules/vuetify/lib/labs/VTimePicker/VTimePickerControls.css";
var makeVTimePickerControlsProps = propsFactory({
  ampm: Boolean,
  ampmInTitle: Boolean,
  ampmReadonly: Boolean,
  color: String,
  disabled: Boolean,
  hour: Number,
  minute: Number,
  second: Number,
  period: String,
  readonly: Boolean,
  useSeconds: Boolean,
  value: Number,
  viewMode: String
}, "VTimePickerControls");
var VTimePickerControls = genericComponent()({
  name: "VTimePickerControls",
  props: makeVTimePickerControlsProps(),
  emits: {
    "update:period": (data) => true,
    "update:viewMode": (data) => true
  },
  setup(props, _ref) {
    let {
      emit,
      slots
    } = _ref;
    const {
      t
    } = useLocale();
    useRender(() => {
      let hour = props.hour;
      if (props.ampm) {
        hour = hour ? (hour - 1) % 12 + 1 : 12;
      }
      return createVNode("div", {
        "class": "v-time-picker-controls"
      }, [createVNode("div", {
        "class": {
          "v-time-picker-controls__time": true,
          "v-time-picker-controls__time--with-seconds": props.useSeconds
        }
      }, [createVNode(VBtn, {
        "active": props.viewMode === "hour",
        "color": props.viewMode === "hour" ? props.color : void 0,
        "disabled": props.disabled,
        "variant": "tonal",
        "class": {
          "v-time-picker-controls__time__btn": true,
          "v-time-picker-controls__time--with-ampm__btn": props.ampm,
          "v-time-picker-controls__time--with-seconds__btn": props.useSeconds
        },
        "text": props.hour == null ? "--" : pad(`${hour}`),
        "onClick": () => emit("update:viewMode", "hour")
      }, null), createVNode("span", {
        "class": ["v-time-picker-controls__time__separator", {
          "v-time-picker-controls--with-seconds__time__separator": props.useSeconds
        }]
      }, [createTextVNode(":")]), createVNode(VBtn, {
        "active": props.viewMode === "minute",
        "color": props.viewMode === "minute" ? props.color : void 0,
        "class": {
          "v-time-picker-controls__time__btn": true,
          "v-time-picker-controls__time__btn__active": props.viewMode === "minute",
          "v-time-picker-controls__time--with-ampm__btn": props.ampm,
          "v-time-picker-controls__time--with-seconds__btn": props.useSeconds
        },
        "disabled": props.disabled,
        "variant": "tonal",
        "text": props.minute == null ? "--" : pad(props.minute),
        "onClick": () => emit("update:viewMode", "minute")
      }, null), props.useSeconds && createVNode("span", {
        "class": ["v-time-picker-controls__time__separator", {
          "v-time-picker-controls--with-seconds__time__separator": props.useSeconds
        }],
        "key": "secondsDivider"
      }, [createTextVNode(":")]), props.useSeconds && createVNode(VBtn, {
        "key": "secondsVal",
        "active": props.viewMode === "second",
        "color": props.viewMode === "second" ? props.color : void 0,
        "variant": "tonal",
        "onClick": () => emit("update:viewMode", "second"),
        "class": {
          "v-time-picker-controls__time__btn": true,
          "v-time-picker-controls__time__btn__active": props.viewMode === "second",
          "v-time-picker-controls__time--with-seconds__btn": props.useSeconds
        },
        "disabled": props.disabled,
        "text": props.second == null ? "--" : pad(props.second)
      }, null), props.ampm && props.ampmInTitle && createVNode("div", {
        "class": ["v-time-picker-controls__ampm", {
          "v-time-picker-controls__ampm--readonly": props.ampmReadonly
        }]
      }, [createVNode(VBtn, {
        "active": props.period === "am",
        "color": props.period === "am" ? props.color : void 0,
        "class": {
          "v-time-picker-controls__ampm__am": true,
          "v-time-picker-controls__ampm__btn": true,
          "v-time-picker-controls__ampm__btn__active": props.period === "am"
        },
        "disabled": props.disabled,
        "text": t("$vuetify.timePicker.am"),
        "variant": props.disabled && props.period === "am" ? "elevated" : "tonal",
        "onClick": () => props.period !== "am" ? emit("update:period", "am") : null
      }, null), createVNode(VBtn, {
        "active": props.period === "pm",
        "color": props.period === "pm" ? props.color : void 0,
        "class": {
          "v-time-picker-controls__ampm__pm": true,
          "v-time-picker-controls__ampm__btn": true,
          "v-time-picker-controls__ampm__btn__active": props.period === "pm"
        },
        "disabled": props.disabled,
        "text": t("$vuetify.timePicker.pm"),
        "variant": props.disabled && props.period === "pm" ? "elevated" : "tonal",
        "onClick": () => props.period !== "pm" ? emit("update:period", "pm") : null
      }, null)])])]);
    });
    return {};
  }
});

// node_modules/vuetify/lib/labs/VTimePicker/VTimePicker.js
var rangeHours24 = createRange(24);
var rangeHours12am = createRange(12);
var rangeHours12pm = rangeHours12am.map((v) => v + 12);
var range60 = createRange(60);
var makeVTimePickerProps = propsFactory({
  allowedHours: [Function, Array],
  allowedMinutes: [Function, Array],
  allowedSeconds: [Function, Array],
  ampmInTitle: Boolean,
  disabled: Boolean,
  format: {
    type: String,
    default: "ampm"
  },
  max: String,
  min: String,
  viewMode: {
    type: String,
    default: "hour"
  },
  modelValue: null,
  readonly: Boolean,
  scrollable: Boolean,
  useSeconds: Boolean,
  ...omit(makeVPickerProps({
    title: "$vuetify.timePicker.title"
  }), ["landscape"])
}, "VTimePicker");
var VTimePicker = genericComponent()({
  name: "VTimePicker",
  props: makeVTimePickerProps(),
  emits: {
    "update:hour": (val) => true,
    "update:minute": (val) => true,
    "update:period": (val) => true,
    "update:second": (val) => true,
    "update:modelValue": (val) => true,
    "update:viewMode": (val) => true
  },
  setup(props, _ref) {
    let {
      emit,
      slots
    } = _ref;
    const {
      t
    } = useLocale();
    const inputHour = ref(null);
    const inputMinute = ref(null);
    const inputSecond = ref(null);
    const lazyInputHour = ref(null);
    const lazyInputMinute = ref(null);
    const lazyInputSecond = ref(null);
    const period = ref("am");
    const viewMode = useProxiedModel(props, "viewMode", "hour");
    const controlsRef = ref(null);
    const clockRef = ref(null);
    const isAllowedHourCb = computed(() => {
      let cb;
      if (props.allowedHours instanceof Array) {
        cb = (val) => props.allowedHours.includes(val);
      } else {
        cb = props.allowedHours;
      }
      if (!props.min && !props.max) return cb;
      const minHour = props.min ? Number(props.min.split(":")[0]) : 0;
      const maxHour = props.max ? Number(props.max.split(":")[0]) : 23;
      return (val) => {
        return val >= Number(minHour) && val <= Number(maxHour) && (!cb || cb(val));
      };
    });
    const isAllowedMinuteCb = computed(() => {
      let cb;
      const isHourAllowed = !isAllowedHourCb.value || inputHour.value === null || isAllowedHourCb.value(inputHour.value);
      if (props.allowedMinutes instanceof Array) {
        cb = (val) => props.allowedMinutes.includes(val);
      } else {
        cb = props.allowedMinutes;
      }
      if (!props.min && !props.max) {
        return isHourAllowed ? cb : () => false;
      }
      const [minHour, minMinute] = props.min ? props.min.split(":").map(Number) : [0, 0];
      const [maxHour, maxMinute] = props.max ? props.max.split(":").map(Number) : [23, 59];
      const minTime = minHour * 60 + Number(minMinute);
      const maxTime = maxHour * 60 + Number(maxMinute);
      return (val) => {
        const time = 60 * inputHour.value + val;
        return time >= minTime && time <= maxTime && isHourAllowed && (!cb || cb(val));
      };
    });
    const isAllowedSecondCb = computed(() => {
      let cb;
      const isHourAllowed = !isAllowedHourCb.value || inputHour.value === null || isAllowedHourCb.value(inputHour.value);
      const isMinuteAllowed = isHourAllowed && (!isAllowedMinuteCb.value || inputMinute.value === null || isAllowedMinuteCb.value(inputMinute.value));
      if (props.allowedSeconds instanceof Array) {
        cb = (val) => props.allowedSeconds.includes(val);
      } else {
        cb = props.allowedSeconds;
      }
      if (!props.min && !props.max) {
        return isMinuteAllowed ? cb : () => false;
      }
      const [minHour, minMinute, minSecond] = props.min ? props.min.split(":").map(Number) : [0, 0, 0];
      const [maxHour, maxMinute, maxSecond] = props.max ? props.max.split(":").map(Number) : [23, 59, 59];
      const minTime = minHour * 3600 + minMinute * 60 + Number(minSecond || 0);
      const maxTime = maxHour * 3600 + maxMinute * 60 + Number(maxSecond || 0);
      return (val) => {
        const time = 3600 * inputHour.value + 60 * inputMinute.value + val;
        return time >= minTime && time <= maxTime && isMinuteAllowed && (!cb || cb(val));
      };
    });
    const isAmPm = computed(() => {
      return props.format === "ampm";
    });
    watch(() => props.modelValue, (val) => setInputData(val));
    onMounted(() => {
      setInputData(props.modelValue);
    });
    function genValue() {
      if (inputHour.value != null && inputMinute.value != null && (!props.useSeconds || inputSecond.value != null)) {
        return `${pad(inputHour.value)}:${pad(inputMinute.value)}` + (props.useSeconds ? `:${pad(inputSecond.value)}` : "");
      }
      return null;
    }
    function emitValue() {
      const value = genValue();
      if (value !== null) emit("update:modelValue", value);
    }
    function convert24to12(hour) {
      return hour ? (hour - 1) % 12 + 1 : 12;
    }
    function convert12to24(hour, period2) {
      return hour % 12 + (period2 === "pm" ? 12 : 0);
    }
    function setInputData(value) {
      if (value == null || value === "") {
        inputHour.value = null;
        inputMinute.value = null;
        inputSecond.value = null;
      } else if (value instanceof Date) {
        inputHour.value = value.getHours();
        inputMinute.value = value.getMinutes();
        inputSecond.value = value.getSeconds();
      } else {
        const [hour, , minute, , second, period2] = value.trim().toLowerCase().match(/^(\d+):(\d+)(:(\d+))?([ap]m)?$/) || new Array(6);
        inputHour.value = period2 ? convert12to24(parseInt(hour, 10), period2) : parseInt(hour, 10);
        inputMinute.value = parseInt(minute, 10);
        inputSecond.value = parseInt(second || 0, 10);
      }
      period.value = inputHour.value == null || inputHour.value < 12 ? "am" : "pm";
    }
    function firstAllowed(type, value) {
      const allowedFn = type === "hour" ? isAllowedHourCb.value : type === "minute" ? isAllowedMinuteCb.value : isAllowedSecondCb.value;
      if (!allowedFn) return value;
      const range = type === "minute" ? range60 : type === "second" ? range60 : isAmPm.value ? value < 12 ? rangeHours12am : rangeHours12pm : rangeHours24;
      const first = range.find((v) => allowedFn((v + value) % range.length + range[0]));
      return ((first || 0) + value) % range.length + range[0];
    }
    function setPeriod(val) {
      period.value = val;
      if (inputHour.value != null) {
        const newHour = inputHour.value + (period.value === "am" ? -12 : 12);
        inputHour.value = firstAllowed("hour", newHour);
      }
      emit("update:period", val);
      emitValue();
      return true;
    }
    function onInput(value) {
      if (viewMode.value === "hour") {
        inputHour.value = isAmPm.value ? convert12to24(value, period.value) : value;
      } else if (viewMode.value === "minute") {
        inputMinute.value = value;
      } else {
        inputSecond.value = value;
      }
    }
    function onChange(value) {
      switch (viewMode.value || "hour") {
        case "hour":
          emit("update:hour", value);
          break;
        case "minute":
          emit("update:minute", value);
          break;
        case "second":
          emit("update:second", value);
          break;
        default:
          break;
      }
      const emitChange = inputHour.value !== null && inputMinute.value !== null && (props.useSeconds ? inputSecond.value !== null : true);
      if (viewMode.value === "hour") {
        viewMode.value = "minute";
      } else if (props.useSeconds && viewMode.value === "minute") {
        viewMode.value = "second";
      }
      if (inputHour.value === lazyInputHour.value && inputMinute.value === lazyInputMinute.value && (!props.useSeconds || inputSecond.value === lazyInputSecond.value)) return;
      const time = genValue();
      if (time === null) return;
      lazyInputHour.value = inputHour.value;
      lazyInputMinute.value = inputMinute.value;
      props.useSeconds && (lazyInputSecond.value = inputSecond.value);
      emitChange && emitValue();
    }
    useRender(() => {
      const pickerProps = VPicker.filterProps(props);
      const timePickerControlsProps = VTimePickerControls.filterProps(props);
      const timePickerClockProps = VTimePickerClock.filterProps(omit(props, ["format", "modelValue", "min", "max"]));
      return createVNode(VPicker, mergeProps(pickerProps, {
        "color": void 0,
        "class": ["v-time-picker", props.class],
        "style": props.style
      }), {
        title: () => {
          var _a;
          return ((_a = slots.title) == null ? void 0 : _a.call(slots)) ?? createVNode("div", {
            "class": "v-time-picker__title"
          }, [t(props.title)]);
        },
        header: () => createVNode(VTimePickerControls, mergeProps(timePickerControlsProps, {
          "ampm": isAmPm.value || props.ampmInTitle,
          "ampmReadonly": isAmPm.value && !props.ampmInTitle,
          "hour": inputHour.value,
          "minute": inputMinute.value,
          "period": period.value,
          "second": inputSecond.value,
          "viewMode": viewMode.value,
          "onUpdate:period": (val) => setPeriod(val),
          "onUpdate:viewMode": (value) => viewMode.value = value,
          "ref": controlsRef
        }), null),
        default: () => createVNode(VTimePickerClock, mergeProps(timePickerClockProps, {
          "allowedValues": viewMode.value === "hour" ? isAllowedHourCb.value : viewMode.value === "minute" ? isAllowedMinuteCb.value : isAllowedSecondCb.value,
          "double": viewMode.value === "hour" && !isAmPm.value,
          "format": viewMode.value === "hour" ? isAmPm.value ? convert24to12 : (val) => val : (val) => pad(val, 2),
          "max": viewMode.value === "hour" ? isAmPm.value && period.value === "am" ? 11 : 23 : 59,
          "min": viewMode.value === "hour" && isAmPm.value && period.value === "pm" ? 12 : 0,
          "size": 20,
          "step": viewMode.value === "hour" ? 1 : 5,
          "modelValue": viewMode.value === "hour" ? inputHour.value : viewMode.value === "minute" ? inputMinute.value : inputSecond.value,
          "onChange": onChange,
          "onInput": onInput,
          "ref": clockRef
        }), null),
        actions: slots.actions
      });
    });
  }
});

// node_modules/vuetify/lib/labs/VTreeview/VTreeviewGroup.js
var makeVTreeviewGroupProps = propsFactory({
  ...omit(makeVListGroupProps({
    collapseIcon: "$treeviewCollapse",
    expandIcon: "$treeviewExpand"
  }), ["subgroup"])
}, "VTreeviewGroup");
var VTreeviewGroup = genericComponent()({
  name: "VTreeviewGroup",
  props: makeVTreeviewGroupProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const vListGroupRef = ref();
    const toggleIcon = computed(() => {
      var _a;
      return ((_a = vListGroupRef.value) == null ? void 0 : _a.isOpen) ? props.collapseIcon : props.expandIcon;
    });
    const activatorDefaults = computed(() => {
      var _a;
      return {
        VTreeviewItem: {
          prependIcon: void 0,
          appendIcon: void 0,
          active: (_a = vListGroupRef.value) == null ? void 0 : _a.isOpen,
          toggleIcon: toggleIcon.value
        }
      };
    });
    useRender(() => {
      const listGroupProps = VListGroup.filterProps(props);
      return createVNode(VListGroup, mergeProps(listGroupProps, {
        "ref": vListGroupRef,
        "class": ["v-treeview-group", props.class],
        "subgroup": true
      }), {
        ...slots,
        activator: slots.activator ? (slotProps) => createVNode(Fragment, null, [createVNode(VDefaultsProvider, {
          "defaults": activatorDefaults.value
        }, {
          default: () => {
            var _a;
            return [(_a = slots.activator) == null ? void 0 : _a.call(slots, slotProps)];
          }
        })]) : void 0
      });
    });
    return {};
  }
});

// node_modules/vuetify/lib/labs/VTreeview/VTreeviewItem.js
import "C:/UCM HW/UCM Senior Project/s25-class-org-platform/FrontEnd/frontend/node_modules/vuetify/lib/labs/VTreeview/VTreeviewItem.css";

// node_modules/vuetify/lib/labs/VTreeview/shared.js
var VTreeviewSymbol = Symbol.for("vuetify:v-treeview");

// node_modules/vuetify/lib/labs/VTreeview/VTreeviewItem.js
var makeVTreeviewItemProps = propsFactory({
  loading: Boolean,
  toggleIcon: IconValue,
  ...makeVListItemProps({
    slim: true
  })
}, "VTreeviewItem");
var VTreeviewItem = genericComponent()({
  name: "VTreeviewItem",
  props: makeVTreeviewItemProps(),
  emits: {
    toggleExpand: (value) => true
  },
  setup(props, _ref) {
    let {
      slots,
      emit
    } = _ref;
    const visibleIds = inject(VTreeviewSymbol, {
      visibleIds: ref()
    }).visibleIds;
    const vListItemRef = ref();
    const isActivatableGroupActivator = computed(() => {
      var _a, _b;
      return ((_a = vListItemRef.value) == null ? void 0 : _a.root.activatable.value) && ((_b = vListItemRef.value) == null ? void 0 : _b.isGroupActivator);
    });
    const vListItemRefIsClickable = computed(() => {
      var _a, _b;
      return ((_a = vListItemRef.value) == null ? void 0 : _a.link.isClickable.value) || props.value != null && !!((_b = vListItemRef.value) == null ? void 0 : _b.list);
    });
    const isClickable = computed(() => !props.disabled && props.link !== false && (props.link || vListItemRefIsClickable.value || isActivatableGroupActivator.value));
    const isFiltered = computed(() => {
      var _a;
      return visibleIds.value && !visibleIds.value.has(toRaw((_a = vListItemRef.value) == null ? void 0 : _a.id));
    });
    function activateGroupActivator(e) {
      var _a, _b;
      if (isClickable.value && isActivatableGroupActivator.value) {
        (_b = vListItemRef.value) == null ? void 0 : _b.activate(!((_a = vListItemRef.value) == null ? void 0 : _a.isActivated), e);
      }
    }
    function onClickAction(e) {
      e.preventDefault();
      emit("toggleExpand", e);
    }
    useRender(() => {
      var _a;
      const listItemProps = omit(VListItem.filterProps(props), ["onClick"]);
      const hasPrepend = slots.prepend || props.toggleIcon;
      return createVNode(VListItem, mergeProps({
        "ref": vListItemRef
      }, listItemProps, {
        "active": (_a = vListItemRef.value) == null ? void 0 : _a.isActivated,
        "class": ["v-treeview-item", {
          "v-treeview-item--activatable-group-activator": isActivatableGroupActivator.value,
          "v-treeview-item--filtered": isFiltered.value
        }, props.class],
        "ripple": false,
        "onClick": props.onClick ?? activateGroupActivator
      }), {
        ...slots,
        prepend: hasPrepend ? (slotProps) => {
          var _a2;
          return createVNode(Fragment, null, [createVNode(VListItemAction, {
            "start": false
          }, {
            default: () => [props.toggleIcon ? createVNode(VBtn, {
              "density": "compact",
              "icon": props.toggleIcon,
              "loading": props.loading,
              "variant": "text",
              "onClick": onClickAction
            }, {
              loader() {
                return createVNode(VProgressCircular, {
                  "indeterminate": "disable-shrink",
                  "size": "20",
                  "width": "2"
                }, null);
              }
            }) : createVNode("div", {
              "class": "v-treeview-item__level"
            }, null)]
          }), (_a2 = slots.prepend) == null ? void 0 : _a2.call(slots, slotProps)]);
        } : void 0
      });
    });
    return {};
  }
});

// node_modules/vuetify/lib/labs/VTreeview/VTreeviewChildren.js
var makeVTreeviewChildrenProps = propsFactory({
  disabled: Boolean,
  loadChildren: Function,
  loadingIcon: {
    type: String,
    default: "$loading"
  },
  items: Array,
  openOnClick: {
    type: Boolean,
    default: void 0
  },
  indeterminateIcon: {
    type: IconValue,
    default: "$checkboxIndeterminate"
  },
  falseIcon: IconValue,
  trueIcon: IconValue,
  returnObject: Boolean,
  selectable: Boolean,
  selectedColor: String,
  selectStrategy: [String, Function, Object],
  ...makeDensityProps()
}, "VTreeviewChildren");
var VTreeviewChildren = genericComponent()({
  name: "VTreeviewChildren",
  props: makeVTreeviewChildrenProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const isLoading = reactive(/* @__PURE__ */ new Set());
    const isClickOnOpen = computed(() => !props.disabled && (props.openOnClick != null ? props.openOnClick : props.selectable));
    async function checkChildren(item) {
      var _a, _b;
      try {
        if (!((_a = props.items) == null ? void 0 : _a.length) || !props.loadChildren) return;
        if (((_b = item == null ? void 0 : item.children) == null ? void 0 : _b.length) === 0) {
          isLoading.add(item.value);
          await props.loadChildren(item.raw);
        }
      } finally {
        isLoading.delete(item.value);
      }
    }
    function selectItem(select, isSelected) {
      if (props.selectable) {
        select(!isSelected);
      }
    }
    return () => {
      var _a, _b;
      return ((_a = slots.default) == null ? void 0 : _a.call(slots)) ?? ((_b = props.items) == null ? void 0 : _b.map((item) => {
        var _a2;
        const {
          children,
          props: itemProps
        } = item;
        const loading = isLoading.has(item.value);
        const slotsWithItem = {
          prepend: (slotProps) => {
            var _a3;
            return createVNode(Fragment, null, [props.selectable && (!children || children && !["leaf", "single-leaf"].includes(props.selectStrategy)) && createVNode("div", null, [createVNode(VCheckboxBtn, {
              "key": item.value,
              "modelValue": slotProps.isSelected,
              "disabled": props.disabled,
              "loading": loading,
              "color": props.selectedColor,
              "density": props.density,
              "indeterminate": slotProps.isIndeterminate,
              "indeterminateIcon": props.indeterminateIcon,
              "falseIcon": props.falseIcon,
              "trueIcon": props.trueIcon,
              "onClick": withModifiers(() => selectItem(slotProps.select, slotProps.isSelected), ["stop"]),
              "onKeydown": (e) => {
                if (!["Enter", "Space"].includes(e.key)) return;
                e.stopPropagation();
                selectItem(slotProps.select, slotProps.isSelected);
              }
            }, null)]), (_a3 = slots.prepend) == null ? void 0 : _a3.call(slots, {
              ...slotProps,
              item: item.raw,
              internalItem: item
            })]);
          },
          append: slots.append ? (slotProps) => {
            var _a3;
            return (_a3 = slots.append) == null ? void 0 : _a3.call(slots, {
              ...slotProps,
              item: item.raw,
              internalItem: item
            });
          } : void 0,
          title: slots.title ? (slotProps) => {
            var _a3;
            return (_a3 = slots.title) == null ? void 0 : _a3.call(slots, {
              ...slotProps,
              item: item.raw,
              internalItem: item
            });
          } : void 0,
          subtitle: slots.subtitle ? (slotProps) => {
            var _a3;
            return (_a3 = slots.subtitle) == null ? void 0 : _a3.call(slots, {
              ...slotProps,
              item: item.raw,
              internalItem: item
            });
          } : void 0
        };
        const treeviewGroupProps = VTreeviewGroup.filterProps(itemProps);
        const treeviewChildrenProps = VTreeviewChildren.filterProps(props);
        return children ? createVNode(VTreeviewGroup, mergeProps(treeviewGroupProps, {
          "value": props.returnObject ? item.raw : treeviewGroupProps == null ? void 0 : treeviewGroupProps.value
        }), {
          activator: (_ref2) => {
            let {
              props: activatorProps
            } = _ref2;
            const listItemProps = {
              ...itemProps,
              ...activatorProps,
              value: itemProps == null ? void 0 : itemProps.value,
              onToggleExpand: [() => checkChildren(item), activatorProps.onClick],
              onClick: isClickOnOpen.value ? [() => checkChildren(item), activatorProps.onClick] : void 0
            };
            return createVNode(VTreeviewItem, mergeProps(listItemProps, {
              "value": props.returnObject ? item.raw : itemProps.value,
              "loading": loading
            }), slotsWithItem);
          },
          default: () => createVNode(VTreeviewChildren, mergeProps(treeviewChildrenProps, {
            "items": children,
            "returnObject": props.returnObject
          }), slots)
        }) : ((_a2 = slots.item) == null ? void 0 : _a2.call(slots, {
          props: itemProps,
          item: item.raw,
          internalItem: item
        })) ?? createVNode(VTreeviewItem, mergeProps(itemProps, {
          "value": props.returnObject ? toRaw(item.raw) : itemProps.value
        }), slotsWithItem);
      }));
    };
  }
});

// node_modules/vuetify/lib/labs/VTreeview/VTreeview.js
function flatten(items) {
  let flat = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  for (const item of items) {
    flat.push(item);
    if (item.children) flatten(item.children, flat);
  }
  return flat;
}
var makeVTreeviewProps = propsFactory({
  fluid: Boolean,
  openAll: Boolean,
  search: String,
  ...makeFilterProps({
    filterKeys: ["title"]
  }),
  ...makeVTreeviewChildrenProps(),
  ...omit(makeVListProps({
    collapseIcon: "$treeviewCollapse",
    expandIcon: "$treeviewExpand",
    slim: true
  }), ["itemType", "nav", "openStrategy"]),
  modelValue: {
    type: Array,
    default: () => []
  }
}, "VTreeview");
var VTreeview = genericComponent()({
  name: "VTreeview",
  props: makeVTreeviewProps(),
  emits: {
    "update:opened": (val) => true,
    "update:activated": (val) => true,
    "update:selected": (val) => true,
    "update:modelValue": (val) => true,
    "click:open": (value) => true,
    "click:select": (value) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      items
    } = useListItems(props);
    const activeColor = toRef(props, "activeColor");
    const baseColor = toRef(props, "baseColor");
    const color = toRef(props, "color");
    const activated = useProxiedModel(props, "activated");
    const model = useProxiedModel(props, "modelValue");
    const _selected = useProxiedModel(props, "selected", props.modelValue);
    const selected = computed({
      get: () => _selected.value,
      set(val) {
        _selected.value = val;
        model.value = val;
      }
    });
    const vListRef = ref();
    const opened = computed(() => props.openAll ? openAll(items.value) : props.opened);
    const flatItems = computed(() => flatten(items.value));
    const search = toRef(props, "search");
    const {
      filteredItems
    } = useFilter(props, flatItems, search);
    const visibleIds = computed(() => {
      var _a;
      if (!search.value) return null;
      const getPath = (_a = vListRef.value) == null ? void 0 : _a.getPath;
      if (!getPath) return null;
      return new Set(filteredItems.value.flatMap((item) => {
        const itemVal = props.returnObject ? item.raw : item.props.value;
        return [...getPath(itemVal), ...getChildren(itemVal)].map(toRaw);
      }));
    });
    function getChildren(id) {
      var _a, _b;
      const arr = [];
      const queue = (((_a = vListRef.value) == null ? void 0 : _a.children.get(id)) ?? []).slice();
      while (queue.length) {
        const child = queue.shift();
        if (!child) continue;
        arr.push(child);
        queue.push(...(((_b = vListRef.value) == null ? void 0 : _b.children.get(child)) ?? []).slice());
      }
      return arr;
    }
    function openAll(items2) {
      let ids = [];
      for (const i of items2) {
        if (!i.children) continue;
        ids.push(props.returnObject ? toRaw(i.raw) : i.value);
        if (i.children) {
          ids = ids.concat(openAll(i.children));
        }
      }
      return ids;
    }
    provide(VTreeviewSymbol, {
      visibleIds
    });
    provideDefaults({
      VTreeviewGroup: {
        activeColor,
        baseColor,
        color,
        collapseIcon: toRef(props, "collapseIcon"),
        expandIcon: toRef(props, "expandIcon")
      },
      VTreeviewItem: {
        activeClass: toRef(props, "activeClass"),
        activeColor,
        baseColor,
        color,
        density: toRef(props, "density"),
        disabled: toRef(props, "disabled"),
        lines: toRef(props, "lines"),
        variant: toRef(props, "variant")
      }
    });
    useRender(() => {
      const listProps = VList.filterProps(props);
      const treeviewChildrenProps = VTreeviewChildren.filterProps(props);
      return createVNode(VList, mergeProps({
        "ref": vListRef
      }, listProps, {
        "class": ["v-treeview", {
          "v-treeview--fluid": props.fluid
        }, props.class],
        "open-strategy": "multiple",
        "style": props.style,
        "opened": opened.value,
        "activated": activated.value,
        "onUpdate:activated": ($event) => activated.value = $event,
        "selected": selected.value,
        "onUpdate:selected": ($event) => selected.value = $event
      }), {
        default: () => [createVNode(VTreeviewChildren, mergeProps(treeviewChildrenProps, {
          "density": props.density,
          "returnObject": props.returnObject,
          "items": items.value
        }), slots)]
      });
    });
    return {};
  }
});
export {
  VCalendar,
  VCalendarDay,
  VCalendarHeader,
  VCalendarInterval,
  VCalendarIntervalEvent,
  VCalendarMonthDay,
  VDateInput,
  VFileUpload,
  VFileUploadItem,
  VIconBtn,
  VPicker,
  VPickerTitle,
  VPullToRefresh,
  VStepperVertical,
  VStepperVerticalActions,
  VStepperVerticalItem,
  VTimePicker,
  VTimePickerClock,
  VTimePickerControls,
  VTreeview,
  VTreeviewGroup,
  VTreeviewItem
};
//# sourceMappingURL=vuetify_labs_components.js.map
