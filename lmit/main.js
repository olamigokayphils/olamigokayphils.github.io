var app = new Vue({
  data: {
    readTermsAndCondition: false,
    step: 1,
    takeTest: null,
    fullname: "",
    email: "",
    phone: "",
    sex: "female",
    qualification: "",
  },
  methods: {
    nextStep() {
      this.step += 1;
    },
    prevStep() {
      this.step -= 1;
    },
  },
}).$mount("#app");
