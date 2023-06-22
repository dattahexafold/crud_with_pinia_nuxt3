<template>
  <div>
    <h1>Data Table</h1>
    <button class="btn btn-danger px-5 float-end bg-success" @click="navigateTo('/')">ADD</button>
<br>
    <table v-if="store.data.length > 0" id="dtBasicExample" class="table table-striped table-bordered " cellspacing="0"
      width="100%">
      <thead>
        <tr>
          <!-- table heading -->
          <th v-for="title in tableHead">{{ title }}</th> 
          <th class="text-center">Opeartion</th>
        </tr>
      </thead>
      <tbody>
        <!-- table data -->
        <tr v-for="item in tableData">
          <td>{{ item.id }}</td>
          <td>{{ item.firstName }}</td>
          <td>{{ item.email }}</td>
          <td>{{ item.city }}</td>
          <td>{{ item.address }}</td>
          <td>{{ item.gender }}</td>
          <td>{{ item.state }}</td>
          <td>{{ item.pincode }}</td>
          <td>{{ item.cource }}</td>
          <td class="btn btn-danger btn-dark w-50 bg-danger" @click="deleteUser(item.id)">Delete</td>
          <td class="btn  btn-primary w-50 bg-info" @click="updateUser(item)">
            Update
          </td>
        </tr>
      </tbody>
    </table>
     <!-- alternative if data not found -->
     <p v-else class="text-center">
      <br>
    <h1>record not found</h1>
    <button class="btn btn-danger px-5" @click="navigateTo('/')">Go Back</button>
    </p>
  </div>
</template>
<script>
import { useCrudStore } from "~/store/operation";
export default {
  setup() {
    return {
      //table heading
      tableHead: [
        "id",
        "firstName",
        "Email",
        "City",
        "Address",
        "Gender",
        "State",
        "Pincode",
        "Cource",
      ],
      tableData: useCrudStore().data,
      store: useCrudStore(),

    };
  },
  methods: {
    updateUser(item) {  // update user
      if (item.id) {
        navigateTo(`/update-${item.id}`)
      } else {
        alert("add record")
      }
    },
    deleteUser(id) {  // delete user
      this.store.deleteUser(id)
     this.tableData=useCrudStore().data

    }
  },
};
</script>
<style lang="">
</style>
