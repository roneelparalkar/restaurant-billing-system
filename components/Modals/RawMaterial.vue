<template>
  <div>
    <div
      id="exampleModal"
      class="modal fade show"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      style="display: block"
      aria-modal="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 id="exampleModalLabel" class="modal-title">
              {{ modalInfo.title }}
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
              @click="closeModal()"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="position-relative form-group">
              <label for="exampleEmail" class="">Name</label
              ><input
                v-model="modalInfo.name"
                name="name"
                placeholder="Raw material name"
                type="name"
                class="form-control"
              />
            </div>
            <div class="position-relative form-group">
              <label for="exampleSelect" class="">Select</label
              ><select
                v-model="modalInfo.measure"
                name="select"
                class="form-control"
              >
                <option>Kg</option>
                <option>Ltr</option>
                <option>Bottle</option>
                <option>Pieces</option>
                <option>Packet</option>
                <option>Cube</option>
              </select>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
              @click="closeModal()"
            >
              Close
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click="saveRawMaterial()"
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="modal-backdrop fade show"></div>
  </div>
</template>

<script>
export default {
  props: {
    modalInfo: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
  mounted() {
    this.toggleBodyClass('addClass', 'modal-open')
  },
  destroyed() {
    this.toggleBodyClass('removeClass', 'modal-open')
  },
  methods: {
    toggleBodyClass(addRemoveClass, className) {
      const el = document.body

      if (addRemoveClass === 'addClass') {
        el.classList.add(className)
      } else {
        el.classList.remove(className)
      }
    },
    closeModal() {
      this.$emit('closeModal')
    },
    saveRawMaterial() {
      console.log(this.modalInfo)
      this.$emit('closeModal')
    },
  },
}
</script>
