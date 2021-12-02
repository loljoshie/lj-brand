const { ref } = Vue

const app = Vue.createApp({
  data () {
    return {
      showBrand: false
    }
  },
  mounted() {
    this.listener = window.addEventListener("message", (event) => {
      if (event.data.action === "brand") {
        this.updateBrand(event.data);
      }
    });
  },
  methods: {
    updateBrand(data) {
      this.showBrand = data.showBrand;
      if (data.showBrand === true) {
        this.showBrand = true;
      } else {
        this.showBrand = false;
      }
    }
  }
})

app.use(Quasar, { config: {} })
app.mount('#brand')

const app1 = Vue.createApp({
  data () {
    return {
      selectedCheck: [],
      disabled: true,
    }
  },
  setup () {
    const loading = ref([
      false
    ])
    const progress = ref(false)

    function simulateProgress (number) {
      // we set loading state
      loading.value[ number ] = true

      // simulate a delay
      setTimeout(() => {
        // we're done, we reset loading state
        loading.value[ number ] = false
      }, 3000)
    }
    return {
      loading,
      simulateProgress,
    }
  }
})

app1.use(Quasar, { config: {} })
app1.mount('#checklist')

// where it gets sent to lua nuicallback
function closeCheckList() {
  $("#checklist").fadeOut(550);
  $.post('https://lj-brand/closeCheckList');
}

// where it creates function for opening menu
$(document).ready(function () {
  window.addEventListener("message", function (event) {
    switch (event.data.action) {
    case "open":
      Open(event.data);
      break;
    }
  });
});

// where it displays menu
Open = function (data) {
  $("#checklist").fadeIn(150);
}

// where it closes and sends to function close above
$('.closeCheckList').click(() => {
  closeCheckList()
});