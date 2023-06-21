<template>
  <div>
    <h1>Data Table</h1>
    <table
    v-if="store.data.length>0"
      id="dtBasicExample"
      class="table table-striped table-bordered table-sm dataTables_length"
      cellspacing="0"
      width="100%"
    >
      <thead>
        <tr>
          <th v-for="title in tableHead">{{ title }}</th>
          <th>Opeartion</th>
        </tr>
      </thead>
      <tbody>
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
          <td class="btn btn-danger btn-dark w-25" @click="navigateTo('/')">ADD</td>
          <td class="btn btn-danger btn-dark w-25" @click="deleteUser(item.id)">Delete</td>
          <td class="btn btn-danger btn-dark w-25" @click="updateUser(item)">
            Update
          </td>
        </tr>
      </tbody>
    </table>
    <p v-else class="text-center">
      <h1>record not found</h1>
      <button class="btn btn-danger" @click="navigateTo('/')">Go Back</button>
    </p>
  </div>
</template>
<script>
import { useCrudStore } from "~/store/operation";
export default {
  setup() {
    return {
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
    updateUser(item) {
        navigateTo(`/update-${item.id}`)
    },
    deleteUser(id){
      this.store.deleteUser(id)
      
    }
  },
  mounted() {},
};
</script>
<style lang=""></style>
