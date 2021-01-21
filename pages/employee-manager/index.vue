<template>
  <div>
    <div class="row">
      <div class="col-lg-12">
        <div class="main-card mb-3 card">
          <div class="card-body">
            <div class="card-title"><h2>Employee List</h2></div>
            <table class="mb-0 table table-hover">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Employee Name</th>
                  <th>Username</th>
                  <th>Contact</th>
                  <th>Role</th>
                  <th>Gender</th>
                  <th>EmployeeID</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row"></th>
                  <td><input type="text" /></td>
                  <td><input type="text" /></td>
                  <td><input type="text" /></td>
                  <td><input type="text" /></td>
                  <td><input type="text" /></td>
                  <td><input type="text" /></td>
                </tr>
                <tr
                  v-for="(employee, index) in employeeList"
                  :key="employee.employeeId"
                >
                  <th scope="row">{{ index + 1 }}</th>
                  <td>{{ employee.fullName }}</td>
                  <td>{{ employee.userName }}</td>
                  <td>{{ employee.contact }}</td>
                  <td>{{ employee.role }}</td>
                  <td v-if="employee.gender === 'M'">Male</td>
                  <td v-else>Female</td>
                  <td>{{ employee.employeeId }}</td>
                </tr>
              </tbody>
            </table>
            <hr />
            <div class="fc-toolbar fc-header-toolbar">
              <div class="fc-left">
                <button
                  class="mb-2 mr-2 border-0 btn-transition btn btn-outline-success"
                >
                  Add New
                </button>
              </div>
              <div class="fc-right">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      employeeData: [
        {
          userName: 'Ankita',
          fullName: 'Ankita Jadhav',
          contact: '8879XXXX65',
          userId: '123457890',
          isAdmin: true,
          role: 'Owner',
          gender: 'F',
          employeeId: 1,
        },
      ],
      employeeList: [
        {
          userName: 'Ankita',
          fullName: 'Ankita Jadhav',
          userId: '123457890',
          contact: '8879XXXX65',
          isAdmin: true,
          role: 'Owner',
          gender: 'F',
          employeeId: 1,
        },
      ],
    }
  },
}
</script>
