<template>
  <div>
    <div class="row">
      <div class="col-lg-12">
        <div class="main-card mb-3 card">
          <div class="card-body">
            <div class="card-title"><h2>Raw Materials</h2></div>
            <table class="mb-0 table table-hover">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Raw Material</th>
                  <th>Measure</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row"></th>
                  <td><input type="text" /></td>
                  <td><input type="text" /></td>
                </tr>
                <tr v-for="(rawMaterial, index) in rawMaterials" :key="index">
                  <th scope="row">{{ index + 1 }}</th>
                  <td>{{ rawMaterial.name }}</td>
                  <td>{{ rawMaterial.measure }}</td>
                  <button
                    class="mb-2 mr-2 btn-transition btn btn-outline-warning"
                    @click="editRM(rawMaterial)"
                  >
                    Edit
                  </button>
                  <button
                    class="mb-2 mr-2 btn-transition btn btn-outline-danger"
                    @click="toggleModal()"
                  >
                    Delete
                  </button>
                </tr>
              </tbody>
            </table>
            <hr />
            <div class="fc-toolbar fc-header-toolbar">
              <div class="fc-left">
                <button
                  class="mb-2 mr-2 border-0 btn-transition btn btn-outline-success"
                  @click="toggleModal()"
                >
                  Add New
                </button>
              </div>
              <!-- <div class="fc-right">
              <ul class="pagination">
                <li class="page-item">
                  <a
                    href="javascript:void(0);"
                    class="page-link"
                    aria-label="Previous"
                    ><span aria-hidden="true">«</span
                    ><span class="sr-only">Previous</span></a
                  >
                </li>
                <li class="page-item">
                  <a href="javascript:void(0);" class="page-link">1</a>
                </li>
                <li class="page-item active">
                  <a href="javascript:void(0);" class="page-link">2</a>
                </li>
                <li class="page-item">
                  <a href="javascript:void(0);" class="page-link">3</a>
                </li>
                <li class="page-item">
                  <a href="javascript:void(0);" class="page-link">4</a>
                </li>
                <li class="page-item">
                  <a href="javascript:void(0);" class="page-link">5</a>
                </li>
                <li class="page-item">
                  <a
                    href="javascript:void(0);"
                    class="page-link"
                    aria-label="Next"
                    ><span aria-hidden="true">»</span
                    ><span class="sr-only">Next</span></a
                  >
                </li>
              </ul>
            </div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="showModal">
      <RawMaterialComponent
        :modal-info="modalInfo"
        @closeModal="toggleModal"
      ></RawMaterialComponent>
    </div>
  </div>
</template>

<script>
import RawMaterialComponent from '@/components/Modals/RawMaterial'

export default {
  components: {
    RawMaterialComponent,
  },
  data() {
    return {
      showModal: false,
      rawMaterials: [
        {
          name: 'Onion',
          measure: 'Kg',
        },
        {
          name: 'Potato',
          measure: 'Kg',
        },
      ],
      modalInfo: {
        title: 'Add Raw Material',
        name: '',
        measure: '',
      },
    }
  },
  methods: {
    toggleModal(type = 'add') {
      this.modalInfo.title =
        type === 'add' ? 'Add Raw Material' : 'Edit Raw Material'
      if (type === 'add') {
        this.modalInfo.name = ''
        this.modalInfo.measure = ''
      }
      this.showModal = !this.showModal
    },
    editRM({ name, measure }) {
      this.modalInfo.name = name
      this.modalInfo.measure = measure
      this.toggleModal('edit')
    },
  },
}
</script>
